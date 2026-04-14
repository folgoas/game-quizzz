'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { GameState, GameSettings } from '@/lib/game-types';

export interface UseGameSocketReturn {
  isConnected: boolean;
  gameState: GameState | null;
  playerId: string | null;
  error: string | null;
  setError: (msg: string | null) => void;
  createRoom: (settings: GameSettings, hostName: string) => void;
  updateHostName: (name: string) => void;
  joinRoom: (code: string, name: string, buzzerSoundId?: string) => void;
  rejoinRoom: (code: string) => void;
  setBuzzerSound: (soundId: string) => void;
  startGame: () => void;
  nextQuestionState: () => void;
  submitAnswer: (answerIndex?: number, cashAnswer?: string) => void;
  kickPlayer: (playerId: string) => void;
  nextRound: () => void;
  restartGame: () => void;
  destroyRoom: () => void;
}

function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  let id = localStorage.getItem('buzz_session_id');
  if (!id) {
    id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('buzz_session_id', id);
  }
  return id;
}

export function useGameSocket(): UseGameSocketReturn {
  const socketRef = useRef<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const sessionIdRef = useRef<string>('');

  useEffect(() => {
    sessionIdRef.current = getSessionId();

    const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
    // URL du serveur WebSocket : Utilise la variable d'env si elle existe (production)
    // Sinon, fait la détection automatique locale
    let socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL;
    
    if (!socketUrl) {
      const isLocal = hostname === 'localhost' || /^192\.168\./.test(hostname) || /^10\./.test(hostname) || /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(hostname);
      socketUrl = isLocal ? `http://${hostname}:3004` : '/?XTransformPort=3004';
    }

    const socket = io(socketUrl, {
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
      
      // Auto-reconnect if we have a saved room
      if (typeof window !== 'undefined') {
        const savedRoom = localStorage.getItem('buzz_room_code');
        if (savedRoom) {
          // Simply attempt to rejoin. If we exist in the room, the backend handles it.
          socket.emit('join-room', { code: savedRoom, name: '', sessionId: sessionIdRef.current });
        }
      }
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      console.log('[Socket] Disconnected');
    });

    socket.on('room-created', (data: { code: string; state: GameState }) => {
      setGameState(data.state);
      setPlayerId(sessionIdRef.current);
      setError(null);
      if (typeof window !== 'undefined') localStorage.setItem('buzz_room_code', data.code);
    });

    socket.on('room-joined', (data: { state: GameState; playerId: string }) => {
      setGameState(data.state);
      setPlayerId(data.playerId);
      setError(null);
      if (typeof window !== 'undefined') localStorage.setItem('buzz_room_code', data.state.code);
    });

    socket.on('state-update', (state: GameState) => {
      setGameState(state);
    });

    socket.on('error', (data: { message: string }) => {
      setError(data.message);
      // Clean up local storage if we were kicked or room closed
      if (data.message.includes('L\'hôte') || data.message.includes('introuvable') || data.message.includes('expulsé')) {
         if (typeof window !== 'undefined') localStorage.removeItem('buzz_room_code');
         setGameState(null);
      }
    });

    socket.on('kicked', (data: { message: string }) => {
      setError(data.message);
      setGameState(null);
      setPlayerId(null);
      if (typeof window !== 'undefined') localStorage.removeItem('buzz_room_code');
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  const createRoom = useCallback((settings: GameSettings, hostName: string) => {
    socketRef.current?.emit('create-room', { settings, hostName, sessionId: sessionIdRef.current });
  }, []);

  const updateHostName = useCallback((name: string) => {
    socketRef.current?.emit('update-host-name', { name });
  }, []);

  const joinRoom = useCallback((code: string, name: string, buzzerSoundId?: string) => {
    setError('Connexion en cours...');
    socketRef.current?.emit('join-room', { code, name, buzzerSoundId, sessionId: sessionIdRef.current });
  }, []);

  const rejoinRoom = useCallback((code: string) => {
    socketRef.current?.emit('join-room', { code, name: '', sessionId: sessionIdRef.current });
  }, []);

  const setBuzzerSound = useCallback((soundId: string) => {
    socketRef.current?.emit('set-sound', { buzzerSoundId: soundId });
  }, []);

  const startGame = useCallback(() => {
    socketRef.current?.emit('start-game');
  }, []);

  const nextQuestionState = useCallback(() => {
    socketRef.current?.emit('next-question-state');
  }, []);

  const submitAnswer = useCallback((answerIndex?: number, cashAnswer?: string) => {
    socketRef.current?.emit('answer', { answerIndex, cashAnswer });
  }, []);

  const kickPlayer = useCallback((id: string) => {
    socketRef.current?.emit('kick-player', { playerId: id });
  }, []);

  const nextRound = useCallback(() => {
    socketRef.current?.emit('next-round');
  }, []);

  const restartGame = useCallback(() => {
    socketRef.current?.emit('restart-game');
  }, []);

  const destroyRoom = useCallback(() => {
    socketRef.current?.emit('destroy-room');
  }, []);

  return {
    isConnected,
    gameState,
    playerId,
    error,
    setError,
    createRoom,
    updateHostName,
    joinRoom,
    rejoinRoom,
    setBuzzerSound,
    startGame,
    nextQuestionState,
    submitAnswer,
    kickPlayer,
    nextRound,
    restartGame,
    destroyRoom,
  };
}
