'use client';

import { useCallback, useRef, useEffect, useState } from 'react';

const BGM_URL = '/audio/bgm.mp3';

/**
 * Background Music hook.
 * Plays / pauses / mutes an audio track based on the current game view.
 * Handles iOS Safari audio unlock (requires user gesture to start audio).
 * Returns the mute toggle + current muted/playing state + unlock function.
 */
export function useBGM(shouldPlay: boolean, isMuffled: boolean = false) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const filterNodeRef = useRef<BiquadFilterNode | null>(null);
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
      if (audioContextRef.current?.state === 'suspended') {
        await audioContextRef.current.resume();
      }
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
      if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume().catch(() => {});
      }
      setIsPlaying(true);
      unlockedRef.current = true;
      setNeedsUnlock(false);
      listenersAttachedRef.current = false;
    });
    audio.addEventListener('pause', () => setIsPlaying(false));

    audioRef.current = audio;

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx && !audioContextRef.current) {
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;
        
        const source = ctx.createMediaElementSource(audio);
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 20000;
        
        source.connect(filter);
        filter.connect(ctx.destination);
        filterNodeRef.current = filter;
      }
    } catch (e) {
      console.warn('Web Audio API not supported or failed to initialize', e);
    }

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
      if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume().catch(() => {});
      }
      if (unlockedRef.current) {
        audio.play().catch(() => {});
      } else {
        pendingPlayRef.current = true;
        // Attempt to play: if it throws (e.g. mobile Safari autoplay blocked), we need user interaction
        audio.play().catch(() => {
          setNeedsUnlock(true);
        });
      }
    } else {
      audio.pause();
    }
  }, [shouldPlay, muted]);

  // Apply muffled filter and volume adjustments
  useEffect(() => {
    if (filterNodeRef.current && audioContextRef.current) {
      const filter = filterNodeRef.current;
      const ctx = audioContextRef.current;
      const now = ctx.currentTime;
      
      if (isMuffled) {
        filter.frequency.setTargetAtTime(800, now, 0.5);
        if (audioRef.current) {
          audioRef.current.volume = 0.15;
        }
      } else {
        filter.frequency.setTargetAtTime(20000, now, 0.5);
        if (audioRef.current) {
          audioRef.current.volume = 0.35;
        }
      }
    } else {
      // Fallback if Web Audio API is unsupported
      if (audioRef.current) {
        audioRef.current.volume = isMuffled ? 0.15 : 0.35;
      }
    }
  }, [isMuffled]);

  const toggleMute = useCallback(() => {
    setMuted(prev => !prev);
  }, []);

  const unlockAudio = useCallback(async () => {
    await tryUnlock();
  }, [tryUnlock]);

  return { muted, isPlaying, toggleMute, needsUnlock, unlockAudio };
}
