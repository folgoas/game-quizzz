import { NextRequest, NextResponse } from 'next/server';
import { ALL_MCQ_QUESTIONS_PART1, ALL_CASH_QUESTIONS_PART1 } from '@/lib/questions-bank';
import { ALL_MCQ_QUESTIONS_PART2, ALL_CASH_QUESTIONS_PART2 } from '@/lib/questions-bank-part2';
import { ALICE_QUESTIONS_MCQ, ALICE_QUESTIONS_CASH } from '@/lib/alice-questions';

// ==================== COMBINED QUESTION POOLS ====================
const MCQ_QUESTIONS = [...ALL_MCQ_QUESTIONS_PART1, ...ALL_MCQ_QUESTIONS_PART2];
const CASH_QUESTIONS = [...ALL_CASH_QUESTIONS_PART1, ...ALL_CASH_QUESTIONS_PART2];

// ==================== HELPERS ====================

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

  // Choose question pools based on special mode
  const mcqPool = specialMode ? ALICE_QUESTIONS_MCQ : MCQ_QUESTIONS;
  const cashPool = specialMode ? ALICE_QUESTIONS_CASH : CASH_QUESTIONS;

  // Get available pools for this category ONLY
  const filteredMcq = shuffle(mcqPool.filter(q => q.category === category && notUsed(q)));
  const filteredCash = shuffle(cashPool.filter(q => q.category === category && notUsed(q)));
  const mcqAvailable = filteredMcq.length;
  const cashAvailable = filteredCash.length;

  // Adaptive distribution: cap total at what's actually available, guarantee variety
  const totalAvailable = mcqAvailable + cashAvailable;
  const target = Math.min(questionCount, totalAvailable);

  // Step 1: Reserve cash questions (at least 1 if available, up to ~25%)
  let cashCount = Math.min(cashAvailable, Math.max(cashAvailable > 0 ? 1 : 0, Math.round(target * 0.25)));

  // Step 2: Split remaining between regular MCQ and speed
  const remaining = target - cashCount;
  const idealSpeed = Math.round(remaining * 0.33);
  const idealMCQ = remaining - idealSpeed;

  let mcqCount: number, speedCount: number;
  if (idealMCQ + idealSpeed <= mcqAvailable) {
    // Both fit in the MCQ pool
    mcqCount = idealMCQ;
    speedCount = idealSpeed;
  } else {
    // Scale down to fit the MCQ pool
    mcqCount = Math.round(mcqAvailable * 0.67);
    speedCount = mcqAvailable - mcqCount;
    // Ensure at least 1 speed if we have enough MCQ
    if (speedCount === 0 && mcqAvailable >= 2) { speedCount = 1; mcqCount = mcqAvailable - 1; }
  }

  // Pick MCQ questions (regular multiple-choice)
  let mcqIdx = 0;
  for (let i = 0; i < mcqCount && mcqIdx < filteredMcq.length; i++, mcqIdx++) {
    questions.push({ ...filteredMcq[mcqIdx], type: 'multiple-choice' });
  }

  // Pick speed-choice questions (reuse MCQ pool with speed type)
  for (let i = 0; i < speedCount && mcqIdx < filteredMcq.length; i++, mcqIdx++) {
    questions.push({ ...filteredMcq[mcqIdx], type: 'speed-choice' });
  }

  // Pick cash-answer questions
  for (let i = 0; i < Math.min(cashCount, filteredCash.length); i++) {
    questions.push(filteredCash[i]);
  }

  return shuffle(questions);
}

function checkCashAnswer(answer: string, accepted: string[]): boolean {
  const normalized = removeAccents(answer);
  return accepted.some(a => removeAccents(a) === normalized);
}

// ==================== IN-MEMORY STATE ====================
const gameStateStore = new Map<string, any>();

function getState(code: string): any | null {
  return gameStateStore.get(code.toUpperCase()) || null;
}
function setState(code: string, state: any) {
  gameStateStore.set(code.toUpperCase(), state);
}

// ==================== ROUTES ====================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, code, playerId, playerName, settings, answerIndex, cashAnswer, targetId, buzzerSoundId } = body;

    switch (action) {
      case 'create': {
        const gameCode = generateCode();
        const gameSettings = settings || { gameDuration: 20, timerDuration: 25, rounds: [] };

        const state = {
          code: gameCode,
          hostId: playerId,
          status: 'lobby',
          players: {
            [playerId]: { id: playerId, name: playerName || 'Hôte', score: 0, currentAnswer: null, cashAnswer: null, answerTime: null, color: PLAYER_COLORS[0], avatarIndex: 0 },
          },
          currentRound: 0,
          currentQuestions: [],
          currentQuestionIndex: 0,
          questionState: 'reading',
          timerStartsAt: null,
          timerDuration: 25,
          settings: gameSettings,
          avatarCounter: 1,
          roundScores: [{ round: 0, scores: {} }, { round: 1, scores: {} }, { round: 2, scores: {} }],
          usedQuestionIds: new Set<string>(),
        };

        setState(gameCode, state);
        return NextResponse.json({ success: true, code: gameCode, state });
      }

      case 'join': {
        const state = getState(code);
        if (!state) return NextResponse.json({ success: false, error: 'Partie introuvable.' }, { status: 404 });
        if (state.status !== 'lobby') return NextResponse.json({ success: false, error: 'La partie a déjà commencé !' }, { status: 400 });
        if (Object.keys(state.players).length >= MAX_PLAYERS) return NextResponse.json({ success: false, error: 'Partie pleine (32 max).' }, { status: 400 });

        let pName = (playerName || '').trim();
        const existing = Object.values(state.players).map((p: any) => p.name);
        if (existing.includes(pName)) { let c = 2; while (existing.includes(`${pName} ${c}`)) c++; pName = `${pName} ${c}`; }

        state.players[playerId] = {
          id: playerId, name: pName, score: 0, currentAnswer: null, cashAnswer: null, answerTime: null,
          color: PLAYER_COLORS[state.avatarCounter % PLAYER_COLORS.length],
          avatarIndex: state.avatarCounter % AVATAR_EMOJIS.length,
          buzzerSoundId: buzzerSoundId || 'buzzer-classique',
        };
        state.avatarCounter++;
        setState(code, state);
        return NextResponse.json({ success: true, state });
      }

      case 'start': {
        const state = getState(code);
        if (!state) return NextResponse.json({ success: false, error: 'Partie introuvable.' }, { status: 404 });
        if (state.hostId !== playerId) return NextResponse.json({ success: false, error: 'Non autorisé.' }, { status: 403 });
        if (Object.keys(state.players).length < 2) return NextResponse.json({ success: false, error: 'Il faut au moins 2 joueurs !' }, { status: 400 });

        // Build questions for round 0
        const round0 = state.settings.rounds[0];
        const isSpecial = !!state.settings.specialMode;
        state.usedQuestionIds = new Set<string>();
        state.currentQuestions = buildRoundQuestions(round0.category, round0.questionCount, state.usedQuestionIds, isSpecial);
        // Register used IDs
        state.currentQuestions.forEach((q: any) => state.usedQuestionIds.add(q.id));
        state.currentRound = 0;
        state.currentQuestionIndex = 0;
        state.questionState = 'reading';
        state.timerStartsAt = null;
        state.status = 'playing';
        Object.values(state.players).forEach((p: any) => { p.score = 0; p.currentAnswer = null; p.cashAnswer = null; p.answerTime = null; });

        setState(code, state);
        return NextResponse.json({ success: true, state });
      }

      case 'next': {
        const state = getState(code);
        if (!state) return NextResponse.json({ success: false, error: 'Partie introuvable.' }, { status: 404 });
        if (state.hostId !== playerId) return NextResponse.json({ success: false, error: 'Non autorisé.' }, { status: 403 });

        if (state.questionState === 'reading') {
          // Reveal question + start timer
          state.questionState = 'answering';
          state.timerStartsAt = Date.now();
        } else if (state.questionState === 'answering') {
          // Reveal + score
          state.questionState = 'revealed';
          const q = state.currentQuestions[state.currentQuestionIndex];
          if (q) {
            Object.entries(state.players).forEach(([, p]: [string, any]) => {
              if (q.type === 'cash-answer' && p.cashAnswer) {
                const isCorrect = checkCashAnswer(p.cashAnswer, q.acceptedAnswers);
                if (isCorrect) {
                  const timeBonus = p.answerTime && state.timerStartsAt
                    ? Math.max(0, (state.timerDuration * 1000 - (p.answerTime - state.timerStartsAt)) / (state.timerDuration * 1000))
                    : 0;
                  p.score += 800 + Math.floor(timeBonus * 400);
                }
              } else if (q.type === 'multiple-choice' && p.currentAnswer !== null) {
                if (p.currentAnswer === q.correct) {
                  const timeBonus = p.answerTime && state.timerStartsAt
                    ? Math.max(0, (state.timerDuration * 1000 - (p.answerTime - state.timerStartsAt)) / (state.timerDuration * 1000))
                    : 0;
                  p.score += 500 + Math.floor(timeBonus * 500);
                }
              } else if (q.type === 'speed-choice' && p.currentAnswer !== null) {
                if (p.currentAnswer === q.correct) {
                  const timeBonus = p.answerTime && state.timerStartsAt
                    ? Math.max(0, 1 - (p.answerTime - state.timerStartsAt) / (state.timerDuration * 1000))
                    : 0;
                  // Exponential speed scoring: fast = way more points
                  p.score += 200 + Math.floor(timeBonus * timeBonus * 1800);
                }
              }
            });
          }
        } else if (state.questionState === 'revealed') {
          // Save round scores
          const roundIdx = state.currentRound;
          if (state.roundScores[roundIdx]) {
            state.roundScores[roundIdx].scores = {};
            Object.entries(state.players).forEach(([id, p]: [string, any]) => {
              state.roundScores[roundIdx].scores[id] = p.score;
            });
          }

          if (state.currentQuestionIndex >= state.currentQuestions.length - 1) {
            // Round finished
            if (state.currentRound >= 2) {
              state.status = 'finished';
            } else {
              state.status = 'round-transition';
            }
          } else {
            state.currentQuestionIndex++;
            state.questionState = 'reading';
            state.timerStartsAt = null;
            Object.values(state.players).forEach((p: any) => { p.currentAnswer = null; p.cashAnswer = null; p.answerTime = null; });
          }
        }
        setState(code, state);
        return NextResponse.json({ success: true, state });
      }

      case 'next-round': {
        const state = getState(code);
        if (!state || state.hostId !== playerId) return NextResponse.json({ success: false, error: 'Non autorisé.' }, { status: 403 });

        state.currentRound++;
        const roundConfig = state.settings.rounds[state.currentRound];
        const isSpecialRound = !!state.settings.specialMode;
        state.currentQuestions = buildRoundQuestions(roundConfig.category, roundConfig.questionCount, state.usedQuestionIds, isSpecialRound);
        // Register used IDs
        state.currentQuestions.forEach((q: any) => state.usedQuestionIds.add(q.id));
        state.currentQuestionIndex = 0;
        state.questionState = 'reading';
        state.timerStartsAt = null;
        state.status = 'playing';
        Object.values(state.players).forEach((p: any) => { p.currentAnswer = null; p.cashAnswer = null; p.answerTime = null; });

        setState(code, state);
        return NextResponse.json({ success: true, state });
      }

      case 'answer': {
        const state = getState(code);
        if (!state) return NextResponse.json({ success: false, error: 'Partie introuvable.' }, { status: 404 });

        const player = state.players[playerId];
        if (player && state.status === 'playing' && state.questionState === 'answering') {
          const q = state.currentQuestions[state.currentQuestionIndex];
          if (q && q.type === 'cash-answer') {
            if (!player.cashAnswer) {
              player.cashAnswer = cashAnswer;
              player.answerTime = Date.now();
              setState(code, state);
            }
          } else if (player.currentAnswer === null) {
            player.currentAnswer = answerIndex;
            player.answerTime = Date.now();
            setState(code, state);
          }
        }
        return NextResponse.json({ success: true, state });
      }

      case 'kick': {
        const state = getState(code);
        if (!state || state.hostId !== playerId) return NextResponse.json({ success: false, error: 'Non autorisé.' }, { status: 403 });
        if (targetId && targetId !== playerId && state.players[targetId]) {
          delete state.players[targetId];
          setState(code, state);
        }
        return NextResponse.json({ success: true, state });
      }

      case 'update-host-name': {
        const state = getState(code);
        if (!state) return NextResponse.json({ success: false }, { status: 404 });
        if (state.players[playerId]) { state.players[playerId].name = playerName || 'Hôte'; setState(code, state); }
        return NextResponse.json({ success: true, state });
      }

      case 'set-sound': {
        const state = getState(code);
        if (!state) return NextResponse.json({ success: false }, { status: 404 });
        if (state.players[playerId] && buzzerSoundId) { state.players[playerId].buzzerSoundId = buzzerSoundId; setState(code, state); }
        return NextResponse.json({ success: true, state });
      }

      case 'restart': {
        const state = getState(code);
        if (!state || state.hostId !== playerId) return NextResponse.json({ success: false, error: 'Non autorisé.' }, { status: 403 });
        state.status = 'lobby';
        state.currentRound = 0;
        state.currentQuestions = [];
        state.currentQuestionIndex = 0;
        state.questionState = 'reading';
        state.timerStartsAt = null;
        state.roundScores = [{ round: 0, scores: {} }, { round: 1, scores: {} }, { round: 2, scores: {} }];
        Object.values(state.players).forEach((p: any) => { p.score = 0; p.currentAnswer = null; p.cashAnswer = null; p.answerTime = null; });
        setState(code, state);
        return NextResponse.json({ success: true, state });
      }

      default:
        return NextResponse.json({ success: false, error: 'Action inconnue.' }, { status: 400 });
    }
  } catch (error) {
    console.error('[GAME API ERROR]', error);
    return NextResponse.json({ success: false, error: 'Erreur serveur.' }, { status: 500 });
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    const { code: rawCode } = await params;
    const code = rawCode?.toUpperCase().trim();
    if (!code) return NextResponse.json({ error: 'Code requis.' }, { status: 400 });

    const state = getState(code);
    if (!state) return NextResponse.json({ error: 'Partie introuvable.' }, { status: 404 });

    return NextResponse.json({ success: true, state });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}
