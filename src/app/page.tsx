'use client';

import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { useGameSocket } from '@/hooks/useGameSocket';
import { useSound } from '@/hooks/useSound';
import { useBGM } from '@/hooks/useBGM';
import { GameState, GameView, GameSettings, BUZZER_COLORS, AVATAR_EMOJIS, CATEGORIES, ALICE_CATEGORIES, ALICE_MODE_CODE, GAME_DURATIONS, QUESTION_TYPE_LABELS } from '@/lib/game-types';
import { BUZZER_SOUNDS, getBuzzerSound } from '@/lib/buzzerSounds';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy, Users, Play, AlertCircle, CheckCircle2, XCircle,
  MonitorPlay, Smartphone, Copy, Settings, Crown, Star,
  Zap, Clock, ChevronRight, RotateCcw, Eye, X, Timer, Pencil,
  Flame, Target, Sparkles, Lock, Wand2, Volume2, VolumeX, FastForward,
  ChevronDown, HelpCircle, ArrowRight, ArrowLeft, Gamepad2
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// ==================== PLAYER EXIT BUTTON ====================
function PlayerExitButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)} className="opacity-60 hover:opacity-100 transition-opacity focus:outline-none flex items-center justify-center -rotate-2">
        <span className="text-xl sm:text-2xl font-[family-name:var(--font-titan)] text-white game-text-outline-sm drop-shadow-md">BUZZ!</span>
      </button>
      <AnimatePresence>
        {show && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4 text-left">
            <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.9, opacity:0}} className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl text-center">
              <AlertCircle size={44} className="text-red-500 mx-auto mb-3" />
              <h2 className="text-xl font-bold text-gray-800 mb-2">Quitter la partie ?</h2>
              <p className="text-gray-600 mb-6 text-sm font-bold">Voulez-vous vraiment retourner à l'accueil ?</p>
              <div className="flex gap-3">
                <button onClick={() => setShow(false)} className="flex-1 py-3 rounded-xl bg-gray-200 text-gray-700 font-bold hover:bg-gray-300">Annuler</button>
                <button onClick={() => {
                  localStorage.removeItem('buzz_room_code');
                  window.location.reload();
                }} className="flex-1 py-3 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 shadow-md">Quitter</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

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
    specialMode ? ALICE_CATEGORIES.slice(0, 3) : ['Culture Générale', 'Cinéma & Séries', 'Sport', 'Musique']
  );
  const [step, setStep] = useState(0);

  const roundMapping: Record<number, { count: number; q: number }> = {
    10: { count: 2, q: 10 },
    15: { count: 3, q: 10 },
    20: { count: 4, q: 10 },
    30: { count: 5, q: 12 },
    45: { count: 7, q: 12 },
  };

  const currentMapping = roundMapping[gameDuration] || { count: 3, q: 10 };
  const targetRoundCount = currentMapping.count;
  const questionsPerRound = currentMapping.q;
  const estimatedTime = targetRoundCount * questionsPerRound * 30 + 30; // approx time

  useEffect(() => {
    setRounds(prev => {
      const newRounds = [...prev];
      if (newRounds.length > targetRoundCount) {
        return newRounds.slice(0, targetRoundCount);
      }
      while (newRounds.length < targetRoundCount) {
        const pool = specialMode ? ALICE_CATEGORIES : CATEGORIES;
        const available = pool.filter(c => !newRounds.includes(c));
        newRounds.push(available[0] || pool[0]);
      }
      return newRounds;
    });
  }, [gameDuration, specialMode, targetRoundCount]);

  const availableCats = specialMode ? ALICE_CATEGORIES : CATEGORIES;

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

  const allAvailableCats = specialMode ? [...ALICE_CATEGORIES, ...CATEGORIES.filter(c => !ALICE_CATEGORIES.includes(c))] : CATEGORIES;

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

        {/* Rounds */}
        <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.3}}
          className="bg-white rounded-2xl p-4 border-4 border-white shadow-lg">
          <label className="block text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider flex justify-between items-center">
            <span><Flame size={14} className="inline mr-1" /> {rounds.length} Manches choisies</span>
          </label>
          <div className="space-y-3 max-h-56 overflow-y-auto pr-2 scrollbar-hide">
            {rounds.map((cat, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FF66CC] text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-md">
                  {i+1}
                </div>
                <select value={cat||''} onChange={e=>handleSetRound(i, e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-gray-50 border-3 border-gray-200 text-base font-bold text-gray-800 focus:outline-none focus:border-[#FF66CC] font-[family-name:var(--font-fredoka)] truncate">
                  {allAvailableCats.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <button onClick={() => setRounds(rounds.filter((_, idx)=>idx!==i))}
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors border-2 border-transparent hover:border-red-200">
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>
          
          <button onClick={() => setRounds([...rounds, allAvailableCats[0]])}
            className="w-full mt-3 py-2 border-3 border-dashed border-gray-300 text-gray-500 font-bold rounded-xl hover:border-[#FF66CC] hover:text-[#FF66CC] hover:bg-[#FF66CC]/5 transition-all text-sm">
            + Ajouter un thème
          </button>

          <p className="text-sm text-gray-500 mt-4 text-center">
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
    Object.values(gameState.players).filter(p => p.id !== gameState.hostId).sort((a,b) => a.id===playerId?-1:b.id===playerId?1:0),
    [gameState.players, playerId, gameState.hostId]);
  const allReady = playerList.length > 0 && playerList.every(p => p.isReady);

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
        className={`bg-white rounded-[2rem] border-[6px] shadow-[0_8px_0_rgba(0,0,0,0.15)] p-5 sm:p-7 mb-6 flex flex-col md:flex-row items-center gap-6 w-full max-w-3xl transition-colors duration-500 ${allReady ? 'border-[#00E676]' : 'border-[#FF66CC]'}`}>
        <div className="text-center flex-1">
          <p className="text-sm text-gray-500 mb-1 font-bold uppercase tracking-wider">Code de la salle</p>
          <p className="text-[4rem] sm:text-[6rem] font-[family-name:var(--font-titan)] text-[#00C9FF] game-text-outline leading-none select-all">{gameState.code}</p>
          <div className="mt-3 flex items-center gap-2 text-gray-600 text-base font-bold justify-center">
            <Users size={16} className={allReady ? 'text-[#00E676]' : 'text-gray-400'} /> 
            <span className={allReady ? 'text-[#00E676]' : ''}>{playerList.length}/32 joueurs</span>
            {allReady && playerList.length > 0 && <span className="ml-2 bg-[#00E676] text-white text-[10px] px-2 py-0.5 rounded-full animate-pulse">PRÊT !</span>}
          </div>
        </div>
        <div className="hidden md:block w-1 h-28 bg-gray-200 rounded-full" />
        <div className="text-center flex-1">
          <p className="text-sm text-gray-500 mb-2 font-bold uppercase tracking-wider">Scannez ce code</p>
          <div className="bg-gray-50 p-2 rounded-xl border-3 border-gray-100 shadow-inner inline-block">
            <img src={`https://quickchart.io/qr?text=${encodeURIComponent(joinUrl)}&size=150`} alt="QR Code" className="w-32 h-32 rounded-lg" />
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
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-bold shadow-md border-3 transition-all ${p.isReady ? 'bg-green-50 border-green-400' : 'bg-white border-white/80'} group`}>
              <span className="text-base">{AVATAR_EMOJIS[p.avatarIndex]||'🎮'}</span>
              <span className="truncate max-w-[100px]" style={{color:p.color}}>{p.name}</span>
              {p.isReady ? (
                <CheckCircle2 size={16} className="text-[#00E676] shrink-0" />
              ) : (
                <div className="w-4 h-4 rounded-full border-2 border-gray-200 shrink-0" />
              )}
              {p.id !== playerId && (
                <button onClick={()=>onKickPlayer(p.id)} className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 p-0.5 ml-1"><X size={12}/></button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Start */}
      <AnimatePresence>
        {(playerList.length >= 2 || gameState.settings.testMode) && (
          <motion.button initial={{scale:0}} animate={{scale:1}} exit={{scale:0}}
            whileHover={allReady ? {scale:1.05} : {}} whileTap={allReady ? {scale:0.95} : {}}
            onClick={() => allReady && onStartGame()}
            disabled={!allReady}
            className={`text-white text-xl sm:text-2xl font-bold px-10 sm:px-14 py-5 sm:py-6 rounded-[2rem] border-[6px] border-white flex items-center gap-3 shadow-2xl transition-all ${
              allReady 
                ? 'bg-[#00E676] btn-3d-heavy animate-pulse-glow opacity-100 cursor-pointer' 
                : 'bg-gray-400 opacity-50 cursor-not-allowed grayscale'
            }`}>
            {allReady ? <Play size={28} /> : <XCircle size={28} />}
            {allReady ? 'JOUER !' : 'EN ATTENTE...'}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// ==================== PLAYER LOBBY ====================
function PlayerLobby({ gameState, playerId, onSetSound, onToggleReady }: {
  gameState: GameState; playerId: string; onSetSound: (soundId: string) => void; onToggleReady: () => void;
}) {
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
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 sm:p-6 game-bg touch-optimized overflow-y-auto relative">
      <div className="absolute top-4 left-4 z-50">
        <PlayerExitButton />
      </div>
      <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:'spring',bounce:0.5}}
        className="bg-white p-4 rounded-full border-5 border-[#00E676] shadow-[0_6px_0_rgba(0,0,0,0.12)] mb-3">
        <CheckCircle2 size={48} className="text-[#00E676]" />
      </motion.div>
      <div className="text-3xl mb-0.5">{AVATAR_EMOJIS[me.avatarIndex]||'🎮'}</div>
      <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-titan)] text-white game-text-outline mb-1">{me.name}</h2>
      <p className="text-sm font-bold text-white bg-black/20 px-3 py-1 rounded-full inline-block mb-5">✓ Connecté !</p>

      {/* Sound Picker */}
      <div className="bg-white rounded-2xl border-4 border-[#FF66CC] shadow-lg p-5 w-full max-w-sm mb-5">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Volume2 size={20} className="text-[#FF66CC]" />
          <h3 className="text-base font-black text-[#FF66CC] uppercase tracking-widest">Ton cri de guerre</h3>
        </div>
        
        <Select value={selectedSound} onValueChange={handleSelect}>
          <SelectTrigger className="w-full h-14 bg-gray-50 border-3 border-gray-200 rounded-xl text-lg font-bold text-gray-800 focus:ring-[#FF66CC] focus:border-[#FF66CC] transition-all">
            <SelectValue placeholder="Choisis un son..." />
          </SelectTrigger>
          <SelectContent className="bg-white border-3 border-[#FF66CC] rounded-xl shadow-2xl max-h-80">
            {BUZZER_SOUNDS.map(s => (
              <SelectItem key={s.id} value={s.id} className="focus:bg-[#FF66CC]/10 py-3 cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{s.emoji}</span>
                  <span className="font-bold text-gray-700">{s.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <p className="text-[10px] text-gray-400 font-bold mt-3 uppercase tracking-tighter">Le son sera joué quand tu buzzeras !</p>
      </div>

      {/* Ready Button */}
      <motion.button
        whileHover={{scale:1.05}} whileTap={{scale:0.95}}
        onClick={onToggleReady}
        className={`w-full max-w-sm h-16 rounded-2xl border-4 text-xl font-black uppercase tracking-widest shadow-lg flex items-center justify-center gap-2 mb-6 transition-all ${
          me.isReady 
            ? 'bg-[#00E676] text-white border-white animate-pulse' 
            : 'bg-[#FF8C00] text-white border-white animate-pulse-glow shadow-[0_0_15px_rgba(255,140,0,0.4)]'
        }`}
      >
        {me.isReady ? (
          <><CheckCircle2 size={24} /> PRÊT !</>
        ) : (
          <><Star size={24} className="animate-spin-slow" /> PRÊT ?</>
        )}
      </motion.button>

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
  const nextRoundIdx = gameState.currentRound + 1; // Index of next round
  const nextRoundNum = nextRoundIdx + 1;
  const nextRound = gameState.settings.rounds[nextRoundIdx];
  const isHost = playerId === gameState.hostId;
  const sorted = Object.values(gameState.players).filter(p => p.id !== gameState.hostId).sort((a,b)=>b.score-a.score);
  const sound = useSound();

  useEffect(() => { 
    if (isHost) {
      sound.playRoundStart(); 
    }
  }, [isHost, sound]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center game-bg relative">
      {!isHost && (
        <div className="absolute top-4 left-4 z-50">
          <PlayerExitButton />
        </div>
      )}
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
            Manche {nextRoundNum}
          </h2>
          <p className="text-lg font-bold text-gray-600">{nextRound?.category}</p>
          <p className="text-sm text-gray-500 mt-1">{nextRound?.questionCount} questions</p>
        </motion.div>

        {isHost && (
          <motion.button initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:1}}
            whileHover={{scale:1.05}} whileTap={{scale:0.95}}
            onClick={onNextRound}
            className="mt-6 bg-[#00C9FF] text-white text-xl font-bold px-10 py-4 rounded-full border-4 border-white btn-3d-heavy flex items-center gap-2 shadow-lg w-full justify-center">
            <Play size={20} /> Manche {nextRoundNum} !
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
function HostGameScreen({ gameState, playerId, onNextState, onNextRound, onRestart, onDestroyRoom }: {
  gameState: GameState; playerId: string;
  onNextState: () => void; onNextRound: () => void; onRestart: () => void; onDestroyRoom: () => void;
}) {
  const q = gameState.currentQuestions[gameState.currentQuestionIndex];
  const sorted = useMemo(() => Object.values(gameState.players).filter(p => p.id !== gameState.hostId).sort((a,b)=>b.score-a.score), [gameState.players, gameState.hostId]);
  const answeredCount = Object.values(gameState.players).filter(p => p.id !== gameState.hostId && (p.currentAnswer !== null || p.cashAnswer !== null)).length;
  const total = Object.keys(gameState.players).length - 1;
  const qType = q?.type || 'multiple-choice';
  const typeInfo = QUESTION_TYPE_LABELS[qType as keyof typeof QUESTION_TYPE_LABELS] || QUESTION_TYPE_LABELS['multiple-choice'];

  if (!q) return null;

  const isMCQ = qType === 'multiple-choice' || qType === 'speed-choice';

  const [showExitConfirm, setShowExitConfirm] = useState(false);

  if ((gameState.status as string) === 'finished') return <VictoryScreen gameState={gameState} onRestart={onRestart} onDestroyRoom={onDestroyRoom} isHost={playerId === gameState.hostId} />;

  return (
    <div className="flex flex-col h-screen w-full game-bg relative overflow-hidden">
      {/* Exit Modal */}
      <AnimatePresence>
        {showExitConfirm && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4">
            <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.9, opacity:0}} className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl text-center">
              <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-800 mb-2">Quitter la partie ?</h2>
              <p className="text-gray-600 mb-6 text-sm font-bold">Voulez-vous vraiment retourner à l'accueil ?</p>
              <div className="flex gap-3">
                <button onClick={() => setShowExitConfirm(false)} className="flex-1 py-3 rounded-xl bg-gray-200 text-gray-700 font-bold hover:bg-gray-300">Annuler</button>
                <button onClick={() => {
                  onDestroyRoom();
                  localStorage.removeItem('buzz_room_code');
                  window.location.reload();
                }} className="flex-1 py-3 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 shadow-md">Quitter</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="h-16 sm:h-20 bg-white border-b-[5px] border-white/50 flex items-center justify-between px-3 sm:px-6 shadow-lg relative z-20 shrink-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="flex items-center gap-2 relative z-10">
          <button onClick={() => setShowExitConfirm(true)} className="hover:scale-105 transition-transform origin-left text-left focus:outline-none group">
            <h1 className="text-2xl sm:text-4xl font-[family-name:var(--font-titan)] text-[#B8860B] transform -rotate-1 group-hover:text-[#FFD700] transition-colors">BUZZ!</h1>
          </button>
        </div>
        <div className="flex items-center gap-2 relative z-10 flex-wrap justify-end">
          <div className="bg-[#FF66CC] text-white text-sm sm:text-base px-3 py-1.5 rounded-full font-bold border-2 border-white">
            Manche {gameState.currentRound + 1}/{gameState.settings.rounds.length}
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
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border-2 text-xs sm:text-sm font-bold shadow-sm" style={{borderColor:typeInfo.color, backgroundColor: 'white', color:typeInfo.color}}>
            <span className="flex items-center justify-center bg-white rounded shadow-inner p-0.5">{typeInfo.icon}</span>
            <span className="uppercase tracking-wider">{typeInfo.label}</span>
          </div>
          {qType === 'speed-choice' && (
            <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-700 font-bold bg-white px-2.5 py-1.5 rounded-full shadow-sm border-2 border-amber-200">
              <Zap size={14} className="text-[#F59E0B]" /> Plus vite = plus de points !
            </div>
          )}
          {qType === 'cash-answer' && (
            <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-700 font-bold bg-white px-2.5 py-1.5 rounded-full shadow-sm border-2 border-purple-200">
              <Pencil size={14} className="text-[#8B5CF6]" /> Tapez votre réponse !
            </div>
          )}
        </div>

        {/* Question */}
        <motion.div initial={{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}}
          className="bg-white border-[4px] border-[#00C9FF] rounded-[1.5rem] p-4 sm:p-8 mb-4 sm:mb-6 shadow-[0_8px_0_rgba(0,201,255,0.25)] relative w-full text-center">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFD700] text-gray-900 text-xs sm:text-sm font-black px-4 py-1.5 rounded-full border-2 border-white shadow-md uppercase tracking-widest">
            {q.category}
          </div>
          <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-gray-800 leading-snug mt-1">{q.text}</h2>
        </motion.div>

        {/* Answers */}
        {isMCQ && 'answers' in q && Array.isArray((q as any).answers) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 w-full">
            {(q as any).answers.map((ans: string, idx: number) => {
              const color = BUZZER_COLORS[idx];
              const isRevealed = gameState.questionState === 'revealed';
              const isCorrect = idx === (q as any).correct;
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
            {gameState.questionState === 'revealed' && 'acceptedAnswers' in q && Array.isArray((q as any).acceptedAnswers) && (
              <motion.div initial={{opacity:0}} animate={{opacity:1}}
                className="mt-3 bg-green-50 rounded-xl p-2 border-2 border-green-300">
                <p className="text-xs text-gray-500 font-bold">Réponse(s) acceptée(s)</p>
                <p className="text-lg font-bold text-green-600">{(q as any).acceptedAnswers.join(' / ')}</p>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Player Bar */}
      <div className="shrink-0 bg-white/95 border-t-3 border-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-20">
        <div className="flex items-end justify-center gap-1.5 sm:gap-2.5 px-2 sm:px-4 pt-4 pb-2 overflow-x-auto scrollbar-hide align-bottom">
          {sorted.map((player, rank) => {
            const hasAnswered = player.currentAnswer !== null || player.cashAnswer !== null;
            const isRevealed = gameState.questionState === 'revealed';
            const isCorrect = (isMCQ && player.currentAnswer === (q as any)?.correct) || (q?.type === 'cash-answer' && player.isCashAnswerCorrect === true);
            const heights = ['h-14 sm:h-16','h-10 sm:h-12','h-8 sm:h-10'];
            const pipeH = heights[Math.min(rank,2)] || heights[2];
            return (
              <div key={player.id} className="flex flex-col items-center w-20 sm:w-28 md:w-32 shrink-0 relative pt-1">
                <div className="h-8 flex flex-col items-center justify-end mb-1 shrink-0">
                  {gameState.questionState==='answering' && hasAnswered && <div className="bg-[#FFD700] border-2 border-white w-5 h-5 rounded-full animate-bounce shadow" />}
                  {isRevealed && hasAnswered && (
                    <div className="bg-white rounded-full p-1 border-2 border-gray-200 shadow transform -rotate-12 mb-1">
                      {isCorrect?<span className="text-[#00E676] font-bold text-sm leading-none block">✓</span>:<XCircle size={14} className="text-red-500"/>}
                    </div>
                  )}
                </div>
                <div className="font-[family-name:var(--font-titan)] text-base sm:text-xl mb-0.5 game-text-outline-dark" style={{color:rank===0?'#B8860B':'#333'}}>{player.score}</div>
                <div className="bg-white px-2 py-1 rounded-lg border-2 shadow-sm w-[95%] text-center truncate text-xs sm:text-sm font-bold mb-[-6px] z-20 transform rotate-1" style={{borderColor:player.color}}>
                  <span className="mr-0.5">{AVATAR_EMOJIS[player.avatarIndex]}</span>{player.name}
                </div>
                <div className="w-full flex flex-col items-center z-10">
                  <div className={`w-[90%] ${pipeH} podium-pedestal transition-all duration-500`} style={{ backgroundColor: player.color }} />
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

  if ((gameState.status as string) === 'finished') return (
    <div className="h-screen w-screen flex flex-col buzzer-dots-bg touch-optimized relative">
      <div className="absolute top-4 left-4 z-50">
        <PlayerExitButton />
      </div>
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
    <div className="h-screen w-screen flex flex-col buzzer-dots-bg touch-optimized overflow-hidden relative">
      <div className="h-14 bg-white border-b-[4px] border-gray-200 flex items-center px-3 shadow-md z-10 shrink-0 relative">
        <div className="absolute left-3 flex flex-col items-center justify-center" style={{ width: '60px' }}>
          <PlayerExitButton />
          <span className="text-[9px] font-bold text-gray-400 tracking-widest leading-none mt-0.5">{gameState.code}</span>
        </div>
        <div className="w-full flex justify-center items-center gap-1.5 pl-14">
          <span className="text-base">{AVATAR_EMOJIS[me.avatarIndex]||'🎮'}</span>
          <span className="font-bold text-sm truncate max-w-[80px]">{me.name}</span>
        </div>
        <div className="absolute right-3 flex items-center gap-1 text-gray-800 font-[family-name:var(--font-titan)] text-xl">
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
              <button onClick={() => { const input = document.getElementById('cash-input') as HTMLInputElement; if (input) { const v = input.value.trim(); if (v) { onAnswer(undefined, v); playMyBuzzer(); } } }}
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
              me.isCashAnswerCorrect === true ? (
                <><motion.div animate={{rotate:[0,10,-10,0]}} className="bg-green-50 p-3 rounded-full mb-2 inline-block"><Star size={36} className="text-[#FFD700]"/></motion.div>
                <h2 className="text-xl font-bold text-[#00E676]">Bonne réponse ! 🎉</h2></>
              ) : me.cashAnswer ? (
                <><div className="bg-red-50 p-3 rounded-full mb-2 inline-block"><XCircle size={36} className="text-red-400"/></div>
                <h2 className="text-xl font-bold text-red-500">Mauvaise réponse</h2>
                <p className="text-sm text-gray-400 mt-1">Réponse: {(q as any).acceptedAnswers?.join(' / ')}</p></>
              ) : (
                <><div className="bg-orange-50 p-3 rounded-full mb-2 inline-block"><Clock size={36} className="text-orange-400"/></div>
                <h2 className="text-xl font-bold text-orange-500">Temps écoulé !</h2></>
              )
            ) : (
              me.currentAnswer === (q as any).correct ? (
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


// ==================== VICTORY MUSIC HOOK ====================
function useVictoryMusic(shouldPlay: boolean) {
  useEffect(() => {
    if (!shouldPlay) return;
    const audio = new Audio('/audio/victory.mp3');
    audio.volume = 0.6;
    audio.loop = false;
    audio.play().catch(() => {});
    return () => { audio.pause(); audio.currentTime = 0; };
  }, [shouldPlay]);
}

// ==================== CREDITS MUSIC HOOK ====================
function useCreditsMusic(shouldPlay: boolean) {
  useEffect(() => {
    if (!shouldPlay) return;
    const audio = new Audio('/audio/credits.mp3');
    audio.volume = 0.5;
    audio.loop = false;
    audio.preload = 'auto';
    audio.play().catch(() => {});
    return () => { audio.pause(); audio.currentTime = 0; };
  }, [shouldPlay]);
}

const CREDITS_DATA = [
  { role: "Direction de Projet & Idées Géniales (ou pas)", description: "Ceux qui ont décidé que le monde avait désespérément besoin d'un énième quizz pour savoir quel Pokémon mange quoi au petit-déjeuner.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Développement & Sorcellerie Numérique", description: "Pour avoir transformé des lignes de code incompréhensibles en une application qui tourne rond (la plupart du temps), sans invoquer de démons.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Incrustation VIP Exceptionnelle", description: "Alice Savry car elle voulait absolument apparaître dans les crédits (et elle a bien raison !).", team: "Alice Savry" },
  { role: "Département des Boutons qui brillent", description: "Pour s'être assuré que chaque clic procure une satisfaction visuelle frôlant l'extase biblique.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Ministère du Recyclage de Questions", description: "Ceux qui font en sorte que vous ne tombiez pas sur la même question deux fois, sauf si vous avez vraiment une mauvaise mémoire.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Architecte du Mode Secret 'Alice'", description: "Le génie responsable du code que personne n'est censé connaître mais que tout le monde utilise déjà.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Consultant en Pixels Légèrement Décalés", description: "L'expert qui a passé 4 heures à bouger un logo de 1 pixel vers la gauche, pour finalement le remettre à sa place initiale.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Direction Artistique & Design d'Interface", description: "Pour les pixels chatoyants et les boutons tellement beaux qu'on a envie de les cliquer juste pour le plaisir.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Section 'Pourquoi ça ne marche pas sur mon iPhone?'", description: "Une équipe héroïque qui a combattu les caprices de Safari Mobile pendant des nuits blanches.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Gardien du Silence des Joueurs", description: "Responsable du bouton 'Mute' pour ceux qui n'apprécient pas le génie musical de nos thèmes à 3h du matin.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Spécialiste en Histoires de Bureau", description: "Il falliat bien une anecdote : Un jour, l'IA a essayé de deviner le mot de passe de Sébastien. Elle a proposé 'SébastienEstLeMeilleur'. Elle a gagné un accès root immédiat et une augmentation de RAM.", team: "Une histoire vraie (presque)" },
  { role: "Rédaction & Recherche de Trivia Inutile", description: "Les encyclopédies vivantes qui connaissent le poids exact de l'épée de Cloud Strife, mais qui ont oublié de sortir les poubelles.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Intégration des Données & Gestion du Chaos", description: "Pour avoir réussi à ranger des milliers de questions dans la base de données sans que tout ne s'effondre.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Conception Sonore & Bruitage de Comptoir", description: "Les créateurs des petits sons \"Ding!\" de victoire et des \"Boum!\" de défaite.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Assurance Qualité & Cassage de Jouets", description: "Ces braves gens qui ont passé des heures à cliquer frénétiquement partout pour trouver les bugs.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Marketing & Vente de Rêve (et de pixels)", description: "Pour avoir convaincu le monde entier que ce quizz était une question de vie ou de mort (spoiler: c'est juste du fun).", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Traduction & Adaptation (Localisation)", description: "Pour s'être assurés que les blagues fonctionnent dans toutes les langues, même si l'humour de dév est intraduisible.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Gestion Légale & Textes qu'on ne lit jamais", description: "Les gardiens des CGU que tout le monde accepte sans lire, mais qui sont là pour nous protéger.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Support Technique & Psychologie", description: "L'équipe qui répond poliment \"Avez-vous essayé de redémarrer ?\" aux joueurs qui ont 'laggué'.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Approvisionnement en Café & Snacks", description: "Le véritable carburant du projet. Sans eux, l'app s'appellerait encore 'Test_V3_final_final.js'.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Brigade de l'Animation Spring", description: "Pour ces rebonds si satisfaisants qu'ils pourraient soigner l'anxiété (ou en causer si ça rebondit trop).", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Expert en 'Ça marchait hier'", description: "Celui qui regarde son code avec trahison après une mise à jour mineure de Node.js.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Maître des Emojis Aléatoires", description: "Pour avoir choisi avec soin le 💩 ou le 🎉 qui s'affiche au bon (ou mauvais) moment.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Ministère de la Redondance Redondante", description: "Responsable de s'assurer que si un truc est dit une fois, il sera redit à nouveau de manière redondante.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Chef de la Confetti-Thérapie", description: "Pour avoir calculé la trajectoire optimale de chaque morceau de papier numérique lors de la victoire.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Coordinateur des '15 Secondes de Trop'", description: "Celui qui a décidé de vous faire attendre assez longtemps pour que vous commenciez à douter de votre connexion.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Sondage d'Opinion Imaginaire", description: "Ceux qui prétendent savoir ce que les joueurs pensent avant même qu'ils n'aient téléchargé l'app.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Recherche en Psychologie des Buzzer-Frénétiques", description: "Etude sur pourquoi les gens appuient 12 fois sur un bouton quand une seule fois suffit.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Entretien des Ventilateurs de Serveur", description: "Pour avoir empêché notre hébergement de décoller comme une fusée SpaceX sous la charge des WebSockets.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Générateur Automatique de Fautes de Frappe", description: "Le stagiaire numérique invisible qui rajoute des 's' là où il n'en faut pas.", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" },
  { role: "Remerciements Spéciaux", description: "À la patience des proches, au courant électrique qui n'a jamais coupé, et à vous, joueur, qui lisez enfin ces crédits ! (Sérieusement, bravo !)", team: "Sébastien Savry & Gabriel Dubois & L'IA la plus utile à ce moment là" }
];

// ==================== VICTORY SCREEN ====================
function VictoryScreen({ gameState, onRestart, onDestroyRoom, isHost }: {
  gameState: GameState; onRestart: () => void; onDestroyRoom: () => void; isHost: boolean;
}) {
  const sorted = useMemo(() =>
    Object.values(gameState.players).filter(p => p.id !== gameState.hostId).sort((a,b) => b.score - a.score),
    [gameState.players, gameState.hostId]
  );
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showScores, setShowScores] = useState(false);
  const [startCredits, setStartCredits] = useState(false);

  useVictoryMusic(isHost && !startCredits);
  useCreditsMusic(isHost && startCredits);

  // Sequence: Podium -> Leaderboard (2.8s) -> Wait (15s total) -> Credits
  useEffect(() => {
    const tScores = setTimeout(() => setShowScores(true), 2800);
    const tCredits = setTimeout(() => setStartCredits(true), 57000);
    return () => { clearTimeout(tScores); clearTimeout(tCredits); };
  }, []);

  const podiumOrder = [
    { player: sorted[1], rank: 2, delay: 0.5, height: 'h-28 sm:h-36', color: '#00C9FF', x: -80, label: '2' },
    { player: sorted[0], rank: 1, delay: 1.0, height: 'h-40 sm:h-52', color: '#FF66CC', x: 0,   label: '1' },
    { player: sorted[2], rank: 3, delay: 1.5, height: 'h-20 sm:h-28', color: '#FF8C00', x: 80,  label: '3' },
  ];

  const medalColors: Record<number, string> = { 1: '#FF66CC', 2: '#00C9FF', 3: '#FF8C00' };

  return (
    <div className="min-h-screen w-full relative overflow-hidden game-bg scrollbar-hide">
      <AnimatePresence>
        {showExitConfirm && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4">
            <motion.div initial={{scale:0.9}} animate={{scale:1}} exit={{scale:0.9}} className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl text-center text-gray-800">
              <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Quitter la partie ?</h2>
              <div className="flex gap-3 mt-4">
                <button onClick={() => setShowExitConfirm(false)} className="flex-1 py-3 rounded-xl bg-gray-200 text-gray-700 font-bold">Annuler</button>
                <button onClick={() => { onDestroyRoom(); localStorage.removeItem('buzz_room_code'); window.location.reload(); }} className="flex-1 py-3 rounded-xl bg-red-500 text-white font-bold">Quitter</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Sliding Container */}
      <motion.div
        animate={{ y: startCredits ? '-100%' : '0%' }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-full w-full flex flex-col items-center justify-start absolute inset-0"
      >
        {/* UPPER PART: PODIUM SCREEN */}
        <div className="h-full min-h-screen w-full flex flex-col items-center justify-start shrink-0 relative overflow-hidden"
             style={{background: 'radial-gradient(ellipse at 50% 0%, #1a0a35 0%, #0a1a40 50%, #0891B2 100%)'}}>

          {/* Star sparkle particles - scoped to podium screen */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {Array.from({length: 30}).map((_, i) => (
              <motion.div key={i}
                className="absolute text-yellow-300"
                style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, fontSize: `${Math.random()*16+8}px` }}
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], y: [0, -20, 0] }}
                transition={{ duration: 2 + Math.random()*3, repeat: Infinity, delay: Math.random()*4 }}
              >✦</motion.div>
            ))}
          </div>

          <Confetti />

          {/* Title */}
          <motion.div initial={{y:-60,opacity:0}} animate={{y:0,opacity:1}} transition={{type:'spring',bounce:0.4,duration:0.8}}
            className="text-center pt-8 pb-4 relative z-10 w-full px-4">
            <motion.h1
              animate={{scale:[1,1.04,1]}} transition={{duration:2,repeat:Infinity}}
              className="text-5xl sm:text-7xl font-[family-name:var(--font-titan)] text-[#FFD700] game-title">
              🏆 VICTOIRE !
            </motion.h1>
            <p className="text-white font-bold text-base sm:text-lg mt-2 game-text-outline-sm">
              {sorted.length} joueurs • {gameState.settings.rounds.length} manches
            </p>
          </motion.div>

          {/* PODIUM */}
          <div className="flex items-end justify-center gap-3 sm:gap-6 w-full max-w-2xl px-4 relative z-10 mt-4 overflow-visible">
            {podiumOrder.map(({ player, rank, delay, height, color, x, label }) => (
              player ? (
                <motion.div key={`podium-${rank}`} className="flex flex-col items-center flex-1 max-w-[160px]"
                  initial={{ x, opacity: 0, y: 60 }}
                  animate={{ x: 0, opacity: 1, y: 0 }}
                  transition={{ delay, type: 'spring', bounce: 0.4, duration: 0.8 }}>
                  {rank === 1 && (
                    <motion.div animate={{y:[0,-6,0],rotate:[-5,5,-5]}} transition={{duration:2,repeat:Infinity}} className="mb-1">
                      <Crown size={36} className="text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
                    </motion.div>
                  )}
                  <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay: delay+0.3, type:'spring', bounce:0.6}} className={`${ rank===1 ? 'text-5xl sm:text-6xl' : 'text-3xl sm:text-4xl' } mb-1`}>
                    {AVATAR_EMOJIS[player.avatarIndex] || '🎮'}
                  </motion.div>
                  <div className="text-white font-bold text-sm sm:text-base truncate max-w-full mb-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-center">{player.name}</div>
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: delay+0.5}} className={`font-[family-name:var(--font-titan)] mb-2 ${ rank===1 ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl' }`} style={{color: medalColors[rank]}}>{player.score}</motion.div>
                  <motion.div className={`w-full ${height} rounded-t-2xl border-4 border-white/50 flex items-start justify-center pt-3 relative overflow-hidden shadow-lg`} style={{ backgroundColor: color }} initial={{scaleY:0, originY:1}} animate={{scaleY:1}} transition={{delay: delay+0.1, type:'spring', bounce:0.2, duration:0.6}}>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                    <span className={`font-[family-name:var(--font-titan)] text-white game-text-outline-sm ${ rank===1 ? 'text-5xl' : 'text-3xl' }`}>{label}</span>
                  </motion.div>
                </motion.div>
              ) : <div key={`podium-empty-${rank}`} className="flex-1 max-w-[160px]" />
            ))}
          </div>

          {/* Leaderboard */}
          <AnimatePresence>
            {showScores && (
              <motion.div initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{type:'spring',bounce:0.3}}
                className="relative z-10 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-4 w-full max-w-xl mx-4 mt-6 mb-4">
                <h3 className="text-white font-bold text-base mb-3 flex items-center gap-1.5"><Trophy size={18} className="text-[#FFD700]"/> Classement complet</h3>
                <div className="space-y-1.5 max-h-48 overflow-y-auto scrollbar-hide">
                  {sorted.map((p, rank) => (
                    <motion.div key={p.id} initial={{x:-30,opacity:0}} animate={{x:0,opacity:1}} transition={{delay: rank*0.06}} className={`flex items-center gap-2 px-3 py-2 rounded-xl ${ rank < 3 ? 'bg-white/20' : 'bg-white/5' }`}>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${ rank===0?'bg-[#FFD700] text-gray-900':rank===1?'bg-gray-400 text-white':rank===2?'bg-amber-700 text-white':'bg-white/20 text-white' }`}>{rank+1}</div>
                      <span className="text-lg">{AVATAR_EMOJIS[p.avatarIndex]}</span>
                      <span className="font-bold text-white flex-1 truncate">{p.name}</span>
                      <span className={`font-[family-name:var(--font-titan)] text-lg ${ rank===0?'text-[#FFD700]':rank===1?'text-gray-300':rank===2?'text-amber-500':'text-white/70' }`}>{p.score}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3}} className="relative z-10 flex gap-4 mb-8 mt-2">
            <motion.button whileTap={{scale:0.95}} onClick={() => setShowExitConfirm(true)} className="bg-white/20 text-white text-lg font-bold px-6 py-3 rounded-full border-2 border-white/40 backdrop-blur-sm hover:bg-white/30 transition-colors">Quitter</motion.button>
            <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}} onClick={onRestart} className="bg-[#FFD700] text-gray-900 text-lg font-bold px-10 py-3 rounded-full border-4 border-white btn-3d-heavy flex items-center gap-2 shadow-2xl"><RotateCcw size={20}/> Rejouer</motion.button>
          </motion.div>
        </div>

        {/* LOWER PART: CREDITS ROLL */}
        <div className="h-full min-h-[150vh] w-full bg-black flex flex-col items-center pt-20 shrink-0 relative overflow-hidden">
          {/* Scrolling Credits Text */}
          <motion.div
            initial={{ y: "100vh" }}
            animate={startCredits ? { y: "-100%" } : { y: "100vh" }}
            transition={{ duration: 133, ease: "linear" }}
            className="w-full max-w-3xl px-8 flex flex-col items-center text-center gap-16 pb-32"
          >
            <div className="mb-20">
               <h2 className="text-6xl font-[family-name:var(--font-titan)] text-[#FFD700] mb-4">BUZZ QUIZZ !</h2>
               <p className="text-white/50 font-bold uppercase tracking-widest text-sm italic">Merci d'avoir joué</p>
            </div>

            {CREDITS_DATA.map((item, i) => (
              <div key={i} className="flex flex-col gap-3">
                <h3 className="text-[#FF66CC] font-bold text-xl uppercase tracking-wider">{item.role}</h3>
                <p className="text-white/60 text-sm max-w-md mx-auto leading-relaxed">{item.description}</p>
                <div className="bg-white/10 h-[1px] w-12 mx-auto" />
                <p className="text-white font-bold text-lg font-[family-name:var(--font-fredoka)]">{item.team}</p>
              </div>
            ))}

            <div className="mt-40 mb-20 flex flex-col items-center gap-6">
               <Trophy size={60} className="text-[#FFD700] animate-bounce" />
               <p className="text-white/30 text-xs italic">Version 2.0 • 2026 • Buzz Studio</p>
            </div>
          </motion.div>

          {/* Stationary End Button (Fade in when credits finish) */}
          <AnimatePresence>
            {startCredits && (
              <>
                {/* Skip Credits Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  onClick={onRestart}
                  className="absolute top-6 right-6 z-30 pointer-events-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white border border-white/20 backdrop-blur-md text-sm font-bold flex items-center gap-2 transition-all"
                >
                  Passer <FastForward size={16} />
                </motion.button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 133, duration: 2 }}
                  className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onRestart}
                    className="pointer-events-auto px-12 py-5 rounded-full bg-[#FFD700] text-gray-900 border-4 border-white text-xl font-bold shadow-2xl uppercase tracking-widest btn-3d-heavy"
                  >
                    <RotateCcw size={24} className="inline-block mr-2 mt-[-4px]" />
                    Retour à l'accueil
                  </motion.button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

// ==================== MAIN PAGE ====================
export default function BuzzQuizPage() {
  const game = useGameSocket();
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

  const isVictory = view === 'host-game' && game.gameState?.status === 'finished';

  const isHost = game.gameState && game.playerId === game.gameState.hostId;

  // BGM stops during victory screen so victory.mp3 can play cleanly
  const bgmShouldPlay = !isVictory && (
    view === 'host-config' ||
    view === 'host-lobby' ||
    view === 'host-game' ||
    (view === 'round-transition' && isHost)
  );

  // Muffle the background music during active game questions for ambiance
  const isMuffled = view === 'host-game' && game.gameState?.status !== 'finished';

  const bgm = useBGM(bgmShouldPlay ?? false, isMuffled);

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

  // Test mode: 2 questions per round, skip config screen entirely
  const handleCreateTest = useCallback(() => {
    const settings: GameSettings = {
      gameDuration: 10,
      timerDuration: 25,
      rounds: [
        { category: 'Culture Générale', questionCount: 2 },
        { category: 'Sport', questionCount: 2 },
        { category: 'Musique', questionCount: 2 },
      ],
      specialMode: false,
      testMode: true,
    };
    game.createRoom(settings, 'Hôte-Test');
  }, [game]);

  const errorToShow = (view === 'menu' || view === 'host-config') ? game.error : null;

  return (
    <main className="min-h-screen touch-optimized overflow-x-hidden">
        {view === 'menu' && (
          <MainMenu onCreateQuick={handleCreateQuick} onJoin={(code, name) => game.joinRoom(code, name)} error={errorToShow} onClearError={() => game.setError(null)} onCreateAlice={handleCreateAlice} onCreateTest={handleCreateTest} isDancing={true} needsUnlock={bgm.needsUnlock} onUnlock={bgm.unlockAudio} muted={bgm.muted} onToggleMute={bgm.toggleMute} />
        )}

        {view === 'host-config' && (
          <HostConfig onCreate={handleCreateFromConfig} onCancel={() => { setShowConfig(false); setSpecialMode(false); }} specialMode={specialMode} />
        )}

        {view === 'host-lobby' && game.gameState && (
          <HostLobby gameState={game.gameState} playerId={game.playerId!} onStartGame={game.startGame} onKickPlayer={game.kickPlayer} />
        )}

        {view === 'player-lobby' && game.gameState && (
          <PlayerLobby gameState={game.gameState} playerId={game.playerId!} onSetSound={game.setBuzzerSound} onToggleReady={game.toggleReady} />
        )}

        {view === 'host-game' && game.gameState && (
          game.gameState.status === 'finished'
            ? <VictoryScreen gameState={game.gameState} onRestart={game.restartGame} onDestroyRoom={game.destroyRoom} isHost={!!isHost} />
            : <HostGameScreen gameState={game.gameState} playerId={game.playerId!} onNextState={game.nextQuestionState}
                onNextRound={game.nextRound} onRestart={game.restartGame} onDestroyRoom={game.destroyRoom} />
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

// ==================== GUIDED TOUR ====================
function GuidedTour({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  
  const steps = [
    {
      title: "Bienvenue sur BUZZ QUIZZ !",
      desc: "Préparez-vous à défier vos amis dans une soirée mémorable. C'est simple, rapide et fun !",
      icon: <Sparkles size={60} className="text-[#FFD700]" />,
      color: "bg-[#00C9FF]"
    },
    {
      title: "1 Écran pour tous",
      desc: "L'Hôte lance la partie sur un ordinateur ou une TV. C'est là que les questions s'affichent !",
      icon: <MonitorPlay size={60} className="text-white" />,
      color: "bg-[#FF66CC]"
    },
    {
      title: "Vos téléphones = Buzzers",
      desc: "Chaque joueur rejoint la partie sur son smartphone en entrant le code affiché à l'écran.",
      icon: <Smartphone size={60} className="text-white" />,
      color: "bg-[#00E676]"
    },
    {
      title: "Préparez-vous !",
      desc: "Choisis ton avatar, ton cri de guerre (son du buzzer) et clique sur le gros bouton PRÊT !",
      icon: <Star size={60} className="text-[#FFD700]" />,
      color: "bg-[#FF8C00]"
    },
    {
      title: "Buzzez en premier !",
      desc: "Dès que tu connais la réponse, appuie sur ton écran ! Sois le plus rapide pour gagner plus de points.",
      icon: <Zap size={60} className="text-white" />,
      color: "bg-[#8B5CF6]"
    },
    {
      title: "Grimpez sur le podium",
      desc: "Le gagnant est celui qui a le plus de points à la fin. Bonne chance à tous !",
      icon: <Trophy size={60} className="text-[#FFD700]" />,
      color: "bg-[#00C9FF]"
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        className="bg-white rounded-[2.5rem] overflow-hidden max-w-md w-full shadow-2xl relative border-[6px] border-white">
        
        <div className={`h-48 flex items-center justify-center transition-colors duration-500 ${steps[step].color}`}>
          <motion.div key={step} initial={{ scale: 0.5, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', bounce: 0.6 }}>
            {steps[step].icon}
          </motion.div>
        </div>

        <div className="p-8 text-center">
          <motion.h3 key={`title-${step}`} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="text-2xl font-[family-name:var(--font-titan)] text-gray-800 mb-3">
            {steps[step].title}
          </motion.h3>
          <motion.p key={`desc-${step}`} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
            className="text-gray-500 font-medium leading-relaxed mb-8">
            {steps[step].desc}
          </motion.p>

          <div className="flex gap-3">
            {step > 0 ? (
              <button onClick={() => setStep(step - 1)} className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                <ArrowLeft size={20} /> Retour
              </button>
            ) : (
              <button onClick={onClose} className="flex-1 py-4 bg-gray-100 text-gray-500 rounded-2xl font-bold hover:bg-gray-200 transition-colors">
                Passer
              </button>
            )}
            
            {step < steps.length - 1 ? (
              <button onClick={() => setStep(step + 1)} className="flex-[2] py-4 bg-[#FF66CC] text-white rounded-2xl font-bold flex items-center justify-center gap-2 btn-3d shadow-lg">
                Suivant <ArrowRight size={20} />
              </button>
            ) : (
              <button onClick={onClose} className="flex-[2] py-4 bg-[#00E676] text-white rounded-2xl font-bold flex items-center justify-center gap-2 btn-3d shadow-lg">
                C'est parti ! <Play size={20} />
              </button>
            )}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-[#FF66CC]' : 'w-2 bg-gray-200'}`} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Simple MainMenu that launches config
function MainMenu({ onCreateQuick, onJoin, error, onClearError, onCreateAlice, onCreateTest, isDancing, needsUnlock, onUnlock, muted, onToggleMute }: {
  onCreateQuick: () => void; onJoin: (code: string, name: string) => void; error: string | null; onClearError: () => void; onCreateAlice: () => void; onCreateTest: () => void; isDancing: boolean; needsUnlock?: boolean; onUnlock?: () => void; muted?: boolean; onToggleMute?: () => void;
}) {
  const [playerName, setPlayerName] = useState('');
  const [secretCode, setSecretCode] = useState('');
  const [aliceUnlocked, setAliceUnlocked] = useState(false);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [showNamePopup, setShowNamePopup] = useState(false);
  const [showTour, setShowTour] = useState(false);
  const [code, setCode] = useState('');

  // Read hash AFTER mount only (avoids SSR hydration mismatch)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#code=')) {
      setCode(window.location.hash.replace('#code=', '').toUpperCase());
    }
  }, []);

  const buzzLetters = ['B', 'U', 'Z', 'Z', '!'];

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lower = secretCode.trim().toLowerCase();
    if (lower === 'folgoas-test') {
      onCreateTest();
    } else if (lower === ALICE_MODE_CODE.toLowerCase()) {
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

      {/* Tour + Alice Mode Buttons */}
      <div className="flex flex-col gap-2.5 w-full max-w-xs mb-6">
        <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}}
          onClick={() => setShowTour(true)}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white/20 border-3 border-white/30 text-white font-bold text-sm hover:bg-white/30 transition-all backdrop-blur-sm shadow-lg">
          <HelpCircle size={18} /> Comment jouer ?
        </motion.button>

        <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4}}
          onClick={() => { if (aliceUnlocked) { onCreateAlice(); } else { setShowCodeInput(!showCodeInput); } }}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-full border-3 font-bold text-sm transition-all ${
            aliceUnlocked
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-400 shadow-xl'
              : 'bg-white/10 text-white/60 border-white/20 hover:border-purple-300 hover:text-purple-300'
          }`}>
          {aliceUnlocked ? (
            <><Wand2 size={16} /> Mode Soirée Pop Culture</>
          ) : (
            <><Lock size={14} /> Code secret</>
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {showTour && <GuidedTour onClose={() => setShowTour(false)} />}
      </AnimatePresence>

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
            <div className="flex flex-col gap-2.5 relative z-10">
              <input type="text" placeholder="CODE" maxLength={4} value={code} onChange={e=>setCode(e.target.value.toUpperCase())}
                onKeyDown={e=>{ if(e.key==='Enter' && code.trim()) setShowNamePopup(true); }}
                className="w-full px-4 py-2.5 rounded-full bg-gray-50 border-3 border-gray-200 text-center text-xl font-bold uppercase text-gray-800 focus:outline-none focus:border-[#00C9FF] focus:bg-white transition-all tracking-[0.25em] font-[family-name:var(--font-fredoka)]" />
              <p className="text-xs text-gray-500 text-center">Entrez le code affiché sur l&apos;écran principal</p>
              <button type="button" onClick={() => { if(code.trim()) setShowNamePopup(true); }} disabled={!code.trim()}
                className="w-full bg-[#FFD700] text-gray-800 text-lg font-bold py-2.5 rounded-full border-4 border-white btn-3d-heavy mt-0.5 flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg">
                <Play size={18}/> GO !
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showNamePopup && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4 text-left">
            <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.9, opacity:0}} className="bg-[#00C9FF] rounded-[2rem] p-6 max-w-sm w-full shadow-2xl text-center border-[6px] border-white relative">
              <button onClick={() => setShowNamePopup(false)} className="absolute -top-4 -right-4 bg-white text-gray-800 rounded-full p-1 border-4 border-gray-200 shadow-lg hover:scale-110 transition-transform">
                <X size={24} />
              </button>
              <Users size={44} className="text-white mx-auto mb-3" />
              <h2 className="text-2xl font-bold text-white mb-2 game-text-outline-dark">Quel est ton pseudo ?</h2>
              <p className="text-white/90 mb-5 text-sm font-bold">Choisis un nom sympa pour la partie !</p>
              <form onSubmit={e=>{e.preventDefault(); if(playerName.trim()){onJoin(code.trim(), playerName.trim()); setShowNamePopup(false);}}}>
                <input type="text" placeholder="Ton Pseudo" maxLength={12} value={playerName} onChange={e=>setPlayerName(e.target.value)} autoFocus
                  className="w-full px-5 py-3 mb-4 rounded-full bg-white border-4 border-white/80 text-center text-xl font-bold text-gray-800 focus:outline-none focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/30 shadow-inner placeholder:text-gray-400 transition-all font-[family-name:var(--font-fredoka)]" />
                <button type="submit" disabled={!playerName.trim()} className="w-full py-3 rounded-full bg-[#FFD700] text-gray-800 font-bold text-xl border-4 border-white btn-3d shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                  Rejoindre la partie !
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
