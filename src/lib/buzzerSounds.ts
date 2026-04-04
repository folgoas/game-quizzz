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
    id: "buzzer-classique",
    name: "Buzzer classique",
    emoji: "🔴",
    url: "https://assets.mixkit.co/active_storage/sfx/473/473-preview.mp3",
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
    id: "klaxon-retro",
    name: "Klaxon rétro",
    emoji: "🚗",
    url: "https://assets.mixkit.co/active_storage/sfx/713/713-preview.mp3",
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
    id: "cloche",
    name: "Cloche",
    emoji: "🔔",
    url: "https://assets.mixkit.co/active_storage/sfx/586/586-preview.mp3",
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
    name: "Ding dong",
    emoji: "🛎️",
    url: "https://assets.mixkit.co/active_storage/sfx/587/587-preview.mp3",
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
    id: "sifflement",
    name: "Sifflement",
    emoji: "🎵",
    url: "https://assets.mixkit.co/active_storage/sfx/610/610-preview.mp3",
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
    id: "trompette",
    name: "Trompette",
    emoji: "📯",
    url: "https://assets.mixkit.co/active_storage/sfx/2870/2870-preview.mp3",
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
    id: "pop-corn",
    name: "Pop corn",
    emoji: "🍿",
    url: "https://assets.mixkit.co/active_storage/sfx/2365/2365-preview.mp3",
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
    id: "laser",
    name: "Laser",
    emoji: "🔫",
    url: "https://assets.mixkit.co/active_storage/sfx/1489/1489-preview.mp3",
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
    id: "gong",
    name: "Gong",
    emoji: "🥁",
    url: "https://assets.mixkit.co/active_storage/sfx/2043/2043-preview.mp3",
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
    id: "kazoo",
    name: "Kazoo",
    emoji: "🪈",
    url: "https://assets.mixkit.co/active_storage/sfx/716/716-preview.mp3",
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
    id: "derapage",
    name: "Dérapage",
    emoji: "🏎️",
    url: "https://assets.mixkit.co/active_storage/sfx/1490/1490-preview.mp3",
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
    id: "fart",
    name: "Fart",
    emoji: "💩",
    url: "https://assets.mixkit.co/active_storage/sfx/240/240-preview.mp3",
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
