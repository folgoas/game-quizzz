// ─── Type ────────────────────────────────────────────────────────────────────
export interface BuzzerSound {
  id: string;
  name: string;
  emoji: string;
  url: string;
  preload: () => void;
  play: () => void;
}

// ─── Audio cache ─────────────────────────────────────────────────────────────
const audioCache = new Map<string, HTMLAudioElement>();

function getCachedAudio(url: string): HTMLAudioElement {
  let audio = audioCache.get(url);
  if (!audio) {
    audio = new Audio(url);
    audio.preload = 'auto';
    audioCache.set(url, audio);
  }
  return audio;
}

// ─── Sound definitions ───────────────────────────────────────────────────────
export const BUZZER_SOUNDS: BuzzerSound[] = [
  {
    id: "cow-moo-3",
    name: "Vache (3)",
    emoji: "🐮",
    url: "/sounds/buzzer/125[kb]moo3.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "sports-whistle",
    name: "Sifflet sport",
    emoji: "📢",
    url: "/sounds/buzzer/156[kb]sports-whistle.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "cartoon-whistle",
    name: "Sifflet cartoon",
    emoji: "🌪️",
    url: "/sounds/buzzer/159[kb]cartoon-spin-whistle.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "boip",
    name: "Boip",
    emoji: "🏀",
    url: "/sounds/buzzer/15[kb]boip.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "zelda-get",
    name: "Zelda Item",
    emoji: "🛡️",
    url: "/sounds/buzzer/170[kb]zelda-get.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "cow-moo-2",
    name: "Vache (2)",
    emoji: "🐮",
    url: "/sounds/buzzer/192[kb]moo2.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "car-alarm",
    name: "Alarme voiture",
    emoji: "🚨",
    url: "/sounds/buzzer/20[kb]Car_Alarm_Chirp.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "pc-beep",
    name: "Bip PC",
    emoji: "💻",
    url: "/sounds/buzzer/20[kb]pc_beep.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "ding-dong",
    name: "Ding Dong",
    emoji: "🛎️",
    url: "/sounds/buzzer/238[kb]ding_dong.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "coin-get",
    name: "Pièce",
    emoji: "💰",
    url: "/sounds/buzzer/23[kb]coin.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "cartoon-hit",
    name: "Hit Cartoon",
    emoji: "💥",
    url: "/sounds/buzzer/241[kb]cartoon-hit.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "car-horn",
    name: "Klaxon rétro",
    emoji: "🚗",
    url: "/sounds/buzzer/271[kb]model-a-car-horn 2.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "car-zoom",
    name: "Voiture de course",
    emoji: "🏎️",
    url: "/sounds/buzzer/300[kb]car-zooms-past.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "in-hell",
    name: "Enfer",
    emoji: "👹",
    url: "/sounds/buzzer/309[kb]inhell.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "dolphin",
    name: "Dauphin",
    emoji: "🐬",
    url: "/sounds/buzzer/356[kb]dolphin-clicks.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "jump",
    name: "Saut",
    emoji: "🦘",
    url: "/sounds/buzzer/36[kb]jump.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "cow-moo-1",
    name: "Vache (1)",
    emoji: "🐮",
    url: "/sounds/buzzer/410[kb]moo.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "belch",
    name: "Rôt",
    emoji: "🤮",
    url: "/sounds/buzzer/417[kb]big-ol-belch-2.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "toad",
    name: "Crapaud",
    emoji: "🐸",
    url: "/sounds/buzzer/44[kb]toad.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "karate-kick",
    name: "Karaté",
    emoji: "🥋",
    url: "/sounds/buzzer/48[kb]lofi-karate-kick.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "tiger-roar",
    name: "Tigre",
    emoji: "🐯",
    url: "/sounds/buzzer/495[kb]bengal-tiger-roars-2.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "clown-horn",
    name: "Clown",
    emoji: "🤡",
    url: "/sounds/buzzer/49[kb]squeaky-clown-horn.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "bleep",
    name: "Bleep",
    emoji: "🔇",
    url: "/sounds/buzzer/53[kb]bleep.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "sax-blurp-2",
    name: "Saxophone (2)",
    emoji: "🎷",
    url: "/sounds/buzzer/561[kb]saxophone-blurp-2.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "radio-melody",
    name: "Mélodie Radio",
    emoji: "📻",
    url: "/sounds/buzzer/56[kb]radiomelody.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "neon-buzz",
    name: "Néon",
    emoji: "💡",
    url: "/sounds/buzzer/583[kb]neon_buzz.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "radio-startup",
    name: "Démarrage Radio",
    emoji: "📻",
    url: "/sounds/buzzer/59[kb]radiostartup.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "cowboy-yahoo",
    name: "Cowboy",
    emoji: "🤠",
    url: "/sounds/buzzer/600[kb]cowboy-yahoo 2.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "sax-blurp-1",
    name: "Saxophone (1)",
    emoji: "🎷",
    url: "/sounds/buzzer/602[kb]saxophone-blurp-1.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "triple-punch",
    name: "Triple Punch",
    emoji: "🥊",
    url: "/sounds/buzzer/65[kb]triple-punch.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "glug-glug",
    name: "Glou Glou",
    emoji: "🥤",
    url: "/sounds/buzzer/672[kb]glug-glug-glug-glug.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "right-cross",
    name: "Coup droit",
    emoji: "🥊",
    url: "/sounds/buzzer/79[kb]right-cross.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "effect-01",
    name: "Effet 01",
    emoji: "✨",
    url: "/sounds/buzzer/7[kb]effect01.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "balloon-loose",
    name: "Ballon",
    emoji: "🎈",
    url: "/sounds/buzzer/81[kb]balloon_on_the_loose.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "vidgame-gliss",
    name: "Jeu Vidéo",
    emoji: "🎮",
    url: "/sounds/buzzer/85[kb]vidgame-gliss-down.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "cloth-rip",
    name: "Déchirement",
    emoji: "👔",
    url: "/sounds/buzzer/92[kb]cloth-rip.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
  {
    id: "car-alarm-osc",
    name: "Alarme voiture (Osc)",
    emoji: "🚨",
    url: "/sounds/buzzer/97[kb]Car_Alarm_Oscillating.wav.mp3",
    preload() { getCachedAudio(this.url); },
    play() {
      try {
        const audio = getCachedAudio(this.url).cloneNode() as HTMLAudioElement;
        audio.volume = 1;
        audio.play().catch(() => {});
      } catch { /* ignore */ }
    },
  },
];


// ─── Lookup helper ───────────────────────────────────────────────────────────
export function getBuzzerSound(id: string): BuzzerSound | undefined {
  return BUZZER_SOUNDS.find((s) => s.id === id);
}
