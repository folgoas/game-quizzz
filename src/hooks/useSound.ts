'use client';

import { useCallback, useRef } from 'react';

// ─── Pre-cached audio pool ───────────────────────────────────────────────────
const SOUND_URLS = {
  tick: 'https://assets.mixkit.co/active_storage/sfx/1110/1110-preview.mp3',
  endBeep: 'https://assets.mixkit.co/active_storage/sfx/946/946-preview.mp3',
  correct: 'https://assets.mixkit.co/active_storage/sfx/949/949-preview.mp3',
  wrong: 'https://assets.mixkit.co/active_storage/sfx/473/473-preview.mp3',
  roundStart: 'https://assets.mixkit.co/active_storage/sfx/2870/2870-preview.mp3',
  buzz: 'https://assets.mixkit.co/active_storage/sfx/2042/2042-preview.mp3',
} as const;

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

function playAudioUrl(url: string, volume = 1) {
  try {
    const audio = getCachedAudio(url).cloneNode() as HTMLAudioElement;
    audio.volume = volume;
    audio.play().catch(() => {});
  } catch { /* ignore audio errors */ }
}

export function useSound() {
  const lastTickRef = useRef<number>(0);

  const playTick = useCallback(() => {
    playAudioUrl(SOUND_URLS.tick, 0.6);
  }, []);

  const playTicToc = useCallback(() => {
    const now = Date.now();
    if (now - lastTickRef.current < 400) return;
    lastTickRef.current = now;
    playAudioUrl(SOUND_URLS.tick, 0.8);
  }, []);

  const playBeep = useCallback(() => {
    playAudioUrl(SOUND_URLS.endBeep, 1);
  }, []);

  const playBuzz = useCallback(() => {
    playAudioUrl(SOUND_URLS.buzz, 1);
  }, []);

  const playCorrect = useCallback(() => {
    playAudioUrl(SOUND_URLS.correct, 1);
  }, []);

  const playWrong = useCallback(() => {
    playAudioUrl(SOUND_URLS.wrong, 1);
  }, []);

  const playRoundStart = useCallback(() => {
    playAudioUrl(SOUND_URLS.roundStart, 1);
  }, []);

  return { playTick, playTicToc, playBeep, playBuzz, playCorrect, playWrong, playRoundStart };
}
