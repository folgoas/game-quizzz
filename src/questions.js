// Fonction pour générer des réponses incorrectes pour les consoles
function getIncorrectConsoleAnswers(correctAnswer) {
    const allConsoles = [
        "Xbox", "Xbox 360", "Xbox One", "Xbox Series X",
        "PlayStation", "PlayStation 2", "PlayStation 3", "PlayStation 4", "PlayStation 5",
        "Nintendo 64", "GameCube", "Wii", "Wii U", "Nintendo Switch",
        "Game Boy", "Nintendo DS", "Nintendo 3DS",
        "Mega Drive", "Dreamcast", "Saturn"
    ];
    
    return allConsoles
        .filter(console => console !== correctAnswer)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
}

// Fonction pour générer des réponses incorrectes pour les jeux
function getIncorrectGameAnswers(correctAnswer) {
    const allGames = [
        "Super Mario Bros", "The Legend of Zelda", "Minecraft", "GTA V",
        "Red Dead Redemption 2", "The Last of Us", "God of War", "Fortnite",
        "Call of Duty", "Assassin's Creed", "Pokemon", "Final Fantasy",
        "Metal Gear Solid", "Resident Evil", "Street Fighter", "Sonic"
    ];
    
    return allGames
        .filter(game => game !== correctAnswer)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
}

// Fonction pour générer des réponses incorrectes pour les années
function getIncorrectYearAnswers(correctYear) {
    const year = parseInt(correctYear);
    const possibleYears = [
        year - 5, year - 3, year - 1,
        year + 1, year + 3, year + 5
    ].map(String);
    
    return possibleYears
        .filter(y => y !== correctYear)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
}

// Fonction pour générer des réponses incorrectes pour les créateurs
function getIncorrectCreatorAnswers(correctAnswer) {
    const allCreators = [
        "Shigeru Miyamoto", "Hideo Kojima", "Satoshi Tajiri", "Hironobu Sakaguchi",
        "Markus Persson", "Will Wright", "Patrice Désilets", "Sid Meier",
        "John Carmack", "Gabe Newell", "Notch", "Jonathan Blow"
    ];
    
    return allCreators
        .filter(creator => creator !== correctAnswer)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
}

function generateQuestions() {
    const templates = [
        {
            category: "Histoire",
            questions: [
                {
                    base: "En quelle année est sorti ",
                    games: [
                        "Super Mario Bros", "The Legend of Zelda", "Sonic the Hedgehog", 
                        "Doom", "Pac-Man", "Space Invaders", "World of Warcraft",
                        "Grand Theft Auto III", "Minecraft", "The Last of Us"
                    ],
                    years: ["1985", "1986", "1991", "1993", "1980", "1978", "2004", 
                           "2001", "2011", "2013"],
                    getIncorrectAnswers: (correct) => getIncorrectYearAnswers(correct),
                    humor: [
                        "L'année où les plombiers sont devenus cool",
                        "L'époque où on confondait encore Link et Zelda",
                        "Quand SEGA croyait encore battre Nintendo",
                        "L'année où les démons ont envahi... nos soirées",
                        "Le début de la fièvre des fantômes",
                        "Avant même l'invention du smartphone, imaginez !",
                        "Quand procrastiner est devenu un mode de vie",
                        "L'année où le crime est devenu... pixelisé",
                        "Quand les cubes ont conquis le monde",
                        "L'année où les champignons ont cessé d'être effrayants"
                    ]
                }
            ]
        },
        {
            category: "Personnages",
            questions: [
                {
                    base: "Qui est le créateur de ",
                    games: [
                        "Mario", "Metal Gear", "Pokemon", "Final Fantasy", 
                        "Minecraft", "The Sims", "Assassin's Creed"
                    ],
                    creators: [
                        "Shigeru Miyamoto", "Hideo Kojima", "Satoshi Tajiri", 
                        "Hironobu Sakaguchi", "Markus Persson", "Will Wright",
                        "Patrice Désilets"
                    ],
                    getIncorrectAnswers: (correct) => getIncorrectCreatorAnswers(correct),
                    humor: [
                        "Le génie qui a fait d'un plombier une star",
                        "Le maître du mindfuck vidéoludique",
                        "Celui qui a réussi à nous faire collectionner des monstres",
                        "L'homme qui a rendu le mot 'Final' très ironique",
                        "Le type qui a prouvé que les cubes peuvent être cool",
                        "Le sadique qui nous fait noyer des gens dans des piscines",
                        "Le prof d'histoire qui a pris son job très au sérieux"
                    ]
                }
            ]
        },
        {
            category: "Ventes",
            questions: [
                {
                    base: "Quelle est la console la plus vendue de ",
                    companies: [
                        "Nintendo", "Sony", "Microsoft", "SEGA"
                    ],
                    answers: [
                        "Nintendo DS", "PlayStation 2", "Xbox 360", "Mega Drive"
                    ],
                    getIncorrectAnswers: (correct) => getIncorrectConsoleAnswers(correct),
                    humor: [
                        "La preuve que deux écrans valent mieux qu'un",
                        "La console qui a survécu à trois présidents",
                        "Quand Microsoft a appris à compter jusqu'à 360",
                        "L'époque où SEGA était encore dans la course"
                    ]
                }
            ]
        },
        {
            category: "Records",
            questions: [
                {
                    base: "Quel est le record de ventes pour ",
                    games: [
                        "GTA V", "Tetris", "Minecraft", "Wii Sports",
                        "PUBG", "Mario Kart 8", "Red Dead Redemption 2"
                    ],
                    sales: [
                        "170 millions", "200 millions", "238 millions", 
                        "82 millions", "75 millions", "63 millions", "50 millions"
                    ],
                    getIncorrectAnswers: (correct) => getIncorrectYearAnswers(correct),
                    humor: [
                        "Apparemment, le crime paie... en pixels",
                        "La preuve que l'OCD peut être rentable",
                        "Le jeu qui a rendu l'architecture accessible aux masses",
                        "Le sport de salon qui a cassé beaucoup de TV",
                        "Battle Royale avant que ce soit cool",
                        "Mario fait du karting mieux que la F1",
                        "Le Far West n'a jamais été aussi rentable"
                    ]
                }
            ]
        }
    ];

    let allQuestions = [];

    // Génération de questions basées sur les templates
    templates.forEach(template => {
        template.questions.forEach(q => {
            for (let i = 0; i < q.games?.length || i < q.companies?.length; i++) {
                const correctAnswer = q.years?.[i] || q.creators?.[i] || q.answers?.[i] || q.sales?.[i];
                const incorrectAnswers = q.getIncorrectAnswers(correctAnswer);
                const allAnswers = [correctAnswer, ...incorrectAnswers];
                
                const question = {
                    question: q.base + (q.games?.[i] || q.companies?.[i]) + " ?",
                    answers: shuffleArray(allAnswers),
                    correct: allAnswers.indexOf(correctAnswer),
                    humor: q.humor[i] || "Une réponse qui montre votre culture gaming... ou pas !"
                };
                allQuestions.push(question);
            }
        });
    });

    // Questions statiques enrichies
    const staticQuestions = [
        {
            question: "Quel personnage de Street Fighter est connu pour son Hadoken ?",
            answers: ["Ryu", "Ken", "Chun-Li", "Guile"],
            correct: 0,
            humor: "La boule de feu la plus copiée de l'histoire du jeu vidéo"
        },
        {
            question: "Quel est le nom du vaisseau dans Mass Effect ?",
            answers: ["Normandy", "Enterprise", "Pillar of Autumn", "Millennium Falcon"],
            correct: 0,
            humor: "Le seul vaisseau spatial avec un minibar décent"
        },
        {
            question: "Dans quel jeu trouve-t-on un gâteau mensonger ?",
            answers: ["Portal", "Cooking Mama", "Overcooked", "Cake Mania"],
            correct: 0,
            humor: "GLaDOS vous ment, mais c'est pour votre bien... ou pas"
        },
        {
            question: "Quel est le vrai nom de Solid Snake ?",
            answers: ["David", "John", "Jack", "James"],
            correct: 0,
            humor: "Un nom de code plus cool que son vrai nom, clairement"
        },
        {
            question: "Quelle est la phrase fétiche de Duke Nukem ?",
            answers: ["It's time to kick ass and chew bubble gum", "Groovy", "Hasta la vista, baby", "Yippee ki-yay"],
            correct: 0,
            humor: "Et il est toujours à court de chewing-gum..."
        },
        {
            question: "Quel jeu a popularisé le terme 'Loot Box' ?",
            answers: ["Overwatch", "FIFA", "Counter-Strike", "Team Fortress 2"],
            correct: 0,
            humor: "Ou comment transformer le gambling en 'surprise mechanics'"
        },
        {
            question: "Dans quel jeu peut-on utiliser un 'Fus Ro Dah' ?",
            answers: ["Skyrim", "Dragon Age", "Dark Souls", "The Witcher"],
            correct: 0,
            humor: "Le cri qui a lancé mille memes"
        },
        {
            question: "Quel est le nom du protagoniste de God of War ?",
            answers: ["Kratos", "Zeus", "Ares", "Thor"],
            correct: 0,
            humor: "Le papa le plus grognon de la mythologie"
        },
        {
            question: "Quel jeu vous fait ramasser des bananes en kart ?",
            answers: ["Mario Kart", "Crash Team Racing", "Sonic Racing", "LittleBigPlanet Karting"],
            correct: 0,
            humor: "La seule course où les peaux de bananes sont plus dangereuses que les tortues"
        },
        {
            question: "Quel est le nom du héros de Half-Life ?",
            answers: ["Gordon Freeman", "Morgan Freeman", "Isaac Clarke", "John Freeman"],
            correct: 0,
            humor: "Le seul scientifique qui combat des aliens sans dire un mot"
        }
        // ... plus de questions statiques
    ];

    allQuestions = [...allQuestions, ...staticQuestions];

    // Génération de questions supplémentaires pour atteindre 500
    const baseQuestions = [...allQuestions];
    while (allQuestions.length < 500) {
        const baseQuestion = baseQuestions[Math.floor(Math.random() * baseQuestions.length)];
        const newQuestion = { ...baseQuestion };
        
        // Variation sur la question
        const variations = [
            "Version difficile : ",
            "Pour les experts : ",
            "Niveau hardcore : ",
            "Question bonus : ",
            "Pour les vrais gamers : "
        ];
        newQuestion.question = variations[Math.floor(Math.random() * variations.length)] + baseQuestion.question;
        
        // Variation sur l'humour
        const humorVariations = [
            "Même votre grand-mère connaît celle-là !",
            "Si vous avez eu faux, rendez votre carte de gamer",
            "Une question si facile que même un NPC pourrait y répondre",
            "Votre score sur cette question définira votre street cred gaming",
            "La réponse est aussi évidente qu'un boss final dans un volcan"
        ];
        newQuestion.humor = humorVariations[Math.floor(Math.random() * humorVariations.length)];

        allQuestions.push(newQuestion);
    }

    return shuffleArray(allQuestions);
}

const questions = generateQuestions();

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function getRandomQuestions(num) {
    return shuffleArray([...questions]).slice(0, num);
}
