import { createServer } from 'http';
import { Server } from 'socket.io';
import { GoogleGenerativeAI } from "@google/generative-ai";

import { ALL_MCQ_QUESTIONS_PART1, ALL_CASH_QUESTIONS_PART1 } from '../../src/lib/questions-bank';
import { ALL_MCQ_QUESTIONS_PART2, ALL_CASH_QUESTIONS_PART2 } from '../../src/lib/questions-bank-part2';
import { ALICE_QUESTIONS_MCQ, ALICE_QUESTIONS_CASH } from '../../src/lib/alice-questions';
import { NEW_THEMES_MCQ, NEW_THEMES_CASH } from '../../src/lib/new-themes-questions';
import { THEMES_PART1_MCQ, THEMES_PART1_CASH } from '../../src/lib/pop-culture-themes-2-part1';
import { THEMES_PART2_MCQ, THEMES_PART2_CASH } from '../../src/lib/pop-culture-themes-2-part2';
import { THEMES_PART3_MCQ } from '../../src/lib/pop-culture-themes-2-part3';
import { THEMES_MANGA_MCQ, THEMES_MANGA_CASH } from '../../src/lib/pop-culture-themes-mangas';
import type { Question, GameSettings } from '../../src/lib/game-types';
import { ALICE_CATEGORIES } from '../../src/lib/game-types';

const MCQ_QUESTIONS = [
  ...ALL_MCQ_QUESTIONS_PART1, ...ALL_MCQ_QUESTIONS_PART2,
  ...NEW_THEMES_MCQ, ...THEMES_PART1_MCQ, ...THEMES_PART2_MCQ, ...THEMES_PART3_MCQ, ...THEMES_MANGA_MCQ
];
const CASH_QUESTIONS = [
  ...ALL_CASH_QUESTIONS_PART1, ...ALL_CASH_QUESTIONS_PART2,
  ...NEW_THEMES_CASH, ...THEMES_PART1_CASH, ...THEMES_PART2_CASH, ...THEMES_MANGA_CASH
];

const FULL_ALICE_MCQ = [
  ...ALICE_QUESTIONS_MCQ,
  ...MCQ_QUESTIONS.filter((q: any) => !ALICE_CATEGORIES.includes(q.category))
];
const FULL_ALICE_CASH = [
  ...ALICE_QUESTIONS_CASH,
  ...CASH_QUESTIONS.filter((q: any) => !ALICE_CATEGORIES.includes(q.category))
];

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

const PLAYER_COLORS = [
  '#EF4444', '#3B82F6', '#22C55E', '#F59E0B', '#A855F7', '#EC4899',
  '#06B6D4', '#F97316', '#84CC16', '#6366F1', '#14B8A6', '#E11D48',
  '#8B5CF6', '#D946EF', '#0EA5E9', '#FACC15', '#FB923C', '#4ADE80',
  '#818CF8', '#F472B6', '#2DD4BF', '#A78BFA', '#FB7185', '#38BDF8',
  '#FCD34D', '#34D399', '#C084FC', '#E879F9', '#7DD3FC', '#FCA5A1',
  '#86EFAC', '#FDA4AF'
];

const AVATAR_EMOJIS = ['🎮', '🏆', '⭐', '🎯', '🎲', '🎪', '🎵', '🎨', '🚀', '🔥', '💎', '🎪', '🌟', '👑', '🦊', '🐼', '🦁', '🐸', '🦄', '🐲', '🐙', '🦋', '🌸', '🎸', '🥊', '⚽', '🏀', '🎱', '🧩', '🎭', '🎪', '🎪'];

const MAX_PLAYERS = 32;

function generateCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function removeAccents(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function buildRoundQuestions(category: string, questionCount: number, usedIds?: Set<string>, specialMode?: boolean): any[] {
  const questions: any[] = [];
  const notUsed = (q: any) => !usedIds || !usedIds.has(q.id);

  const mcqPool = specialMode ? FULL_ALICE_MCQ : MCQ_QUESTIONS;
  const cashPool = specialMode ? FULL_ALICE_CASH : CASH_QUESTIONS;

  const filteredMcq = shuffle(mcqPool.filter(q => q.category === category && notUsed(q)));
  const filteredCash = shuffle(cashPool.filter(q => q.category === category && notUsed(q)));
  const mcqAvailable = filteredMcq.length;
  const cashAvailable = filteredCash.length;

  const totalAvailable = mcqAvailable + cashAvailable;
  const target = Math.min(questionCount, totalAvailable);

  let cashCount = Math.min(cashAvailable, Math.max(cashAvailable > 0 ? 1 : 0, Math.round(target * 0.25)));

  const remaining = target - cashCount;
  const idealSpeed = Math.round(remaining * 0.33);
  const idealMCQ = remaining - idealSpeed;

  let mcqCount: number, speedCount: number;
  if (idealMCQ + idealSpeed <= mcqAvailable) {
    mcqCount = idealMCQ;
    speedCount = idealSpeed;
  } else {
    mcqCount = Math.round(mcqAvailable * 0.67);
    speedCount = mcqAvailable - mcqCount;
    if (speedCount === 0 && mcqAvailable >= 2) { speedCount = 1; mcqCount = mcqAvailable - 1; }
  }

  let mcqIdx = 0;
  for (let i = 0; i < mcqCount && mcqIdx < filteredMcq.length; i++, mcqIdx++) {
    questions.push({ ...filteredMcq[mcqIdx], type: 'multiple-choice' });
  }

  for (let i = 0; i < speedCount && mcqIdx < filteredMcq.length; i++, mcqIdx++) {
    questions.push({ ...filteredMcq[mcqIdx], type: 'speed-choice' });
  }

  for (let i = 0; i < Math.min(cashCount, filteredCash.length); i++) {
    questions.push(filteredCash[i]);
  }

  return shuffle(questions);
}

function levenshteinDistance(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
      }
    }
  }
  return matrix[b.length][a.length];
}

function normalizePhonetic(str: string): string {
  let s = str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  // Retirer les majuscules, la ponctuation et les tirets
  s = s.replace(/[-_.,!?'"]/g, " ");
  // Retirer les articles courants pour se concentrer sur le sens
  s = s.replace(/\b(le|la|les|l|un|une|des|de|du|d|et|est)\b/g, "");
  s = s.replace(/\s+/g, ""); // tout coller
  
  // Simplification phonétique extrême pour les enfants
  s = s.replace(/ph/g, "f");
  s = s.replace(/eau|au/g, "o");
  s = s.replace(/qu|q/g, "k");
  s = s.replace(/c(?=[aou])/g, "k");
  s = s.replace(/c(?=[ei])/g, "s");
  s = s.replace(/ç/g, "s");
  s = s.replace(/y/g, "i");
  s = s.replace(/z/g, "s");
  s = s.replace(/h/g, ""); // h souvent muet
  s = s.replace(/(.)\1+/g, "$1"); // retirer les doubles consonnes/voyelles
  s = s.replace(/[sxe]$/, ""); // retirer les e, s, x muets à la fin
  return s;
}

function checkCashAnswer(answer: string, accepted: string[]): boolean {
  if (!answer) return false;
  
  const normAns = normalizePhonetic(answer);
  const basicAns = removeAccents(answer).replace(/\s+/g, "").toLowerCase();

  return accepted.some(a => {
    const normAcc = normalizePhonetic(a);
    const basicAcc = removeAccents(a).replace(/\s+/g, "").toLowerCase();

    // Correspondance parfaite sur la phonétique ou juste sans espaces
    if (normAcc === normAns || basicAcc === basicAns) return true;

    // Correspondance avec 1 ou 2 fautes sur la version purement phonétique
    const distPhone = levenshteinDistance(normAns, normAcc);
    const maxPhoneMistakes = normAcc.length >= 5 ? 2 : (normAcc.length >= 3 ? 1 : 0);
    if (distPhone <= maxPhoneMistakes) return true;

    // Correspondance avec 1 ou 2 fautes sur le mot brut collé (sauvegarde)
    const distBasic = levenshteinDistance(basicAns, basicAcc);
    const maxBasicMistakes = basicAcc.length >= 6 ? 2 : (basicAcc.length >= 4 ? 1 : 0);
    if (distBasic <= maxBasicMistakes) return true;

    return false;
  });
}

async function checkCashAnswerAI(playerAnswer: string, questionText: string, acceptedAnswers: string[], playerName: string, ipAddress: string): Promise<boolean> {
  // L'IA est complètement désactivée pour éviter les pannes de quotas !
  // On utilise à la place le super-algorithme phonétique générant mathématiquement des dizaines de variations
  const isCorrect = checkCashAnswer(playerAnswer, acceptedAnswers);
  console.log(`[LOCAL JUDGE] Player: "${playerName}" | Answer: "${playerAnswer}" | Accepted: ${acceptedAnswers.join(',')} => ${isCorrect ? 'OUI' : 'NON'}`);
  return isCorrect;
}

interface Player {
  id: string; // the sessionId
  socketId: string; // the current connection ID
  name: string;
  score: number;
  currentAnswer: number | null;
  cashAnswer: string | null;
  isCashAnswerCorrect?: boolean | null;
  answerTime: number | null;
  color: string;
  avatarIndex: number;
  connected: boolean;
  buzzerSoundId: string;
  isReady: boolean;
  ipAddress: string;
}

interface GameRoom {
  code: string;
  hostId: string; // host sessionId
  status: 'lobby' | 'playing' | 'round-transition' | 'finished';
  players: Record<string, Player>; // map sessionId to Player
  currentRound: number;
  currentQuestions: Question[];
  currentQuestionIndex: number;
  questionState: 'reading' | 'answering' | 'revealed';
  timerStartsAt: number | null;
  timerDuration: number;
  settings: GameSettings;
  avatarCounter: number;
  roundScores: { round: number; scores: Record<string, number> }[];
  usedQuestionIds: Set<string>;
}

const rooms = new Map<string, GameRoom>();

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
  pingTimeout: 60000,
  pingInterval: 25000,
});

const getRoomStateForClient = (room: GameRoom) => {
  const { usedQuestionIds, ...clientState } = room;
  return clientState;
};

const broadcastRoomState = (room: GameRoom, excludeSocketId?: string) => {
  const state = getRoomStateForClient(room);
  Object.values(room.players).forEach(p => {
    if (p.socketId !== excludeSocketId && p.connected && p.socketId) {
      io.to(p.socketId).emit('state-update', state);
    }
  });
};

io.on('connection', (socket) => {
  console.log(`[CONNECT] ${socket.id}`);

  socket.on('create-room', (data: { settings: GameSettings; hostName?: string; sessionId: string }) => {
    const code = generateCode();
    const gameSettings = data.settings || { gameDuration: 20, timerDuration: 25, rounds: [] };
    
    let hostName = data.hostName || 'Hôte';
    if (typeof data.settings === 'string') { // backwards compatibility if passed differently
        hostName = data.hostName || 'Hôte';
    }

    const hostSession = data.sessionId;

    const room: GameRoom = {
      code,
      hostId: hostSession,
      status: 'lobby',
      players: {
        [hostSession]: {
          id: hostSession, socketId: socket.id, name: hostName, score: 0, currentAnswer: null, cashAnswer: null, answerTime: null,
          color: PLAYER_COLORS[0], avatarIndex: 0, connected: true, buzzerSoundId: 'buzzer-classique', isReady: true, // Host is always ready
          ipAddress: socket.handshake.address
        }
      },
      currentRound: 0,
      currentQuestions: [],
      currentQuestionIndex: 0,
      questionState: 'reading',
      timerStartsAt: null,
      timerDuration: 25,
      settings: gameSettings,
      avatarCounter: 1,
      roundScores: gameSettings.rounds.map((_, idx) => ({ round: idx, scores: {} })),
      usedQuestionIds: new Set<string>(),
    };

    rooms.set(code, room);
    console.log(`[ROOM CREATED] ${code} by ${socket.id}`);

    socket.emit('room-created', { code, state: getRoomStateForClient(room) });
  });

  socket.on('update-host-name', (data: { name: string }) => {
    for (const [, room] of rooms) {
      const player = Object.values(room.players).find(p => p.socketId === socket.id);
      if (player && room.hostId === player.id) {
        player.name = data.name || 'Hôte';
        broadcastRoomState(room);
        break;
      }
    }
  });

  socket.on('update-settings', (data: { settings: GameSettings }) => {
    for (const [, room] of rooms) {
      const player = Object.values(room.players).find(p => p.socketId === socket.id);
      if (player && room.hostId === player.id) {
        room.settings = data.settings;
        broadcastRoomState(room);
        break;
      }
    }
  });

  socket.on('join-room', (data: { code: string; name: string; buzzerSoundId?: string; sessionId: string }) => {
    const code = data.code.toUpperCase().trim();
    const room = rooms.get(code);

    if (!room) {
      socket.emit('error', { message: 'Partie introuvable. Vérifiez le code.' });
      return;
    }

    if (room.players[data.sessionId]) {
      // Reconnection logic
      room.players[data.sessionId].socketId = socket.id;
      room.players[data.sessionId].connected = true;
      room.players[data.sessionId].ipAddress = socket.handshake.address;
      if (data.buzzerSoundId) room.players[data.sessionId].buzzerSoundId = data.buzzerSoundId;
      console.log(`[PLAYER RECONNECTED] ${room.players[data.sessionId].name} (${data.sessionId}) from ${socket.handshake.address}`);
      socket.emit('room-joined', { state: getRoomStateForClient(room), playerId: data.sessionId });
      broadcastRoomState(room, socket.id);
      return;
    }

    if (room.status !== 'lobby') {
      socket.emit('error', { message: 'La partie a déjà commencé !' });
      return;
    }
    if (Object.keys(room.players).length >= MAX_PLAYERS && !room.players[data.sessionId]) {
      socket.emit('error', { message: 'La partie est pleine (32 joueurs max).' });
      return;
    }

    let pName = (data.name || '').trim();
    const existingNames = Object.values(room.players).map(p => p.name);
    if (existingNames.includes(pName)) {
      let c = 2;
      while (existingNames.includes(`${pName} ${c}`)) c++;
      pName = `${pName} ${c}`;
    }

    room.players[data.sessionId] = {
      id: data.sessionId, socketId: socket.id, name: pName, score: 0, currentAnswer: null, cashAnswer: null, answerTime: null,
      connected: true,
      color: PLAYER_COLORS[room.avatarCounter % PLAYER_COLORS.length],
      avatarIndex: room.avatarCounter % AVATAR_EMOJIS.length,
      buzzerSoundId: data.buzzerSoundId || 'buzzer-classique',
      isReady: false,
      ipAddress: socket.handshake.address,
    };
    room.avatarCounter++;

    console.log(`[PLAYER JOINED] ${pName} (${data.sessionId}) on socket ${socket.id} in room ${code}`);

    socket.emit('room-joined', { state: getRoomStateForClient(room), playerId: data.sessionId });
    broadcastRoomState(room, socket.id);
  });

  socket.on('start-game', () => {
    for (const [, room] of rooms) {
      const player = Object.values(room.players).find(p => p.socketId === socket.id);
      if (player && room.hostId === player.id && room.status === 'lobby') {
        const minPlayers = room.settings.testMode ? 1 : 2;
        if (Object.keys(room.players).length < minPlayers) {
          socket.emit('error', { message: `Il faut au moins ${minPlayers} joueur${minPlayers > 1 ? 's' : ''} pour commencer !` });
          return;
        }

        const round0 = room.settings.rounds[0];
        const isSpecial = !!room.settings.specialMode;
        room.usedQuestionIds = new Set<string>();
        room.currentQuestions = buildRoundQuestions(round0.category, round0.questionCount, room.usedQuestionIds, isSpecial);
        room.currentQuestions.forEach(q => room.usedQuestionIds.add(q.id));
        
        room.currentRound = 0;
        room.currentQuestionIndex = 0;
        room.questionState = 'reading';
        room.timerStartsAt = null;
        room.status = 'playing';

        Object.values(room.players).forEach(p => {
          p.score = 0; p.currentAnswer = null; p.cashAnswer = null; p.answerTime = null; p.isCashAnswerCorrect = null;
        });

        console.log(`[GAME STARTED] Room ${room.code}`);
        broadcastRoomState(room);
        break;
      }
    }
  });

  socket.on('next-question-state', async () => {
    for (const [, room] of rooms) {
      const player = Object.values(room.players).find(p => p.socketId === socket.id);
      if (player && room.hostId === player.id && room.status === 'playing') {
        if (room.questionState === 'reading') {
          room.questionState = 'answering';
          room.timerStartsAt = Date.now();
        } else if (room.questionState === 'answering') {
          room.questionState = 'revealed';
          const q = room.currentQuestions[room.currentQuestionIndex];
          if (q) {
            // Processing all players in parallel
            await Promise.all(Object.values(room.players).map(async (p) => {
              if (q.type === 'cash-answer' && p.cashAnswer) {
                const isCorrect = await checkCashAnswerAI(p.cashAnswer, q.text, (q as any).acceptedAnswers, p.name, p.ipAddress);
                p.isCashAnswerCorrect = isCorrect;
                if (isCorrect) {
                  const timeBonus = p.answerTime && room.timerStartsAt
                    ? Math.max(0, (room.timerDuration * 1000 - (p.answerTime - room.timerStartsAt)) / (room.timerDuration * 1000))
                    : 0;
                  p.score += 800 + Math.floor(timeBonus * 400);
                }
              } else if (q.type === 'multiple-choice' && p.currentAnswer !== null) {
                if (p.currentAnswer === (q as any).correct) {
                  const timeBonus = p.answerTime && room.timerStartsAt
                    ? Math.max(0, (room.timerDuration * 1000 - (p.answerTime - room.timerStartsAt)) / (room.timerDuration * 1000))
                    : 0;
                  p.score += 500 + Math.floor(timeBonus * 500);
                }
              } else if (q.type === 'speed-choice' && p.currentAnswer !== null) {
                if (p.currentAnswer === (q as any).correct) {
                  const timeBonus = p.answerTime && room.timerStartsAt
                    ? Math.max(0, 1 - (p.answerTime - room.timerStartsAt) / (room.timerDuration * 1000))
                    : 0;
                  p.score += 200 + Math.floor(timeBonus * timeBonus * 1800);
                }
              }
            }));
          }
        } else if (room.questionState === 'revealed') {
          const roundIdx = room.currentRound;
          if (room.roundScores[roundIdx]) {
            room.roundScores[roundIdx].scores = {};
            Object.values(room.players).forEach(p => {
              room.roundScores[roundIdx].scores[p.id] = p.score;
            });
          }

          if (room.currentQuestionIndex >= room.currentQuestions.length - 1) {
            if (room.currentRound >= room.settings.rounds.length - 1) {
              room.status = 'finished';
            } else {
              room.status = 'round-transition';
            }
          } else {
            room.currentQuestionIndex++;
            room.questionState = 'reading';
            room.timerStartsAt = null;
            Object.values(room.players).forEach(p => {
              p.currentAnswer = null; p.cashAnswer = null; p.answerTime = null; p.isCashAnswerCorrect = null;
            });
          }
        }
        broadcastRoomState(room);
        break;
      }
    }
  });

  socket.on('next-round', () => {
    for (const [, room] of rooms) {
      const player = Object.values(room.players).find(p => p.socketId === socket.id);
      if (player && room.hostId === player.id && room.status === 'round-transition') {
        room.currentRound++;
        const roundConfig = room.settings.rounds[room.currentRound];
        const isSpecialRound = !!room.settings.specialMode;
        room.currentQuestions = buildRoundQuestions(roundConfig.category, roundConfig.questionCount, room.usedQuestionIds, isSpecialRound);
        room.currentQuestions.forEach(q => room.usedQuestionIds.add(q.id));
        
        room.currentQuestionIndex = 0;
        room.questionState = 'reading';
        room.timerStartsAt = null;
        room.status = 'playing';

        Object.values(room.players).forEach(p => {
          p.currentAnswer = null; p.cashAnswer = null; p.answerTime = null; p.isCashAnswerCorrect = null;
        });

        broadcastRoomState(room);
        break;
      }
    }
  });

  socket.on('answer', (data: { answerIndex?: number; cashAnswer?: string }) => {
    for (const [, room] of rooms) {
        const player = Object.values(room.players).find(p => p.socketId === socket.id);
        if (player && room.status === 'playing' && room.questionState === 'answering') {
          const q = room.currentQuestions[room.currentQuestionIndex];
          if (q && q.type === 'cash-answer') {
            if (!player.cashAnswer && data.cashAnswer !== undefined) {
              player.cashAnswer = data.cashAnswer;
              player.answerTime = Date.now();
              broadcastRoomState(room);
            }
          } else if (player.currentAnswer === null && data.answerIndex !== undefined) {
            player.currentAnswer = data.answerIndex;
            player.answerTime = Date.now();
            broadcastRoomState(room);
          }
        }
    }
  });

  socket.on('set-sound', (data: { buzzerSoundId: string }) => {
    for (const [, room] of rooms) {
      const player = Object.values(room.players).find(p => p.socketId === socket.id);
      if (player && data.buzzerSoundId) {
        player.buzzerSoundId = data.buzzerSoundId;
        broadcastRoomState(room);
      }
    }
  });
  
  socket.on('toggle-ready', () => {
    for (const [, room] of rooms) {
      const player = Object.values(room.players).find(p => p.socketId === socket.id);
      if (player && room.status === 'lobby') {
        player.isReady = !player.isReady;
        broadcastRoomState(room);
        break;
      }
    }
  });

  socket.on('kick-player', (data: { playerId: string }) => {
    for (const [, room] of rooms) {
      const host = Object.values(room.players).find(p => p.socketId === socket.id);
      if (host && room.hostId === host.id && data.playerId !== host.id && room.players[data.playerId]) {
        const socketIdTarget = room.players[data.playerId].socketId;
        delete room.players[data.playerId];
        io.to(socketIdTarget).emit('kicked', { message: 'Vous avez été expulsé de la partie.' });
        broadcastRoomState(room);
        break;
      }
    }
  });

  socket.on('restart-game', () => {
    for (const [, room] of rooms) {
      const player = Object.values(room.players).find(p => p.socketId === socket.id);
      if (player && room.hostId === player.id && room.status === 'finished') {
        room.status = 'lobby';
        room.currentRound = 0;
        room.currentQuestions = [];
        room.currentQuestionIndex = 0;
        room.questionState = 'reading';
        room.timerStartsAt = null;
        room.roundScores = [{ round: 0, scores: {} }, { round: 1, scores: {} }, { round: 2, scores: {} }];
        Object.values(room.players).forEach(p => {
          p.score = 0; p.currentAnswer = null; p.cashAnswer = null; p.answerTime = null; p.isCashAnswerCorrect = null;
        });
        broadcastRoomState(room);
        break;
      }
    }
  });

  socket.on('destroy-room', () => {
    for (const [code, room] of rooms) {
      const host = Object.values(room.players).find(p => p.socketId === socket.id);
      if (host && room.hostId === host.id) {
        Object.values(room.players).forEach(p => {
          if (p.socketId) {
            io.to(p.socketId).emit('error', { message: 'L\'hôte a fermé la partie.' });
          }
        });
        rooms.delete(code);
        break;
      }
    }
  });

  socket.on('disconnect', () => {
    console.log(`[DISCONNECT] ${socket.id}`);
    for (const [code, room] of rooms) {
      const player = Object.values(room.players).find(p => p.socketId === socket.id);
      if (player) {
        player.connected = false;
        
        // Let them reconnect, don't destroy host room immediately
        // Just broadcast they disconnected.
        console.log(`[PLAYER DISCONNECTED] ${player.name} (${player.id}) marked offline`);
        broadcastRoomState(room);
        break;
      }
    }
  });

  socket.on('error', (error) => {
    console.error(`[SOCKET ERROR] ${socket.id}:`, error);
  });
});

const PORT = 3004;
httpServer.listen(PORT, '0.0.0.0', () => {
  console.log(`🎮 Buzz! Quiz Server running on port ${PORT}`);
});

process.on('SIGTERM', () => {
  httpServer.close(() => process.exit(0));
});

process.on('SIGINT', () => {
  httpServer.close(() => process.exit(0));
});
