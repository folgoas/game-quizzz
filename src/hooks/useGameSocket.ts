'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { GameState, GameSettings } from '@/lib/game-types';

interface UseGameSocketReturn {
  isConnected: boolean;
  gameState: GameState | null;
  playerId: string | null;
  error: string | null;
  setError: (msg: string | null) => void;
  createRoom: (settings: GameSettings) => void;
  updateHostName: (name: string) => void;
  updateSettings: (settings: GameSettings) => void;
  joinRoom: (code: string, name: string) => void;
  startGame: () => void;
  nextQuestionState: () => void;
  submitAnswer: (answerIndex: number) => void;
  kickPlayer: (playerId: string) => void;
  restartGame: () => void;
  disconnect: () => void;
}

export function useGameSocket(): UseGameSocketReturn {
  const socketRef = useRef<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const socket = io('/?XTransformPort=3004', {
      transports: ['websocket', 'polling'],
      forceNew: true,
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      timeout: 10000,
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      setIsConnected(true);
      setError(null);
      console.log('[Socket] Connected:', socket.id);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      console.log('[Socket] Disconnected');
    });

    socket.on('room-created', (data: { code: string; state: GameState }) => {
      setGameState(data.state);
      setPlayerId(socket.id!);
      setError(null);
    });

    socket.on('room-joined', (data: { state: GameState; playerId: string }) => {
      setGameState(data.state);
      setPlayerId(data.playerId);
      setError(null);
    });

    socket.on('state-update', (state: GameState) => {
      setGameState(state);
    });

    socket.on('error', (data: { message: string }) => {
      setError(data.message);
    });

    socket.on('kicked', (data: { message: string }) => {
      setError(data.message);
      setGameState(null);
      setPlayerId(null);
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  const createRoom = useCallback((settings: GameSettings) => {
    socketRef.current?.emit('create-room', { settings });
  }, []);

  const updateHostName = useCallback((name: string) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit('update-host-name', { name });
    }
  }, []);

  const updateSettings = useCallback((settings: GameSettings) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit('update-settings', { settings });
    }
  }, []);

  const joinRoom = useCallback((code: string, name: string) => {
    setError('Connexion en cours...');
    socketRef.current?.emit('join-room', { code, name });
  }, []);

  const startGame = useCallback(() => {
    socketRef.current?.emit('start-game');
  }, []);

  const nextQuestionState = useCallback(() => {
    socketRef.current?.emit('next-question-state');
  }, []);

  const submitAnswer = useCallback((answerIndex: number) => {
    socketRef.current?.emit('answer', { answerIndex });
  }, []);

  const kickPlayer = useCallback((id: string) => {
    socketRef.current?.emit('kick-player', { playerId: id });
  }, []);

  const restartGame = useCallback(() => {
    socketRef.current?.emit('restart-game');
  }, []);

  const disconnect = useCallback(() => {
    socketRef.current?.disconnect();
  }, []);

  return {
    isConnected,
    gameState,
    playerId,
    error,
    setError,
    createRoom,
    updateHostName,
    updateSettings,
    joinRoom,
    startGame,
    nextQuestionState,
    submitAnswer,
    kickPlayer,
    restartGame,
    disconnect,
  };
}
