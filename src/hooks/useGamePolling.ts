'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { GameState, GameSettings } from '@/lib/game-types';

interface UseGamePollingReturn {
  isConnected: boolean;
  gameState: GameState | null;
  playerId: string | null;
  error: string | null;
  setError: (msg: string | null) => void;
  createRoom: (settings: GameSettings, hostName: string) => Promise<void>;
  updateHostName: (name: string) => Promise<void>;
  joinRoom: (code: string, name: string, buzzerSoundId?: string) => Promise<void>;
  setBuzzerSound: (soundId: string) => Promise<void>;
  startGame: () => Promise<void>;
  nextQuestionState: () => Promise<void>;
  submitAnswer: (answerIndex?: number, cashAnswer?: string) => Promise<void>;
  kickPlayer: (playerId: string) => Promise<void>;
  nextRound: () => Promise<void>;
  restartGame: () => Promise<void>;
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

async function apiCall(action: string, data: Record<string, unknown>): Promise<{ success: boolean; state?: GameState; error?: string; code?: string }> {
  const res = await fetch('/api/game/BUZZ', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action, ...data }),
  });
  return res.json();
}

async function apiGet(code: string, playerId?: string): Promise<{ success: boolean; state?: GameState; error?: string }> {
  let url = `/api/game/${encodeURIComponent(code)}`;
  if (playerId) url += `?playerId=${encodeURIComponent(playerId)}`;
  const res = await fetch(url);
  return res.json();
}

export function useGamePolling(): UseGamePollingReturn {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(true);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const gameCodeRef = useRef<string | null>(null);

  // Start polling when we have a game code
  const startPolling = useCallback((code: string, pid: string) => {
    if (pollRef.current) clearInterval(pollRef.current);
    gameCodeRef.current = code;

    pollRef.current = setInterval(async () => {
      try {
        const result = await apiGet(code, pid);
        if (result.success && result.state) {
          setGameState(result.state);
          setError(null);
          setIsConnected(true);
        } else if (result.error) {
          setError(result.error);
        }
      } catch {
        setIsConnected(false);
      }
    }, 500); // Poll every 500ms
  }, []);

  const stopPolling = useCallback(() => {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
    gameCodeRef.current = null;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => stopPolling();
  }, [stopPolling]);

  const createRoom = useCallback(async (settings: GameSettings, hostName: string) => {
    const pid = generateId();
    setError('Création de la partie...');
    try {
      const result = await apiCall('create', { playerId: pid, playerName: hostName, settings });
      if (result.success && result.state && result.code) {
        setGameState(result.state);
        setPlayerId(pid);
        setError(null);
        startPolling(result.code, pid);
      } else {
        setError(result.error || 'Erreur lors de la création.');
      }
    } catch {
      setError('Erreur de connexion au serveur.');
    }
  }, [startPolling]);

  const updateHostName = useCallback(async (name: string) => {
    if (!playerId || !gameCodeRef.current) return;
    try {
      await apiCall('update-host-name', { code: gameCodeRef.current, playerId, playerName: name });
    } catch { /* silent */ }
  }, [playerId]);

  const joinRoom = useCallback(async (code: string, name: string, buzzerSoundId?: string) => {
    const pid = generateId();
    setError('Connexion en cours...');
    try {
      const result = await apiCall('join', { code, playerId: pid, playerName: name, buzzerSoundId });
      if (result.success && result.state) {
        setGameState(result.state);
        setPlayerId(pid);
        setError(null);
        startPolling(code, pid);
      } else {
        setError(result.error || 'Erreur lors de la connexion.');
      }
    } catch {
      setError('Erreur de connexion au serveur.');
    }
  }, [startPolling]);

  const startGame = useCallback(async () => {
    if (!playerId || !gameCodeRef.current) return;
    try {
      const result = await apiCall('start', { code: gameCodeRef.current, playerId });
      if (result.success && result.state) setGameState(result.state);
      else if (result.error) setError(result.error);
    } catch { /* silent */ }
  }, [playerId]);

  const nextQuestionState = useCallback(async () => {
    if (!playerId || !gameCodeRef.current) return;
    try {
      const result = await apiCall('next', { code: gameCodeRef.current, playerId });
      if (result.success && result.state) setGameState(result.state);
    } catch { /* silent */ }
  }, [playerId]);

  const submitAnswer = useCallback(async (answerIndex?: number, cashAnswer?: string) => {
    if (!playerId || !gameCodeRef.current) return;
    try {
      const payload: Record<string, unknown> = { code: gameCodeRef.current, playerId };
      if (cashAnswer !== undefined) payload.cashAnswer = cashAnswer;
      else if (answerIndex !== undefined) payload.answerIndex = answerIndex;
      const result = await apiCall('answer', payload);
      if (result.success && result.state) setGameState(result.state);
    } catch { /* silent */ }
  }, [playerId]);

  const nextRound = useCallback(async () => {
    if (!playerId || !gameCodeRef.current) return;
    try {
      const result = await apiCall('next-round', { code: gameCodeRef.current, playerId });
      if (result.success && result.state) setGameState(result.state);
    } catch { /* silent */ }
  }, [playerId]);

  const kickPlayer = useCallback(async (targetId: string) => {
    if (!playerId || !gameCodeRef.current) return;
    try {
      const result = await apiCall('kick', { code: gameCodeRef.current, playerId, targetId });
      if (result.success && result.state) setGameState(result.state);
    } catch { /* silent */ }
  }, [playerId]);

  const setBuzzerSound = useCallback(async (soundId: string) => {
    if (!playerId || !gameCodeRef.current) return;
    try {
      const result = await apiCall('set-sound', { code: gameCodeRef.current, playerId, buzzerSoundId: soundId });
      if (result.success && result.state) setGameState(result.state);
    } catch { /* silent */ }
  }, [playerId]);

  const restartGame = useCallback(async () => {
    if (!playerId || !gameCodeRef.current) return;
    try {
      const result = await apiCall('restart', { code: gameCodeRef.current, playerId });
      if (result.success && result.state) setGameState(result.state);
    } catch { /* silent */ }
  }, [playerId]);

  return {
    isConnected,
    gameState,
    playerId,
    error,
    setError,
    createRoom,
    updateHostName,
    joinRoom,
    setBuzzerSound,
    startGame,
    nextQuestionState,
    submitAnswer,
    kickPlayer,
    nextRound,
    restartGame,
  };
}
