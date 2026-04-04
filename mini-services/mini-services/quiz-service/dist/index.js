import { createServer } from 'http';
import { Server } from 'socket.io';
const httpServer = createServer();
const io = new Server(httpServer, {
    path: '/',
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    },
    pingTimeout: 60000,
    pingInterval: 25000,
});
// ==================== QUESTION DATABASE ====================
const QUESTION_DB = [
    // Culture Générale
    { id: 'cg1', text: "Quel est le plus grand océan de la Terre ?", answers: ["Atlantique", "Indien", "Pacifique", "Arctique"], correct: 2, category: "Culture Générale" },
    { id: 'cg2', text: "Combien de planètes composent notre système solaire ?", answers: ["7", "8", "9", "10"], correct: 1, category: "Culture Générale" },
    { id: 'cg3', text: "Quelle est la monnaie du Japon ?", answers: ["Yuan", "Won", "Yen", "Ringgit"], correct: 2, category: "Culture Générale" },
    { id: 'cg4', text: "Quel est le plus petit pays du monde ?", answers: ["Monaco", "Vatican", "Malte", "Liechtenstein"], correct: 1, category: "Culture Générale" },
    { id: 'cg5', text: "Combien de continents y a-t-il sur Terre ?", answers: ["5", "6", "7", "8"], correct: 2, category: "Culture Générale" },
    { id: 'cg6', text: "Quel est le plus long fleuve du monde ?", answers: ["Le Nil", "L'Amazone", "Le Mississippi", "Le Yangtsé"], correct: 1, category: "Culture Générale" },
    { id: 'cg7', text: "Quelle est la capitale de l'Australie ?", answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correct: 2, category: "Culture Générale" },
    { id: 'cg8', text: "Quel gaz compose principalement l'atmosphère terrestre ?", answers: ["Oxygène", "Azote", "CO2", "Hélium"], correct: 1, category: "Culture Générale" },
    // Cinéma & Séries
    { id: 'cs1', text: "Quel acteur incarne Iron Man dans les films Marvel ?", answers: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], correct: 1, category: "Cinéma & Séries" },
    { id: 'cs2', text: "Comment s'appelle le vaisseau spatial dans Star Wars ?", answers: ["Enterprise", "Faucon Millenium", "Serenity", "Normandy"], correct: 1, category: "Cinéma & Séries" },
    { id: 'cs3', text: "Quel film a remporté la Palme d'Or à Cannes en 2019 ?", answers: ["Joker", "Parasite", "1917", "Once Upon a Time"], correct: 1, category: "Cinéma & Séries" },
    { id: 'cs4', text: "Qui a réalisé le film 'Inception' ?", answers: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Ridley Scott"], correct: 1, category: "Cinéma & Séries" },
    { id: 'cs5', text: "Dans quelle saga trouve-t-on le personnage de Luke Skywalker ?", answers: ["Star Trek", "Star Wars", "Stargate", "Battlestar Galactica"], correct: 1, category: "Cinéma & Séries" },
    { id: 'cs6', text: "Quel est le premier long-métrage d'animation Disney ?", answers: ["Blanche-Neige", "Pinocchio", "Cendrillon", "Fantasia"], correct: 0, category: "Cinéma & Séries" },
    { id: 'cs7', text: "Qui joue le role de Jack dans Titanic ?", answers: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Johnny Depp"], correct: 2, category: "Cinéma & Séries" },
    { id: 'cs8', text: "Comment s'appelle le robot dans 'Wall-E' ?", answers: ["Wall-E", "EVA", "R2-D2", "Optimus"], correct: 0, category: "Cinéma & Séries" },
    // Sport
    { id: 'sp1', text: "Quel pays a remporté la Coupe du Monde en 1998 ?", answers: ["Brésil", "Italie", "Allemagne", "France"], correct: 3, category: "Sport" },
    { id: 'sp2', text: "Combien de joueurs composent une équipe de rugby ?", answers: ["11", "13", "15", "18"], correct: 2, category: "Sport" },
    { id: 'sp3', text: "Dans quel sport utilise-t-on une raquette et un volant ?", answers: ["Tennis", "Badminton", "Squash", "Ping-pong"], correct: 1, category: "Sport" },
    { id: 'sp4', text: "Quel pays a gagné le plus de Tour de France ?", answers: ["France", "Belgique", "Espagne", "Italie"], correct: 2, category: "Sport" },
    { id: 'sp5', text: "Combien de temps dure un match de football ?", answers: ["60 min", "80 min", "90 min", "120 min"], correct: 2, category: "Sport" },
    { id: 'sp6', text: "Quelle est la distance d'un marathon ?", answers: ["21 km", "36 km", "42.195 km", "50 km"], correct: 2, category: "Sport" },
    { id: 'sp7', text: "Dans quel pays sont nés les Jeux Olympiques modernes ?", answers: ["France", "Grèce", "Italie", "Angleterre"], correct: 1, category: "Sport" },
    { id: 'sp8', text: "Quel sport pratique-t-on à Roland-Garros ?", answers: ["Golf", "Tennis", "Cricket", "Baseball"], correct: 1, category: "Sport" },
    // Musique
    { id: 'mu1', text: "Qui a composé la 9e Symphonie ?", answers: ["Mozart", "Beethoven", "Bach", "Vivaldi"], correct: 1, category: "Musique" },
    { id: 'mu2', text: "De quel groupe vient la chanson 'Bohemian Rhapsody' ?", answers: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"], correct: 2, category: "Musique" },
    { id: 'mu3', text: "Quel instrument a 88 touches ?", answers: ["Guitare", "Piano", "Orgue", "Harpe"], correct: 1, category: "Musique" },
    { id: 'mu4', text: "Qui est surnommé le 'Roi de la Pop' ?", answers: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"], correct: 1, category: "Musique" },
    { id: 'mu5', text: "Quel artiste français a chanté 'La Vie en Rose' ?", answers: ["Charles Aznavour", "Jacques Brel", "Édith Piaf", "Georges Brassens"], correct: 2, category: "Musique" },
    { id: 'mu6', text: "De quel pays vient le reggae ?", answers: ["Cuba", "Jamaïque", "Brésil", "Trinité"], correct: 1, category: "Musique" },
    { id: 'mu7', text: "Combien de cordes a une guitare classique ?", answers: ["4", "5", "6", "8"], correct: 2, category: "Musique" },
    { id: 'mu8', text: "Quel groupe a créé l'album 'The Dark Side of the Moon' ?", answers: ["The Doors", "Pink Floyd", "Led Zeppelin", "Deep Purple"], correct: 1, category: "Musique" },
    // Sciences & Nature
    { id: 'sn1', text: "Quel est le symbole chimique de l'or ?", answers: ["Ag", "Au", "Fe", "O"], correct: 1, category: "Sciences & Nature" },
    { id: 'sn2', text: "En quelle année l'homme a-t-il marché sur la Lune ?", answers: ["1965", "1969", "1971", "1973"], correct: 1, category: "Sciences & Nature" },
    { id: 'sn3', text: "Quel est l'animal terrestre le plus rapide ?", answers: ["Lion", "Guépard", "Gazelle", "Faucon"], correct: 1, category: "Sciences & Nature" },
    { id: 'sn4', text: "Combien d'os possède le corps humain adulte ?", answers: ["186", "206", "226", "256"], correct: 1, category: "Sciences & Nature" },
    { id: 'sn5', text: "Quelle planète est surnommée la 'Planète Rouge' ?", answers: ["Vénus", "Mars", "Jupiter", "Saturne"], correct: 1, category: "Sciences & Nature" },
    { id: 'sn6', text: "Qui a peint la Joconde ?", answers: ["Van Gogh", "Picasso", "Léonard de Vinci", "Michel-Ange"], correct: 2, category: "Sciences & Nature" },
    { id: 'sn7', text: "Quel est le plus grand organe du corps humain ?", answers: ["Foie", "Cerveau", "Peau", "Poumons"], correct: 2, category: "Sciences & Nature" },
    { id: 'sn8', text: "Quelle est la vitesse de la lumière (km/s) ?", answers: ["200 000", "300 000", "400 000", "500 000"], correct: 1, category: "Sciences & Nature" },
    // Histoire & Géographie
    { id: 'hg1', text: "En quelle année a eu lieu la Révolution française ?", answers: ["1776", "1789", "1799", "1804"], correct: 1, category: "Histoire & Géographie" },
    { id: 'hg2', text: "Quelle est la capitale du Canada ?", answers: ["Toronto", "Montréal", "Vancouver", "Ottawa"], correct: 3, category: "Histoire & Géographie" },
    { id: 'hg3', text: "Qui a découvert l'Amérique en 1492 ?", answers: ["Magellan", "Colomb", "Vespucci", "Cortés"], correct: 1, category: "Histoire & Géographie" },
    { id: 'hg4', text: "Quel est le plus grand désert du monde ?", answers: ["Sahara", "Antarctique", "Gobi", "Kalahari"], correct: 1, category: "Histoire & Géographie" },
    { id: 'hg5', text: "Le mur de Berlin est tombé en quelle année ?", answers: ["1987", "1988", "1989", "1990"], correct: 2, category: "Histoire & Géographie" },
    { id: 'hg6', text: "Quel pays a la plus grande superficie ?", answers: ["Canada", "Chine", "USA", "Russie"], correct: 3, category: "Histoire & Géographie" },
    { id: 'hg7', text: "Quelle est la capitale de l'Égypte ?", answers: ["Le Caire", "Alexandrie", "Gizeh", "Louxor"], correct: 0, category: "Histoire & Géographie" },
    { id: 'hg8', text: "Qui était Napoléon Bonaparte ?", answers: ["Roi d'Angleterre", "Empereur des Français", "Roi d'Espagne", "Président américain"], correct: 1, category: "Histoire & Géographie" },
    // Jeux Vidéo
    { id: 'jv1', text: "Quel est le personnage principal de Super Mario ?", answers: ["Luigi", "Mario", "Toad", "Yoshi"], correct: 1, category: "Jeux Vidéo" },
    { id: 'jv2', text: "Quel jeu a popularisé les Battle Royale ?", answers: ["Fortnite", "PUBG", "Apex Legends", "H1Z1"], correct: 1, category: "Jeux Vidéo" },
    { id: 'jv3', text: "De quelle saga vient le Master Sword ?", answers: ["Final Fantasy", "Zelda", "Dark Souls", "Skyrim"], correct: 1, category: "Jeux Vidéo" },
    { id: 'jv4', text: "Comment s'appelle le héros de Minecraft ?", answers: ["Alex", "Steve", "Notch", "Herobrine"], correct: 1, category: "Jeux Vidéo" },
    { id: 'jv5', text: "Quel studio a créé Pokémon ?", answers: ["Nintendo", "Game Freak", "Square Enix", "Bandai"], correct: 1, category: "Jeux Vidéo" },
    { id: 'jv6', text: "En quelle année la PlayStation 1 est-elle sortie ?", answers: ["1992", "1994", "1996", "1998"], correct: 1, category: "Jeux Vidéo" },
    { id: 'jv7', text: "Quel est le best-seller de l'histoire du jeu vidéo ?", answers: ["Tetris", "Minecraft", "GTA V", "Wii Sports"], correct: 1, category: "Jeux Vidéo" },
    { id: 'jv8', text: "Qui est le rival de Sonic ?", answers: ["Mario", "Knuckles", "Shadow", "Dr. Eggman"], correct: 3, category: "Jeux Vidéo" },
];
const PLAYER_COLORS = [
    '#EF4444', '#3B82F6', '#22C55E', '#F59E0B', '#A855F7', '#EC4899',
    '#06B6D4', '#F97316', '#84CC16', '#6366F1', '#14B8A6', '#E11D48',
    '#8B5CF6', '#D946EF', '#0EA5E9', '#FACC15', '#FB923C', '#4ADE80',
    '#818CF8', '#F472B6', '#2DD4BF', '#A78BFA', '#FB7185', '#38BDF8',
    '#FCD34D', '#34D399', '#C084FC', '#E879F9', '#7DD3FC', '#FCA5A1',
    '#86EFAC', '#FDA4AF'
];
const AVATAR_EMOJIS = ['🎮', '🏆', '⭐', '🎯', '🎲', '🎪', '🎵', '🎨', '🚀', '🔥', '💎', '🎪', '🌟', '👑', '🦊', '🐼', '🦁', '🐸', '🦄', '🐲', '🐙', '🦋', '🌸', '🎸', '🥊', '⚽', '🏀', '🎱', '🧩', '🎭', '🎪', '🎪'];
// ==================== ROOM MANAGEMENT ====================
const rooms = new Map();
const MAX_PLAYERS = 32;
const generateCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 4; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
};
const generateId = () => Math.random().toString(36).substr(2, 9);
const getRoomState = (room) => {
    const playersObj = {};
    room.players.forEach((p, id) => {
        playersObj[id] = p;
    });
    return {
        code: room.code,
        hostId: room.hostId,
        status: room.status,
        players: playersObj,
        questions: room.questions,
        currentQuestionIndex: room.currentQuestionIndex,
        questionState: room.questionState,
        timerStartsAt: room.timerStartsAt,
        timerDuration: room.settings.timerDuration,
        settings: room.settings,
    };
};
const broadcastRoomState = (room, excludeId) => {
    const state = getRoomState(room);
    room.players.forEach((player, playerId) => {
        if (playerId !== excludeId && player.connected) {
            io.to(playerId).emit('state-update', state);
        }
    });
};
const selectQuestions = (category, count) => {
    let pool = category === 'Mixte' ? [...QUESTION_DB] : QUESTION_DB.filter(q => q.category === category);
    // Shuffle
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, Math.min(count, pool.length));
};
// ==================== SOCKET HANDLERS ====================
io.on('connection', (socket) => {
    console.log(`[CONNECT] ${socket.id}`);
    socket.on('create-room', (data) => {
        const code = generateCode();
        const room = {
            code,
            hostId: socket.id,
            players: new Map(),
            questions: [],
            currentQuestionIndex: 0,
            questionState: 'reading',
            timerStartsAt: null,
            status: 'lobby',
            settings: data.settings || { category: 'Mixte', questionCount: 10, timerDuration: 10 },
            avatarCounter: 0,
        };
        // Add host as a player
        room.players.set(socket.id, {
            id: socket.id,
            name: 'Hôte',
            score: 0,
            currentAnswer: null,
            answerTime: null,
            connected: true,
            color: PLAYER_COLORS[0],
            avatarIndex: 0,
        });
        room.avatarCounter = 1;
        rooms.set(code, room);
        console.log(`[ROOM CREATED] ${code} by ${socket.id}`);
        socket.emit('room-created', { code, state: getRoomState(room) });
    });
    socket.on('update-host-name', (data) => {
        // Find room where this socket is host
        for (const [, room] of rooms) {
            if (room.hostId === socket.id) {
                const player = room.players.get(socket.id);
                if (player) {
                    player.name = data.name;
                    broadcastRoomState(room);
                }
                break;
            }
        }
    });
    socket.on('update-settings', (data) => {
        for (const [, room] of rooms) {
            if (room.hostId === socket.id) {
                room.settings = data.settings;
                broadcastRoomState(room);
                break;
            }
        }
    });
    socket.on('join-room', (data) => {
        const { code, name } = data;
        const upperCode = code.toUpperCase().trim();
        const room = rooms.get(upperCode);
        if (!room) {
            socket.emit('error', { message: 'Partie introuvable. Vérifiez le code.' });
            return;
        }
        if (room.status !== 'lobby') {
            socket.emit('error', { message: 'La partie a déjà commencé !' });
            return;
        }
        if (room.players.size >= MAX_PLAYERS) {
            socket.emit('error', { message: 'La partie est pleine (32 joueurs max).' });
            return;
        }
        // Check for duplicate name
        let playerName = name.trim();
        let existingNames = Array.from(room.players.values()).map(p => p.name);
        if (existingNames.includes(playerName)) {
            let counter = 2;
            while (existingNames.includes(`${playerName} ${counter}`))
                counter++;
            playerName = `${playerName} ${counter}`;
        }
        const player = {
            id: socket.id,
            name: playerName,
            score: 0,
            currentAnswer: null,
            answerTime: null,
            connected: true,
            color: PLAYER_COLORS[room.avatarCounter % PLAYER_COLORS.length],
            avatarIndex: room.avatarCounter % AVATAR_EMOJIS.length,
        };
        room.players.set(socket.id, player);
        room.avatarCounter++;
        console.log(`[PLAYER JOINED] ${playerName} (${socket.id}) in room ${upperCode}`);
        socket.emit('room-joined', { state: getRoomState(room), playerId: socket.id });
        broadcastRoomState(room, socket.id);
    });
    socket.on('start-game', () => {
        for (const [, room] of rooms) {
            if (room.hostId === socket.id && room.status === 'lobby') {
                if (room.players.size < 2) {
                    socket.emit('error', { message: 'Il faut au moins 2 joueurs pour commencer !' });
                    return;
                }
                room.questions = selectQuestions(room.settings.category, room.settings.questionCount);
                room.status = 'playing';
                room.currentQuestionIndex = 0;
                room.questionState = 'reading';
                room.timerStartsAt = null;
                // Reset all scores
                room.players.forEach(p => {
                    p.score = 0;
                    p.currentAnswer = null;
                    p.answerTime = null;
                });
                console.log(`[GAME STARTED] Room ${room.code} - ${room.questions.length} questions`);
                broadcastRoomState(room);
                break;
            }
        }
    });
    socket.on('next-question-state', () => {
        for (const [, room] of rooms) {
            if (room.hostId === socket.id && room.status === 'playing') {
                if (room.questionState === 'reading') {
                    // Reveal answers and start timer
                    room.questionState = 'answering';
                    room.timerStartsAt = Date.now();
                    console.log(`[ANSWERING] Room ${room.code} - Q${room.currentQuestionIndex + 1}`);
                }
                else if (room.questionState === 'answering') {
                    // Reveal correct answer and calculate scores
                    room.questionState = 'revealed';
                    const currentQ = room.questions[room.currentQuestionIndex];
                    if (currentQ) {
                        room.players.forEach(p => {
                            if (p.currentAnswer === currentQ.correct && p.answerTime && room.timerStartsAt) {
                                const timeTaken = p.answerTime - room.timerStartsAt;
                                const timerMs = room.settings.timerDuration * 1000;
                                const speedBonus = Math.max(0, (timerMs - timeTaken) / timerMs);
                                const pointsEarned = 500 + Math.floor(speedBonus * 500);
                                p.score += pointsEarned;
                            }
                        });
                    }
                    console.log(`[REVEALED] Room ${room.code} - Q${room.currentQuestionIndex + 1}`);
                }
                else if (room.questionState === 'revealed') {
                    // Next question or end game
                    if (room.currentQuestionIndex >= room.questions.length - 1) {
                        room.status = 'finished';
                        console.log(`[GAME FINISHED] Room ${room.code}`);
                    }
                    else {
                        room.currentQuestionIndex++;
                        room.questionState = 'reading';
                        room.timerStartsAt = null;
                        room.players.forEach(p => {
                            p.currentAnswer = null;
                            p.answerTime = null;
                        });
                        console.log(`[NEXT Q] Room ${room.code} - Q${room.currentQuestionIndex + 1}`);
                    }
                }
                broadcastRoomState(room);
                break;
            }
        }
    });
    socket.on('answer', (data) => {
        for (const [, room] of rooms) {
            const player = room.players.get(socket.id);
            if (player && room.status === 'playing' && room.questionState === 'answering') {
                if (player.currentAnswer === null) {
                    player.currentAnswer = data.answerIndex;
                    player.answerTime = Date.now();
                    console.log(`[ANSWER] ${player.name} -> ${data.answerIndex}`);
                    broadcastRoomState(room);
                }
                break;
            }
        }
    });
    socket.on('kick-player', (data) => {
        for (const [, room] of rooms) {
            if (room.hostId === socket.id) {
                const playerToKick = room.players.get(data.playerId);
                if (playerToKick && data.playerId !== socket.id) {
                    room.players.delete(data.playerId);
                    io.to(data.playerId).emit('kicked', { message: 'Vous avez été expulsé de la partie.' });
                    broadcastRoomState(room);
                    console.log(`[KICKED] ${playerToKick.name} from room ${room.code}`);
                }
                break;
            }
        }
    });
    socket.on('restart-game', () => {
        for (const [, room] of rooms) {
            if (room.hostId === socket.id && room.status === 'finished') {
                room.status = 'lobby';
                room.currentQuestionIndex = 0;
                room.questionState = 'reading';
                room.timerStartsAt = null;
                room.questions = [];
                room.players.forEach(p => {
                    p.score = 0;
                    p.currentAnswer = null;
                    p.answerTime = null;
                });
                console.log(`[GAME RESTARTED] Room ${room.code}`);
                broadcastRoomState(room);
                break;
            }
        }
    });
    socket.on('disconnect', () => {
        console.log(`[DISCONNECT] ${socket.id}`);
        for (const [code, room] of rooms) {
            const player = room.players.get(socket.id);
            if (player) {
                player.connected = false;
                if (socket.id === room.hostId) {
                    // Host disconnected - delete room
                    room.players.forEach((p, pid) => {
                        if (pid !== socket.id) {
                            io.to(pid).emit('error', { message: "L'hôte s'est déconnecté. La partie est terminée." });
                        }
                    });
                    rooms.delete(code);
                    console.log(`[ROOM DELETED] ${code} (host disconnected)`);
                }
                else {
                    room.players.delete(socket.id);
                    broadcastRoomState(room);
                    console.log(`[PLAYER LEFT] ${player.name} from room ${code}`);
                }
                break;
            }
        }
    });
    socket.on('error', (error) => {
        console.error(`[SOCKET ERROR] ${socket.id}:`, error);
    });
});
// ==================== START SERVER ====================
const PORT = 3004;
httpServer.listen(PORT, () => {
    console.log(`🎮 Buzz! Quiz Server running on port ${PORT}`);
});
// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('Received SIGTERM, shutting down...');
    httpServer.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});
process.on('SIGINT', () => {
    console.log('Received SIGINT, shutting down...');
    httpServer.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});
