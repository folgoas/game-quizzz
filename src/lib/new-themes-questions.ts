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
// 3. ANNÉES 80 (1980-1989)
// ==========================================
const annees80MCQ: MCQQuestion[] = [
  { id: 'a80_sp01', text: "Quel petit extraterrestre veut « téléphoner maison » (1982) ?", answers: ["Alf", "E.T.", "Yoda", "Spock"], correct: 1, category: 'Années 80', type: 'speed-choice' },
  { id: 'a80_sp02', text: "Quel chanteur a sorti l'album Thriller en 1982 ?", answers: ["Prince", "Michael Jackson", "David Bowie", "George Michael"], correct: 1, category: 'Années 80', type: 'speed-choice' },
  { id: 'a80_sp03', text: "Quel jeu d'arcade de 1980 met en scène un rond jaune mangeur de gommes ?", answers: ["Tetris", "Pac-Man", "Donkey Kong", "Space Invaders"], correct: 1, category: 'Années 80', type: 'speed-choice' },
  { id: 'a80_sp04', text: "Quelle voiture voyage dans le temps dans Retour vers le Futur (1985) ?", answers: ["Ferrari", "DeLorean", "Mustang", "Porsche"], correct: 1, category: 'Années 80', type: 'speed-choice' },
  { id: 'a80_sp05', text: "Qui chante Like a Virgin en 1984 ?", answers: ["Cyndi Lauper", "Madonna", "Whitney Houston", "Cher"], correct: 1, category: 'Années 80', type: 'speed-choice' },
  { id: 'a80_sp06', text: "Quel film de 1984 met en scène des chasseurs de fantômes à New York ?", answers: ["Poltergeist", "S.O.S. Fantômes", "Gremlins", "Beetlejuice"], correct: 1, category: 'Années 80', type: 'speed-choice' },
  // Multiple Choice
  { id: 'a80_mc01', text: "Sur quelle console de Nintendo le jeu Super Mario Bros est-il sorti en 1985 ?", answers: ["Super Nintendo", "NES", "Game Boy", "Nintendo 64"], correct: 1, category: 'Années 80', type: 'multiple-choice' },
  { id: 'a80_mc02', text: "Quel film de 1987 avec Patrick Swayze contient la phrase : « On ne laisse pas Bébé dans un coin » ?", answers: ["Footloose", "Dirty Dancing", "Flashdance", "Ghost"], correct: 1, category: 'Années 80', type: 'multiple-choice' },
  { id: 'a80_mc03', text: "Quel aventurier cherche l'Arche Perdue dans le film de 1981 ?", answers: ["Han Solo", "Indiana Jones", "Rick O'Connell", "Lara Croft"], correct: 1, category: 'Années 80', type: 'multiple-choice' },
  { id: 'a80_mc04', text: "Quel groupe de pop britannique chante Wake Me Up Before You Go-Go en 1984 ?", answers: ["Duran Duran", "Wham!", "A-ha", "The Police"], correct: 1, category: 'Années 80', type: 'multiple-choice' },
  { id: 'a80_mc05', text: "Quel appareil nomade de Sony a révolutionné l'écoute musicale en 1980 ?", answers: ["Discman", "Walkman", "iPod", "MP3 Player"], correct: 1, category: 'Années 80', type: 'multiple-choice' },
  { id: 'a80_mc06', text: "Quel flic robotique de Detroit est le héros du film d'action de 1987 ?", answers: ["Terminator", "RoboCop", "Blade Runner", "Judge Dredd"], correct: 1, category: 'Années 80', type: 'multiple-choice' },
];

const annees80Cash: CashAnswerQuestion[] = [
  { id: 'a80_ca01', text: "De quelle planète vient l'extraterrestre Alf (1986) ?", acceptedAnswers: ["Melmac"], category: 'Années 80', type: 'cash-answer' },
  { id: 'a80_ca02', text: "Quel puzzle culte a été inventé par le Russe Alexey Pajitnov en 1984 ?", acceptedAnswers: ["Tetris"], category: 'Années 80', type: 'cash-answer' },
  { id: 'a80_ca03', text: "Quel est l'indicatif de vol de Tom Cruise dans Top Gun (1986) ?", acceptedAnswers: ["Maverick"], category: 'Années 80', type: 'cash-answer' },
  { id: 'a80_ca04', text: "Quelle princesse monégasque chante Ouragan en 1986 ?", acceptedAnswers: ["Stéphanie de Monaco", "Stéphanie", "Stephanie"], category: 'Années 80', type: 'cash-answer' },
  { id: 'a80_ca05', text: "Comment s'appelle la créature duveteuse qu'il ne faut pas nourrir après minuit ?", acceptedAnswers: ["Gizmo", "Mogwai", "Gremlins"], category: 'Années 80', type: 'cash-answer' },
  { id: 'a80_ca06', text: "Sur quel nuage magique se déplace Goku dans Dragon Ball (1986) ?", acceptedAnswers: ["Kinto-un", "Nuage magique"], category: 'Années 80', type: 'cash-answer' },
];

// ==========================================
// 4. ANNÉES 90 (1990-1999)
// ==========================================
const annees90MCQ: MCQQuestion[] = [
  { id: 'a90_sp01', text: "Quel film de 1997 met en scène le naufrage de Jack et Rose ?", answers: ["Avatar", "Titanic", "Abyss", "Waterworld"], correct: 1, category: 'Années 90', type: 'speed-choice' },
  { id: 'a90_sp02', text: "Comment s'appelle le café de la série Friends lancée en 1994 ?", answers: ["Central Perk", "Monk's Cafe", "Cheers", "MacLaren's"], correct: 0, category: 'Années 90', type: 'speed-choice' },
  { id: 'a90_sp03', text: "Quelle franchise de monstres à capturer sort sur Game Boy en 1996 ?", answers: ["Digimon", "Pokémon", "Yu-Gi-Oh!", "Pikmin"], correct: 1, category: 'Années 90', type: 'speed-choice' },
  { id: 'a90_sp04', text: "Quel groupe de grunge chante Smells Like Teen Spirit en 1991 ?", answers: ["Pearl Jam", "Nirvana", "Soundgarden", "Alice in Chains"], correct: 1, category: 'Années 90', type: 'speed-choice' },
  { id: 'a90_sp05', text: "Quel film de Spielberg fait revivre les dinosaures en 1993 ?", answers: ["E.T.", "Jurassic Park", "Les Dents de la Mer", "Hook"], correct: 1, category: 'Années 90', type: 'speed-choice' },
  { id: 'a90_sp06', text: "Quel animal virtuel électronique logé dans un œuf sort en 1996 ?", answers: ["Furby", "Tamagotchi", "Aibo", "Digimon"], correct: 1, category: 'Années 90', type: 'speed-choice' },
  // Multiple Choice
  { id: 'a90_mc01', text: "Quel girls band britannique chante Wannabe en 1996 ?", answers: ["All Saints", "Spice Girls", "TLC", "Destiny's Child"], correct: 1, category: 'Années 90', type: 'multiple-choice' },
  { id: 'a90_mc02', text: "Quelle pilule Neo choisit-il dans le film Matrix (1999) ?", answers: ["Pilule bleue", "Pilule rouge", "Pilule verte", "Pilule jaune"], correct: 1, category: 'Années 90', type: 'multiple-choice' },
  { id: 'a90_mc03', text: "Quel est le nom du père de Simba dans Le Roi Lion (1994) ?", answers: ["Scar", "Mufasa", "Rafiki", "Pumbaa"], correct: 1, category: 'Années 90', type: 'multiple-choice' },
  { id: 'a90_mc04', text: "Quelle console de Sony sort en Europe en 1995 avec ses jeux sur CD ?", answers: ["Nintendo 64", "PlayStation", "Dreamcast", "Sega Saturn"], correct: 1, category: 'Années 90', type: 'multiple-choice' },
  { id: 'a90_mc05', text: "Quel acteur incarne Le Prince de Bel-Air dans la série débutée en 1990 ?", answers: ["Eddie Murphy", "Will Smith", "Carlton Banks", "Chris Rock"], correct: 1, category: 'Années 90', type: 'multiple-choice' },
  { id: 'a90_mc06', text: "Quel film culte de Tarantino avec John Travolta et Samuel L. Jackson sort en 1994 ?", answers: ["Reservoir Dogs", "Pulp Fiction", "Kill Bill", "Jackie Brown"], correct: 1, category: 'Années 90', type: 'multiple-choice' },
];

const annees90Cash: CashAnswerQuestion[] = [
  { id: 'a90_ca01', text: "Quel film de Pixar sorti en 1995 est le premier long-métrage en images de synthèse ?", acceptedAnswers: ["Toy Story"], category: 'Années 90', type: 'cash-answer' },
  { id: 'a90_ca02', text: "En quelle année est sorti le premier livre Harry Potter au Royaume-Uni ?", acceptedAnswers: ["1997"], category: 'Années 90', type: 'cash-answer' },
  { id: 'a90_ca03', text: "Quel masque porte le tueur dans le film Scream (1996) ?", acceptedAnswers: ["Ghostface", "Le fantôme"], category: 'Années 90', type: 'cash-answer' },
  { id: 'a90_ca04', text: "Quel groupe scandinave chante Barbie Girl en 1997 ?", acceptedAnswers: ["Aqua"], category: 'Années 90', type: 'cash-answer' },
  { id: 'a90_ca05', text: "Comment s'appellent les deux agents du FBI dans X-Files (1993) ?", acceptedAnswers: ["Mulder et Scully", "Mulder et Skully"], category: 'Années 90', type: 'cash-answer' },
  { id: 'a90_ca06', text: "Quelle console de Nintendo sortie en 1996 proposait Mario 64 ?", acceptedAnswers: ["Nintendo 64", "N64"], category: 'Années 90', type: 'cash-answer' },
];

// ==========================================
// 5. ANNÉES 2000 (2000-2009)
// ==========================================
const annees2000MCQ: MCQQuestion[] = [
  { id: 'a00_sp01', text: "Quel ogre vert de Dreamworks rencontre l'Âne en 2001 ?", answers: ["Hulk", "Shrek", "Fiona", "Gargamel"], correct: 1, category: 'Années 2000', type: 'speed-choice' },
  { id: 'a00_sp02', text: "Quel baladeur musical à molette blanche est lancé par Apple en 2001 ?", answers: ["iPhone", "iPod", "iPad", "iMac"], correct: 1, category: 'Années 2000', type: 'speed-choice' },
  { id: 'a00_sp03', text: "Quel film de 2009 met en scène des êtres bleus sur la planète Pandora ?", answers: ["Les Schtroumpfs", "Avatar", "Star Wars", "Blue Man Group"], correct: 1, category: 'Années 2000', type: 'speed-choice' },
  { id: 'a00_sp04', text: "Quel petit sorcier arrive au cinéma pour la première fois en 2001 ?", answers: ["Harry Potter", "Frodon", "Percy Jackson", "Eragon"], correct: 0, category: 'Années 2000', type: 'speed-choice' },
  { id: 'a00_sp05', text: "Quel pirate excentrique est incarné par Johnny Depp dès 2003 ?", answers: ["Barbe Noire", "Jack Sparrow", "William Turner", "Hector Barbossa"], correct: 1, category: 'Années 2000', type: 'speed-choice' },
  { id: 'a00_sp06', text: "Quel réseau social est fondé par Mark Zuckerberg en 2004 ?", answers: ["Twitter", "MySpace", "Facebook", "Instagram"], correct: 2, category: 'Années 2000', type: 'speed-choice' },
  // Multiple Choice
  { id: 'a00_mc01', text: "Qui est le porteur de l'Anneau Unique dans la trilogie sortie dès 2001 ?", answers: ["Gandalf", "Frodon Sacquet", "Aragorn", "Gollum"], correct: 1, category: 'Années 2000', type: 'multiple-choice' },
  { id: 'a00_mc02', text: "Quel jeu vidéo en ligne (MMORPG) de Blizzard sort en 2004 ?", answers: ["Diablo", "World of Warcraft", "StarCraft", "Overwatch"], correct: 1, category: 'Années 2000', type: 'multiple-choice' },
  { id: 'a00_mc03', text: "Quelle chanteuse britannique sort l'album culte Back to Black en 2006 ?", answers: ["Adele", "Amy Winehouse", "Duffy", "Lily Allen"], correct: 1, category: 'Années 2000', type: 'multiple-choice' },
  { id: 'a00_mc04', text: "Quel site de partage de vidéos est créé en 2005 (racheté par Google en 2006) ?", answers: ["Dailymotion", "YouTube", "Vimeo", "TikTok"], correct: 1, category: 'Années 2000', type: 'multiple-choice' },
  { id: 'a00_mc05', text: "Quel acteur incarne le Joker dans The Dark Knight en 2008 ?", answers: ["Jack Nicholson", "Heath Ledger", "Jared Leto", "Joaquin Phoenix"], correct: 1, category: 'Années 2000', type: 'multiple-choice' },
  { id: 'a00_mc06', text: "Quel téléfilm de Disney Channel avec Zac Efron devient un phénomène en 2006 ?", answers: ["Camp Rock", "High School Musical", "Hannah Montana", "Glee"], correct: 1, category: 'Années 2000', type: 'multiple-choice' },
];

const annees2000Cash: CashAnswerQuestion[] = [
  { id: 'a00_ca01', text: "En quelle année Steve Jobs a-t-il présenté le tout premier iPhone ?", acceptedAnswers: ["2007"], category: 'Années 2000', type: 'cash-answer' },
  { id: 'a00_ca02', text: "Série TV perdue sur une île avec des numéros maudits (4 8 15 16 23 42) ?", acceptedAnswers: ["Lost", "Lost les disparus"], category: 'Années 2000', type: 'cash-answer' },
  { id: 'a00_ca03', text: "Logiciel de messagerie instantanée culte de Microsoft (Wizz, smileys animés) ?", acceptedAnswers: ["MSN", "MSN Messenger", "Windows Live Messenger"], category: 'Années 2000', type: 'cash-answer' },
  { id: 'a00_ca04', text: "Quel jeu vidéo consiste à jouer de la musique avec une manette en forme de guitare ?", acceptedAnswers: ["Guitar Hero"], category: 'Années 2000', type: 'cash-answer' },
  { id: 'a00_ca05', text: "Quel groupe français d'électro sort l'album Discovery en 2001 (One More Time) ?", acceptedAnswers: ["Daft Punk"], category: 'Années 2000', type: 'cash-answer' },
  { id: 'a00_ca06', text: "Dans quel épisode de Star Wars sorti en 2005 Anakin devient-il Dark Vador ?", acceptedAnswers: ["La Revanche des Sith", "Episode 3", "L'Episode III"], category: 'Années 2000', type: 'cash-answer' },
];

// ==========================================
// 6. ANNÉES 2010 (2010-2019)
// ==========================================
const annees2010MCQ: MCQQuestion[] = [
  { id: 'a10_sp01', text: "Quel film de super-héros clôt la saga Avengers en apothéose en 2019 ?", answers: ["Infinity War", "Endgame", "Civil War", "Black Panther"], correct: 1, category: 'Années 2010', type: 'speed-choice' },
  { id: 'a10_sp02', text: "Quelle chanson 'libératrice' de Disney hante les parents depuis 2013 ?", answers: ["Hakuna Matata", "Libérée, Délivrée", "Ce rêve bleu", "Sous l'océan"], correct: 1, category: 'Années 2010', type: 'speed-choice' },
  { id: 'a10_sp03', text: "Quel jeu consiste à capturer des Pokémon dans la rue avec son téléphone (2016) ?", answers: ["Ingress", "Pokémon GO", "Minecraft Earth", "Harry Potter"], correct: 1, category: 'Années 2010', type: 'speed-choice' },
  { id: 'a10_sp04', text: "Quelle série HBO à succès s'achève en 2019 après 8 saisons ?", answers: ["Breaking Bad", "Game of Thrones", "Stranger Things", "The Walking Dead"], correct: 1, category: 'Années 2010', type: 'speed-choice' },
  { id: 'a10_sp05', text: "Quel jeu de construction créatif devient un phénomène mondial dès 2011 ?", answers: ["Roblox", "Minecraft", "Terraria", "Fortnite"], correct: 1, category: 'Années 2010', type: 'speed-choice' },
  { id: 'a10_sp06', text: "Quelle danse issue d'un clip coréen a cassé YouTube en 2012 ?", answers: ["Harlem Shake", "Gangnam Style", "Macarena", "Despacito"], correct: 1, category: 'Années 2010', type: 'speed-choice' },
  // Multiple Choice
  { id: 'a10_mc01', text: "Quelle série Netflix lancée en 2016 se déroule à Hawkins dans les années 80 ?", answers: ["Dark", "Stranger Things", "The OA", "Black Mirror"], correct: 1, category: 'Années 2010', type: 'multiple-choice' },
  { id: 'a10_mc02', text: "Quel réseau social de partage de photos est lancé en 2010 ?", answers: ["Snapchat", "Instagram", "Pinterest", "TikTok"], correct: 1, category: 'Années 2010', type: 'multiple-choice' },
  { id: 'a10_mc03', text: "Quel Battle Royale coloré devient le phénomène mondial en 2017 ?", answers: ["PUBG", "Fortnite", "Apex Legends", "Warzone"], correct: 1, category: 'Années 2010', type: 'multiple-choice' },
  { id: 'a10_mc04', text: "De combien de films est composée l'Infinity Saga de Marvel (2008-2019) ?", answers: ["11", "22", "15", "30"], correct: 1, category: 'Années 2010', type: 'multiple-choice' },
  { id: 'a10_mc05', text: "Quelle série dystopique sur les technologies commence en 2011 ?", answers: ["Westworld", "Black Mirror", "Mr. Robot", "Utopia"], correct: 1, category: 'Années 2010', type: 'multiple-choice' },
  { id: 'a10_mc06', text: "Qui chante le tube Happy en 2013 ?", answers: ["Bruno Mars", "Pharrell Williams", "Justin Timberlake", "The Weeknd"], correct: 1, category: 'Années 2010', type: 'multiple-choice' },
];

const annees2010Cash: CashAnswerQuestion[] = [
  { id: 'a10_ca01', text: "Service de streaming lancé en France en 2014, célèbre pour House of Cards.", acceptedAnswers: ["Netflix"], category: 'Années 2010', type: 'cash-answer' },
  { id: 'a10_ca02', text: "Jeu mobile très addictif de 2012 consistant à aligner des bonbons.", acceptedAnswers: ["Candy Crush", "Candy Crush Saga"], category: 'Années 2010', type: 'cash-answer' },
  { id: 'a10_ca03', text: "Quel film de Christopher Nolan (2010) utilise une toupie pour savoir s'il rêve ?", acceptedAnswers: ["Inception"], category: 'Années 2010', type: 'cash-answer' },
  { id: 'a10_ca04', text: "Quelle chanteuse britannique sort l'album 21 en 2011 (Rolling in the Deep) ?", acceptedAnswers: ["Adele"], category: 'Années 2010', type: 'cash-answer' },
  { id: 'a10_ca05', text: "Quel est le nom de l'entreprise spatiale d'Elon Musk ?", acceptedAnswers: ["SpaceX"], category: 'Années 2010', type: 'cash-answer' },
  { id: 'a10_ca06', text: "Geste de célébration popularisé en 2016-2017 par les rappeurs et footballeurs.", acceptedAnswers: ["Le Dab", "Dab"], category: 'Années 2010', type: 'cash-answer' },
];

// ==========================================
// 7. ANNÉES 2020 (2020-2029)
// ==========================================
const annees2020MCQ: MCQQuestion[] = [
  { id: 'a20_sp01', text: "Quel jeu de déduction avec un traître dans l'espace explose en 2020 ?", answers: ["Fall Guys", "Among Us", "Fortnite", "Roblox"], correct: 1, category: 'Années 2020', type: 'speed-choice' },
  { id: 'a20_sp02', text: "Quelle série coréenne de survie devient le plus gros succès Netflix en 2021 ?", answers: ["Alice in Borderland", "Squid Game", "Kingdom", "Hellbound"], correct: 1, category: 'Années 2020', type: 'speed-choice' },
  { id: 'a20_sp03', text: "Quel film rose de 2023 avec Margot Robbie bat des records au box-office ?", answers: ["Oppenheimer", "Barbie", "La Petite Sirène", "Wish"], correct: 1, category: 'Années 2020', type: 'speed-choice' },
  { id: 'a20_sp04', text: "Quelle intelligence artificielle d'OpenAI sort fin 2022 ?", answers: ["Siri", "ChatGPT", "Gemini", "Alexa"], correct: 1, category: 'Années 2020', type: 'speed-choice' },
  { id: 'a20_sp05', text: "Quel film de 2021 réunit pour la première fois trois versions de Spider-Man ?", answers: ["Homecoming", "Spider-Man: No Way Home", "Far From Home", "Across the Spider-Verse"], correct: 1, category: 'Années 2020', type: 'speed-choice' },
  { id: 'a20_sp06', text: "Quelle série de 2022 met en scène la fille de la famille Addams au lycée ?", answers: ["Sabrina", "Mercredi", "Riverdale", "Euphoria"], correct: 1, category: 'Années 2020', type: 'speed-choice' },
  // Multiple Choice
  { id: 'a20_mc01', text: "Quelle série HBO de 2023 est adaptée du jeu vidéo avec Joel et Ellie ?", answers: ["The Last of Us", "The Walking Dead", "Halo", "Uncharted"], correct: 0, category: 'Années 2020', type: 'multiple-choice' },
  { id: 'a20_mc02', text: "Qui chante Peaches dans le film Super Mario Bros en 2023 ?", answers: ["Chris Pratt", "Jack Black", "Seth Rogen", "Charlie Day"], correct: 1, category: 'Années 2020', type: 'multiple-choice' },
  { id: 'a20_mc03', text: "Quel film de science-fiction de Denis Villeneuve sort sa première partie en 2021 ?", answers: ["Tenet", "Dune", "Arrival", "Blade Runner 2049"], correct: 1, category: 'Années 2020', type: 'multiple-choice' },
  { id: 'a20_mc04', text: "Quel streamer français organise le GP Explorer sur le circuit du Mans dès 2022 ?", answers: ["Gotaga", "Squeezie", "Amixem", "Mister V"], correct: 1, category: 'Années 2020', type: 'multiple-choice' },
  { id: 'a20_mc05', text: "Comment s'appelle désormais le réseau social Twitter depuis 2022 ?", answers: ["Threads", "X", "BlueSky", "Truth"], correct: 1, category: 'Années 2020', type: 'multiple-choice' },
  { id: 'a20_mc06', text: "Quelle chanteuse entame la tournée historique Eras Tour en 2023 ?", answers: ["Beyoncé", "Taylor Swift", "Lady Gaga", "Dua Lipa"], correct: 1, category: 'Années 2020', type: 'multiple-choice' },
];

const annees2020Cash: CashAnswerQuestion[] = [
  { id: 'a20_ca01', text: "Quel film de Christopher Nolan sur le créateur de la bombe atomique sort en 2023 ?", acceptedAnswers: ["Oppenheimer"], category: 'Années 2020', type: 'cash-answer' },
  { id: 'a20_ca02', text: "Jeu vidéo de FromSoftware récompensé du titre de Jeu de l'Année en 2022 ?", acceptedAnswers: ["Elden Ring"], category: 'Années 2020', type: 'cash-answer' },
  { id: 'a20_ca03', text: "Quel manga culte a eu droit à une adaptation live-action réussie sur Netflix en 2023 ?", acceptedAnswers: ["One Piece"], category: 'Années 2020', type: 'cash-answer' },
  { id: 'a20_ca04', text: "Réseau social lancé par Meta en 2023 pour concurrencer X (Twitter).", acceptedAnswers: ["Threads"], category: 'Années 2020', type: 'cash-answer' },
  { id: 'a20_ca05', text: "Jeu de rôle massif se déroulant dans l'univers de Donjons et Dragons, élu GOTY 2023.", acceptedAnswers: ["Baldur's Gate 3", "Baldur's Gate III", "Baldurs Gate 3"], category: 'Années 2020', type: 'cash-answer' },
  { id: 'a20_ca06', text: "Quel casquet de 'réalité spatiale' est sorti par Apple début 2024 ?", acceptedAnswers: ["Vision Pro", "Apple Vision Pro"], category: 'Années 2020', type: 'cash-answer' },
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
