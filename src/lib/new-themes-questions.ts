import type { MCQQuestion, CashAnswerQuestion } from './game-types';

// ==========================================
// 1. STRANGER THINGS
// ==========================================
const strangerThingsMCQ: MCQQuestion[] = [
  // Speed
  { id: 'st_sp01', text: "Quel est le nom de la ville où se déroule Stranger Things ?", answers: ["Hawkins", "Riverdale", "Derry", "Forks"], correct: 0, category: 'Stranger Things', type: 'speed-choice' },
  { id: 'st_sp02', text: "Quel chiffre est tatoué sur le bras de l'héroïne ?", answers: ["007", "011", "008", "001"], correct: 1, category: 'Stranger Things', type: 'speed-choice' },
  { id: 'st_sp03', text: "Dans la saison 1, qui disparaît dans le Monde à l'envers ?", answers: ["Mike", "Dustin", "Will", "Lucas"], correct: 2, category: 'Stranger Things', type: 'speed-choice' },
  { id: 'st_sp04', text: "Quel aliment Onze (Eleven) adore-t-elle par-dessus tout ?", answers: ["Pizzas", "Gaufres Eggo", "Frites", "Donuts"], correct: 1, category: 'Stranger Things', type: 'speed-choice' },
  { id: 'st_sp05', text: "Quelle chanson sauve Max de Vecna dans la saison 4 ?", answers: ["Master of Puppets", "Running Up That Hill", "Thriller", "Africa"], correct: 1, category: 'Stranger Things', type: 'speed-choice' },
  { id: 'st_sp06', text: "Comment s'appelle le centre commercial de la saison 3 ?", answers: ["Starcourt", "Westfield", "Hawkins Mall", "Central Park"], correct: 0, category: 'Stranger Things', type: 'speed-choice' },
  // Multiple Choice
  { id: 'st_mc01', text: "Quelle est l'arme de prédilection de Steve Harrington ?", answers: ["Un pistolet", "Une batte de baseball avec des clous", "Un arc", "Une machette"], correct: 1, category: 'Stranger Things', type: 'multiple-choice' },
  { id: 'st_mc02', text: "Quel est le nom du monstre principal de la saison 1 ?", answers: ["Le Démogorgon", "Le Flagelleur Mental", "Vecna", "Le Chupacabra"], correct: 0, category: 'Stranger Things', type: 'multiple-choice' },
  { id: 'st_mc03', text: "Quel métier exerce Jim Hopper ?", answers: ["Maire", "Professeur", "Chef de la police", "Scientifique"], correct: 2, category: 'Stranger Things', type: 'multiple-choice' },
  { id: 'st_mc04', text: "Qui dirige le laboratoire d'Hawkins au début ?", answers: ["Dr. Owens", "Dr. Brenner", "Vecna", "Hopper"], correct: 1, category: 'Stranger Things', type: 'multiple-choice' },
  { id: 'st_mc05', text: "Où Hopper est-il retenu prisonnier au début de la saison 4 ?", answers: ["En France", "En Russie", "En Chine", "En Alaska"], correct: 1, category: 'Stranger Things', type: 'multiple-choice' },
  { id: 'st_mc06', text: "Qui gère le club 'Hellfire' au lycée ?", answers: ["Mike", "Dustin", "Eddie Munson", "Steve"], correct: 2, category: 'Stranger Things', type: 'multiple-choice' },
];

const strangerThingsCash: CashAnswerQuestion[] = [
  { id: 'st_ca01', text: "Comment s'appelle la dimension sombre et parallèle ?", acceptedAnswers: ["Le Monde à l'envers", "L'Upside Down", "Upside Down", "Monde a l'envers"], category: 'Stranger Things', type: 'cash-answer' },
  { id: 'st_ca02', text: "Comment s'appelle le petit animal élevé par Dustin en saison 2 ?", acceptedAnswers: ["Dart"], category: 'Stranger Things', type: 'cash-answer' },
  { id: 'st_ca03', text: "Prénom du frère aîné de Will Byers ?", acceptedAnswers: ["Jonathan"], category: 'Stranger Things', type: 'cash-answer' },
  { id: 'st_ca04', text: "Quel jeu de rôle de table jouent régulièrement les garçons ?", acceptedAnswers: ["Donjons et Dragons", "D&D"], category: 'Stranger Things', type: 'cash-answer' },
  { id: 'st_ca05', text: "Comment s'appelle la petite sœur de Mike ?", acceptedAnswers: ["Holly"], category: 'Stranger Things', type: 'cash-answer' },
  { id: 'st_ca06', text: "Quel est le véritable nom (numéro) de Vecna enfant ?", acceptedAnswers: ["Un", "001", "One"], category: 'Stranger Things', type: 'cash-answer' },
];

// ==========================================
// 2. TINTIN
// ==========================================
const tintinMCQ: MCQQuestion[] = [
  { id: 'ti_sp01', text: "Quel est le fidèle compagnon de Tintin ?", answers: ["Idéfix", "Milou", "Pluto", "Rantanplan"], correct: 1, category: 'Tintin', type: 'speed-choice' },
  { id: 'ti_sp02', text: "Quel est le juron préféré du Capitaine Haddock ?", answers: ["Saperlipopette !", "Bachi-bouzouk !", "Nom de Zeus !", "Parbleu !"], correct: 1, category: 'Tintin', type: 'speed-choice' },
  { id: 'ti_sp03', text: "Où habite le Capitaine Haddock ?", answers: ["Au château de Moulinsart", "À Paris", "Au manoir", "À Bruxelles"], correct: 0, category: 'Tintin', type: 'speed-choice' },
  { id: 'ti_sp04', text: "Qui est le professeur dur de la feuille qui invente des sous-marins ?", answers: ["Tournesol", "Calculus", "Boussole", "Laborite"], correct: 0, category: 'Tintin', type: 'speed-choice' },
  { id: 'ti_sp05', text: "Identifiez les deux détectives maladroits et identiques :", answers: ["Dupond et Dupont", "Tic et Tac", "Blake et Mortimer", "Boule et Bill"], correct: 0, category: 'Tintin', type: 'speed-choice' },
  { id: 'ti_sp06', text: "Quel pays Tintin n'a-t-il jamais visité en BD ?", answers: ["L'URSS", "La lune", "L'Australie", "Le Congo"], correct: 2, category: 'Tintin', type: 'speed-choice' },
  { id: 'ti_mc01', text: "Comment s'appelle la célèbre cantatrice italienne, souvent moquée par Haddock ?", answers: ["Maria Callas", "Bianca Castafiore", "Carlotta", "Diva Plavalaguna"], correct: 1, category: 'Tintin', type: 'multiple-choice' },
  { id: 'ti_mc02', text: "Quel animal vole le bijou de la Castafiore ?", answers: ["Une pie", "Un singe", "Un chat", "Milou"], correct: 0, category: 'Tintin', type: 'multiple-choice' },
  { id: 'ti_mc03', text: "Quel est l'ennemi juré, milliardaire et trafiquant, de Tintin ?", answers: ["Rastapopoulos", "Mitsuhirato", "Müller", "Allan"], correct: 0, category: 'Tintin', type: 'multiple-choice' },
  { id: 'ti_mc04', text: "Quel est le nom du fidèle ami chinois de Tintin ?", answers: ["Tchang", "Ching", "Ming", "Fang"], correct: 0, category: 'Tintin', type: 'multiple-choice' },
  { id: 'ti_mc05', text: "De quelle couleur est la fameuse fusée lunaire de Tournesol ?", answers: ["Grise", "Rouge et blanche", "Noire et jaune", "Bleue"], correct: 1, category: 'Tintin', type: 'multiple-choice' },
  { id: 'ti_mc06', text: "Dans Le Lotus Bleu, de quelle drogue le trafic est-il question ?", answers: ["L'opium", "Le cigare", "La marijuana", "Le Lotus"], correct: 0, category: 'Tintin', type: 'multiple-choice' },
];

const tintinCash: CashAnswerQuestion[] = [
  { id: 'ti_ca01', text: "Comment s'appelle le majordome pince-sans-rire de Moulinsart ?", acceptedAnswers: ["Nestor"], category: 'Tintin', type: 'cash-answer' },
  { id: 'ti_ca02', text: "Quelle fleur est 'Bleue' dans l'une de ses aventures célèbres en Chine ?", acceptedAnswers: ["Le Lotus", "Lotus"], category: 'Tintin', type: 'cash-answer' },
  { id: 'ti_ca03', text: "Quel objet magique ou rituel donne son titre à 'Les Sept... de cristal' ?", acceptedAnswers: ["Boules"], category: 'Tintin', type: 'cash-answer' },
  { id: 'ti_ca04', text: "Nom du célèbre sceptre du roi de Syldavie ?", acceptedAnswers: ["Le sceptre d'Ottokar", "Ottokar"], category: 'Tintin', type: 'cash-answer' },
  { id: 'ti_ca05', text: "Quel navire cherche à tout prix Haddock (Le Secret de la...) ?", acceptedAnswers: ["La Licorne", "Licorne"], category: 'Tintin', type: 'cash-answer' },
  { id: 'ti_ca06', text: "Quel est le prénom du Capitaine Haddock (révélé tardivement) ?", acceptedAnswers: ["Archibald"], category: 'Tintin', type: 'cash-answer' },
];

// ==========================================
// 3. ANNÉES 80
// ==========================================
const annees80MCQ: MCQQuestion[] = [
  { id: 'a80_sp01', text: "Quel petit extraterrestre veut téléphoner maison (1982) ?", answers: ["Alf", "E.T.", "Yoda", "Spock"], correct: 1, category: 'Années 80', type: 'speed-choice' },
  { id: 'a80_sp02', text: "Qui chante 'Thriller' en 1982 ?", answers: ["Prince", "Madonna", "Michael Jackson", "David Bowie"], correct: 2, category: 'Années 80', type: 'speed-choice' },
  { id: 'a80_sp03', text: "Quelle voiture mythique voyage dans le temps dans Retour vers le Futur ?", answers: ["Ferrari", "Ford Mustang", "DeLorean", "Porsche"], correct: 2, category: 'Années 80', type: 'speed-choice' },
  { id: 'a80_sp04', text: "Quel est l'inventeur du célèbre cube multicolore des années 80 ?", answers: ["Tetris", "Rubik", "Nintendo", "Lego"], correct: 1, category: 'Années 80', type: 'speed-choice' },
  { id: 'a80_sp05', text: "Quel fantôme vert fluo affronte SOS Fantômes ?", answers: ["Casper", "Bouffe-Tout", "Slimer", "Les deux (Slimer/Bouffe-Tout)"], correct: 3, category: 'Années 80', type: 'speed-choice' },
  { id: 'a80_sp06', text: "Qui chante 'Like a Virgin' (1984) ?", answers: ["Cyndi Lauper", "Madonna", "Whitney Houston", "Cher"], correct: 1, category: 'Années 80', type: 'speed-choice' },
  { id: 'a80_mc01', text: "Quelle console de jeu de salon Nintendo a dominé la fin des années 80 ?", answers: ["Super Nintendo", "Nintendo Entertainment System (NES)", "GameCube", "N64"], correct: 1, category: 'Années 80', type: 'multiple-choice' },
  { id: 'a80_mc02', text: "Quel film met en scène un bébé enlevé par le Roi des Gobelins (David Bowie) ?", answers: ["Labyrinthe", "Dark Crystal", "L'Histoire sans fin", "Willow"], correct: 0, category: 'Années 80', type: 'multiple-choice' },
  { id: 'a80_mc03', text: "Quel duo chante 'Wake Me Up Before You Go-Go' ?", answers: ["Wham!", "Tears for Fears", "A-ha", "Duran Duran"], correct: 0, category: 'Années 80', type: 'multiple-choice' },
  { id: 'a80_mc04', text: "Je suis un flic robotique de Détroit. Je suis...", answers: ["Terminator", "Blade Runner", "RoboCop", "Judge Dredd"], correct: 2, category: 'Années 80', type: 'multiple-choice' },
  { id: 'a80_mc05', text: "Quel événement géopolitique marque la fin de l'année 1989 ?", answers: ["La chute de l'URSS", "La chute du Mur de Berlin", "La fin de la guerre froide", "Guerre du Golfe"], correct: 1, category: 'Années 80', type: 'multiple-choice' },
  { id: 'a80_mc06', text: "Quel film d'action de 1988 se déroule dans la tour Nakatomi Plaza ?", answers: ["Arme Fatale", "Rambo", "Piège de Cristal (Die Hard)", "Terminator"], correct: 2, category: 'Années 80', type: 'multiple-choice' },
];

const annees80Cash: CashAnswerQuestion[] = [
  { id: 'a80_ca01', text: "Comment s'appelle l'extraterrestre mangeur de chats en peluche à la TV ?", acceptedAnswers: ["Alf"], category: 'Années 80', type: 'cash-answer' },
  { id: 'a80_ca02', text: "Inventé par Nintendo en 1989, je suis la console portable ultime des cours de récré.", acceptedAnswers: ["Game Boy"], category: 'Années 80', type: 'cash-answer' },
  { id: 'a80_ca03', text: "Jeu d'arcade de 1980 où un rond jaune mange des pac-gommes.", acceptedAnswers: ["Pac-Man", "Pacman"], category: 'Années 80', type: 'cash-answer' },
  { id: 'a80_ca04', text: "Chanteuse française de 'Ouragan' (1986), issue d'une famille princière.", acceptedAnswers: ["Stéphanie de Monaco", "Stephanie"], category: 'Années 80', type: 'cash-answer' },
  { id: 'a80_ca05', text: "Créature duveteuse qu'il ne faut pas nourrir après minuit.", acceptedAnswers: ["Gremlins", "Mogwai", "Gizmo"], category: 'Années 80', type: 'cash-answer' },
  { id: 'a80_ca06', text: "Héroïne aux cheveux arc-en-ciel qui combat Murky et Lurky ?", acceptedAnswers: ["Blondine au pays de l'arc-en-ciel", "Blondine"], category: 'Années 80', type: 'cash-answer' },
];

// ==========================================
// 4. ANNÉES 90
// ==========================================
const annees90MCQ: MCQQuestion[] = [
  { id: 'a90_sp01', text: "Quel film de 1997 bat tous les records au box-office et coule à la fin ?", answers: ["Avatar", "Titanic", "Abyss", "Waterworld"], correct: 1, category: 'Années 90', type: 'speed-choice' },
  { id: 'a90_sp02', text: "Quel girls band chante 'Wannabe' en 1996 ?", answers: ["TLC", "Destiny's Child", "Spice Girls", "All Saints"], correct: 2, category: 'Années 90', type: 'speed-choice' },
  { id: 'a90_sp03', text: "Quel petit animal virtuel enfermé dans un œuf devait-on nourrir ?", answers: ["Pokémon", "Furby", "Tamagotchi", "Digimon"], correct: 2, category: 'Années 90', type: 'speed-choice' },
  { id: 'a90_sp04', text: "Dans le film Matrix (1999), quelle pilule Néo choisit-il ?", answers: ["Bleue", "Verte", "Rouge", "Jaune"], correct: 2, category: 'Années 90', type: 'speed-choice' },
  { id: 'a90_sp05', text: "Quel boys band français chante 'Partir un jour' ?", answers: ["Alliage", "2Be3", "G-Squad", "Poetic Lover"], correct: 1, category: 'Années 90', type: 'speed-choice' },
  { id: 'a90_sp06', text: "Quel dinosaure cloné s'échappe en 1993 au cinéma ?", answers: ["Godzilla", "Jurassic Park (T-Rex)", "Denver", "King Kong"], correct: 1, category: 'Années 90', type: 'speed-choice' },
  { id: 'a90_mc01', text: "Quelle franchise de jeux de cartes et de monstres envahit les écoles en 1999 en France ?", answers: ["Yu-Gi-Oh!", "Pokémon", "Magic", "Beyblade"], correct: 1, category: 'Années 90', type: 'multiple-choice' },
  { id: 'a90_mc02', text: "Quelle console de Sony révolutionne le marché avec ses jeux sur CD en 1994/1995 ?", answers: ["Nintendo 64", "Saturn", "PlayStation", "Dreamcast"], correct: 2, category: 'Années 90', type: 'multiple-choice' },
  { id: 'a90_mc03', text: "Quelle série télé suit un groupe de 6 amis à New York (Rachel, Ross, Monica...) ?", answers: ["Seinfeld", "How I Met Your Mother", "Friends", "Charmed"], correct: 2, category: 'Années 90', type: 'multiple-choice' },
  { id: 'a90_mc04', text: "Quel groupe de grunge américain chante 'Smells Like Teen Spirit' ?", answers: ["Pearl Jam", "Soundgarden", "Nirvana", "Alice in Chains"], correct: 2, category: 'Années 90', type: 'multiple-choice' },
  { id: 'a90_mc05', text: "La France a remporté sa première Coupe du Monde de football en :", answers: ["1990", "1994", "1998", "1999"], correct: 2, category: 'Années 90', type: 'multiple-choice' },
  { id: 'a90_mc06', text: "Qui chante 'Baby One More Time' (1998) en tenue d'écolière ?", answers: ["Christina Aguilera", "Britney Spears", "Mandy Moore", "Jessica Simpson"], correct: 1, category: 'Années 90', type: 'multiple-choice' },
];

const annees90Cash: CashAnswerQuestion[] = [
  { id: 'a90_ca01', text: "Console de Nintendo de 1996 connue pour Mario 64 et ses cartouches.", acceptedAnswers: ["Nintendo 64", "N64"], category: 'Années 90', type: 'cash-answer' },
  { id: 'a90_ca02', text: "Premier long-métrage en images de synthèse de Pixar (1995).", acceptedAnswers: ["Toy Story"], category: 'Années 90', type: 'cash-answer' },
  { id: 'a90_ca03', text: "Jouet en peluche robotique qui parlait sa propre langue (le furbish).", acceptedAnswers: ["Furby"], category: 'Années 90', type: 'cash-answer' },
  { id: 'a90_ca04', text: "Technologie de disque optique qui remplace petit à petit la VHS dans les années 90.", acceptedAnswers: ["Le DVD", "DVD"], category: 'Années 90', type: 'cash-answer' },
  { id: 'a90_ca05', text: "Nom du célèbre tamagotchi évolutif basé sur le dessin animé de Digimon.", acceptedAnswers: ["Digivice", "Digimon"], category: 'Années 90', type: 'cash-answer' },
  { id: 'a90_ca06', text: "Danse de l'été 1996 lancée par Los del Río, impossible à éviter.", acceptedAnswers: ["Macarena", "La Macarena"], category: 'Années 90', type: 'cash-answer' },
];

// ==========================================
// 5. ANNÉES 2000
// ==========================================
const annees2000MCQ: MCQQuestion[] = [
  { id: 'a00_sp01', text: "Quel petit sorcier arrive au cinéma en 2001 ?", answers: ["Frodon", "Harry Potter", "Percy Jackson", "Newt Scamander"], correct: 1, category: 'Années 2000', type: 'speed-choice' },
  { id: 'a00_sp02', text: "Quel produit Apple révolutionne l'écoute de la musique mp3 en 2001 ?", answers: ["iPhone", "iPad", "iPod", "iMac"], correct: 2, category: 'Années 2000', type: 'speed-choice' },
  { id: 'a00_sp03', text: "Comment s'appelle l'ogre vert de Dreamworks (2001) ?", answers: ["Hulk", "Shrek", "Fiona", "Gargamel"], correct: 1, category: 'Années 2000', type: 'speed-choice' },
  { id: 'a00_sp04', text: "Quel film de Peter Jackson marque les années 2000 avec son anneau unique ?", answers: ["Le Seigneur des Anneaux", "Le Hobbit", "Warcraft", "Game of Thrones"], correct: 0, category: 'Années 2000', type: 'speed-choice' },
  { id: 'a00_sp05', text: "Qui chante 'Toxic' en 2003 ?", answers: ["Madonna", "Kylie Minogue", "Britney Spears", "Gwen Stefani"], correct: 2, category: 'Années 2000', type: 'speed-choice' },
  { id: 'a00_sp06', text: "Quelle émission de télé-réalité d'enfermement arrive en France en 2001 ?", answers: ["Star Academy", "Koh-Lanta", "Loft Story", "Secret Story"], correct: 2, category: 'Années 2000', type: 'speed-choice' },
  { id: 'a00_mc01', text: "En 2007, Steve Jobs présente au monde :", answers: ["L'iPod Touch", "L'iPhone", "L'iPad", "L'Apple Watch"], correct: 1, category: 'Années 2000', type: 'multiple-choice' },
  { id: 'a00_mc02', text: "Quel réseau social créé par Mark Zuckerberg s'ouvre au monde en 2006 ?", answers: ["MySpace", "Twitter", "Facebook", "Instagram"], correct: 2, category: 'Années 2000', type: 'multiple-choice' },
  { id: 'a00_mc03', text: "Quelle console Nintendo avec une télécommande à détection de mouvement cartonne en 2006 ?", answers: ["GameCube", "Wii", "Switch", "DS"], correct: 1, category: 'Années 2000', type: 'multiple-choice' },
  { id: 'a00_mc04', text: "Quel film aux créatures bleues et en 3D devient le plus grand succès de la décennie en 2009 ?", answers: ["Les Schtroumpfs", "Avatar", "Star Wars", "Iron Man"], correct: 1, category: 'Années 2000', type: 'multiple-choice' },
  { id: 'a00_mc05', text: "Quelle monnaie unique entre en circulation en France le 1er janvier 2002 ?", answers: ["Le Franc", "L'Euro", "Le Dollar", "La Livre"], correct: 1, category: 'Années 2000', type: 'multiple-choice' },
  { id: 'a00_mc06', text: "Quel acteur incarne le pirate Jack Sparrow à partir de 2003 ?", answers: ["Orlando Bloom", "Brad Pitt", "Johnny Depp", "Tom Cruise"], correct: 2, category: 'Années 2000', type: 'multiple-choice' },
];

const annees2000Cash: CashAnswerQuestion[] = [
  { id: 'a00_ca01', text: "Grosse franchise de danse/chant de Disney Channel avec Zac Efron (2006).", acceptedAnswers: ["High School Musical"], category: 'Années 2000', type: 'cash-answer' },
  { id: 'a00_ca02', text: "Site incontournable de vidéos en ligne racheté par Google, fondé en 2005.", acceptedAnswers: ["YouTube"], category: 'Années 2000', type: 'cash-answer' },
  { id: 'a00_ca03', text: "Série TV perdue sur une île avec des numéros maudits et un monstre de fumée (2004).", acceptedAnswers: ["Lost", "Lost les disparus"], category: 'Années 2000', type: 'cash-answer' },
  { id: 'a00_ca04', text: "Logiciel de messagerie instantanée de Microsoft (Wizz, smileys).", acceptedAnswers: ["MSN", "MSN Messenger", "Windows Live Messenger"], category: 'Années 2000', type: 'cash-answer' },
  { id: 'a00_ca05', text: "Quelle marque célèbre pour ses téléphones à clavier physique (CrackBerry) dominait ?", acceptedAnswers: ["BlackBerry"], category: 'Années 2000', type: 'cash-answer' },
  { id: 'a00_ca06', text: "Quel jeu vidéo consiste à jouer de la musique avec une manette en forme de guitare ?", acceptedAnswers: ["Guitar Hero"], category: 'Années 2000', type: 'cash-answer' },
];

// ==========================================
// 6. ANNÉES 2010
// ==========================================
const annees2010MCQ: MCQQuestion[] = [
  { id: 'a10_sp01', text: "Quel jeu consiste à capturer des bestioles dans la cour avec son téléphone (2016) ?", answers: ["Ingress", "Pokémon GO", "Harry Potter Wizards Unite", "Minecraft Earth"], correct: 1, category: 'Années 2010', type: 'speed-choice' },
  { id: 'a10_sp02', text: "Quelle série HBO à succès s'achève (très critiquée) en 2019 ?", answers: ["Breaking Bad", "The Walking Dead", "Game of Thrones", "Stranger Things"], correct: 2, category: 'Années 2010', type: 'speed-choice' },
  { id: 'a10_sp03', text: "Quel film de super-héros clôt la décennie Avengers en apothéose (2019) ?", answers: ["Infinity War", "Endgame", "Civil War", "Black Panther"], correct: 1, category: 'Années 2010', type: 'speed-choice' },
  { id: 'a10_sp04', text: "Quelle chanson 'libératrice' de Disney hante les parents depuis 2013 ?", answers: ["Hakuna Matata", "Libérée, Délivrée", "Ce rêve bleu", "Sous l'océan"], correct: 1, category: 'Années 2010', type: 'speed-choice' },
  { id: 'a10_sp05', text: "Quelle danse issue d'un clip coréen a cassé YouTube en 2012 ?", answers: ["Harlem Shake", "Macarena", "Gangnam Style", "Despacito"], correct: 2, category: 'Années 2010', type: 'speed-choice' },
  { id: 'a10_sp06', text: "Quel Battle Royale coloré devient le phénomène mondial en 2017/2018 ?", answers: ["PUBG", "Apex Legends", "Fortnite", "Call of Duty"], correct: 2, category: 'Années 2010', type: 'speed-choice' },
  { id: 'a10_mc01', text: "Quel réseau social basé sur des photos éphémères popularise les filtres en 2011 ?", answers: ["Vine", "TikTok", "Snapchat", "Instagram"], correct: 2, category: 'Années 2010', type: 'multiple-choice' },
  { id: 'a10_mc02', text: "Quelle équipe remporte la Coupe du Monde de Football en 2018 ?", answers: ["Espagne", "Allemagne", "France", "Brésil"], correct: 2, category: 'Années 2010', type: 'multiple-choice' },
  { id: 'a10_mc03', text: "Qu'est-ce que le 'Ice Bucket Challenge' (2014) ?", answers: ["Un parfum", "Manger de la glace vite", "Se verser de l'eau glacée dessus", "Un filtre snapchat"], correct: 2, category: 'Années 2010', type: 'multiple-choice' },
  { id: 'a10_mc04', text: "Qui chante 'Despacito' en 2017 ?", answers: ["Ricky Martin", "Enrique Iglesias", "Luis Fonsi", "Maluma"], correct: 2, category: 'Années 2010', type: 'multiple-choice' },
  { id: 'a10_mc05', text: "Quelle console hybride de Nintendo sort en 2017 ?", answers: ["Wii U", "Nintendo Switch", "3DS XL", "Game Boy Micro"], correct: 1, category: 'Années 2010', type: 'multiple-choice' },
  { id: 'a10_mc06', text: "Quelle série Netflix espagnole met en scène des braqueurs masqués (Dali) ?", answers: ["Narcos", "Elite", "La Casa de Papel", "Vis a vis"], correct: 2, category: 'Années 2010', type: 'multiple-choice' },
];

const annees2010Cash: CashAnswerQuestion[] = [
  { id: 'a10_ca01', text: "Application qui a remplacé Musical.ly pour les vidéos courtes de danse (2018).", acceptedAnswers: ["TikTok"], category: 'Années 2010', type: 'cash-answer' },
  { id: 'a10_ca02', text: "Chanteur belge de 'Papaoutai' (2013).", acceptedAnswers: ["Stromae"], category: 'Années 2010', type: 'cash-answer' },
  { id: 'a10_ca03', text: "Toupie à roulement à billes obsédante des cours de récré (2017).", acceptedAnswers: ["Hand Spinner", "Fidget Spinner"], category: 'Années 2010', type: 'cash-answer' },
  { id: 'a10_ca04', text: "Titre du VIIe épisode de Star Wars au cinéma en 2015 ?", acceptedAnswers: ["Le Réveil de la Force", "The Force Awakens"], category: 'Années 2010', type: 'cash-answer' },
  { id: 'a10_ca05', text: "Catastrophe de Paris en avril 2019 : monument ravagé par les flammes.", acceptedAnswers: ["Notre-Dame", "Notre Dame de Paris", "Cathédrale Notre-Dame"], category: 'Années 2010', type: 'cash-answer' },
  { id: 'a10_ca06', text: "Geste de célébration (coude plié, bras tendu) popularisé par les rappeurs et footballeurs.", acceptedAnswers: ["Le Dab", "Dab"], category: 'Années 2010', type: 'cash-answer' },
];

// ==========================================
// 7. ANNÉES 2020
// ==========================================
const annees2020MCQ: MCQQuestion[] = [
  { id: 'a20_sp01', text: "De quoi le monde entier s'est-il confiné en 2020 ?", answers: ["La peste", "Le COVID-19", "La grippe aviaire", "Mpox"], correct: 1, category: 'Années 2020', type: 'speed-choice' },
  { id: 'a20_sp02', text: "Quel réseau social vidéo a totalement explosé avec les confinements ?", answers: ["Facebook", "X", "TikTok", "Snapchat"], correct: 2, category: 'Années 2020', type: 'speed-choice' },
  { id: 'a20_sp03', text: "Quel film de Tom Cruise sauve le cinéma mondial du naufrage en 2022 ?", answers: ["Mission Impossible 7", "Top Gun: Maverick", "La Momie 2", "Jack Reacher 3"], correct: 1, category: 'Années 2020', type: 'speed-choice' },
  { id: 'a20_sp04', text: "Quel jeu vidéo Animal Crossing a servi de refuge pendant le confinement ?", answers: ["Happy Home", "Wild World", "New Horizons", "City Folk"], correct: 2, category: 'Années 2020', type: 'speed-choice' },
  { id: 'a20_sp05', text: "Quelle IA d'OpenAI sort fin 2022 et révolutionne internet ?", answers: ["Gemini", "Siri", "ChatGPT", "Cortana"], correct: 2, category: 'Années 2020', type: 'speed-choice' },
  { id: 'a20_sp06', text: "Quel événement planétaire s'est tenu à Paris en l'été 2024 ?", answers: ["Exposition Universelle", "Coupe du Monde", "Jeux Olympiques", "Sommet du G7"], correct: 2, category: 'Années 2020', type: 'speed-choice' },
  { id: 'a20_mc01', text: "Quelle série coréenne mortelle de Netflix a pulvérisé les records en 2021 ?", answers: ["Alice in Borderland", "Money Heist", "Squid Game", "Hellbound"], correct: 2, category: 'Années 2020', type: 'multiple-choice' },
  { id: 'a20_mc02', text: "Film ultra-rose de 2023 mettant en scène Margot Robbie :", answers: ["Oppenheimer", "Super Mario", "Barbie", "La Petite Sirène"], correct: 2, category: 'Années 2020', type: 'multiple-choice' },
  { id: 'a20_mc03', text: "Quel milliardaire rachète Twitter en 2022 pour le renommer X ?", answers: ["Jeff Bezos", "Mark Zuckerberg", "Bill Gates", "Elon Musk"], correct: 3, category: 'Années 2020', type: 'multiple-choice' },
  { id: 'a20_mc04', text: "Équipe ayant remporté la Coupe du Monde de la FIFA 2022 (au Qatar) face à la France :", answers: ["Brésil", "Croatie", "Argentine", "Maroc"], correct: 2, category: 'Années 2020', type: 'multiple-choice' },
  { id: 'a20_mc05', text: "Quel appareil Apple 'spatial' à 3500$ sort en 2024 ?", answers: ["Apple Glass", "Apple Vision Pro", "iHelmet", "Mac VR"], correct: 1, category: 'Années 2020', type: 'multiple-choice' },
  { id: 'a20_mc06', text: "Chanteuse américaine de la monumentale tournée 'Eras Tour' :", answers: ["Beyoncé", "Lady Gaga", "Taylor Swift", "Ariana Grande"], correct: 2, category: 'Années 2020', type: 'multiple-choice' },
];

const annees2020Cash: CashAnswerQuestion[] = [
  { id: 'a20_ca01', text: "Jeu de déduction (équivalent Loup-garou dans l'espace) explosant en vue en 2020.", acceptedAnswers: ["Among Us"], category: 'Années 2020', type: 'cash-answer' },
  { id: 'a20_ca02', text: "Nom du célèbre streamer français organisateur du GP Explorer et d'Eleven All Stars.", acceptedAnswers: ["Squeezie", "Lucas Hauchard"], category: 'Années 2020', type: 'cash-answer' },
  { id: 'a20_ca03', text: "Phénomène cinématographique de l'été 2023 mêlant poupée rose et bombe atomique.", acceptedAnswers: ["Barbenheimer"], category: 'Années 2020', type: 'cash-answer' },
  { id: 'a20_ca04', text: "Qui donne une mémorable gifle à Chris Rock aux Oscars 2022 ?", acceptedAnswers: ["Will Smith", "Smith"], category: 'Années 2020', type: 'cash-answer' },
  { id: 'a20_ca05', text: "Quel objet met-on sur la bouche de façon obligatoire pendant une pandémie ?", acceptedAnswers: ["Un masque", "Le masque"], category: 'Années 2020', type: 'cash-answer' },
  { id: 'a20_ca06', text: "Roi du Royaume-Uni couronné en 2023.", acceptedAnswers: ["Charles III", "Le roi Charles"], category: 'Années 2020', type: 'cash-answer' },
];

// ==========================================
// EXPORTS
// ==========================================

export const NEW_THEMES_MCQ: MCQQuestion[] = [
  ...strangerThingsMCQ,
  ...tintinMCQ,
  ...annees80MCQ,
  ...annees90MCQ,
  ...annees2000MCQ,
  ...annees2010MCQ,
  ...annees2020MCQ
];

export const NEW_THEMES_CASH: CashAnswerQuestion[] = [
  ...strangerThingsCash,
  ...tintinCash,
  ...annees80Cash,
  ...annees90Cash,
  ...annees2000Cash,
  ...annees2010Cash,
  ...annees2020Cash
];
