'use client';

import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { useGamePolling } from '@/hooks/useGamePolling';
import { useSound } from '@/hooks/useSound';
import { useBGM } from '@/hooks/useBGM';
import { GameState, GameView, GameSettings, BUZZER_COLORS, AVATAR_EMOJIS, CATEGORIES, ALICE_CATEGORIES, ALICE_MODE_CODE, GAME_DURATIONS, QUESTION_TYPE_LABELS } from '@/lib/game-types';
import { BUZZER_SOUNDS, getBuzzerSound } from '@/lib/buzzerSounds';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy, Users, Play, AlertCircle, CheckCircle2, XCircle,
  MonitorPlay, Smartphone, Copy, Settings, Crown, Star,
  Zap, Clock, ChevronRight, RotateCcw, Eye, X, Timer, Pencil,
  Flame, Target, Sparkles, Lock, Wand2, Volume2, VolumeX
} from 'lucide-react';

// ==================== CONFETTI ====================
function Confetti() {
  const [p, setP] = useState<any[]>([]);
  useEffect(() => {
    const cols = ['#FF66CC','#00C9FF','#FFD700','#00E676','#FF6B6B','#A855F7','#F97316','#22C55E'];
    setP(Array.from({ length: 50 }, (_, i) => ({
      id: i, left: `${Math.random()*100}%`, delay: Math.random()*2,
      color: cols[Math.floor(Math.random()*cols.length)],
      size: Math.random()*8+6, dur: Math.random()*2+2,
    })));
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {p.map(x => (
        <div key={x.id} className="confetti" style={{
          left: x.left, width: x.size, height: x.size,
          backgroundColor: x.color,
          borderRadius: Math.random()>0.5?'50%':'2px',
          animationDelay: `${x.delay}s`, animationDuration: `${x.dur}s`,
        }} />
      ))}
    </div>
  );
}

function ErrorBanner({ message, onClose }: { message: string; onClose?: () => void }) {
  if (!message) return null;
  return (
    <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}
      className="bg-white border-4 border-red-400 text-red-600 p-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg max-w-md mx-auto text-sm sm:text-base">
      <AlertCircle size={20} className="shrink-0" />
      <span className="flex-1">{message}</span>
      {onClose && <button onClick={onClose} className="p-1 hover:bg-red-50 rounded-full"><X size={16}/></button>}
    </motion.div>
  );
}

// ==================== HOST CONFIG ====================
function HostConfig({ onCreate, onCancel, specialMode }: {
  onCreate: (settings: GameSettings, hostName: string) => void;
  onCancel: () => void;
  specialMode?: boolean;
}) {
  const [hostName, setHostName] = useState('');
  const [gameDuration, setGameDuration] = useState(20);
  const [rounds, setRounds] = useState<string[]>(
    specialMode ? ALICE_CATEGORIES : ['Culture Générale', 'Cinéma & Séries', 'Sport']
  );
  const [step, setStep] = useState(0);

  const questionsPerRound = Math.floor((gameDuration * 60 - 60) / 30); // ~30s per question
  const estimatedTime = questionsPerRound * 30 * 3 + 30; // 3 rounds + transitions

  const availableCats = specialMode ? ALICE_CATEGORIES : CATEGORIES.filter(c => !rounds.includes(c));

  const handleSetRound = (idx: number, cat: string) => {
    const r = [...rounds];
    r[idx] = cat;
    setRounds(r);
  };

  const handleCreate = () => {
    onCreate({
      gameDuration,
      timerDuration: 25,
      rounds: rounds.map(c => ({ category: c, questionCount: questionsPerRound })),
      specialMode: !!specialMode,
    }, hostName.trim() || 'Hôte');
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-6 game-bg">
      {specialMode && (
        <motion.div initial={{scale:0}} animate={{scale:1}} className="mb-4 flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full font-bold shadow-lg">
          <Wand2 size={18} /> Mode Soirée Pop Culture débloqué !
        </motion.div>
      )}
      <motion.h1 initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}}
        className="font-[family-name:var(--font-titan)] text-4xl sm:text-6xl text-[#FFD700] game-title mb-6">
        {specialMode ? 'Soirée Pop Culture' : 'Configurer la Partie'}
      </motion.h1>

      <div className="w-full max-w-lg space-y-5">
        {/* Host Name */}
        <motion.div initial={{x:-40,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.1}}
          className="bg-white rounded-2xl p-4 border-4 border-white shadow-lg">
          <label className="block text-sm font-bold text-gray-500 mb-1 uppercase tracking-wider">Votre nom d'hôte</label>
          <input value={hostName} onChange={e=>setHostName(e.target.value)} placeholder="Hôte"
            maxLength={12}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-3 border-gray-200 text-xl font-bold text-gray-800 focus:outline-none focus:border-[#FF66CC] font-[family-name:var(--font-fredoka)]" />
        </motion.div>

        {/* Game Duration */}
        <motion.div initial={{x:40,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.2}}
          className="bg-white rounded-2xl p-4 border-4 border-white shadow-lg">
          <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">
            <Timer size={14} className="inline mr-1" /> Durée estimée de la partie
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {GAME_DURATIONS.map(d => (
              <button key={d.minutes} onClick={()=>setGameDuration(d.minutes)}
                className={`py-3 rounded-xl text-sm font-bold border-3 transition-all flex flex-col items-center gap-1 ${
                  gameDuration === d.minutes
                    ? 'bg-[#FF66CC] text-white border-[#FF66CC]'
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-[#FF66CC]'
                }`}>
                <span className="text-lg">{d.icon}</span>
                <span>{d.label}</span>
                <span className="text-xs text-gray-500">~{d.minutes} min</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* 3 Rounds */}
        <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.3}}
          className="bg-white rounded-2xl p-4 border-4 border-white shadow-lg">
          <label className="block text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">
            <Flame size={14} className="inline mr-1" /> 3 Manches sur des thèmes différents
          </label>
          <div className="space-y-3">
            {[0,1,2].map(i => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF66CC] text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-md">
                  {i+1}
                </div>
                <select value={rounds[i]||''} onChange={e=>handleSetRound(i, e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-gray-50 border-3 border-gray-200 text-base font-bold text-gray-800 focus:outline-none focus:border-[#FF66CC] font-[family-name:var(--font-fredoka)]">
                  {(specialMode ? ALICE_CATEGORIES : CATEGORIES).map(c => <option key={c} value={c} disabled={!availableCats.includes(c)&&rounds[i]!==c}>{c}</option>)}
                </select>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">
            {questionsPerRound} questions par manche • ~{Math.ceil(estimatedTime/60)} min estimées
          </p>
        </motion.div>

        {/* Question Type Legend */}
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4}}
          className="bg-white/80 rounded-2xl p-3 border-3 border-white/50">
          <p className="text-sm font-bold text-gray-500 mb-2 text-center uppercase tracking-wider">Types de questions</p>
          <div className="flex justify-center gap-3 flex-wrap">
            {Object.entries(QUESTION_TYPE_LABELS).map(([key, v]) => (
              <div key={key} className="flex items-center gap-1 bg-white px-2 py-1 rounded-full border-2 text-xs font-bold" style={{borderColor:v.color}}>
                <span>{v.icon}</span>
                <span style={{color:v.color}}>{v.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.button whileTap={{scale:0.95}} onClick={onCancel}
            className="flex-1 bg-gray-200 text-gray-600 text-lg font-bold py-3 rounded-full border-3 border-gray-300 active:border-b-0 active:translate-y-1">
            Retour
          </motion.button>
          <motion.button whileTap={{scale:0.95}} onClick={handleCreate}
            disabled={rounds.some(r=>!r)}
            className="flex-[2] bg-[#00E676] text-white text-xl font-bold py-3 rounded-full border-4 border-white btn-3d-heavy flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg">
            <Play size={22} /> Créer la Partie
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// ==================== HOST LOBBY ====================
function HostLobby({ gameState, playerId, onStartGame, onKickPlayer }: {
  gameState: GameState; playerId: string;
  onStartGame: () => void; onKickPlayer: (id: string) => void;
}) {
  const [copySuccess, setCopySuccess] = useState(false);
  const playerList = useMemo(() =>
    Object.values(gameState.players).sort((a,b) => a.id===playerId?-1:b.id===playerId?1:0),
    [gameState.players, playerId]);

  const joinUrl = typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}#code=${gameState.code}` : '';
  const copyLink = async () => {
    try { await navigator.clipboard.writeText(joinUrl); } catch { /* fallback */ }
    setCopySuccess(true); setTimeout(()=>setCopySuccess(false), 3000);
  };

  const { rounds } = gameState.settings;
  const questionsPerRound = rounds[0]?.questionCount || 12;

  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-8 game-bg">
      <motion.h2 initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}}
        className="text-3xl sm:text-4xl font-[family-name:var(--font-titan)] text-white game-text-outline mb-5 transform -rotate-1">
        Rejoignez la partie !
      </motion.h2>

      {/* Code + QR */}
      <motion.div initial={{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}} transition={{type:'spring',bounce:0.3}}
        className="bg-white rounded-[2rem] border-[6px] border-[#FF66CC] shadow-[0_8px_0_rgba(0,0,0,0.15)] p-5 sm:p-7 mb-6 flex flex-col md:flex-row items-center gap-6 w-full max-w-3xl">
        <div className="text-center flex-1">
          <p className="text-sm text-gray-500 mb-1 font-bold uppercase tracking-wider">Code de la salle</p>
          <p className="text-[4rem] sm:text-[6rem] font-[family-name:var(--font-titan)] text-[#00C9FF] game-text-outline leading-none select-all">{gameState.code}</p>
          <div className="mt-3 flex items-center gap-2 text-gray-600 text-base font-bold justify-center">
            <Users size={16} /> {playerList.length}/32 joueurs
          </div>
        </div>
        <div className="hidden md:block w-1 h-28 bg-gray-200 rounded-full" />
        <div className="text-center flex-1">
          <p className="text-sm text-gray-500 mb-2 font-bold uppercase tracking-wider">Scannez ce code</p>
          <div className="bg-gray-50 p-2 rounded-xl border-3 border-gray-100 shadow-inner inline-block">
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(joinUrl)}&format=png&bgcolor=ffffff&color=333333`} alt="QR Code" className="w-32 h-32 rounded-lg" />
          </div>
          <button onClick={copyLink} className="mt-3 bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1.5 border-b-3 border-gray-300 active:border-b-0 active:translate-y-1 shadow-sm">
            <Copy size={14} /> {copySuccess ? '✅ Copié !' : 'Copier le lien'}
          </button>
        </div>
      </motion.div>

      {/* Round config summary */}
      <div className="bg-white/90 backdrop-blur rounded-xl p-3 mb-5 w-full max-w-3xl border-3 border-white shadow-md">
        <div className="flex flex-wrap gap-2 justify-center">
          {rounds.map((r, i) => (
            <div key={i} className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border-2 border-[#FF66CC] text-xs font-bold">
              <span className="bg-[#FF66CC] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">{i+1}</span>
              <span className="text-gray-700">{r.category}</span>
              <span className="text-gray-400">({r.questionCount})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Player List */}
      <div className="w-full max-w-3xl mb-6">
        <h3 className="text-lg font-bold mb-2 flex items-center justify-center gap-1.5">
          <Users size={18} className="text-[#FF66CC]" />
          <span className="text-white game-text-outline">{playerList.length} Joueur{playerList.length > 1 ? 's' : ''}</span>
        </h3>
        <div className="flex flex-wrap gap-2 justify-center max-h-40 overflow-y-auto scrollbar-hide p-1">
          {playerList.length === 0 ? (
            <p className="text-white text-base font-bold opacity-70 animate-pulse">En attente...</p>
          ) : playerList.map(p => (
            <motion.div key={p.id} initial={{scale:0}} animate={{scale:1}}
              className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-full text-sm font-bold shadow-md border-3 border-white/80 hover:scale-105 transition-transform group">
              <span className="text-base">{AVATAR_EMOJIS[p.avatarIndex]||'🎮'}</span>
              <span className="truncate max-w-[100px]" style={{color:p.color}}>{p.name}</span>
              {p.id !== playerId && (
                <button onClick={()=>onKickPlayer(p.id)} className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 p-0.5"><X size={12}/></button>
              )}
              {p.id === playerId && <span className="bg-[#FFD700] text-xs text-gray-800 px-2 py-0.5 rounded-full font-bold">HÔTE</span>}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Start */}
      <AnimatePresence>
        {playerList.length >= 2 && (
          <motion.button initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} whileHover={{scale:1.05}} whileTap={{scale:0.95}}
            onClick={onStartGame}
            className="bg-[#00E676] text-white text-xl sm:text-2xl font-bold px-10 sm:px-14 py-5 sm:py-6 rounded-[2rem] border-[6px] border-white btn-3d-heavy flex items-center gap-3 animate-pulse-glow shadow-2xl">
            <Play size={28} /> JOUER !
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// ==================== PLAYER LOBBY ====================
function PlayerLobby({ gameState, playerId, onSetSound }: { gameState: GameState; playerId: string; onSetSound: (soundId: string) => void }) {
  const me = gameState.players[playerId];
  const [selectedSound, setSelectedSound] = useState(me?.buzzerSoundId || 'buzzer-classique');
  const sound = useSound();

  const previewSound = useCallback((soundId: string) => {
    const buzzer = getBuzzerSound(soundId);
    if (buzzer) buzzer.play();
  }, []);

  const handleSelect = useCallback((soundId: string) => {
    setSelectedSound(soundId);
    previewSound(soundId);
    onSetSound(soundId);
  }, [onSetSound, previewSound]);

  if (!me) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 sm:p-6 game-bg touch-optimized overflow-y-auto">
      <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:'spring',bounce:0.5}}
        className="bg-white p-4 rounded-full border-5 border-[#00E676] shadow-[0_6px_0_rgba(0,0,0,0.12)] mb-3">
        <CheckCircle2 size={48} className="text-[#00E676]" />
      </motion.div>
      <div className="text-3xl mb-0.5">{AVATAR_EMOJIS[me.avatarIndex]||'🎮'}</div>
      <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-titan)] text-white game-text-outline mb-1">{me.name}</h2>
      <p className="text-sm font-bold text-white bg-black/20 px-3 py-1 rounded-full inline-block mb-5">✓ Connecté !</p>

      {/* Sound Picker */}
      <div className="bg-white rounded-2xl border-4 border-[#FF66CC] shadow-lg p-4 w-full max-w-sm mb-5">
        <div className="flex items-center justify-center gap-1.5 mb-3">
          <span className="text-lg">🔊</span>
          <h3 className="text-base font-bold text-[#FF66CC] uppercase tracking-wider">Choisis ton buzzer</h3>
        </div>
        <div className="grid grid-cols-3 gap-2 max-h-56 overflow-y-auto scrollbar-hide">
          {BUZZER_SOUNDS.map(s => {
            const isSelected = selectedSound === s.id;
            return (
              <motion.button key={s.id} whileTap={{scale:0.9}} onClick={() => handleSelect(s.id)}
                className={`flex flex-col items-center gap-0.5 p-2 rounded-xl border-3 transition-all text-center ${
                  isSelected ? 'bg-[#FF66CC] text-white border-[#FF66CC] shadow-md scale-105' : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-[#FF66CC]'
                }`}>
                <span className="text-xl">{s.emoji}</span>
                <span className="text-xs font-bold leading-tight">{s.name}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <motion.div animate={{y:[0,-8,0]}} transition={{duration:2,repeat:Infinity}} className="mb-4">
        <div className="w-14 h-14 bg-[#FFD700] rounded-2xl border-4 border-white shadow-lg flex items-center justify-center"><Crown size={24} className="text-white"/></div>
      </motion.div>
      <p className="text-sm text-white font-bold bg-black/20 px-4 py-2 rounded-2xl border-2 border-white/30 animate-pulse">
        Regarde l&apos;écran principal...
      </p>
    </div>
  );
}

// ==================== ROUND TRANSITION ====================
function RoundTransition({ gameState, playerId, onNextRound }: {
  gameState: GameState; playerId: string; onNextRound: () => void;
}) {
  const roundIdx = gameState.currentRound + 1; // Next round
  const nextRound = gameState.settings.rounds[roundIdx];
  const isHost = playerId === gameState.hostId;
  const sorted = Object.values(gameState.players).sort((a,b)=>b.score-a.score);
  const sound = useSound();

  useEffect(() => { sound.playRoundStart(); }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center game-bg">
      <Confetti />
      <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:'spring',bounce:0.4,delay:0.3}}
        className="bg-white rounded-[2rem] border-[6px] border-[#FFD700] shadow-[0_10px_0_rgba(0,0,0,0.15)] p-8 sm:p-12 max-w-lg w-full">
        <div className="bg-[#FF66CC] text-white px-6 py-2 rounded-full font-bold text-base mb-4 inline-block">
          Manche {gameState.currentRound + 1} terminée !
        </div>

        {/* Mini podium top 3 */}
        <div className="flex items-end justify-center gap-3 mb-6 mt-4">
          {sorted.slice(0,3).map((p,i) => (
            <div key={p.id} className="flex flex-col items-center">
              <span className="text-xl">{AVATAR_EMOJIS[p.avatarIndex]||'🎮'}</span>
              <span className="text-sm font-bold text-gray-700 truncate max-w-[80px]">{p.name}</span>
              <div className={`w-12 rounded-t-lg flex items-center justify-center text-white font-bold ${
                i===0?'bg-[#FFD700] h-10':i===1?'bg-[#C0C0C0] h-8':'bg-[#CD7F32] h-6'
              }`}>
                <span className="font-[family-name:var(--font-titan)]">{p.score}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-dashed border-gray-200 my-4" />

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}}>
          <p className="text-base text-gray-500 mb-2">Manche suivante</p>
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-titan)] text-[#FF66CC] game-text-outline-dark mb-1">
            Manche {roundIdx}
          </h2>
          <p className="text-lg font-bold text-gray-600">{nextRound?.category}</p>
          <p className="text-sm text-gray-500 mt-1">{nextRound?.questionCount} questions</p>
        </motion.div>

        {isHost && (
          <motion.button initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:1}}
            whileHover={{scale:1.05}} whileTap={{scale:0.95}}
            onClick={onNextRound}
            className="mt-6 bg-[#00C9FF] text-white text-xl font-bold px-10 py-4 rounded-full border-4 border-white btn-3d-heavy flex items-center gap-2 shadow-lg">
            <Play size={20} /> Manche {roundIdx} !
          </motion.button>
        )}
        {!isHost && (
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}}
            className="mt-6 text-base text-gray-500 font-bold animate-pulse">
            L&apos;hôte lance la suite...
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

// ==================== TIMER BAR ====================
function TimerBar({ startTime, duration, onExpire }: { startTime: number; duration: number; onExpire?: () => void }) {
  const [timeLeft, setTimeLeft] = useState(100);
  const sound = useSound();
  const hasExpiredRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const totalMs = duration * 1000;
      const remaining = Math.max(0, 1 - elapsed / totalMs);
      setTimeLeft(remaining * 100);
      if (remaining <= 0 && !hasExpiredRef.current) {
        hasExpiredRef.current = true;
        sound.playBeep();
        if (onExpire) onExpire();
        clearInterval(interval);
      }
      // Play tic-toc in last 5 seconds
      if (remaining > 0 && remaining <= 0.2) {
        sound.playTicToc();
      }
    }, 50);
    return () => clearInterval(interval);
  }, [startTime, duration, onExpire, sound]);

  const color = timeLeft > 60 ? '#00E676' : timeLeft > 30 ? '#FFD700' : '#EF4444';

  return (
    <div className="w-full h-4 sm:h-5 bg-gray-300 rounded-full overflow-hidden border-2 border-white shadow-inner">
      <motion.div style={{width:`${timeLeft}%`, backgroundColor:color}}
        className="h-full rounded-full transition-all duration-100 ease-linear" />
    </div>
  );
}

// ==================== HOST GAME SCREEN ====================
function HostGameScreen({ gameState, playerId, onNextState, onNextRound, onRestart }: {
  gameState: GameState; playerId: string;
  onNextState: () => void; onNextRound: () => void; onRestart: () => void;
}) {
  const q = gameState.currentQuestions[gameState.currentQuestionIndex];
  const sorted = useMemo(() => Object.values(gameState.players).sort((a,b)=>b.score-a.score), [gameState.players]);
  const answeredCount = Object.values(gameState.players).filter(p => p.currentAnswer !== null || p.cashAnswer !== null).length;
  const total = Object.keys(gameState.players).length;
  const qType = q?.type || 'multiple-choice';
  const typeInfo = QUESTION_TYPE_LABELS[qType as keyof typeof QUESTION_TYPE_LABELS] || QUESTION_TYPE_LABELS['multiple-choice'];

  if (gameState.status === 'finished') return <ResultsScreen gameState={gameState} onRestart={onRestart} />;

  if (!q) return null;

  const isMCQ = qType === 'multiple-choice' || qType === 'speed-choice';

  return (
    <div className="flex flex-col h-screen w-full game-bg relative overflow-hidden">
      {/* Header */}
      <div className="h-16 sm:h-20 bg-white/95 border-b-[5px] border-white flex items-center justify-between px-3 sm:px-6 shadow-lg relative z-20 shrink-0">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:'repeating-linear-gradient(45deg,#000 25%,transparent 25%,transparent 75%,#000 75%,#000),repeating-linear-gradient(45deg,#000 25%,transparent 25%,transparent 75%,#000 75%,#000)',backgroundPosition:'0 0,12px 12px',backgroundSize:'24px 24px'}} />
        <div className="flex items-center gap-2 relative z-10">
          <h1 className="text-2xl sm:text-4xl font-[family-name:var(--font-titan)] text-[#B8860B] transform -rotate-1">BUZZ!</h1>
        </div>
        <div className="flex items-center gap-2 relative z-10 flex-wrap justify-end">
          <div className="bg-[#FF66CC] text-white text-sm sm:text-base px-3 py-1.5 rounded-full font-bold border-2 border-white">
            Manche {gameState.currentRound + 1}/3
          </div>
          <div className="bg-[#00C9FF] text-white text-sm sm:text-base px-3 py-1.5 rounded-full font-bold border-2 border-white">
            {gameState.currentQuestionIndex + 1}/{gameState.currentQuestions.length}
          </div>
          {gameState.questionState === 'answering' && (
            <div className="bg-[#FFD700] text-gray-800 text-sm sm:text-base px-2.5 py-1.5 rounded-full font-bold animate-pulse">
              {answeredCount}/{total}
            </div>
          )}
        </div>
      </div>

      {/* Timer */}
      {gameState.questionState === 'answering' && gameState.timerStartsAt && (
        <div className="px-3 sm:px-6 py-2 bg-white/60 z-10 shrink-0">
          <TimerBar startTime={gameState.timerStartsAt} duration={gameState.timerDuration} />
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col items-center justify-center p-3 sm:p-6 z-10 w-full max-w-4xl mx-auto overflow-y-auto scrollbar-hide">
        {/* Question Type Badge */}
        <div className="mb-2 flex items-center justify-center gap-2">
          <div className="flex items-center gap-1 px-3 py-1 rounded-full border-2 text-xs sm:text-sm font-bold" style={{borderColor:typeInfo.color,backgroundColor:typeInfo.color+'20',color:typeInfo.color}}>
            <span>{typeInfo.icon}</span>
            <span>{typeInfo.label}</span>
          </div>
          {qType === 'speed-choice' && (
            <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 font-bold bg-white/90 px-2.5 py-1 rounded-full">
              <Zap size={14} className="text-[#F59E0B]" /> Plus vite = plus de points !
            </div>
          )}
          {qType === 'cash-answer' && (
            <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 font-bold bg-white/90 px-2.5 py-1 rounded-full">
              <Pencil size={14} className="text-[#8B5CF6]" /> Tapez votre réponse !
            </div>
          )}
        </div>

        {/* Question */}
        <motion.div initial={{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}}
          className="bg-white border-[4px] border-[#00C9FF] rounded-[1.5rem] p-4 sm:p-8 mb-4 sm:mb-6 shadow-[0_8px_0_rgba(0,201,255,0.25)] relative w-full text-center">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FFD700] text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full border-2 border-white shadow">
            {q.category}
          </div>
          <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-gray-800 leading-snug mt-1">{q.text}</h2>
        </motion.div>

        {/* Answers */}
        {isMCQ && q.answers && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 w-full">
            {q.answers.map((ans: string, idx: number) => {
              const color = BUZZER_COLORS[idx];
              const isRevealed = gameState.questionState === 'revealed';
              const isCorrect = idx === q.correct;
              const isActive = gameState.questionState !== 'reading';
              const dimWrong = isRevealed && !isCorrect;
              const count = Object.values(gameState.players).filter(p => p.currentAnswer === idx).length;

              return (
                <motion.div key={idx} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:idx*0.08}}
                  className={`rounded-[1.2rem] p-3 sm:p-5 flex items-center relative transition-all duration-300 border-[4px] border-white ${
                    dimWrong ? 'opacity-30 grayscale' : isActive ? 'hover:-translate-y-1' : ''
                  }`} style={{backgroundColor: color.bg}}>
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-sm sm:text-lg font-bold border-3 border-white/50 bg-black/15 shadow text-white shrink-0">
                    {idx+1}
                  </div>
                  <span className="text-base sm:text-2xl md:text-3xl font-bold w-full text-center pl-6 sm:pl-8 game-text-outline-dark text-white">
                    {gameState.questionState==='reading'?'???':ans}
                  </span>
                  {count > 0 && gameState.questionState === 'revealed' && (
                    <div className="absolute -top-1.5 -right-1.5 bg-white text-gray-800 text-xs sm:text-sm font-bold px-1.5 py-0.5 rounded-full border-2 border-gray-200 shadow">{count}👤</div>
                  )}
                  {isRevealed && isCorrect && <div className="absolute -top-1.5 -left-1.5 bg-[#00E676] text-white text-sm px-1.5 py-0.5 rounded-full border-2 border-white shadow animate-bounce">✓</div>}
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Cash Answer Indicator */}
        {qType === 'cash-answer' && (
          <div className="bg-white/90 rounded-xl p-4 border-3 border-[#8B5CF6] shadow-lg text-center max-w-sm">
            <Pencil size={24} className="mx-auto text-[#8B5CF6] mb-2" />
            <p className="text-base font-bold text-gray-700">Les joueurs tapent leur réponse sur leur téléphone</p>
            {gameState.questionState === 'revealed' && q.acceptedAnswers && (
              <motion.div initial={{opacity:0}} animate={{opacity:1}}
                className="mt-3 bg-green-50 rounded-xl p-2 border-2 border-green-300">
                <p className="text-xs text-gray-500 font-bold">Réponse(s) acceptée(s)</p>
                <p className="text-lg font-bold text-green-600">{q.acceptedAnswers.join(' / ')}</p>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Player Bar */}
      <div className="shrink-0 bg-white/95 border-t-3 border-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-20">
        <div className="flex items-end justify-center gap-1.5 sm:gap-2.5 px-2 sm:px-4 py-2 overflow-x-auto scrollbar-hide max-h-[150px]">
          {sorted.map((player, rank) => {
            const hasAnswered = player.currentAnswer !== null || player.cashAnswer !== null;
            const isRevealed = gameState.questionState === 'revealed';
            const isCorrect = isMCQ && player.currentAnswer === q?.correct;
            const heights = ['h-14 sm:h-16','h-10 sm:h-12','h-8 sm:h-10'];
            const pipeH = heights[Math.min(rank,2)] || heights[2];
            return (
              <div key={player.id} className="flex flex-col items-center w-20 sm:w-28 md:w-32 shrink-0 relative">
                <div className="absolute -top-8 flex flex-col items-center">
                  {gameState.questionState==='answering' && hasAnswered && <div className="bg-[#FFD700] border-2 border-white w-5 h-5 rounded-full animate-bounce shadow" />}
                  {isRevealed && hasAnswered && (
                    <div className="mb-1 bg-white rounded-full p-1 border-2 border-gray-200 shadow transform -rotate-12">
                      {isCorrect?<span className="text-[#00E676] font-bold text-sm leading-none block">✓</span>:<XCircle size={14} className="text-red-500"/>}
                    </div>
                  )}
                </div>
                <div className="font-[family-name:var(--font-titan)] text-base sm:text-xl mb-0.5 game-text-outline-dark" style={{color:rank===0?'#B8860B':'#333'}}>{player.score}</div>
                <div className="bg-white px-2 py-1 rounded-lg border-2 shadow-sm w-[95%] text-center truncate text-xs sm:text-sm font-bold mb-[-6px] z-20 transform rotate-1" style={{borderColor:player.color}}>
                  <span className="mr-0.5">{AVATAR_EMOJIS[player.avatarIndex]}</span>{player.name}
                </div>
                <div className="w-full flex flex-col items-center z-10">
                  <div className="w-full h-3 pipe-top" />
                  <div className={`w-[85%] ${pipeH} pipe-body transition-all duration-500`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Host Control - fixed at bottom-right */}
      {gameState.status !== 'finished' && (
        <div className="fixed bottom-4 right-4 z-50">
          <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}} onClick={onNextState}
            className="bg-white text-gray-800 text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full border-3 border-gray-300 font-bold btn-3d flex items-center gap-1.5 shadow-lg font-[family-name:var(--font-fredoka)]">
            {gameState.questionState==='reading'&&<><ChevronRight size={18}/> Afficher</>}
            {gameState.questionState==='answering'&&<><Eye size={18}/> Révéler</>}
            {gameState.questionState==='revealed'&&<>{gameState.currentQuestionIndex>=gameState.currentQuestions.length-1?<Trophy size={18}/>:<ChevronRight size={18}/>} Suivant</>}
          </motion.button>
        </div>
      )}
    </div>
  );
}

// ==================== PLAYER BUZZER ====================
function PlayerBuzzerScreen({ gameState, playerId, onAnswer }: {
  gameState: GameState; playerId: string; onAnswer: (idx?: number, cash?: string) => void;
}) {
  const me = gameState.players[playerId];
  const q = gameState.currentQuestions[gameState.currentQuestionIndex];
  const sound = useSound();

  const playMyBuzzer = useCallback(() => {
    const buzzer = getBuzzerSound((me as any).buzzerSoundId);
    if (buzzer) {
      buzzer.play();
    } else {
      sound.playBuzz();
    }
  }, [me, sound]);

  if (!me || !q) return null;
  const qType = q.type;

  if (gameState.status === 'finished') return (
    <div className="h-screen w-screen flex flex-col buzzer-dots-bg touch-optimized">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:'spring',bounce:0.5}}>
          <div className="bg-white p-5 rounded-2xl border-5 border-[#FFD700] shadow-lg text-center">
            <Trophy size={40} className="mx-auto text-[#FFD700] mb-2" />
            <h2 className="text-2xl font-[family-name:var(--font-titan)] text-[#FF66CC] mb-1">FINI !</h2>
            <div className="text-3xl font-[family-name:var(--font-titan)] text-gray-800 font-bold">{me.score} pts</div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  return (
    <div className="h-screen w-screen flex flex-col buzzer-dots-bg touch-optimized overflow-hidden">
      <div className="h-14 bg-white border-b-[4px] border-gray-200 flex items-center justify-between px-3 shadow-md z-10 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="text-base">{AVATAR_EMOJIS[me.avatarIndex]||'🎮'}</span>
          <span className="font-bold text-sm truncate max-w-[100px]">{me.name}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-800 font-[family-name:var(--font-titan)] text-xl">
          <Trophy size={18}/><span>{me.score}</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center p-3 sm:p-4 relative">
        {/* Question type badge */}
        <div className="mb-3 flex items-center gap-1.5">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full border-2 text-xs font-bold" style={{borderColor:QUESTION_TYPE_LABELS[qType]?.color||'#3B82F6',backgroundColor:(QUESTION_TYPE_LABELS[qType]?.color||'#3B82F6')+'20',color:QUESTION_TYPE_LABELS[qType]?.color||'#3B82F6'}}>
            <span>{QUESTION_TYPE_LABELS[qType]?.icon||'🅰️'}</span>
            <span>{QUESTION_TYPE_LABELS[qType]?.label||'QUIZ'}</span>
          </div>
          <div className="bg-white/90 px-2 py-0.5 rounded-full text-xs font-bold text-gray-600">
            Q{gameState.currentQuestionIndex+1}/{gameState.currentQuestions.length}
          </div>
        </div>

        {gameState.questionState === 'reading' && (
          <motion.div initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} className="text-center">
            <motion.div animate={{scale:[1,1.05,1]}} transition={{duration:1.5,repeat:Infinity}}
              className="w-36 h-36 bg-[#EF4444] rounded-[1.5rem] border-6 border-white shadow-[0_10px_0_#991B1B] flex items-center justify-center transform rotate-3 mb-4">
              <Eye size={28} className="text-white opacity-80" />
            </motion.div>
            <p className="text-base font-bold text-gray-800 bg-white/90 px-4 py-2 rounded-full inline-block border-2 border-white shadow">
              Lis la question sur la TV...
            </p>
          </motion.div>
        )}

        {gameState.questionState === 'answering' && me.currentAnswer === null && me.cashAnswer === null && qType !== 'cash-answer' && (
          <div className="w-full h-full max-w-sm flex flex-col gap-2.5 py-1">
            {BUZZER_COLORS.map((color, idx) => (
              <motion.button key={idx} initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:idx*0.08}}
                whileTap={{scale:0.92}} onClick={() => { onAnswer(idx); playMyBuzzer(); }}
                className="flex-1 w-full rounded-[1.2rem] border-[5px] border-white relative overflow-hidden buzzer-btn"
                style={{backgroundColor:color.bg}}>
                <div className="absolute top-1 left-3 right-3 h-1/3 bg-white/25 rounded-full pointer-events-none" />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-base font-bold border-2 border-white/40 bg-white/20 shadow-inner ${color.text==='1C1917'?'text-gray-900':'text-white'}`}>{idx+1}</div>
                </div>
              </motion.button>
            ))}
          </div>
        )}

        {gameState.questionState === 'answering' && qType === 'cash-answer' && me.cashAnswer === null && (
          <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}}
            className="w-full max-w-sm">
            <div className="bg-white rounded-2xl border-4 border-[#8B5CF6] shadow-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Pencil size={18} className="text-[#8B5CF6]" />
                <span className="text-sm font-bold text-[#8B5CF6]">Votre réponse</span>
              </div>
              <input id="cash-input" type="text" placeholder="Tapez votre réponse..." autoFocus
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-3 border-gray-200 text-lg font-bold text-gray-800 focus:outline-none focus:border-[#8B5CF6] font-[family-name:var(--font-fredoka)]"
                onKeyDown={e => { if (e.key === 'Enter') { const input = (e.target as HTMLInputElement).value; if (input.trim()) { onAnswer(undefined, input.trim()); playMyBuzzer(); } } }}
              />
              <button onClick={() => { const input = document.getElementById('cash-input'); if (input) { const v = input.value.trim(); if (v) { onAnswer(undefined, v); playMyBuzzer(); } } }}
                className="w-full mt-2 bg-[#8B5CF6] text-white text-lg font-bold py-3 rounded-xl border-3 border-white btn-3d flex items-center justify-center gap-2">
                <Pencil size={18} /> Envoyer
              </button>
            </div>
          </motion.div>
        )}

        {(me.currentAnswer !== null || me.cashAnswer !== null) && (
          <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:'spring',bounce:0.5}}
            className="flex-1 flex flex-col items-center justify-center bg-white rounded-[1.5rem] border-5 border-[#00E676] shadow-lg text-center p-5">
            <motion.div animate={{scale:[1,1.1,1]}} transition={{duration:1,repeat:Infinity}}
              className="bg-green-50 p-4 rounded-full mb-3">
              <CheckCircle2 size={48} className="text-[#00E676]" />
            </motion.div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">C&apos;est noté !</h2>
          </motion.div>
        )}

        {gameState.questionState === 'revealed' && (
          <motion.div initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} className="bg-white p-5 rounded-[1.5rem] border-5 border-gray-200 shadow-lg text-center">
            {qType === 'cash-answer' ? (
              me.cashAnswer && checkCashCorrect(me.cashAnswer, q.acceptedAnswers) ? (
                <><motion.div animate={{rotate:[0,10,-10,0]}} className="bg-green-50 p-3 rounded-full mb-2 inline-block"><Star size={36} className="text-[#FFD700]"/></motion.div>
                <h2 className="text-xl font-bold text-[#00E676]">Bonne réponse ! 🎉</h2></>
              ) : me.cashAnswer ? (
                <><div className="bg-red-50 p-3 rounded-full mb-2 inline-block"><XCircle size={36} className="text-red-400"/></div>
                <h2 className="text-xl font-bold text-red-500">Mauvaise réponse</h2>
                <p className="text-sm text-gray-400 mt-1">Réponse: {q.acceptedAnswers?.join(' / ')}</p></>
              ) : (
                <><div className="bg-orange-50 p-3 rounded-full mb-2 inline-block"><Clock size={36} className="text-orange-400"/></div>
                <h2 className="text-xl font-bold text-orange-500">Temps écoulé !</h2></>
              )
            ) : (
              me.currentAnswer === q.correct ? (
                <><motion.div animate={{rotate:[0,10,-10,0]}} className="bg-green-50 p-3 rounded-full mb-2 inline-block"><Star size={36} className="text-[#FFD700]"/></motion.div>
                <h2 className="text-xl font-bold text-[#00E676]">Bonne réponse ! 🎉</h2></>
              ) : me.currentAnswer !== null ? (
                <><div className="bg-red-50 p-3 rounded-full mb-2 inline-block"><XCircle size={36} className="text-red-400"/></div>
                <h2 className="text-xl font-bold text-red-500">Mauvaise réponse</h2></>
              ) : (
                <><div className="bg-orange-50 p-3 rounded-full mb-2 inline-block"><Clock size={36} className="text-orange-400"/></div>
                <h2 className="text-xl font-bold text-orange-500">Temps écoulé !</h2></>
              )
            )}
            <p className="text-gray-500 mt-1 font-bold text-base">Regarde la TV</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function checkCashCorrect(answer: string, accepted: string[]): boolean {
  const normalized = answer.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  return accepted.some(a => a.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim() === normalized);
}

// ==================== RESULTS ====================
function ResultsScreen({ gameState, onRestart }: { gameState: GameState; onRestart: () => void }) {
  const sorted = useMemo(() => Object.values(gameState.players).sort((a,b)=>b.score-a.score), [gameState.players]);
  const styles = ['gold-gradient border-[#FFD700]','silver-gradient border-[#C0C0C0]','bronze-gradient border-[#CD7F32]'];
  const heights = ['h-28 sm:h-36','h-20 sm:h-28','h-16 sm:h-20'];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 game-bg relative overflow-y-auto scrollbar-hide">
      <Confetti />
      <motion.div initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} className="text-center mb-5 mt-4">
        <h1 className="text-4xl sm:text-6xl font-[family-name:var(--font-titan)] text-[#FFD700] game-title">RÉSULTATS</h1>
        <p className="text-base sm:text-xl font-bold text-white game-text-outline">
          🏆 3 manches • {sorted.length} joueurs
        </p>
      </motion.div>

      {/* Podium Top 3 */}
      <div className="flex items-end justify-center gap-2 sm:gap-4 mb-6 w-full max-w-2xl">
        {sorted[1] && <motion.div initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.4}} className="flex flex-col items-center flex-1 max-w-[120px]">
          <div className="text-2xl sm:text-3xl">{AVATAR_EMOJIS[sorted[1].avatarIndex]}</div>
          <div className="text-white font-bold text-sm sm:text-base truncate max-w-full mb-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">{sorted[1].name}</div>
          <div className="text-lg sm:text-2xl font-bold text-[#6B7280] mb-1">{sorted[1].score}</div>
          <div className={`w-full ${heights[1]} rounded-t-xl ${styles[1]} border-t-3 flex items-start justify-center pt-2`}><span className="text-2xl sm:text-3xl font-bold text-white game-text-outline-sm">2</span></div>
        </motion.div>}
        {sorted[0] && <motion.div initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}} className="flex flex-col items-center flex-1 max-w-[140px]">
          <motion.div animate={{y:[0,-4,0]}} transition={{duration:2,repeat:Infinity}}><Crown size={28} className="text-[#FFD700] mx-auto mb-1"/></motion.div>
          <div className="text-3xl sm:text-4xl">{AVATAR_EMOJIS[sorted[0].avatarIndex]}</div>
          <div className="text-white font-bold text-base sm:text-lg truncate max-w-full mb-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">{sorted[0].name}</div>
          <div className="text-2xl sm:text-4xl font-[family-name:var(--font-titan)] text-[#B8860B] mb-1">{sorted[0].score}</div>
          <div className={`w-full ${heights[0]} rounded-t-xl ${styles[0]} border-t-4 flex items-start justify-center pt-3`}><span className="text-3xl sm:text-4xl font-bold text-white game-text-outline-sm">1</span></div>
        </motion.div>}
        {sorted[2] && <motion.div initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.6}} className="flex flex-col items-center flex-1 max-w-[110px]">
          <div className="text-2xl sm:text-3xl">{AVATAR_EMOJIS[sorted[2].avatarIndex]}</div>
          <div className="text-white font-bold text-sm sm:text-base truncate max-w-full mb-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">{sorted[2].name}</div>
          <div className="text-lg sm:text-2xl font-bold text-[#92400E] mb-1">{sorted[2].score}</div>
          <div className={`w-full ${heights[2]} rounded-t-xl ${styles[2]} border-t-3 flex items-start justify-center pt-1.5`}><span className="text-xl sm:text-2xl font-bold text-white game-text-outline-sm">3</span></div>
        </motion.div>}
      </div>

      {/* Full Leaderboard */}
      <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.8}}
        className="bg-white/95 backdrop-blur rounded-2xl border-4 border-white shadow-xl p-3 sm:p-4 w-full max-w-xl mb-5">
        <h3 className="text-base font-bold text-gray-700 mb-2 flex items-center gap-1.5"><Trophy size={18} className="text-[#FFD700]"/> Classement</h3>
        <div className="space-y-1.5 max-h-48 overflow-y-auto scrollbar-hide">
          {sorted.map((p, rank) => (
            <div key={p.id} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg ${rank<3?'bg-gray-50':''}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${rank===0?'bg-[#FFD700]':rank===1?'bg-[#C0C0C0]':rank===2?'bg-[#CD7F32]':'bg-gray-300'}`}>{rank+1}</div>
              <span className="text-base">{AVATAR_EMOJIS[p.avatarIndex]}</span>
              <span className="font-bold text-gray-700 flex-1 truncate text-base">{p.name}</span>
              <span className={`font-[family-name:var(--font-titan)] text-base ${rank===0?'text-amber-600':rank===1?'text-gray-500':rank===2?'text-amber-800':'text-gray-500'}`}>{p.score}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.button initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:1}}
        whileHover={{scale:1.05}} whileTap={{scale:0.95}} onClick={onRestart}
        className="bg-[#00C9FF] text-white text-lg sm:text-xl font-bold px-8 sm:px-12 py-3 sm:py-5 rounded-full border-[4px] border-white btn-3d-heavy flex items-center gap-2 shadow-2xl mb-6">
        <RotateCcw size={22}/> Rejouer
      </motion.button>
    </div>
  );
}

// ==================== MAIN PAGE ====================
export default function BuzzQuizPage() {
  const game = useGamePolling();
  const [showConfig, setShowConfig] = useState(false);
  const [configSettings, setConfigSettings] = useState<GameSettings | null>(null);
  const [specialMode, setSpecialMode] = useState(false);

  const view = useMemo((): GameView => {
    if (showConfig) return 'host-config';
    if (game.gameState?.status === 'round-transition') return 'round-transition';
    if (!game.gameState || !game.playerId) return 'menu';
    const gs = game.gameState;
    const isHost = game.playerId === gs.hostId;
    if (gs.status === 'lobby') return isHost ? 'host-lobby' : 'player-lobby';
    return isHost ? 'host-game' : 'player-game';
  }, [game.gameState, game.playerId, showConfig]);

  // BGM plays on menu, host-config, host-lobby only
  const bgmShouldPlay = view === 'menu' || view === 'host-config' || view === 'host-lobby';
  const bgm = useBGM(bgmShouldPlay);

  const handleCreateFromConfig = useCallback((settings: GameSettings, hostName: string) => {
    setConfigSettings(settings);
    setShowConfig(false);
    game.createRoom(settings, hostName);
  }, [game]);

  const handleCreateQuick = useCallback(() => {
    setShowConfig(true);
  }, []);

  const handleCreateAlice = useCallback(() => {
    setSpecialMode(true);
    setShowConfig(true);
  }, []);

  const errorToShow = (view === 'menu' || view === 'host-config') ? game.error : null;

  return (
    <main className="min-h-screen touch-optimized">
        {view === 'menu' && (
          <MainMenu onCreateQuick={handleCreateQuick} onJoin={(code, name) => game.joinRoom(code, name)} error={errorToShow} onClearError={() => game.setError(null)} onCreateAlice={handleCreateAlice} isDancing={bgm.isPlaying} needsUnlock={bgm.needsUnlock} onUnlock={bgm.unlockAudio} muted={bgm.muted} onToggleMute={bgm.toggleMute} />
        )}

        {view === 'host-config' && (
          <HostConfig onCreate={handleCreateFromConfig} onCancel={() => { setShowConfig(false); setSpecialMode(false); }} specialMode={specialMode} />
        )}

        {view === 'host-lobby' && game.gameState && (
          <HostLobby gameState={game.gameState} playerId={game.playerId!} onStartGame={game.startGame} onKickPlayer={game.kickPlayer} />
        )}

        {view === 'player-lobby' && game.gameState && (
          <PlayerLobby gameState={game.gameState} playerId={game.playerId!} onSetSound={game.setBuzzerSound} />
        )}

        {view === 'host-game' && game.gameState && (
          <HostGameScreen gameState={game.gameState} playerId={game.playerId!} onNextState={game.nextQuestionState}
            onNextRound={game.nextRound} onRestart={game.restartGame} />
        )}

        {view === 'player-game' && game.gameState && (
          <PlayerBuzzerScreen gameState={game.gameState} playerId={game.playerId!}
            onAnswer={(idx, cash) => {
              if (cash !== undefined) game.submitAnswer(undefined, cash);
              else if (idx !== undefined) game.submitAnswer(idx);
            }} />
        )}

        {view === 'round-transition' && game.gameState && (
          <RoundTransition gameState={game.gameState} playerId={game.playerId!} onNextRound={game.nextRound} />
        )}

      {!game.isConnected && view === 'menu' && (
        <div className="fixed bottom-4 left-4 bg-red-500 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg z-50 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" /> Déconnecté
        </div>
      )}

      {/* BGM Mute / Unmute button – always visible on menu & host screens */}
      {bgmShouldPlay && (
        <button
          onClick={bgm.toggleMute}
          className="mute-btn-fab"
          title={bgm.muted ? 'Remettre la musique' : 'Couper la musique'}
        >
          {bgm.muted ? (
            <VolumeX size={20} className="text-gray-400" />
          ) : (
            <Volume2 size={20} className="text-[#FF66CC]" />
          )}
          {!bgm.muted && (
            <div className="mute-bars">
              {[1, 2, 3].map(i => (
                <div key={i} className="mute-bar mute-bar-active" style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
          )}
        </button>
      )}
    </main>
  );
}

// Simple MainMenu that launches config
function MainMenu({ onCreateQuick, onJoin, error, onClearError, onCreateAlice, isDancing, needsUnlock, onUnlock, muted, onToggleMute }: {
  onCreateQuick: () => void; onJoin: (code: string, name: string) => void; error: string | null; onClearError: () => void; onCreateAlice: () => void; isDancing: boolean; needsUnlock?: boolean; onUnlock?: () => void; muted?: boolean; onToggleMute?: () => void;
}) {
  const [playerName, setPlayerName] = useState('');
  const [secretCode, setSecretCode] = useState('');
  const [aliceUnlocked, setAliceUnlocked] = useState(false);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const initialCode = typeof window !== 'undefined' && window.location.hash.startsWith('#code=') ? window.location.hash.replace('#code=', '').toUpperCase() : '';
  const [code, setCode] = useState(initialCode);

  const buzzLetters = ['B', 'U', 'Z', 'Z', '!'];

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (secretCode.trim().toLowerCase() === ALICE_MODE_CODE.toLowerCase()) {
      setAliceUnlocked(true);
      setShowCodeInput(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center game-bg">
      {/* iOS Audio Unlock Overlay */}
      {needsUnlock && (
        <div className="ios-audio-overlay" onClick={onUnlock}>
          <div className="ios-tap-icon bg-[#FF66CC] rounded-full p-6 mb-4 border-4 border-white shadow-2xl">
            <Volume2 size={40} className="text-white" />
          </div>
          <p className="text-white text-xl font-bold game-text-outline-sm mb-2">Appuyez pour activer le son</p>
          <p className="text-white/70 text-sm font-bold">La musique ne fonctionne pas sur votre appareil sans cette action</p>
        </div>
      )}

      {/* ========== ANIMATED DANCING LOGO ========== */}
      <div className={`relative w-full flex justify-center mb-6 ${isDancing ? 'is-dancing' : ''}`}>
        <div className="impact-ring z-0" />

        <div className={`flex flex-col items-center relative z-10 ${!isDancing ? 'logo-idle-float' : ''}`}>

          {/* BUZZ! text with per-letter animation */}
          <div className="buzz-logo-text flex items-end select-none" style={{
            fontFamily: "'Lilita One', var(--font-titan), cursive",
            color: '#ffde00',
            textShadow: '-3px -3px 0 #1c1919, 3px -3px 0 #1c1919, -3px 3px 0 #1c1919, 3px 3px 0 #1c1919, -3px 0 0 #1c1919, 3px 0 0 #1c1919, 0 -3px 0 #1c1919, 0 3px 0 #1c1919, 8px 10px 0 #1c1919',
            letterSpacing: '-0.02em',
            lineHeight: '1',
            transformOrigin: 'center bottom',
            fontSize: '4.5rem',
          }}>
            <style>{`
              @media (min-width: 640px) { .buzz-logo-text { font-size: 7rem !important; } }
              @media (min-width: 768px) { .buzz-logo-text { font-size: 9rem !important; } }
            `}</style>
            {buzzLetters.map((letter, index) => (
              <div
                key={index}
                className="buzz-logo-letter"
                style={{ animationDelay: `${index * 0.10}s` }}
              >
                <span>{letter}</span>
              </div>
            ))}
          </div>

          {/* LE GRAND QUIZ pill */}
          <div className="buzz-logo-pill px-6 py-1.5 sm:px-10 sm:py-2 md:px-12 md:py-3 rounded-full -mt-2 sm:-mt-4 md:-mt-6 relative z-20 select-none">
            <span style={{
              fontFamily: "'Lilita One', var(--font-titan), cursive",
              color: '#ffffff',
              WebkitTextStroke: '1.5px #1c1919',
              textShadow: '3px 3px 0px #1c1919',
              letterSpacing: '0.05em',
              fontSize: '1.2rem',
            }} className="block">
              <style>{`
                @media (min-width: 640px) { .buzz-logo-pill span { font-size: 1.75rem !important; } }
                @media (min-width: 768px) { .buzz-logo-pill span { font-size: 2.2rem !important; } }
              `}</style>
              LE GRAND QUIZ
            </span>
          </div>
        </div>
      </div>

      {error && <ErrorBanner message={error} onClose={onClearError} />}

      <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="w-full max-w-xs mb-6">
        <input type="text" placeholder="Ton Pseudo" maxLength={12} value={playerName} onChange={e=>setPlayerName(e.target.value)}
          className="w-full px-5 py-3 rounded-full bg-white border-4 border-white/80 text-center text-xl font-bold text-gray-800 focus:outline-none focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/30 shadow-[0_5px_0_rgba(0,0,0,0.12)] placeholder:text-gray-400 transition-all font-[family-name:var(--font-fredoka)]" />
      </motion.div>

      {/* Alice Mode Unlock Button */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.35}} className="w-full max-w-xs mb-5">
        <button onClick={() => { if (aliceUnlocked) { onCreateAlice(); } else { setShowCodeInput(!showCodeInput); } }}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-full border-3 font-bold text-sm transition-all ${
            aliceUnlocked
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-400 shadow-lg'
              : 'bg-white/80 text-gray-500 border-gray-200 hover:border-purple-300 hover:text-purple-600'
          }`}>
          {aliceUnlocked ? (
            <><Wand2 size={16} /> Mode Soirée Pop Culture</>
          ) : (
            <><Lock size={14} /> Code secret</>
          )}
        </button>

        <AnimatePresence>
          {showCodeInput && !aliceUnlocked && (
            <motion.form initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}
              onSubmit={handleCodeSubmit} className="overflow-hidden mt-2">
              <div className="flex gap-2 items-center justify-center">
                <input type="text" placeholder="Entrez le code..." value={secretCode} onChange={e=>setSecretCode(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-full bg-white border-3 border-gray-200 text-center text-sm font-bold text-gray-800 focus:outline-none focus:border-purple-400 font-[family-name:var(--font-fredoka)]" />
                <button type="submit" disabled={!secretCode.trim()}
                  className="bg-purple-500 text-white px-4 py-2 rounded-full font-bold text-sm border-2 border-purple-400 disabled:opacity-50 btn-3d flex items-center gap-1">
                  <Wand2 size={14} />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Code fourni par l&apos;organisateur</p>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
      {/* ========== HÉBERGER + REJOINDRE CARDS WITH MOTION DESIGN ========== */}
      <div className="flex flex-col md:flex-row gap-5 w-full max-w-4xl justify-center px-3">
        {/* --- HÉBERGER CARD --- */}
        <motion.div
          initial={{ scale: 0.3, y: 60, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring', bounce: 0.4, duration: 0.8 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex-1"
        >
          <button onClick={onCreateQuick} className="w-full group bg-[#FF66CC] text-white p-5 sm:p-7 rounded-[1.5rem] border-[5px] border-white btn-3d-heavy flex flex-col items-center justify-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-15 rounded-full transform translate-x-6 -translate-y-6" />
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.7, type: 'spring', bounce: 0.5, duration: 0.6 }}
            >
              <MonitorPlay size={44} className="mb-2 group-hover:scale-110 transition-transform drop-shadow-lg" />
            </motion.div>
            <div className="flex items-end justify-center mb-1">
              {'Héberger'.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: [0, -5, 0], opacity: 1 }}
                  transition={{
                    y: { delay: 0.8 + i * 0.07, duration: 1.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.8 },
                    opacity: { delay: 0.8 + i * 0.04 },
                  }}
                  className="text-xl sm:text-2xl font-bold game-text-outline-sm inline-block"
                  style={{ fontFamily: 'var(--font-fredoka)', willChange: 'transform' }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="font-bold opacity-90 text-base"
            >
              Configurer &amp; Jouer
            </motion.p>
          </button>
        </motion.div>

        {/* --- REJOINDRE CARD --- */}
        <motion.div
          initial={{ scale: 0.3, y: 60, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', bounce: 0.4, duration: 0.8 }}
          className="flex-1"
        >
          <div className="bg-white p-5 sm:p-7 rounded-[1.5rem] border-[5px] border-[#FFD700] shadow-[0_6px_0_rgba(0,0,0,0.1)] relative overflow-hidden">
            <div className="text-center mb-3 relative z-10">
              <motion.div
                initial={{ scale: 0, rotate: 20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: 'spring', bounce: 0.5, duration: 0.6 }}
              >
                <Smartphone size={40} className="mx-auto mb-1.5 text-[#00C9FF]" />
              </motion.div>
              <div className="flex items-end justify-center">
                {'Rejoindre'.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: [0, -5, 0], opacity: 1 }}
                    transition={{
                      y: { delay: 0.9 + i * 0.07, duration: 1.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.8 },
                      opacity: { delay: 0.9 + i * 0.04 },
                    }}
                    className="text-xl sm:text-2xl font-bold text-[#00C9FF] game-text-outline-dark inline-block"
                    style={{ fontFamily: 'var(--font-fredoka)', willChange: 'transform' }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
            <form onSubmit={e=>{e.preventDefault(); if(code.trim()&&playerName.trim()){onJoin(code.trim(), playerName.trim());}}}
              className="flex flex-col gap-2.5 relative z-10">
              <input type="text" placeholder="CODE" maxLength={4} value={code} onChange={e=>setCode(e.target.value.toUpperCase())}
                className="w-full px-4 py-2.5 rounded-full bg-gray-50 border-3 border-gray-200 text-center text-xl font-bold uppercase text-gray-800 focus:outline-none focus:border-[#00C9FF] focus:bg-white transition-all tracking-[0.25em] font-[family-name:var(--font-fredoka)]" required />
              <p className="text-xs text-gray-500 text-center">Entrez le code affiché sur l'écran principal</p>
              <button type="submit" disabled={!playerName.trim()||!code.trim()}
                className="w-full bg-[#FFD700] text-gray-800 text-lg font-bold py-2.5 rounded-full border-4 border-white btn-3d-heavy mt-0.5 flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg">
                <Play size={18}/> GO !
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
