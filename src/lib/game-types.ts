// ==================== GAME TYPES ====================

export type QuestionType = 'multiple-choice' | 'cash-answer' | 'speed-choice';

export interface MCQQuestion {
  id: string;
  text: string;
  answers: string[];
  correct: number;
  category: string;
  type: 'multiple-choice' | 'speed-choice';
}

export interface CashAnswerQuestion {
  id: string;
  text: string;
  acceptedAnswers: string[];
  category: string;
  type: 'cash-answer';
}

export type Question = MCQQuestion | CashAnswerQuestion;

export interface Player {
  id: string;
  name: string;
  score: number;
  currentAnswer: number | null;
  cashAnswer: string | null;
  isCashAnswerCorrect?: boolean | null;
  answerTime: number | null;
  connected: boolean;
  color: string;
  avatarIndex: number;
  buzzerSoundId?: string;
}

export interface RoundConfig {
  category: string;
  questionCount: number;
}

export interface GameSettings {
  gameDuration: number; // in minutes: 10, 15, 20, 30, 45
  timerDuration: number; // always 25
  rounds: RoundConfig[];
  specialMode?: boolean; // true when "Mode Alice" is unlocked via code
}

export const ALICE_CATEGORIES = [
  'Dessins animés & Manga',
  'Jeux Vidéo',
  'Pop Culture'
];

export const ALICE_MODE_CODE = 'folgoas';

export const CATEGORIES = [
  'Culture Générale',
  'Cinéma & Séries',
  'Sport',
  'Musique',
  'Sciences & Nature',
  'Histoire & Géographie',
  'Jeux Vidéo',
  'Stranger Things',
  'Tintin',
  'Années 80',
  'Années 90',
  'Années 2000',
  'Années 2010',
  'Années 2020',
  'Harry Potter',
  'Disney & Pixar',
  'Star Wars',
  'Super-Héros',
  'Séries TV Cultes',
  'Mangas'
];


export interface GameState {
  code: string;
  hostId: string;
  status: 'lobby' | 'playing' | 'round-transition' | 'finished';
  players: Record<string, Player>;
  currentRound: number;
  currentQuestions: Question[];
  currentQuestionIndex: number;
  questionState: 'reading' | 'answering' | 'revealed';
  timerStartsAt: number | null;
  timerDuration: number;
  settings: GameSettings;
  avatarCounter: number;
  // Cumulative scores per round for display
  roundScores: { round: number; scores: Record<string, number> }[];
}

export type GameView = 'menu' | 'host-config' | 'host-lobby' | 'player-lobby' | 'host-game' | 'player-game' | 'round-transition';



export const GAME_DURATIONS = [
  { label: 'Express', minutes: 10, icon: '⚡' },
  { label: 'Classique', minutes: 15, icon: '🎮' },
  { label: 'Longue', minutes: 20, icon: '🏆' },
  { label: 'Marathon', minutes: 30, icon: '🏃' },
  { label: 'Ultra', minutes: 45, icon: '💪' },
];

export const BUZZER_COLORS = [
  { name: 'Rouge', bg: '#EF4444', border: '#DC2626', shadow: '#991B1B', text: '#FFFFFF' },
  { name: 'Bleu', bg: '#3B82F6', border: '#2563EB', shadow: '#1D4ED8', text: '#FFFFFF' },
  { name: 'Vert', bg: '#22C55E', border: '#16A34A', shadow: '#15803D', text: '#FFFFFF' },
  { name: 'Jaune', bg: '#EAB308', border: '#CA8A04', shadow: '#A16207', text: '#1C1917' },
];

export const AVATAR_EMOJIS = ['🎮', '🏆', '⭐', '🎯', '🎲', '🎪', '🎵', '🎨', '🚀', '🔥', '💎', '🎪', '🌟', '👑', '🦊', '🐼', '🦁', '🐸', '🦄', '🐲', '🐙', '🦋', '🌸', '🎸', '🥊', '⚽', '🏀', '🎱', '🧩', '🎭', '🎪', '🎪'];

export const QUESTION_TYPE_LABELS: Record<QuestionType, { label: string; icon: string; color: string }> = {
  'multiple-choice': { label: 'CHOIX MULTIPLE', icon: '🅰️', color: '#3B82F6' },
  'speed-choice': { label: 'RAPIDITÉ', icon: '⚡', color: '#F59E0B' },
  'cash-answer': { label: 'RÉPONSE FLASH', icon: '✍️', color: '#8B5CF6' },
};
