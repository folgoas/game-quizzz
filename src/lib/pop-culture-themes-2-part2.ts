import type { MCQQuestion, CashAnswerQuestion } from './game-types';

const shSpeed: MCQQuestion[] = [
  { id: 'sh_s1', text: "Quel métal indestructible recouvre le squelette de Wolverine ?", answers: ["Kryptonite", "Vibranium", "Adamantium", "Titane"], correct: 2, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_s2', text: "Quel est le nom de la ville de Batman ?", answers: ["Metropolis", "Star City", "Central City", "Gotham City"], correct: 3, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_s3', text: "De quel super-héros kryptonien Lex Luthor est-il l'ennemi juré ?", answers: ["Batman", "Superman", "Iron Man", "Aquaman"], correct: 1, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_s4', text: "Quel personnage Marvel est le Dieu du Tonnerre ?", answers: ["Loki", "Odin", "Zeus", "Thor"], correct: 3, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_s5', text: "Qui est le milliardaire derrière l'armure d'Iron Man ?", answers: ["Bruce Wayne", "Oliver Queen", "Tony Stark", "Lex Luthor"], correct: 2, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_s6', text: "Qui meurt piqué par une araignée radioactive et obtient des pouvoirs ?", answers: ["Peter Parker", "Harry Osborn", "Bruce Banner", "Flash Thompson"], correct: 0, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_s7', text: "Quel super-vilain claque des doigts avec le Gant de l'Infini ?", answers: ["Ultron", "Galactus", "Thanos", "Kang"], correct: 2, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_s8', text: "Quel super-héros DC est ultra-rapide ('L'Homme le plus rapide') ?", answers: ["Quicksilver", "Flash", "Dash", "Sonic"], correct: 1, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_s9', text: "Quel justicier Marvel est expert en pistolets, sabres et humour noir ?", answers: ["Deadshot", "Deadpool", "Deathstroke", "Deadeye"], correct: 1, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_s10', text: "Quel roi d'Atlantis communique avec les poissons ?", answers: ["Poséidon", "Namor", "Aquaman", "Triton"], correct: 2, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_s11', text: "Qui est surnommé 'Le Chevalier Noir' ?", answers: ["Batman", "Superman", "Green Arrow", "Blade"], correct: 0, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_s12', text: "Quel est le nom de code de Natasha Romanoff ?", answers: ["Black Canary", "Captain Marvel", "La Sorcière Rouge", "Black Widow"], correct: 3, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_s13', text: "Dans X-Men, quel est le pouvoir du Professeur X (Charles Xavier) ?", answers: ["Manipuler le métal", "Se téléporter", "Télépathie extrême", "Contrôler le feu"], correct: 2, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_s14', text: "Quel ennemi de Batman défiguré joue à pile ou face avec sa pièce ?", answers: ["Le Pingouin", "Le Joker", "Double-Face", "L'Homme-Mystère"], correct: 2, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_s15', text: "Quelle héroïne utilise le Lasso de la Vérité ?", answers: ["Supergirl", "Batgirl", "Harley Quinn", "Wonder Woman"], correct: 3, category: 'Super-Héros', type: 'speed-choice' }
];

const shMcq: MCQQuestion[] = [
  { id: 'sh_m1', text: "De quoi est composé le bouclier de Captain America ?", answers: ["Acier", "Vibranium", "Adamantium", "Fer galactique"], correct: 1, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_m2', text: "Où se trouve le royaume de Black Panther ?", answers: ["Sokovie", "Wakanda", "Genosha", "Latvèrie"], correct: 1, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_m3', text: "Qui incarne Tony Stark au cinéma ?", answers: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"], correct: 2, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_m4', text: "Le Joker au cinéma de 2008 (The Dark Knight) a été magistralement joué par :", answers: ["Jack Nicholson", "Jared Leto", "Joaquin Phoenix", "Heath Ledger"], correct: 3, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_m5', text: "Quel X-Men peut commander magnétiquement les métaux ?", answers: ["Wolverine", "Cyclope", "Magnéto", "Jean Grey"], correct: 2, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_m6', text: "Comment Captain Marvel a-t-elle obtenu ses pouvoirs (MCU) ?", answers: ["Morsure de créature", "Expérience ratée", "Lumière du Tesseract", "La foudre"], correct: 2, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_m7', text: "Quelle est la faiblesse absolue de Superman ?", answers: ["Le plomb", "La magie", "La kryptonite rouge", "La kryptonite verte"], correct: 3, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_m8', text: "Dans Guardiens de la Galaxie, qui est l'arbre parlant ?", answers: ["Groot", "Rocket", "Drax", "Mantis"], correct: 0, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_m9', text: "Quel justicier aveugle parcourt Hell's Kitchen chez Marvel ?", answers: ["Nightwing", "Punisher", "Daredevil", "Iron Fist"], correct: 2, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_m10', text: "Quelle pierre de l'Infini se trouve sur le front de Vision ?", answers: ["Espace", "Esprit", "Âme", "Réalité"], correct: 1, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_m11', text: "Lequel de ces super-héros NE FAIT PAS partie des Avengers originaux du film de 2012 ?", answers: ["Hulk", "Black Widow", "Spider-Man", "Hawkeye"], correct: 2, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_m12', text: "Qui incarne Wonder Woman dans le DCEU (Justice League) ?", answers: ["Scarlett Johansson", "Brie Larson", "Gal Gadot", "Margot Robbie"], correct: 2, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_m13', text: "Comment s'appelle le docteur qui se transforme en géant vert (Hulk) ?", answers: ["Stephen Strange", "Bruce Banner", "Reed Richards", "Hank Pym"], correct: 1, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_m14', text: "De quel super-héros Venom est-il l'ennemi juré graphique ?", answers: ["Spider-Man", "Iron Man", "Captain America", "Hulk"], correct: 0, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_m15', text: "Où se trouve le QG secret de Batman ?", answers: ["Batcave", "Manoir Wayne", "Forteresse de Solitude", "Tour de l'horloge"], correct: 0, category: 'Super-Héros', type: 'multiple-choice' }
];

const shCash: CashAnswerQuestion[] = [
  { id: 'sh_c1', text: "Nom du célèbre marteau asgardien de Thor ?", acceptedAnswers: ["Mjölnir", "Mjolnir"], category: 'Super-Héros', type: 'cash-answer' },
  { id: 'sh_c2', text: "Identité secrète de Spider-Man ?", acceptedAnswers: ["Peter Parker", "Peter"], category: 'Super-Héros', type: 'cash-answer' },
  { id: 'sh_c3', text: "Où est le QG des Avengers après New-York ?", acceptedAnswers: ["Avengers Compound", "Avengers Tower", "Tour Avengers", "Tour Stark"], category: 'Super-Héros', type: 'cash-answer' },
  { id: 'sh_c4', text: "La principale intelligence artificielle (et majordome vocal) de Tony Stark à ses débuts :", acceptedAnswers: ["JARVIS", "J.A.R.V.I.S."], category: 'Super-Héros', type: 'cash-answer' },
  { id: 'sh_c5', text: "Quel justicier à l'arc violet chez Marvel tire des flèches infaillibles ?", acceptedAnswers: ["Hawkeye", "Oeil de Faucon", "Clint Barton"], category: 'Super-Héros', type: 'cash-answer' },
  { id: 'sh_c6', text: "Quel est le prénom de Captain America ?", acceptedAnswers: ["Steve", "Steve Rogers"], category: 'Super-Héros', type: 'cash-answer' },
  { id: 'sh_c7', text: "Anti-héros extraterrestre symbiotique, grand ennemi sombre de Spider-Man ?", acceptedAnswers: ["Venom"], category: 'Super-Héros', type: 'cash-answer' },
  { id: 'sh_c8', text: "Le commissaire de police de la ville de Batman (allié clé) ?", acceptedAnswers: ["Gordon", "Commissaire Gordon", "Jim Gordon"], category: 'Super-Héros', type: 'cash-answer' },
  { id: 'sh_c9', text: "Comment s'appelle l'asile psychiatrique super-sécurisé de Gotham City ?", acceptedAnswers: ["Arkham", "Asile d'Arkham"], category: 'Super-Héros', type: 'cash-answer' },
  { id: 'sh_c10', text: "Titre du super-héros capable de rétrécir à la taille d'une fourmi (Marvel) ?", acceptedAnswers: ["Ant-Man", "L'homme fourmi"], category: 'Super-Héros', type: 'cash-answer' }
];

const tvSpeed: MCQQuestion[] = [
  { id: 'tv_s1', text: "Dans Friends, combien y a-t-il de membres rattachés au groupe principal ?", answers: ["4", "5", "6", "7"], correct: 2, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_s2', text: "Dans Breaking Bad, quelle drogue fabrique Walter White ?", answers: ["Héroïne", "Cocaïne", "Méthamphétamine", "LSD"], correct: 2, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_s3', text: "Comment s'appelle le patron égocentrique dans The Office (US) ?", answers: ["Jim Halpert", "Dwight Schrute", "Michael Scott", "Stanley Hudson"], correct: 2, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_s4', text: "Combien de saisons a la série Game of Thrones ?", answers: ["6", "7", "8", "9"], correct: 2, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_s5', text: "Quelle série suit des survivants du vol Oceanic 815 ?", answers: ["Fringe", "Lost", "Les Revenants", "Manifest"], correct: 1, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_s6', text: "Dans The Walking Dead, qui manie une arbalète très efficacement ?", answers: ["Rick", "Carl", "Michonne", "Daryl"], correct: 3, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_s7', text: "Dans quelle série dit-on 'La vérité est ailleurs' ?", answers: ["Fringe", "Supernatural", "X-Files", "Twin Peaks"], correct: 2, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_s8', text: "Quelle est la profession de Dexter Morgan ?", answers: ["Avocat", "Expert en taches de sang", "Détective privé", "Médecin légiste"], correct: 1, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_s9', text: "Dans Peaky Blinders, comment s'appelle le chef de la famille Shelby ?", answers: ["Arthur", "John", "Thomas", "Finn"], correct: 2, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_s10', text: "Quelle est la boisson alcoolisée phare célébrée dans Mad Men ?", answers: ["Whisky", "Vodka", "Bière", "Rhum"], correct: 0, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_s11', text: "Dans Doctor Who, quel objet bleu sert de vaisseau spatial/temporel ?", answers: ["Un bus", "Une cabine téléphonique anglaise", "Une poubelle", "Un conteneur"], correct: 1, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_s12', text: "Série culte d'animation pour adultes se passant à Springfield :", answers: ["Les Simpson", "South Park", "Family Guy", "Futurama"], correct: 0, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_s13', text: "Qui est le demi-frère encombrant de Malcolm dans la série du même nom ?", answers: ["Dewey", "Francis", "Reese", "Jamie"], correct: 2, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_s14', text: "Quelle famille traverse l'histoire des cartels de Medellín puis Cali dans Netflix ?", answers: ["Griselda", "Narcos", "El Chapo", "Gomorra"], correct: 1, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_s15', text: "Série médico-dramatique avec le docteur misanthrope Gregory...", answers: ["Grey's Anatomy", "Good Doctor", "Scrubs", "Dr House"], correct: 3, category: 'Séries TV Cultes', type: 'speed-choice' }
];

const tvMcq: MCQQuestion[] = [
  { id: 'tv_m1', text: "Où se réunissent toujours les amis dans Friends ?", answers: ["Au bar MacLaren's", "Au Central Perk", "Au Cheers", "Au pub"], correct: 1, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_m2', text: "Quel est l'adjectif préféré de Barney Stinson dans HIMYM ?", answers: ["Awesome", "Légendaire", "Epic", "Magical"], correct: 1, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_m3', text: "Dans Game of Thrones, quelle famille dirige le Nord (Winterfell) ?", answers: ["Lannister", "Targaryen", "Baratheon", "Stark"], correct: 3, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_m4', text: "Qui crée le monstre du même nom dans une fameuse chanson pour Netflix concernant The Witcher ?", answers: ["Geralt", "Jaskier", "Yennefer", "Triss"], correct: 1, category: 'Séries TV Cultes', type: 'multiple-choice' }, // "Toss a coin..."
  { id: 'tv_m5', text: "Dans quelle série trouve-t-on le 'Demogorgon' ?", answers: ["Supernatural", "The Witcher", "Stranger Things", "Shadowhunters"], correct: 2, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_m6', text: "Dans Squid Game, quelle épreuve infantile ouvre les jeux sanglants ?", answers: ["1, 2, 3 Soleil", "La marelle", "Cache-cache", "Le tir à la corde"], correct: 0, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_m7', text: "The Big Bang Theory met en scène des colocataires passionnés par :", answers: ["La littérature", "La science / geek culture", "Le sport", "Le cinéma"], correct: 1, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_m8', text: "Walter White fabrique de la drogue avec son ancien élève :", answers: ["Gale Boetticher", "Jesse Pinkman", "Skinny Pete", "Badger"], correct: 1, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_m9', text: "Quel acteur interprète le brillant neurochirurgien Dr. House ?", answers: ["Patrick Dempsey", "George Clooney", "Hugh Laurie", "Simon Baker"], correct: 2, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_m10', text: "Dans quelle série française d'Alexandre Astier trouve-t-on le roi Arthur ?", answers: ["Caméra Café", "Kaamelott", "Bref", "Hero Corp"], correct: 1, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_m11', text: "Dans Grey's Anatomy, quel est l'hôpital principal d'origine ?", answers: ["Sacred Heart", "Seattle Grace Hospital", "Princeton-Plainsboro", "County General"], correct: 1, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_m12', text: "Série d'HBO où des robots humanoïdes développent une conscience :", answers: ["Altered Carbon", "Humans", "Black Mirror", "Westworld"], correct: 3, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_m13', text: "La série Prison Break s'articule autour des frères :", answers: ["Scofield / Burrows", "Winchester", "Salvatore", "Shelby"], correct: 0, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_m14', text: "Série culte racontant l'adolescence du super-héros Superman ?", answers: ["Krypton", "Lois & Clark", "Smallville", "Superboy"], correct: 2, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_m15', text: "Comment s'appelle l'avocat véreux dérivé de Breaking Bad ?", answers: ["Saul Goodman", "Harvey Specter", "Matt Murdock", "Mike Ross"], correct: 0, category: 'Séries TV Cultes', type: 'multiple-choice' }
];

const tvCash: CashAnswerQuestion[] = [
  { id: 'tv_c1', text: "Nom du célèbre canapé sur lequel les acteurs s'assoient dans le bar Central Perk (Friends) ?", acceptedAnswers: ["Canapé orange", "Le canapé"], category: 'Séries TV Cultes', type: 'cash-answer' },
  { id: 'tv_c2', text: "Titre de la célèbre famille jaune vivant à Springfield ?", acceptedAnswers: ["Les Simpson", "The Simpsons", "Simpsons"], category: 'Séries TV Cultes', type: 'cash-answer' },
  { id: 'tv_c3', text: "Avocats de New York, série avec Meghan Markle.", acceptedAnswers: ["Suits", "Suite", "Avocats sur mesure"], category: 'Séries TV Cultes', type: 'cash-answer' },
  { id: 'tv_c4', text: "Prénom du chef des orphelins (enfant surdoué) dans la série Malcolm ?", acceptedAnswers: ["Malcolm"], category: 'Séries TV Cultes', type: 'cash-answer' },
  { id: 'tv_c5', text: "Dans quelle série française d'Alexandre Astier trouve-t-on le roi Arthur ?", acceptedAnswers: ["Kaamelott", "Kamelot"], category: 'Séries TV Cultes', type: 'cash-answer' },
  { id: 'tv_c6', text: "Comment s'appelle le docteur cynique expert en diagnostics incarné par Hugh Laurie ?", acceptedAnswers: ["Dr House", "House", "Docteur House"], category: 'Séries TV Cultes', type: 'cash-answer' },
  { id: 'tv_c7', text: "La série de Netflix avec des 'jeux' enfantins sud-coréens mortels.", acceptedAnswers: ["Squid Game", "Le jeu du calamar"], category: 'Séries TV Cultes', type: 'cash-answer' },
  { id: 'tv_c8', text: "Nom de l'acteur incarnant Jon Snow dans Game of Thrones (Kit ...) ?", acceptedAnswers: ["Kit Harington", "Harington"], category: 'Séries TV Cultes', type: 'cash-answer' },
  { id: 'tv_c9', text: "Le nom du seigneur de la drogue incarné par Wagner Moura dans Narcos.", acceptedAnswers: ["Pablo Escobar", "Escobar"], category: 'Séries TV Cultes', type: 'cash-answer' },
  { id: 'tv_c10', text: "Nom du journal de la célèbre chroniqueuse anonyme de Gossip Girl.", acceptedAnswers: ["Gossip Girl"], category: 'Séries TV Cultes', type: 'cash-answer' }
];

export const THEMES_PART2_MCQ = [...shSpeed, ...shMcq, ...tvSpeed, ...tvMcq];
export const THEMES_PART2_CASH = [...shCash, ...tvCash];
