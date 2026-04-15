import type { MCQQuestion } from './game-types';

const hpSpeedAdd: MCQQuestion[] = [
  { id: 'hp_sa1', text: "Lequel des Weasley travaille avec des dragons en Roumanie ?", answers: ["Bill", "Percy", "Charlie", "George"], correct: 2, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_sa2', text: "Quelle friandise permet d'avoir toutes les saveurs, même dégoûtantes ?", answers: ["Chocogrenouilles", "Dragées surprise de Bertie Crochue", "Patacitrouilles", "Suçacides"], correct: 1, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_sa3', text: "Qui habite le 4, Privet Drive ?", answers: ["Les Weasley", "Les Dursley", "Les Potter", "Les Malefoy"], correct: 1, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_sa4', text: "Quel centaure sauve Harry dans la forêt interdite (tome 1) ?", answers: ["Firenze", "Bane", "Ronan", "Magorian"], correct: 0, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_sa5', text: "Qui donne l'Éclair de Feu à Harry Potter ?", answers: ["Albus Dumbledore", "Minerva McGonagall", "Sirius Black", "Remus Lupin"], correct: 2, category: 'Harry Potter', type: 'speed-choice' }
];

const hpMcqAdd: MCQQuestion[] = [
  { id: 'hp_ma1', text: "Où se déroule la finale de la Coupe du Monde de Quidditch (Saga) ?", answers: ["Dans la lande de Dartmoor", "Londres", "Pré-au-Lard", "Bulgarie"], correct: 0, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_ma2', text: "Avec qui Cho Chang va-t-elle au bal de Noël ?", answers: ["Harry Potter", "Viktor Krum", "Cédric Diggory", "Roger Davies"], correct: 2, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_ma3', text: "Que vendent Fred et George Weasley dans leur boutique ?", answers: ["Des balais magiques", "Des friandises et farces magiques", "Des baguettes", "Des grimoires"], correct: 1, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_ma4', text: "Qui remplace le tableau de la Grosse Dame pendant un temps (Tome 3) ?", answers: ["Sir Cadogan", "Le Baron Sanglant", "Moine Gras", "Peeves"], correct: 0, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_ma5', text: "Quelle est la particularité du professeur Flitwick ?", answers: ["Il est chauve", "Il est à moitié gobelin", "Il est aveugle", "Il vole"], correct: 1, category: 'Harry Potter', type: 'multiple-choice' }
];

const dpSpeedAdd: MCQQuestion[] = [
  { id: 'dp_sa1', text: "Quel métier exerce le père de Belle dans le dessin animé ?", answers: ["Charpentier", "Inventeur", "Boulanger", "Fermier"], correct: 1, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_sa2', text: "Comment s'appelle l'oiseau coloré dans 'Là-haut' ?", answers: ["Bébert", "Kevin", "Arthur", "Doug"], correct: 1, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_sa3', text: "Dans Le Roi Lion, 'Hakuna Matata' signifie :", answers: ["Quelle belle vie", "Sans aucun souci", "Courage et force", "C'est l'histoire de la vie"], correct: 1, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_sa4', text: "Lequel de ces personnages Disney est MUET (ne parle pas) dans son film d'origine ?", answers: ["Dumbo", "Bambi", "Simba", "Pinocchio"], correct: 0, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_sa5', text: "Dans Toy Story 2, quel nouveau duo rejoint la bande de Woody ?", answers: ["La Bergère", "Jessie seule", "Pile-Poil seul", "Jessie et Pile-Poil"], correct: 3, category: 'Disney & Pixar', type: 'speed-choice' }
];

const dpMcqAdd: MCQQuestion[] = [
  { id: 'dp_ma1', text: "Dans Hercules, comment s'appellent les deux sbires d'Hadès ?", answers: ["Peine et Panique", "Mort et Terreur", "Démon et Diable", "Peur et Angoisse"], correct: 0, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_ma2', text: "Comment s'appelle la grand-mère sauvage de Vaiana ?", answers: ["Tala", "Sina", "Te Fiti", "Pua"], correct: 0, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_ma3', text: "Qui a dit 'Vers l'infini et au-delà' ?", answers: ["Woody", "Buzz l'Éclair", "Mr Indestructible", "Rex"], correct: 1, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_ma4', text: "Dans quel film Disney y a-t-il une fée nommée 'Clochette' ?", answers: ["Cendrillon", "Peter Pan", "La Belle au bois dormant", "Blanche-Neige"], correct: 1, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_ma5', text: "Dans Les Nouveaux Héros (Big Hero 6), quel est le gros robot de soin ?", answers: ["R2-D2", "Baymax", "Hiro", "Zurg"], correct: 1, category: 'Disney & Pixar', type: 'multiple-choice' }
];

const swSpeedAdd: MCQQuestion[] = [
  { id: 'sw_sa1', text: "Quelle est l'arme principale d'un Stormtrooper ?", answers: ["Un sabre laser", "Un fusil blaster", "Une lance", "Une arbalète laser"], correct: 1, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_sa2', text: "Qui est le mentor de Padawan Anakin Skywalker ?", answers: ["Qui-Gon Jinn", "Obi-Wan Kenobi", "Yoda", "Mace Windu"], correct: 1, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_sa3', text: "Quel est le nom du chef militaire cyborg séparatiste à 4 bras ?", answers: ["Général Grievous", "Comte Dooku", "Dark Maul", "Jango Fett"], correct: 0, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_sa4', text: "Qui joue la jeune reine/sénatrice Padmé Amidala ?", answers: ["Carrie Fisher", "Natalie Portman", "Keira Knightley", "Daisy Ridley"], correct: 1, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_sa5', text: "Quelle planète a un paysage désertique à DEUX soleils ?", answers: ["Hoth", "Endor", "Coruscant", "Tatooine"], correct: 3, category: 'Star Wars', type: 'speed-choice' }
];

const swMcqAdd: MCQQuestion[] = [
  { id: 'sw_ma1', text: "Qui finit par jeter l'Empereur Palpatine dans le vide central (Épisode 6) ?", answers: ["Luke", "Dark Vador", "Lando", "Han Solo"], correct: 1, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_ma2', text: "Dans l'épisode 8, Luke boit le lait... d'une créature marine de quelle couleur ?", answers: ["Bleu", "Vert", "Rose", "Noir"], correct: 1, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_ma3', text: "Quel personnage principal meurt de la main de son propre fils dans l'Épisode 7 ?", answers: ["Luke Skywalker", "Chewbacca", "Han Solo", "Général Leia"], correct: 2, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_ma4', text: "Lequel de ces Jedi siège au Conseil Jedi tout en gardant des doutes ?", answers: ["Anakin Skywalker", "Rey", "Obi-Wan Kenobi", "Qui-Gon Jinn"], correct: 0, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_ma5', text: "Où se fait battre Anakin Skywalker par Obi-Wan et termine brûlé vif ?", answers: ["Mustafar", "Naboo", "Kamino", "Geonosis"], correct: 0, category: 'Star Wars', type: 'multiple-choice' }
];

const shSpeedAdd: MCQQuestion[] = [
  { id: 'sh_sa1', text: "Qui devient 'Winter Soldier' (Le Soldat de l'Hiver) ?", answers: ["Steve Rogers", "Bucky Barnes", "Sam Wilson", "Clint Barton"], correct: 1, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_sa2', text: "Quel est le nom kryptonien de Superman ?", answers: ["Bruce Wayne", "Clark Kent", "Barry Allen", "Kal-El"], correct: 3, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_sa3', text: "Quelle couleur d'anneau portent les gardiens de l'univers comme Hal Jordan ?", answers: ["Jaune", "Vert", "Rouge", "Bleu"], correct: 1, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_sa4', text: "Quel oiseau symbolise la famille de super-héros au manoir Wayne (Robin) ?", answers: ["Corbeau", "Rouge-gorge", "Aigle", "Faucon"], correct: 1, category: 'Super-Héros', type: 'speed-choice' },
  { id: 'sh_sa5', text: "Dans Marvel, Thor est un dieu d'inspiration...", answers: ["Grecque", "Romaine", "Nordique", "Égyptienne"], correct: 2, category: 'Super-Héros', type: 'speed-choice' }
];

const shMcqAdd: MCQQuestion[] = [
  { id: 'sh_ma1', text: "Lequel de ces héros n'a STRICTEMENT AUCUN super-pouvoir inné ou radioactif ?", answers: ["Spider-Man", "Batman", "Wolverine", "Flash"], correct: 1, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_ma2', text: "Comment s'appelle l'héroïne ultra-puissante incarnée par Brie Larson ?", answers: ["Black Widow", "Wanda", "Captain Marvel", "Gamora"], correct: 2, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_ma3', text: "Lequel de ces métaux n'existe que dans l'univers DC Comics ?", answers: ["Vibranium", "Adamantium", "Kryptonite", "Carbonadium"], correct: 2, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_ma4', text: "Où se trouve la base paradisiaque de Wonder Woman ?", answers: ["Atlantis", "Themyscira", "Krypton", "Oa"], correct: 1, category: 'Super-Héros', type: 'multiple-choice' },
  { id: 'sh_ma5', text: "Quel journal imprime les photos de Peter Parker ?", answers: ["Le Daily Planet", "Le Daily Bugle", "Le Gotham Times", "Le New York Bulletin"], correct: 1, category: 'Super-Héros', type: 'multiple-choice' }
];

const tvSpeedAdd: MCQQuestion[] = [
  { id: 'tv_sa1', text: "Comment s'appelle l'inspecteur chef de police dans La Casa De Papel ?", answers: ["Raquel Murillo", "Alicia Sierra", "Tokyo", "Nairobi"], correct: 0, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_sa2', text: "Dans Stranger Things, quel numéro porte la 'sœur' de Onze en saison 2 ?", answers: ["008", "001", "007", "005"], correct: 0, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_sa3', text: "Série culte suivant un prof de chimie frappé par un cancer :", answers: ["Weeds", "Ozark", "Breaking Bad", "Narcos"], correct: 2, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_sa4', text: "Dans Dexter, qu'appelle-t-il 'Son Passager Noir' ?", answers: ["Sa voiture de sport", "Son bateau", "Sa pulsion de meurtre", "Son boss"], correct: 2, category: 'Séries TV Cultes', type: 'speed-choice' },
  { id: 'tv_sa5', text: "Combien d'années la guerre a-t-elle sévi officiellement entre M & Scully (X-Files) ?", answers: ["5 saisons", "9 saisons", "11 saisons", "15 saisons"], correct: 2, category: 'Séries TV Cultes', type: 'speed-choice' } // actually 11 seasons overall
];

const tvMcqAdd: MCQQuestion[] = [
  { id: 'tv_ma1', text: "Sur quoi le Trône de fer (Game of Thrones) est-il fabriqué ?", answers: ["Pierres volcaniques", "Mille épées fondues", "Os de dragons", "Verre Dragon"], correct: 1, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_ma2', text: "Quelle chanson le groupe The Rembrandts a-t-il signée pour Friends ?", answers: ["I'll Be There For You", "Smelly Cat", "Everywhere You Look", "Hey Beautiful"], correct: 0, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_ma3', text: "Comment s'appelle le chat emblématique de Sabrina l'apprentie sorcière ?", answers: ["Luna", "Salem", "Garfield", "Figaro"], correct: 1, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_ma4', text: "Série animée américaine se déroulant au 31ème siècle (Fry, Leela...) :", answers: ["Rick & Morty", "Final Space", "Futurama", "Désenchantée"], correct: 2, category: 'Séries TV Cultes', type: 'multiple-choice' },
  { id: 'tv_ma5', text: "Dans quelle ville se déroule (en majorité) la série Lucifer ?", answers: ["Chicago", "New York", "Los Angeles", "Miami"], correct: 2, category: 'Séries TV Cultes', type: 'multiple-choice' }
];

export const THEMES_PART3_MCQ = [
  ...hpSpeedAdd, ...hpMcqAdd,
  ...dpSpeedAdd, ...dpMcqAdd,
  ...swSpeedAdd, ...swMcqAdd,
  ...shSpeedAdd, ...shMcqAdd,
  ...tvSpeedAdd, ...tvMcqAdd
];
