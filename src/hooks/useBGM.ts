'use client';

import { useCallback, useRef, useEffect, useState } from 'react';

const BGM_URL = '/audio/bgm.mp3';

/**
 * Background Music hook.
 * Plays / pauses / mutes an audio track based on the current game view.
 * Handles iOS Safari audio unlock (requires user gesture to start audio).
 * Returns the mute toggle + current muted/playing state + unlock function.
 */
export function useBGM(shouldPlay: boolean) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsUnlock, setNeedsUnlock] = useState(false);
  const unlockedRef = useRef(false);
  const pendingPlayRef = useRef(false);
  const listenersAttachedRef = useRef(false);

  // Handler for audio unlock via user interaction
  const tryUnlock = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || unlockedRef.current) return;

    try {
      await audio.play();
      unlockedRef.current = true;
      setNeedsUnlock(false);
      pendingPlayRef.current = false;
    } catch {
      // Still blocked
    }
  }, []);

  // Attach global interaction listeners once when unlock is needed
  useEffect(() => {
    if (!needsUnlock || listenersAttachedRef.current) return;
    listenersAttachedRef.current = true;

    const handler = () => {
      tryUnlock();
    };

    document.addEventListener('click', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('click', handler);
      document.removeEventListener('touchstart', handler);
      if (unlockedRef.current) {
        listenersAttachedRef.current = false;
      }
    };
  }, [needsUnlock, tryUnlock]);

  // Create the audio element once
  useEffect(() => {
    const audio = new Audio(BGM_URL);
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = 'auto';

    // Track actual play state via native events
    audio.addEventListener('playing', () => {
      setIsPlaying(true);
      unlockedRef.current = true;
      setNeedsUnlock(false);
      listenersAttachedRef.current = false;
    });
    audio.addEventListener('pause', () => setIsPlaying(false));

    audioRef.current = audio;

    // Try to play (will fail silently on iOS, which is fine)
    audio.play().catch(() => {
      pendingPlayRef.current = true;
      setNeedsUnlock(true);
      audio.pause();
      audio.currentTime = 0;
    });

    return () => {
      audio.pause();
      audio.removeEventListener('playing', () => setIsPlaying(true));
      audio.removeEventListener('pause', () => setIsPlaying(false));
    };
  }, []);

  // Play / pause whenever shouldPlay or muted changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (shouldPlay && !muted) {
      if (unlockedRef.current) {
        audio.play().catch(() => {});
      } else {
        // Mark as pending - will play once unlocked via user interaction
        pendingPlayRef.current = true;
      }
    } else {
      audio.pause();
    }
  }, [shouldPlay, muted]);

  const toggleMute = useCallback(() => {
    setMuted(prev => !prev);
  }, []);

  const unlockAudio = useCallback(async () => {
    await tryUnlock();
  }, [tryUnlock]);

  return { muted, isPlaying, toggleMute, needsUnlock, unlockAudio };
}
