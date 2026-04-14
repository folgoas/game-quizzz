// ==================== QUESTION BANK PART 2 ====================
// Family-friendly quiz questions (ages 7-77)
// Categories: Sciences & Nature, Histoire & Géographie, Jeux Vidéo
// Each category: 150 MCQ + 50 Cash = 200 questions
// Total: 600 questions

import type { MCQQuestion, CashAnswerQuestion } from './game-types';

export const ALL_MCQ_QUESTIONS_PART2: MCQQuestion[] = [
  {
    "id": "sn1",
    "text": "Combien de pattes a un chat ?",
    "answers": [
      "2",
      "3",
      "4",
      "6"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn2",
    "text": "Quel est le plus grand organe du corps ?",
    "answers": [
      "Le foie",
      "Le cerveau",
      "La peau",
      "Les poumons"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn3",
    "text": "Quel gaz les plantes absorbent-elles ?",
    "answers": [
      "Oxygène",
      "Azote",
      "Dioxyde de carbone",
      "Hydrogène"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn4",
    "text": "Quel animal est le plus rapide ?",
    "answers": [
      "Le lion",
      "Le guépard",
      "Le cheval",
      "L'aigle"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn5",
    "text": "De quoi est faite l'eau ?",
    "answers": [
      "Hydrogène et oxygène",
      "Azote et oxygène",
      "Carbone et hydrogène",
      "Hélium et oxygène"
    ],
    "correct": 0,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn6",
    "text": "Combien de planètes dans le système solaire ?",
    "answers": [
      "7",
      "8",
      "9",
      "10"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn7",
    "text": "Quel est le plus grand océan ?",
    "answers": [
      "Atlantique",
      "Indien",
      "Arctique",
      "Pacifique"
    ],
    "correct": 3,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn8",
    "text": "Quel métal est liquide à température ambiante ?",
    "answers": [
      "Plomb",
      "Fer",
      "Mercure",
      "Aluminium"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn9",
    "text": "Combien d'os dans le corps humain ?",
    "answers": [
      "106",
      "206",
      "306",
      "406"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn10",
    "text": "Quel animal est le roi de la forêt ?",
    "answers": [
      "Le tigre",
      "L'ours",
      "Le lion",
      "Le loup"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn11",
    "text": "Quelle planète est la plus proche du Soleil ?",
    "answers": [
      "Vénus",
      "Mercure",
      "Mars",
      "La Terre"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn12",
    "text": "Combien de dents a un adulte ?",
    "answers": [
      "28",
      "30",
      "32",
      "34"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn13",
    "text": "Quel est le plus grand mammifère ?",
    "answers": [
      "L'éléphant",
      "La baleine bleue",
      "Le rhinocéros",
      "La girafe"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn14",
    "text": "Quelle est la formule du sel ?",
    "answers": [
      "NaO",
      "NaCl",
      "KCl",
      "CaCl"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn15",
    "text": "Quel insecte produit du miel ?",
    "answers": [
      "La guêpe",
      "Le bourdon",
      "L'abeille",
      "Le moucheron"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn16",
    "text": "Combien de couleurs dans un arc-en-ciel ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn17",
    "text": "Quel est le symbole de l'or ?",
    "answers": [
      "Or",
      "Au",
      "Ag",
      "Fe"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn18",
    "text": "Quel animal change de couleur ?",
    "answers": [
      "Le lézard",
      "Le caméléon",
      "La grenouille",
      "Le serpent"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn19",
    "text": "Quelle est la température d'ébullition de l'eau ?",
    "answers": [
      "90°C",
      "100°C",
      "110°C",
      "120°C"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn20",
    "text": "Quel organe pompe le sang ?",
    "answers": [
      "Le cerveau",
      "Les poumons",
      "Le cœur",
      "Le foie"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn21",
    "text": "Combien de continents y a-t-il ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn22",
    "text": "Quel est le plus gros oiseau ?",
    "answers": [
      "L'aigle",
      "L'autruche",
      "Le condor",
      "Le pélican"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn23",
    "text": "Quel phénomène est causé par la gravité ?",
    "answers": [
      "Le vent",
      "La pluie",
      "Les marées",
      "Les volcans"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn24",
    "text": "Quel scientifique a formulé la relativité ?",
    "answers": [
      "Newton",
      "Einstein",
      "Bohr",
      "Hawking"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn25",
    "text": "Quel est le symbole du fer ?",
    "answers": [
      "Ir",
      "Fe",
      "Fr",
      "Fi"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn26",
    "text": "Combien de pattes a un insecte ?",
    "answers": [
      "4",
      "6",
      "8",
      "10"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn27",
    "text": "Quelle partie de la plante fait la photosynthèse ?",
    "answers": [
      "Les racines",
      "La tige",
      "Les feuilles",
      "Les fleurs"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn28",
    "text": "Quel animal est un invertébré ?",
    "answers": [
      "Le chat",
      "Le dauphin",
      "L'escargot",
      "La poule"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn29",
    "text": "Quelle est la planète rouge ?",
    "answers": [
      "Vénus",
      "Jupiter",
      "Mars",
      "Saturne"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn30",
    "text": "Combien de sens a l'être humain ?",
    "answers": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn31",
    "text": "Quel animal est un amphibien ?",
    "answers": [
      "Le crocodile",
      "La tortue",
      "La grenouille",
      "Le lézard"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn32",
    "text": "Quelle est la plus grande étoile de notre système ?",
    "answers": [
      "La Terre",
      "Jupiter",
      "Le Soleil",
      "Sirius"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn33",
    "text": "Quel type d'animal est la baleine ?",
    "answers": [
      "Un poisson",
      "Un reptile",
      "Un mammifère",
      "Un amphibien"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn34",
    "text": "Quel est le gaz principal de l'air ?",
    "answers": [
      "Oxygène",
      "Dioxyde de carbone",
      "Azote",
      "Argon"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn35",
    "text": "Combien de côtés a un hexagone ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn36",
    "text": "Quel oiseau est incapable de voler ?",
    "answers": [
      "Le perroquet",
      "La chouette",
      "Le pingouin",
      "Le pigeon"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn37",
    "text": "Quelle est la plus petite planète ?",
    "answers": [
      "Mars",
      "Vénus",
      "Mercure",
      "Pluton"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn38",
    "text": "Quel animal hiberne en hiver ?",
    "answers": [
      "Le renard",
      "L'ours",
      "Le cerf",
      "Le lapin"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn39",
    "text": "Qu'est-ce qu'un herbivore ?",
    "answers": [
      "Mange de la viande",
      "Mange des plantes",
      "Mange tout",
      "Ne mange pas"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn40",
    "text": "Combien y a-t-il de secondes dans une minute ?",
    "answers": [
      "30",
      "60",
      "90",
      "100"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn41",
    "text": "Quel animal vit le plus longtemps ?",
    "answers": [
      "L'éléphant",
      "La tortue",
      "Le perroquet",
      "La baleine"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn42",
    "text": "De quelle couleur est le sang humain ?",
    "answers": [
      "Bleu",
      "Vert",
      "Rouge",
      "Jaune"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn43",
    "text": "Quel animal vole avec ses ailes ?",
    "answers": [
      "Le poisson",
      "Le serpent",
      "L'oiseau",
      "Le chat"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn44",
    "text": "Combien y a-t-il de jours dans une année ?",
    "answers": [
      "355",
      "365",
      "375",
      "385"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn45",
    "text": "Quel est l'effet d'un aimant ?",
    "answers": [
      "Attire le plastique",
      "Attire le métal",
      "Attire le bois",
      "Attire le verre"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn46",
    "text": "Comment s'appelle le bébé d'une vache ?",
    "answers": [
      "Un veau",
      "Un chevreau",
      "Un agneau",
      "Un poulain"
    ],
    "correct": 0,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn47",
    "text": "Quelle planète a des anneaux ?",
    "answers": [
      "Mars",
      "Vénus",
      "Saturne",
      "Mercure"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn48",
    "text": "Combien de pattes a une pieuvre ?",
    "answers": [
      "4",
      "6",
      "8",
      "10"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn49",
    "text": "Quel est le plus gros arbre du monde ?",
    "answers": [
      "Le chêne",
      "Le sapin",
      "Le séquoia",
      "Le baobab"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn50",
    "text": "De quelle couleur est une carotte ?",
    "answers": [
      "Rouge",
      "Jaune",
      "Orange",
      "Violette"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn51",
    "text": "Quel animal est carnivore ?",
    "answers": [
      "La vache",
      "Le lapin",
      "Le lion",
      "Le cheval"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn52",
    "text": "Quelle est la température du corps humain ?",
    "answers": [
      "35°C",
      "37°C",
      "39°C",
      "41°C"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn53",
    "text": "Quel gaz expire-t-on ?",
    "answers": [
      "Oxygène",
      "Dioxyde de carbone",
      "Azote",
      "Hélium"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn54",
    "text": "Comment s'appelle le petit du chien ?",
    "answers": [
      "Un chaton",
      "Un veau",
      "Un chiot",
      "Un lapereau"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn55",
    "text": "Quel animal pond des œufs ?",
    "answers": [
      "Le chien",
      "La poule",
      "Le chat",
      "Le lapin"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn56",
    "text": "Quelle planète est la plus grande ?",
    "answers": [
      "Mars",
      "Jupiter",
      "Saturne",
      "Neptune"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn57",
    "text": "Combien de pattes a un crabe ?",
    "answers": [
      "6",
      "8",
      "10",
      "12"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn58",
    "text": "Quel animal vit dans l'eau et a des écailles ?",
    "answers": [
      "Le chien",
      "Le chat",
      "Le poisson",
      "L'oiseau"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn59",
    "text": "Qu'est-ce qu'un carnivore ?",
    "answers": [
      "Mange des plantes",
      "Mange de la viande",
      "Mange tout",
      "Mange du poisson"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn60",
    "text": "Comment s'appelle le bébé du chat ?",
    "answers": [
      "Un chiot",
      "Un chaton",
      "Un chevreau",
      "Un veau"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn61",
    "text": "Quelle est la saison où les feuilles tombent ?",
    "answers": [
      "L'hiver",
      "Le printemps",
      "L'été",
      "L'automne"
    ],
    "correct": 3,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn62",
    "text": "Combien de pattes a un mille-pattes ?",
    "answers": [
      "10",
      "50",
      "100",
      "Beaucoup"
    ],
    "correct": 3,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn63",
    "text": "Quel animal a des cornes ?",
    "answers": [
      "Le chat",
      "Le chien",
      "La vache",
      "Le lapin"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn64",
    "text": "De quoi les nuages sont-ils faits ?",
    "answers": [
      "De coton",
      "De vapeur d'eau",
      "De fumée",
      "De sable"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn65",
    "text": "Quel animal vit dans l'eau et a des nageoires ?",
    "answers": [
      "Le cheval",
      "Le chien",
      "Le poisson",
      "La poule"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn66",
    "text": "Combien d'yeux a une araignée ?",
    "answers": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correct": 3,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn67",
    "text": "Quelle est la différence entre un lézard et un serpent ?",
    "answers": [
      "La taille",
      "Les pattes",
      "La couleur",
      "Le régime alimentaire"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn68",
    "text": "Combien de dents a un enfant ?",
    "answers": [
      "16",
      "20",
      "24",
      "32"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn69",
    "text": "Quel animal a une carapace ?",
    "answers": [
      "Le chien",
      "Le chat",
      "La tortue",
      "Le lapin"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn70",
    "text": "Comment s'appelle la science des animaux ?",
    "answers": [
      "La botanique",
      "La zoologie",
      "La géologie",
      "L'astronomie"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn71",
    "text": "Quel gaz est nécessaire pour respirer ?",
    "answers": [
      "Dioxyde de carbone",
      "Azote",
      "Oxygène",
      "Hélium"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn72",
    "text": "Combien d'os a un bébé ?",
    "answers": [
      "106",
      "206",
      "300",
      "406"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn73",
    "text": "Quel animal vit dans la mer et a 8 bras ?",
    "answers": [
      "L'étoile de mer",
      "Le crabe",
      "La pieuvre",
      "Le calamar"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn74",
    "text": "Qu'est-ce qu'un prédateur ?",
    "answers": [
      "Un animal qui mange des plantes",
      "Un animal qui chasse d'autres animaux",
      "Un animal qui ne mange pas",
      "Un insecte"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn75",
    "text": "Combien de pattes a un ver de terre ?",
    "answers": [
      "0",
      "2",
      "4",
      "Beaucoup"
    ],
    "correct": 0,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn76",
    "text": "Quel animal est le plus gros félin ?",
    "answers": [
      "Le guépard",
      "Le lion",
      "Le tigre",
      "Le léopard"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn77",
    "text": "Combien de mois dure une grossesse humaine ?",
    "answers": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correct": 3,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn78",
    "text": "Quel animal vole la nuit et dort le jour ?",
    "answers": [
      "L'aigle",
      "La chouette",
      "Le moineau",
      "Le pigeon"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn79",
    "text": "Quelle est la saison des fleurs ?",
    "answers": [
      "L'hiver",
      "L'automne",
      "Le printemps",
      "L'été"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn80",
    "text": "Combien d'oreilles a un humain ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn81",
    "text": "Quel animal vit dans le désert et stocke de l'eau ?",
    "answers": [
      "Le chameau",
      "Le lion",
      "Le pingouin",
      "La grenouille"
    ],
    "correct": 0,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn82",
    "text": "Quelle est la vitesse de la lumière ?",
    "answers": [
      "100 000 km/s",
      "200 000 km/s",
      "300 000 km/s",
      "500 000 km/s"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn83",
    "text": "Combien d'os dans un pied humain ?",
    "answers": [
      "10",
      "15",
      "26",
      "36"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn84",
    "text": "Quel animal pond les plus gros œufs ?",
    "answers": [
      "La poule",
      "L'autruche",
      "La tortue",
      "Le crocodile"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn85",
    "text": "Quelle est la différence entre un caillou et un minéral ?",
    "answers": [
      "La taille",
      "La couleur",
      "La composition chimique",
      "La forme"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn86",
    "text": "Combien de minutes dans une heure ?",
    "answers": [
      "30",
      "45",
      "60",
      "90"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn87",
    "text": "Quel animal est un rongeur ?",
    "answers": [
      "Le chat",
      "Le chien",
      "La souris",
      "Le cheval"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn88",
    "text": "De quelle couleur est une fraise mûre ?",
    "answers": [
      "Bleue",
      "Jaune",
      "Rouge",
      "Verte"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn89",
    "text": "Combien de phases a la Lune ?",
    "answers": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn90",
    "text": "Quel est l'opposé du chaud ?",
    "answers": [
      "Tiède",
      "Froid",
      "Chaud",
      "Frais"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn91",
    "text": "Comment s'appelle le petit du lapin ?",
    "answers": [
      "Un chaton",
      "Un chiot",
      "Un lapereau",
      "Un veau"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn92",
    "text": "Quelle planète est appelée planète bleue ?",
    "answers": [
      "Mars",
      "Vénus",
      "La Terre",
      "Jupiter"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn93",
    "text": "Combien de pattes a un escargot ?",
    "answers": [
      "0",
      "1",
      "2",
      "4"
    ],
    "correct": 0,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn94",
    "text": "Quel animal a des plumes ?",
    "answers": [
      "Le chat",
      "Le chien",
      "L'oiseau",
      "Le poisson"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn95",
    "text": "Qu'est-ce qu'un écosystème ?",
    "answers": [
      "Un animal",
      "Un milieu naturel",
      "Une plante",
      "Un minéral"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn96",
    "text": "Combien d'heures y a-t-il dans une journée ?",
    "answers": [
      "12",
      "20",
      "24",
      "36"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn97",
    "text": "Quel animal vit en groupe appelé \"troupeau\" ?",
    "answers": [
      "Le chat",
      "Le chien",
      "Le mouton",
      "Le lapin"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn98",
    "text": "De quelle couleur est le Soleil vu de l'espace ?",
    "answers": [
      "Jaune",
      "Orange",
      "Blanc",
      "Rouge"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn99",
    "text": "Combien de pattes a une mouche ?",
    "answers": [
      "4",
      "6",
      "8",
      "10"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn100",
    "text": "Qu'est-ce que la gravité ?",
    "answers": [
      "Une force qui attire",
      "Une force qui repousse",
      "Un gaz",
      "Un liquide"
    ],
    "correct": 0,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn101",
    "text": "Quel est le plus gros animal marin ?",
    "answers": [
      "Le requin",
      "La baleine bleue",
      "Le calamar géant",
      "L'orque"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn102",
    "text": "Combien d'années dure un siècle ?",
    "answers": [
      "50",
      "100",
      "200",
      "500"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn103",
    "text": "Quel animal a un long cou ?",
    "answers": [
      "L'éléphant",
      "Le lion",
      "La girafe",
      "Le zèbre"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn104",
    "text": "Qu'est-ce qu'un reptile ?",
    "answers": [
      "Un poisson",
      "Un animal à sang froid et écailles",
      "Un oiseau",
      "Un insecte"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn105",
    "text": "Combien d'os dans une main ?",
    "answers": [
      "14",
      "20",
      "27",
      "36"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn106",
    "text": "Quel animal est le plus rapide sur terre ?",
    "answers": [
      "Le lion",
      "Le guépard",
      "Le cheval",
      "Le chien"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn107",
    "text": "Quelle est la saison la plus chaude ?",
    "answers": [
      "Le printemps",
      "L'été",
      "L'automne",
      "L'hiver"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn108",
    "text": "Combien de jours dure un mois ?",
    "answers": [
      "20",
      "25",
      "28 à 31",
      "35"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn109",
    "text": "Quel animal vit dans la jungle ?",
    "answers": [
      "Le pingouin",
      "Le phoque",
      "Le singe",
      "L'ours polaire"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn110",
    "text": "Comment s'appelle le bébé de l'éléphant ?",
    "answers": [
      "Un veau",
      "Un éléphanteau",
      "Un petit éléphant",
      "Un poulain"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn111",
    "text": "Quelle est la différence entre un fruit et un légume ?",
    "answers": [
      "La taille",
      "La couleur",
      "Le goût sucré",
      "La forme"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn112",
    "text": "Combien d'os dans une jambe ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn113",
    "text": "Quel animal a des nageoires ?",
    "answers": [
      "Le chien",
      "Le chat",
      "Le poisson",
      "Le cheval"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn114",
    "text": "Qu'est-ce qu'un volcan ?",
    "answers": [
      "Une montagne qui crache du feu",
      "Un arbre",
      "Un animal",
      "Un fleuve"
    ],
    "correct": 0,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn115",
    "text": "Combien de doigts a un singe ?",
    "answers": [
      "4",
      "5",
      "6",
      "8"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn116",
    "text": "Quel animal est le plus lourd ?",
    "answers": [
      "L'éléphant",
      "La baleine",
      "Le rhinocéros",
      "L'hippopotame"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn117",
    "text": "Qu'est-ce que l'électricité ?",
    "answers": [
      "Un liquide",
      "Un gaz",
      "Une forme d'énergie",
      "Un solide"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn118",
    "text": "Combien de jours y a-t-il dans une semaine ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn119",
    "text": "Quel animal est domestique ?",
    "answers": [
      "Le loup",
      "Le tigre",
      "Le chat",
      "Le requin"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn120",
    "text": "Qu'est-ce que la photosynthèse ?",
    "answers": [
      "Les plantes mangent",
      "Les plantes créent de l'oxygène grâce au soleil",
      "Les plantes dorment",
      "Les plantes pleurent"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn121",
    "text": "Combien de pattes a une fourmi ?",
    "answers": [
      "4",
      "6",
      "8",
      "10"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn122",
    "text": "Quelle est la saison la plus froide ?",
    "answers": [
      "L'été",
      "Le printemps",
      "L'automne",
      "L'hiver"
    ],
    "correct": 3,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn123",
    "text": "Quel animal a des ailes ?",
    "answers": [
      "Le poisson",
      "La grenouille",
      "L'oiseau",
      "Le serpent"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn124",
    "text": "Combien d'années dure une décennie ?",
    "answers": [
      "5",
      "10",
      "20",
      "50"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn125",
    "text": "Quel animal vit dans l'Arctique ?",
    "answers": [
      "Le lion",
      "Le serpent",
      "L'ours polaire",
      "Le crocodile"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn126",
    "text": "Qu'est-ce que la gravité ?",
    "answers": [
      "Ce qui nous maintient sur Terre",
      "Ce qui nous fait voler",
      "Un gaz",
      "Un liquide"
    ],
    "correct": 0,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn127",
    "text": "Combien de pattes a un papillon ?",
    "answers": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn128",
    "text": "Quel animal est nocturne ?",
    "answers": [
      "La poule",
      "La chouette",
      "Le canard",
      "Le mouton"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn129",
    "text": "Quelle est la différence entre un lac et une mer ?",
    "answers": [
      "La taille",
      "Le sel",
      "La profondeur",
      "La température"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn130",
    "text": "Combien d'os dans un crâne ?",
    "answers": [
      "10",
      "15",
      "22",
      "30"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn131",
    "text": "Quel animal a des bosses ?",
    "answers": [
      "Le chien",
      "Le chameau",
      "Le chat",
      "Le lapin"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn132",
    "text": "Combien de yeux a un chat ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn133",
    "text": "Qu'est-ce qu'un fossile ?",
    "answers": [
      "Un animal vivant",
      "Un reste d'animal vieux",
      "Un minéral",
      "Une plante"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn134",
    "text": "Combien d'années y a-t-il dans un millénaire ?",
    "answers": [
      "100",
      "500",
      "1000",
      "2000"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn135",
    "text": "Quel animal a des défenses ?",
    "answers": [
      "Le chat",
      "L'éléphant",
      "Le chien",
      "La poule"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn136",
    "text": "Qu'est-ce que l'eau ?",
    "answers": [
      "Un solide",
      "Un gaz",
      "Un liquide",
      "Un plasma"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn137",
    "text": "Combien de pattes a une abeille ?",
    "answers": [
      "4",
      "6",
      "8",
      "10"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn138",
    "text": "Quel animal peut voler ?",
    "answers": [
      "Le pingouin",
      "Le crocodile",
      "La chauve-souris",
      "La tortue"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn139",
    "text": "Combien de couleurs dans un arc-en-ciel ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn140",
    "text": "Quel animal vit dans l'eau douce ?",
    "answers": [
      "Le requin",
      "La truite",
      "Le dauphin",
      "La morue"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn141",
    "text": "Combien d'années peut vivre un chien ?",
    "answers": [
      "5",
      "10",
      "15",
      "25"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn142",
    "text": "Quel animal est un prédateur marin ?",
    "answers": [
      "Le chat",
      "Le chien",
      "Le requin",
      "La vache"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn143",
    "text": "Qu'est-ce que la météorologie ?",
    "answers": [
      "L'étude des étoiles",
      "L'étude de la météo",
      "L'étude des roches",
      "L'étude des animaux"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn144",
    "text": "Combien de pattes a un scorpion ?",
    "answers": [
      "4",
      "6",
      "8",
      "10"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn145",
    "text": "Quel est l'animal national de l'Australie ?",
    "answers": [
      "Le lion",
      "Le kangourou",
      "L'éléphant",
      "Le panda"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn146",
    "text": "Qu'est-ce qu'un mammifère ?",
    "answers": [
      "Un animal qui pond",
      "Un animal qui allaite ses petits",
      "Un insecte",
      "Un poisson"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn147",
    "text": "Combien d'années peut vivre un chat ?",
    "answers": [
      "5",
      "10",
      "15-20",
      "30"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn148",
    "text": "Quel animal vit dans les arbres ?",
    "answers": [
      "Le poisson",
      "Le singe",
      "Le phoque",
      "Le crocodile"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn149",
    "text": "Combien d'heures dort un enfant par nuit ?",
    "answers": [
      "4",
      "6",
      "8-10",
      "14"
    ],
    "correct": 2,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "sn150",
    "text": "Quelle est la différence entre un lac et un fleuve ?",
    "answers": [
      "Un lac bouge, un fleuve stagne",
      "Un lac est immobile, un fleuve coule",
      "Leur taille",
      "Leur profondeur"
    ],
    "correct": 1,
    "category": "Sciences & Nature",
    "type": "multiple-choice"
  },
  {
    "id": "hg1",
    "text": "Quel est le plus grand animal terrestre ?",
    "answers": [
      "Le lion",
      "La girafe",
      "L'éléphant",
      "La baleine"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg2",
    "text": "Quel monument est à Paris ?",
    "answers": [
      "La Tour de Pise",
      "La Tour Eiffel",
      "Le Colisée",
      "Big Ben"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg3",
    "text": "Quel pays est en forme de botte ?",
    "answers": [
      "La Grèce",
      "L'Espagne",
      "L'Italie",
      "Le Portugal"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg4",
    "text": "Comment s'appelle le plus long fleuve du monde ?",
    "answers": [
      "Le Mississippi",
      "Le Yangtsé",
      "Le Nil",
      "L'Amazone"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg5",
    "text": "Dans quel pays trouve-t-on les pyramides ?",
    "answers": [
      "Italie",
      "Grèce",
      "Égypte",
      "Mexique"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg6",
    "text": "Combien de continents y a-t-il ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg7",
    "text": "Quel est le plus petit pays du monde ?",
    "answers": [
      "Monaco",
      "Le Vatican",
      "Saint-Marin",
      "Malte"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg8",
    "text": "Combien de jours dure un mois ?",
    "answers": [
      "20",
      "25",
      "28 à 31",
      "35"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg9",
    "text": "Quelle est la capitale de la France ?",
    "answers": [
      "Lyon",
      "Marseille",
      "Paris",
      "Toulouse"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg10",
    "text": "Quel est le plus haut volcan d'Europe ?",
    "answers": [
      "L'Etna",
      "Le Vésuve",
      "Le Stromboli",
      "Le Teide"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg11",
    "text": "Quel pays a la plus grande population ?",
    "answers": [
      "Inde",
      "Chine",
      "États-Unis",
      "Indonésie"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg12",
    "text": "Combien d'océans y a-t-il ?",
    "answers": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg13",
    "text": "Quelle est la capitale de l'Angleterre ?",
    "answers": [
      "Manchester",
      "Birmingham",
      "Londres",
      "Liverpool"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg14",
    "text": "Quel pays est connu pour la pizza ?",
    "answers": [
      "France",
      "Espagne",
      "Italie",
      "Allemagne"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg15",
    "text": "Combien de pays en Europe ?",
    "answers": [
      "25",
      "35",
      "44",
      "50"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg16",
    "text": "Quel pays est le plus grand du monde ?",
    "answers": [
      "Chine",
      "Canada",
      "Russie",
      "États-Unis"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg17",
    "text": "Quel est le plus long fleuve de France ?",
    "answers": [
      "La Seine",
      "Le Rhône",
      "La Loire",
      "La Garonne"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg18",
    "text": "Quelle est la capitale de l'Espagne ?",
    "answers": [
      "Barcelone",
      "Séville",
      "Madrid",
      "Valence"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg19",
    "text": "Combien de pyramides y a-t-il à Gizeh ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg20",
    "text": "Quel est le plus haut sommet du monde ?",
    "answers": [
      "Le Mont Blanc",
      "Le K2",
      "L'Everest",
      "Le Kilimandjaro"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg21",
    "text": "Quel pays est le pays du soleil levant ?",
    "answers": [
      "La Chine",
      "La Corée",
      "Le Japon",
      "La Thaïlande"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg22",
    "text": "Quelle est la capitale de l'Allemagne ?",
    "answers": [
      "Munich",
      "Berlin",
      "Hambourg",
      "Francfort"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg23",
    "text": "Combien de jours dans une année bissextile ?",
    "answers": [
      "364",
      "365",
      "366",
      "367"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg24",
    "text": "Quel pays a gagné le plus de Coupes du Monde ?",
    "answers": [
      "Allemagne",
      "Brésil",
      "Italie",
      "Argentine"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg25",
    "text": "Quelle est la capitale de l'Italie ?",
    "answers": [
      "Milan",
      "Rome",
      "Naples",
      "Venise"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg26",
    "text": "Combien d'étoiles dans le drapeau américain ?",
    "answers": [
      "25",
      "30",
      "50",
      "55"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg27",
    "text": "Quel pays est le plus grand d'Afrique ?",
    "answers": [
      "Nigeria",
      "Afrique du Sud",
      "Algérie",
      "Soudan"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg28",
    "text": "Quelle est la capitale du Japon ?",
    "answers": [
      "Osaka",
      "Kyoto",
      "Tokyo",
      "Hiroshima"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg29",
    "text": "Combien de pays en Amérique du Sud ?",
    "answers": [
      "8",
      "10",
      "12",
      "14"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg30",
    "text": "Quelle est la capitale du Brésil ?",
    "answers": [
      "São Paulo",
      "Rio de Janeiro",
      "Brasilia",
      "Salvador"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg31",
    "text": "Quel pays est divisé en deux par le canal de Suez ?",
    "answers": [
      "Turquie",
      "Égypte",
      "Israël",
      "Iran"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg32",
    "text": "Combien de régions en France métropolitaine ?",
    "answers": [
      "10",
      "13",
      "15",
      "18"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg33",
    "text": "Quelle est la capitale de la Chine ?",
    "answers": [
      "Shanghai",
      "Pékin",
      "Hong Kong",
      "Canton"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg34",
    "text": "Quel pays est le plus visité au monde ?",
    "answers": [
      "États-Unis",
      "France",
      "Espagne",
      "Chine"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg35",
    "text": "Combien de montagnes dans les Alpes ?",
    "answers": [
      "Des centaines",
      "50",
      "10",
      "3"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg36",
    "text": "Quelle est la capitale de l'Australie ?",
    "answers": [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Brisbane"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg37",
    "text": "Quel pays est le plus long du monde ?",
    "answers": [
      "Russie",
      "Canada",
      "Chine",
      "États-Unis"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg38",
    "text": "Combien de pays en Asie ?",
    "answers": [
      "20",
      "30",
      "40",
      "48"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg39",
    "text": "Quelle est la capitale du Canada ?",
    "answers": [
      "Toronto",
      "Vancouver",
      "Montréal",
      "Ottawa"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg40",
    "text": "Quel pays est le plus grand producteur de café ?",
    "answers": [
      "Brésil",
      "Colombie",
      "Vietnam",
      "Éthiopie"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg41",
    "text": "Combien de sommets de plus de 8000m ?",
    "answers": [
      "5",
      "8",
      "14",
      "20"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg42",
    "text": "Quelle est la capitale de la Russie ?",
    "answers": [
      "Saint-Pétersbourg",
      "Moscou",
      "Novossibirsk",
      "Kazan"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg43",
    "text": "Quel est le plus grand désert du monde ?",
    "answers": [
      "Le Sahara",
      "Le Gobi",
      "L'Antarctique",
      "Le Kalahari"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg44",
    "text": "Combien d'habitants en France (environ) ?",
    "answers": [
      "40 millions",
      "50 millions",
      "67 millions",
      "80 millions"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg45",
    "text": "Quelle est la capitale de l'Inde ?",
    "answers": [
      "Mumbai",
      "New Delhi",
      "Kolkata",
      "Chennai"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg46",
    "text": "Quel pays est le plus petit d'Europe ?",
    "answers": [
      "Monaco",
      "Le Vatican",
      "Saint-Marin",
      "Malte"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg47",
    "text": "Combien de mers bordent la France ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg48",
    "text": "Quelle est la capitale des États-Unis ?",
    "answers": [
      "New York",
      "Los Angeles",
      "Chicago",
      "Washington"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg49",
    "text": "Quel pays a la forme d'un hexagone ?",
    "answers": [
      "Italie",
      "Espagne",
      "France",
      "Allemagne"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg50",
    "text": "Combien d'années a duré la Première Guerre mondiale ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg51",
    "text": "Quel est le plus grand océan ?",
    "answers": [
      "Atlantique",
      "Indien",
      "Pacifique",
      "Arctique"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg52",
    "text": "Combien de départements en France ?",
    "answers": [
      "86",
      "94",
      "96",
      "101"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg53",
    "text": "Quelle est la capitale de la Belgique ?",
    "answers": [
      "Anvers",
      "Bruges",
      "Bruxelles",
      "Liège"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg54",
    "text": "Quel pays est surnommé le pays du matin calme ?",
    "answers": [
      "Japon",
      "Chine",
      "Corée du Sud",
      "Vietnam"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg55",
    "text": "Combien de montagnes dans les Pyrénées ?",
    "answers": [
      "Des dizaines",
      "5",
      "3",
      "1"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg56",
    "text": "Quelle est la capitale de l'Irlande ?",
    "answers": [
      "Belfast",
      "Dublin",
      "Cork",
      "Galway"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg57",
    "text": "Quel est le plus grand pays d'Europe ?",
    "answers": [
      "France",
      "Ukraine",
      "Suède",
      "Espagne"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg58",
    "text": "Combien d'années a duré la Seconde Guerre mondiale ?",
    "answers": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg59",
    "text": "Quelle est la capitale du Maroc ?",
    "answers": [
      "Casablanca",
      "Fès",
      "Rabat",
      "Marrakech"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg60",
    "text": "Quel pays est le plus grand d'Amérique du Sud ?",
    "answers": [
      "Argentine",
      "Brésil",
      "Colombie",
      "Pérou"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg61",
    "text": "Combien de pays dans l'Union européenne ?",
    "answers": [
      "20",
      "23",
      "27",
      "30"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg62",
    "text": "Quelle est la capitale de la Suisse ?",
    "answers": [
      "Zurich",
      "Genève",
      "Berne",
      "Bâle"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg63",
    "text": "Quel est le plus haut volcan du monde ?",
    "answers": [
      "L'Etna",
      "Le Vésuve",
      "Le Chimborazo",
      "L'Ojos del Salado"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg64",
    "text": "Combien d'habitants sur Terre (environ) ?",
    "answers": [
      "4 milliards",
      "5 milliards",
      "8 milliards",
      "10 milliards"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg65",
    "text": "Quelle est la capitale de la Grèce ?",
    "answers": [
      "Sparte",
      "Athènes",
      "Thessalonique",
      "Patras"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg66",
    "text": "Quel pays est traversé par l'équateur ?",
    "answers": [
      "France",
      "Brésil",
      "Chine",
      "Australie"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg67",
    "text": "Combien de régions en France outre-mer ?",
    "answers": [
      "3",
      "5",
      "7",
      "10"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg68",
    "text": "Quelle est la capitale de l'Égypte ?",
    "answers": [
      "Le Caire",
      "Alexandrie",
      "Louxor",
      "Gizeh"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg69",
    "text": "Quel pays est connu pour les tulipes ?",
    "answers": [
      "France",
      "Espagne",
      "Pays-Bas",
      "Allemagne"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg70",
    "text": "Combien de fuseaux horaires en Russie ?",
    "answers": [
      "3",
      "5",
      "7",
      "11"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg71",
    "text": "Quelle est la capitale de la Suède ?",
    "answers": [
      "Oslo",
      "Stockholm",
      "Copenhague",
      "Helsinki"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg72",
    "text": "Quel est le plus long fleuve d'Europe ?",
    "answers": [
      "La Seine",
      "Le Danube",
      "Le Rhin",
      "La Volga"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg73",
    "text": "Combien d'habitants a Paris (environ) ?",
    "answers": [
      "1 million",
      "2 millions",
      "5 millions",
      "10 millions"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg74",
    "text": "Quelle est la capitale du Portugal ?",
    "answers": [
      "Porto",
      "Lisbonne",
      "Faro",
      "Coimbra"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg75",
    "text": "Quel pays a le plus de côtes en Europe ?",
    "answers": [
      "France",
      "Espagne",
      "Grèce",
      "Italie"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg76",
    "text": "Combien de pays en Afrique ?",
    "answers": [
      "34",
      "40",
      "48",
      "54"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg77",
    "text": "Quelle est la capitale de la Turquie ?",
    "answers": [
      "Istanbul",
      "Ankara",
      "Izmir",
      "Antalya"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg78",
    "text": "Quel pays est la porte de l'Europe ?",
    "answers": [
      "France",
      "Allemagne",
      "Turquie",
      "Italie"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg79",
    "text": "Combien de montagnes dans le Massif central ?",
    "answers": [
      "Des dizaines",
      "5",
      "2",
      "0"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg80",
    "text": "Quelle est la capitale de la Pologne ?",
    "answers": [
      "Krakovie",
      "Gdańsk",
      "Varsovie",
      "Wrocław"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg81",
    "text": "Quel pays est le plus riche d'Europe ?",
    "answers": [
      "France",
      "Allemagne",
      "Luxembourg",
      "Suisse"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg82",
    "text": "Combien de pays hispanophones ?",
    "answers": [
      "10",
      "15",
      "20",
      "25"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg83",
    "text": "Quelle est la capitale de la Norvège ?",
    "answers": [
      "Stockholm",
      "Oslo",
      "Helsinki",
      "Copenhague"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg84",
    "text": "Quel pays a inventé les Jeux Olympiques ?",
    "answers": [
      "Rome",
      "Égypte",
      "Grèce",
      "France"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg85",
    "text": "Combien de sommets dans les Vosges ?",
    "answers": [
      "1",
      "3",
      "10",
      "Des dizaines"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg86",
    "text": "Quelle est la capitale du Mexique ?",
    "answers": [
      "Guadalajara",
      "Monterrey",
      "Mexico",
      "Puebla"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg87",
    "text": "Quel pays est le plus grand d'Afrique ?",
    "answers": [
      "Algérie",
      "Congo",
      "Soudan",
      "Tanzanie"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg88",
    "text": "Combien de pays arabes ?",
    "answers": [
      "10",
      "15",
      "20",
      "22"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg89",
    "text": "Quelle est la capitale de la Croatie ?",
    "answers": [
      "Zagreb",
      "Split",
      "Dubrovnik",
      "Rijeka"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg90",
    "text": "Quel est le plus vieux monument de Paris ?",
    "answers": [
      "Notre-Dame",
      "Le Panthéon",
      "Les Arènes de Lutèce",
      "Sainte-Chapelle"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg91",
    "text": "Combien d'années a duré l'Empire romain ?",
    "answers": [
      "200",
      "500",
      "1000",
      "1500"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg92",
    "text": "Quelle est la capitale de la Tunisie ?",
    "answers": [
      "Sfax",
      "Sousse",
      "Tunis",
      "Kairouan"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg93",
    "text": "Quel pays est surnommé \"l'Oncle Sam\" ?",
    "answers": [
      "France",
      "Angleterre",
      "États-Unis",
      "Chine"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg94",
    "text": "Combien de montagnes dans la Cordillère des Andes ?",
    "answers": [
      "Des milliers",
      "10",
      "5",
      "3"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg95",
    "text": "Quelle est la capitale de l'Argentine ?",
    "answers": [
      "Santiago",
      "Buenos Aires",
      "Lima",
      "Montevideo"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg96",
    "text": "Quel pays a le plus d'îles ?",
    "answers": [
      "Indonésie",
      "Philippines",
      "Suède",
      "Canada"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg97",
    "text": "Combien d'années a duré la guerre de 100 ans ?",
    "answers": [
      "50",
      "100",
      "116",
      "150"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg98",
    "text": "Quelle est la capitale du Pérou ?",
    "answers": [
      "La Paz",
      "Lima",
      "Bogota",
      "Quito"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg99",
    "text": "Quel pays a découvert l'Amérique ?",
    "answers": [
      "France",
      "Angleterre",
      "Espagne",
      "Portugal"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg100",
    "text": "Combien d'habitants a Londres (environ) ?",
    "answers": [
      "5 millions",
      "7 millions",
      "9 millions",
      "12 millions"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg101",
    "text": "Quelle est la capitale de la Serbie ?",
    "answers": [
      "Sarajevo",
      "Zagreb",
      "Belgrade",
      "Skopje"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg102",
    "text": "Quel pays est le plus grand producteur de chocolat ?",
    "answers": [
      "Suisse",
      "Belgique",
      "France",
      "Côte d'Ivoire"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg103",
    "text": "Combien d'années a duré la guerre froide ?",
    "answers": [
      "20",
      "30",
      "40",
      "50"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg104",
    "text": "Quelle est la capitale du Chili ?",
    "answers": [
      "Buenos Aires",
      "Santiago",
      "Lima",
      "Bogota"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg105",
    "text": "Quel pays a le plus grand musée du monde ?",
    "answers": [
      "France",
      "Angleterre",
      "États-Unis",
      "Chine"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg106",
    "text": "Combien de cathédrales gothiques en France ?",
    "answers": [
      "10",
      "20",
      "50",
      "Plus de 80"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg107",
    "text": "Quelle est la capitale de la Colombie ?",
    "answers": [
      "Bogota",
      "Lima",
      "Caracas",
      "Quito"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg108",
    "text": "Quel pays a la plus grande forêt ?",
    "answers": [
      "Canada",
      "Russie",
      "Brésil",
      "Congo"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg109",
    "text": "Combien d'années a duré la Révolution française ?",
    "answers": [
      "5",
      "10",
      "15",
      "20"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg110",
    "text": "Quelle est la capitale de l'Autriche ?",
    "answers": [
      "Munich",
      "Vienne",
      "Zurich",
      "Salzbourg"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg111",
    "text": "Quel pays est le plus pauvre d'Europe ?",
    "answers": [
      "Albanie",
      "Moldavie",
      "Ukraine",
      "Bulgarie"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg112",
    "text": "Combien de langues officielles en Suisse ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg113",
    "text": "Quelle est la capitale de la Hongrie ?",
    "answers": [
      "Budapest",
      "Prague",
      "Vienne",
      "Bratislava"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg114",
    "text": "Quel pays a le plus long littoral ?",
    "answers": [
      "Australie",
      "Indonésie",
      "Canada",
      "Russie"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg115",
    "text": "Combien d'habitants a New York (environ) ?",
    "answers": [
      "5 millions",
      "7 millions",
      "8,5 millions",
      "10 millions"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg116",
    "text": "Quelle est la capitale de la Finlande ?",
    "answers": [
      "Stockholm",
      "Oslo",
      "Helsinki",
      "Tallinn"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg117",
    "text": "Quel pays est le plus sec du monde ?",
    "answers": [
      "Égypte",
      "Sahara",
      "Chili",
      "Arabie Saoudite"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg118",
    "text": "Combien de langues parlées dans le monde ?",
    "answers": [
      "1000",
      "3000",
      "5000",
      "7000"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg119",
    "text": "Quelle est la capitale de la Roumanie ?",
    "answers": [
      "Budapest",
      "Bucarest",
      "Sofia",
      "Belgrade"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg120",
    "text": "Quel pays a le plus de volcans actifs ?",
    "answers": [
      "Islande",
      "Japon",
      "Indonésie",
      "États-Unis"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg121",
    "text": "Combien d'années a duré l'Empire ottoman ?",
    "answers": [
      "200",
      "400",
      "600",
      "800"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg122",
    "text": "Quelle est la capitale de la Tchéquie ?",
    "answers": [
      "Bratislava",
      "Prague",
      "Budapest",
      "Vienne"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg123",
    "text": "Quel pays a le plus grand réseau ferroviaire ?",
    "answers": [
      "Chine",
      "États-Unis",
      "Inde",
      "Russie"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg124",
    "text": "Combien de montagnes dans les Carpates ?",
    "answers": [
      "3",
      "5",
      "Des dizaines",
      "100"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg125",
    "text": "Quelle est la capitale de la Bulgarie ?",
    "answers": [
      "Sofia",
      "Bucarest",
      "Belgrade",
      "Athènes"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg126",
    "text": "Quel pays a le plus de lacs ?",
    "answers": [
      "Canada",
      "Finlande",
      "États-Unis",
      "Suède"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg127",
    "text": "Combien d'années a duré la conquête de l'Ouest ?",
    "answers": [
      "20",
      "30",
      "50",
      "100"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg128",
    "text": "Quelle est la capitale de la Slovaquie ?",
    "answers": [
      "Prague",
      "Bratislava",
      "Vienne",
      "Budapest"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg129",
    "text": "Quel pays a le plus de circuits de F1 ?",
    "answers": [
      "États-Unis",
      "Italie",
      "Espagne",
      "Allemagne"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg130",
    "text": "Combien de pays dans le Commonwealth ?",
    "answers": [
      "20",
      "30",
      "50",
      "56"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg131",
    "text": "Quelle est la capitale de la Lituanie ?",
    "answers": [
      "Riga",
      "Vilnius",
      "Tallinn",
      "Kaunas"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg132",
    "text": "Quel pays a la plus grande réserve de pétrole ?",
    "answers": [
      "États-Unis",
      "Arabie Saoudite",
      "Russie",
      "Venezuela"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg133",
    "text": "Combien d'années a duré l'Empire mongol ?",
    "answers": [
      "50",
      "100",
      "150",
      "200"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg134",
    "text": "Quelle est la capitale de la Lettonie ?",
    "answers": [
      "Vilnius",
      "Riga",
      "Tallinn",
      "Kaunas"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg135",
    "text": "Quel pays a le plus de sites UNESCO ?",
    "answers": [
      "France",
      "Italie",
      "Chine",
      "Espagne"
    ],
    "correct": 3,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg136",
    "text": "Combien de pays en Amérique du Nord ?",
    "answers": [
      "2",
      "3",
      "5",
      "7"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg137",
    "text": "Quelle est la capitale de l'Estonie ?",
    "answers": [
      "Riga",
      "Tallinn",
      "Helsinki",
      "Vilnius"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg138",
    "text": "Quel pays a le plus de temps de travail ?",
    "answers": [
      "France",
      "Allemagne",
      "Japon",
      "Mexique"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg139",
    "text": "Combien d'années a duré l'Empire byzantin ?",
    "answers": [
      "200",
      "500",
      "1000",
      "1500"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg140",
    "text": "Quelle est la capitale de la Géorgie ?",
    "answers": [
      "Tbilissi",
      "Bakou",
      "Erevan",
      "Ankara"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg141",
    "text": "Quel pays a le plus de festivals ?",
    "answers": [
      "France",
      "Espagne",
      "Italie",
      "Allemagne"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg142",
    "text": "Combien d'années a duré l'Empire aztèque ?",
    "answers": [
      "50",
      "100",
      "200",
      "500"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg143",
    "text": "Quelle est la capitale de l'Arménie ?",
    "answers": [
      "Tbilissi",
      "Bakou",
      "Erevan",
      "Ankara"
    ],
    "correct": 2,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg144",
    "text": "Quel pays a le plus de cyclistes ?",
    "answers": [
      "France",
      "Pays-Bas",
      "Belgique",
      "Espagne"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg145",
    "text": "Combien d'années a duré l'Empire inca ?",
    "answers": [
      "50",
      "100",
      "200",
      "300"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg146",
    "text": "Quelle est la capitale de l'Azerbaïdjan ?",
    "answers": [
      "Tbilissi",
      "Bakou",
      "Erevan",
      "Ankara"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg147",
    "text": "Quel pays a le plus de fromages ?",
    "answers": [
      "France",
      "Italie",
      "Suisse",
      "Pays-Bas"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg148",
    "text": "Combien de siècles a duré le Moyen Âge ?",
    "answers": [
      "5",
      "10",
      "15",
      "20"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg149",
    "text": "Quelle est la capitale de la Moldavie ?",
    "answers": [
      "Chișinău",
      "Bucarest",
      "Sofia",
      "Odessa"
    ],
    "correct": 0,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "hg150",
    "text": "Quel pays a le plus de touristes ?",
    "answers": [
      "États-Unis",
      "France",
      "Espagne",
      "Chine"
    ],
    "correct": 1,
    "category": "Histoire & Géographie",
    "type": "multiple-choice"
  },
  {
    "id": "jv1",
    "text": "Quel est le métier de Mario ?",
    "answers": [
      "Mécanicien",
      "Plombier",
      "Boulanger",
      "Couturier"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv2",
    "text": "Quel hérisson bleu court très vite ?",
    "answers": [
      "Knuckles",
      "Sonic",
      "Shadow",
      "Tails"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv3",
    "text": "Dans quel jeu construit-on des maisons et évite-t-on des Creepers ?",
    "answers": [
      "Terraria",
      "Minecraft",
      "Roblox",
      "Fortnite"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv4",
    "text": "Quel est le Pokémon jaune avec des éclairs ?",
    "answers": [
      "Joliflor",
      "Raichu",
      "Pikachu",
      "Pichu"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv5",
    "text": "Comment s'appelle le dinosaure vert de Mario ?",
    "answers": [
      "Bowser",
      "Toad",
      "Yoshi",
      "Birdo"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv6",
    "text": "Quel jeu de tir utilise de la peinture ?",
    "answers": [
      "Fortnite",
      "Splatoon",
      "Overwatch",
      "Call of Duty"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv7",
    "text": "Comment s'appelle l'héroïne de Tomb Raider ?",
    "answers": [
      "Lara Croft",
      "Nathan Drake",
      "Elena Fisher",
      "Abby"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv8",
    "text": "Dans Zelda, quel est le nom du héros ?",
    "answers": [
      "Zelda",
      "Ganon",
      "Link",
      "Navi"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv9",
    "text": "De quelle couleur est la casquette de Luigi ?",
    "answers": [
      "Rouge",
      "Bleue",
      "Verte",
      "Jaune"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv10",
    "text": "Quel singe est le rival de Mario ?",
    "answers": [
      "Diddy Kong",
      "King Kong",
      "Donkey Kong",
      "Cranky Kong"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv11",
    "text": "Quel jeu de danse suit les mouvements à l'écran ?",
    "answers": [
      "DDR",
      "Just Dance",
      "Beat Saber",
      "Flipt"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv12",
    "text": "Comment s'appelle la boule rose qui avale ses ennemis ?",
    "answers": [
      "Kirby",
      "Jigglypuff",
      "Pikachu",
      "Pac-Man"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv13",
    "text": "Quel dragon violet est héros de jeux de plateforme ?",
    "answers": [
      "Spyro",
      "Bowser",
      "Charizard",
      "Alduin"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv14",
    "text": "Dans quel jeu trouve-t-on l'imposteur ?",
    "answers": [
      "Alien",
      "Among Us",
      "Dead by Daylight",
      "Overcooked"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv15",
    "text": "Comment s'appelle le frère de Mario en vert ?",
    "answers": [
      "Wario",
      "Toad",
      "Luigi",
      "Yoshi"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv16",
    "text": "Quel jeu de foot se joue avec des voitures ?",
    "answers": [
      "FIFA",
      "Rocket League",
      "Mario Strikers",
      "eFootball"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv17",
    "text": "Comment s'appelle le héros d'Uncharted ?",
    "answers": [
      "Nathan Drake",
      "Lara Croft",
      "Indiana Jones",
      "Ethan Hunt"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv18",
    "text": "Dans quel jeu s'affrontent Mario, Pikachu et Kirby ?",
    "answers": [
      "Tekken",
      "Street Fighter",
      "Super Smash Bros",
      "Mortal Kombat"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv19",
    "text": "Comment s'appelle l'application pour chasser des Pokémon ?",
    "answers": [
      "Pokémon GO",
      "Pokémon Masters",
      "Pokémon UNITE",
      "Pokémon Sleep"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv20",
    "text": "Quel est le nom du personnage par défaut de Minecraft ?",
    "answers": [
      "Alex",
      "Steve",
      "Notch",
      "Herobrine"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv21",
    "text": "Quel hérisson noir est le rival de Sonic ?",
    "answers": [
      "Silver",
      "Metal Sonic",
      "Shadow",
      "Knuckles"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv22",
    "text": "Comment s'appelle le petit robot bleu avec un canon ?",
    "answers": [
      "Mega Man",
      "Proto Man",
      "Zero",
      "Bionic Commando"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv23",
    "text": "Comment s'appelle le héros de God of War ?",
    "answers": [
      "Kratos",
      "Atreus",
      "Zeus",
      "Thor"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv24",
    "text": "Comment s'appelle le jeu où l'on incarne un haricot ?",
    "answers": [
      "Stumble Guys",
      "Fall Guys",
      "Among Us",
      "Party Animals"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv25",
    "text": "Comment s'appelle le héros de Rayman ?",
    "answers": [
      "Rayman",
      "Globox",
      "Murphy",
      "Barbara"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv26",
    "text": "Dans quel jeu tombe-t-on d'un bus volant ?",
    "answers": [
      "PUBG",
      "Fortnite",
      "Apex Legends",
      "Warzone"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv27",
    "text": "Comment s'appelle la boule jaune qui mange des fantômes ?",
    "answers": [
      "Pac-Man",
      "Blinky",
      "Kirby",
      "Sonic"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv28",
    "text": "Console portable de Nintendo à deux écrans ?",
    "answers": [
      "Game Boy",
      "GameCube",
      "Nintendo DS",
      "PS Vita"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv29",
    "text": "Renard à deux queues avec Sonic ?",
    "answers": [
      "Knuckles",
      "Tails",
      "Shadow",
      "Amy"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv30",
    "text": "Console de Nintendo salon ou portable ?",
    "answers": [
      "Wii U",
      "GameCube",
      "Switch",
      "NES"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv31",
    "text": "Quel animal est Tom Nook dans Animal Crossing ?",
    "answers": [
      "Rat",
      "Tanuki",
      "Chat",
      "Renard"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv32",
    "text": "Princesse que Mario doit sauver ?",
    "answers": [
      "Zelda",
      "Peach",
      "Daisy",
      "Harmonie"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv33",
    "text": "Objet pour être 1er dans Mario Kart ?",
    "answers": [
      "Banane",
      "Carapace rouge",
      "Carapace bleue",
      "Éclair"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv34",
    "text": "Console du premier Pokémon ?",
    "answers": [
      "NES",
      "Game Boy",
      "Nintendo 64",
      "DS"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv35",
    "text": "Monstre de Minecraft qui se téléporte ?",
    "answers": [
      "Creeper",
      "Zombie",
      "Enderman",
      "Ghast"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv36",
    "text": "Studio qui a créé Minecraft ?",
    "answers": [
      "Ubisoft",
      "Mojang",
      "Epic Games",
      "Sony"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv37",
    "text": "Monnaie de Roblox ?",
    "answers": [
      "V-Bucks",
      "Robux",
      "Coins",
      "Dollars"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv38",
    "text": "Studio créateur de la PlayStation ?",
    "answers": [
      "Microsoft",
      "Nintendo",
      "Sony",
      "SEGA"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv39",
    "text": "IA de Halo ?",
    "answers": [
      "Siri",
      "Cortana",
      "Glados",
      "Alexa"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv40",
    "text": "Ville de départ de Pokémon Rouge ?",
    "answers": [
      "Bourg Palette",
      "Argenta",
      "Azuria",
      "Parmanie"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv41",
    "text": "Objet invisible dans Mario Kart ?",
    "answers": [
      "Étoile",
      "Boo",
      "Champignon",
      "Banane"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv42",
    "text": "Couleur de la casquette de Mario ?",
    "answers": [
      "Bleue",
      "Verte",
      "Rouge",
      "Jaune"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv43",
    "text": "Instrument de Zelda pour le temps ?",
    "answers": [
      "Flûte",
      "Ocarina",
      "Harpe",
      "Guitare"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv44",
    "text": "Monstre qui explose dans Minecraft ?",
    "answers": [
      "Squelette",
      "Creeper",
      "Araignée",
      "Cochon"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv45",
    "text": "Console portable Sony après PSP ?",
    "answers": [
      "GameGear",
      "PS Vita",
      "Switch",
      "DS"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv46",
    "text": "Jeu mobile oiseaux vs cochons ?",
    "answers": [
      "Flappy Bird",
      "Angry Birds",
      "Candy Crush",
      "Roblox"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv47",
    "text": "Héros de Halo ?",
    "answers": [
      "Doom Guy",
      "Master Chief",
      "Kratos",
      "Marcus"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv48",
    "text": "Royaume de Link ?",
    "answers": [
      "Mushroom Kingdom",
      "Hyrule",
      "Azeroth",
      "Équestria"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv49",
    "text": "Jeu bac à sable sur la vie quotidienne ?",
    "answers": [
      "Minecraft",
      "Les Sims",
      "Animal Crossing",
      "GTA"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv50",
    "text": "Bloc rare et bleu de Minecraft ?",
    "answers": [
      "Or",
      "Fer",
      "Diamant",
      "Charbon"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv51",
    "text": "Méchant récurrent de Zelda ?",
    "answers": [
      "Bowser",
      "Ganondorf",
      "Mewtwo",
      "Dr Eggman"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv52",
    "text": "Pierre pour évoluer Pikachu ?",
    "answers": [
      "Pierre Feu",
      "Pierre Eau",
      "Pierre Foudre",
      "Pierre Lune"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv53",
    "text": "Jeu qui utilise des briques emboîtables ?",
    "answers": [
      "Minecraft",
      "LEGO",
      "Roblox",
      "Tetris"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv54",
    "text": "Monde souterrain de Minecraft ?",
    "answers": [
      "Le Nether",
      "L'End",
      "Le Ciel",
      "La Terre"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv55",
    "text": "Jeu d'empiler des briques ?",
    "answers": [
      "Minecraft",
      "LEGO",
      "Roblox",
      "Tetris"
    ],
    "correct": 3,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv56",
    "text": "Petit robot rond de Star Wars ?",
    "answers": [
      "BD-1",
      "R2-D2",
      "BB-8",
      "C-3PO"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv57",
    "text": "Jeu de combat avec des Fatality ?",
    "answers": [
      "Tekken",
      "Street Fighter",
      "Mortal Kombat",
      "Super Smash Bros"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv58",
    "text": "Jeu avec un bus volant au début ?",
    "answers": [
      "PUBG",
      "Fortnite",
      "Apex",
      "Warzone"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv59",
    "text": "Frère de Mario en tenue verte ?",
    "answers": [
      "Wario",
      "Waluigi",
      "Luigi",
      "Yoshi"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv60",
    "text": "Petit dinosaure rose ressemblant à Yoshi ?",
    "answers": [
      "Birdo",
      "Yoshi",
      "Bowser",
      "Toad"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv61",
    "text": "Jeu d'aligner des bonbons ?",
    "answers": [
      "Candy Crush",
      "Tetris",
      "Bejeweled",
      "2048"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv62",
    "text": "Tablette technologique de Zelda BOTW ?",
    "answers": [
      "Tablette Sheikah",
      "Ocarina",
      "Master Sword",
      "Hylian Shield"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv63",
    "text": "Ville sous-marine de BioShock ?",
    "answers": [
      "Rapture",
      "Columbia",
      "Atlantide",
      "Bikini Bottom"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv64",
    "text": "Objet pour voler dans Minecraft ?",
    "answers": [
      "Élytres",
      "Champignon",
      "Plume d'ange",
      "Ender Pearl"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv65",
    "text": "Jeu de danse sur Switch ?",
    "answers": [
      "Just Dance",
      "Dance Dance Revolution",
      "Beat Saber",
      "Flipt"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv66",
    "text": "Chien qui se moque dans Duck Hunt ?",
    "answers": [
      "Pluto",
      "Snoopy",
      "Le Chien",
      "Rex"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv67",
    "text": "Prénom civil de Chat Noir ?",
    "answers": [
      "Marin",
      "Adrien",
      "Luka",
      "Nino"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv68",
    "text": "Couleur du sabre de Dark Vador ?",
    "answers": [
      "Bleu",
      "Vert",
      "Rouge",
      "Blanc"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv69",
    "text": "Espèce de Nemo ?",
    "answers": [
      "Requin",
      "Poisson-Clown",
      "Raie",
      "Daurade"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv70",
    "text": "Nom du vaisseau de Han Solo ?",
    "answers": [
      "Étoile Noire",
      "Faucon Millénium",
      "Enterprise",
      "Naboo"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv71",
    "text": "Prénom de la petite sœur de Gumball ?",
    "answers": [
      "Anaïs",
      "Nicole",
      "Penny",
      "Carrie"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv72",
    "text": "Animal de Judy Hopps dans Zootopie ?",
    "answers": [
      "Renard",
      "Lapine",
      "Lionne",
      "Mouton"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv73",
    "text": "Démon enfermé dans Naruto ?",
    "answers": [
      "Loup",
      "Corbeau",
      "Serpent",
      "Renard"
    ],
    "correct": 3,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv74",
    "text": "Détective enfant dans Detective Conan ?",
    "answers": [
      "Conan",
      "Shinichi",
      "Lupin",
      "Kindaichi"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv75",
    "text": "Bébé dinosaure rockeur ?",
    "answers": [
      "Yoshi",
      "Denver",
      "Barney",
      "Dino"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv76",
    "text": "Chat bleu qui poursuit des cafards ?",
    "answers": [
      "Tom",
      "Oggy",
      "Sylvestre",
      "Felix"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv77",
    "text": "Chat qui poursuit Jerry ?",
    "answers": [
      "Felix",
      "Sylvestre",
      "Tom",
      "Garfield"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv78",
    "text": "Petit garçon viking avec Krokmou ?",
    "answers": [
      "Stoïck",
      "Harold",
      "Snotlout",
      "Tuffnut"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv79",
    "text": "Bonhomme de neige de La Reine des Neiges ?",
    "answers": [
      "Frosty",
      "Olaf",
      "Bonhomme",
      "Sven"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv80",
    "text": "Sœur de la Reine des Neiges ?",
    "answers": [
      "Anna",
      "Rapunzel",
      "Ariel",
      "Blanche-Neige"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv81",
    "text": "Panda héros de Kung Fu Panda ?",
    "answers": [
      "Po",
      "Tigresse",
      "Grue",
      "Mante"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv82",
    "text": "Singe de la Pat' Patrouille ?",
    "answers": [
      "Chase",
      "Marshall",
      "Skye",
      "Rocky"
    ],
    "correct": 3,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv83",
    "text": "Couleur de la peau des Simpson ?",
    "answers": [
      "Orange",
      "Rose",
      "Jaune",
      "Blanche"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv84",
    "text": "Créateur de la série Les Simpson ?",
    "answers": [
      "Seth MacFarlane",
      "Matt Groening",
      "Trey Parker",
      "Mike Judge"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv85",
    "text": "Héros qui tire plus vite que son ombre ?",
    "answers": [
      "Billy the Kid",
      "Lucky Luke",
      "Zorro",
      "Le Lone Ranger"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv86",
    "text": "Géant vert le plus fort des Avengers ?",
    "answers": [
      "Iron Man",
      "Thor",
      "Hulk",
      "Captain America"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv87",
    "text": "Comment s'appelle la camionnette de Scooby-Doo ?",
    "answers": [
      "La Machinette",
      "La Mystery Machine",
      "Le Batmobile",
      "Le Van"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv88",
    "text": "Couleur du Génie d'Aladdin ?",
    "answers": [
      "Rouge",
      "Vert",
      "Bleu",
      "Or"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv89",
    "text": "Nom de l'éponge sous la mer ?",
    "answers": [
      "Bob l'éponge",
      "Patrick",
      "Carlo",
      "Squidward"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv90",
    "text": "Chien peureux de Sammy ?",
    "answers": [
      "Idefix",
      "Snoopy",
      "Scooby-Doo",
      "Pluto"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv91",
    "text": "Petit frère de Peppa Pig ?",
    "answers": [
      "George",
      "Charlie",
      "Tom",
      "Pedro"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv92",
    "text": "Pouvoir secret d'Anya dans Spy x Family ?",
    "answers": [
      "Force",
      "Téléportation",
      "Télépathie",
      "Voler"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv93",
    "text": "Couleur du bonnet du Grand Schtroumpf ?",
    "answers": [
      "Bleu",
      "Blanc",
      "Rouge",
      "Vert"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv94",
    "text": "Animal de Gumball ?",
    "answers": [
      "Chien",
      "Lapin",
      "Chat",
      "Poisson"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv95",
    "text": "Petit robot de Astro's Playroom ?",
    "answers": [
      "Astro",
      "BD-1",
      "R2-D2",
      "Wall-E"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv96",
    "text": "Jeu de Lego avec des super-héros ?",
    "answers": [
      "LEGO City",
      "LEGO Marvel",
      "LEGO Star Wars",
      "LEGO Batman"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv97",
    "text": "Petit oiseau bleu poursuivi par Vil Coyote ?",
    "answers": [
      "Tweety",
      "Woody",
      "Bip Bip",
      "Hibou"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv98",
    "text": "Super-héros a une cicatrice en éclair ?",
    "answers": [
      "Batman",
      "Superman",
      "Spider-Man",
      "Harry Potter"
    ],
    "correct": 3,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv99",
    "text": "Comment s'appelle le chat noir de Kiki ?",
    "answers": [
      "Jiji",
      "Luna",
      "Salem",
      "Crookshanks"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv100",
    "text": "Gaulois tombé dans la potion magique ?",
    "answers": [
      "Astérix",
      "Obélix",
      "Panoramix",
      "Idéfix"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv101",
    "text": "Chat orange qui adore les lasagnes ?",
    "answers": [
      "Tom",
      "Felix",
      "Garfield",
      "Sylvestre"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv102",
    "text": "Créatures jaunes qui adorent les bananes ?",
    "answers": [
      "Les Schtroumpfs",
      "Les Minions",
      "Les Pikmin",
      "Les Oompa-Loompas"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv103",
    "text": "Pirate qui veut devenir Roi des Pirates ?",
    "answers": [
      "Barbe Noire",
      "Shanks",
      "Luffy",
      "Crocodile"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv104",
    "text": "Oncle méchant de Simba ?",
    "answers": [
      "Mufasa",
      "Scar",
      "Timon",
      "Pumbaa"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv105",
    "text": "Personnage qui mange des épinards pour être fort ?",
    "answers": [
      "Superman",
      "Astérix",
      "Popeye",
      "Hercule"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv106",
    "text": "Quel est le cri du Marsupilami ?",
    "answers": [
      "Houba Houba",
      "Tic Tac",
      "Grrrr",
      "Couic Couic"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv107",
    "text": "Premier compagnon de Sacha ?",
    "answers": [
      "Pikachu",
      "Bulbizarre",
      "Carapuce",
      "Salamèche"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv108",
    "text": "Super-héros millionnaire en armure ?",
    "answers": [
      "Bruce Wayne",
      "Iron Man",
      "Black Panther",
      "Lex Luthor"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv109",
    "text": "Petit bonhomme en pain d'épices dans Shrek ?",
    "answers": [
      "Gingy",
      "Ti'Biscuit",
      "Le Chapelier",
      "Pinocchio"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv110",
    "text": "Capitaine du Black Pearl ?",
    "answers": [
      "Barbe Noire",
      "Jack Sparrow",
      "Davy Jones",
      "Will Turner"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv111",
    "text": "Chat qui poursuit Speedy Gonzales ?",
    "answers": [
      "Tom",
      "Sylvestre",
      "Felix",
      "Garfield"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv112",
    "text": "Oiseau de la route 66 ?",
    "answers": [
      "Tweety",
      "Bip Bip",
      "Woody",
      "Hibou"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv113",
    "text": "Nom du fils de Mufasa ?",
    "answers": [
      "Scar",
      "Simba",
      "Nala",
      "Rafiki"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv114",
    "text": "Personnage avec un nez qui s'allonge ?",
    "answers": [
      "Pinocchio",
      "Gepetto",
      "Dumbo",
      "Peter Pan"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv115",
    "text": "Super-héros avec une toile ?",
    "answers": [
      "Batman",
      "Superman",
      "Spider-Man",
      "Ant-Man"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv116",
    "text": "Bébé dragon rose (Mario) ?",
    "answers": [
      "Yoshi",
      "Birdo",
      "Bowser",
      "Toad"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv117",
    "text": "Poisson bleu amnésique ?",
    "answers": [
      "Dory",
      "Nemo",
      "Marlin",
      "Gill"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv118",
    "text": "Raton laveur expert en armes (Marvel) ?",
    "answers": [
      "Rocket Raccoon",
      "Groot",
      "Star-Lord",
      "Howard the Duck"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv119",
    "text": "Maître de Sangoku sur son île ?",
    "answers": [
      "Piccolo",
      "Kami",
      "Tortue Géniale",
      "Krillin"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv120",
    "text": "Dragon ami de Harold ?",
    "answers": [
      "Stormfly",
      "Croc",
      "Hookfang",
      "Meatlug"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv121",
    "text": "Lieu de vie de Bob l'éponge ?",
    "answers": [
      "Rocher",
      "Ananas",
      "Coquillage",
      "Grotte"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv122",
    "text": "Chef du WOOHP (Totally Spies) ?",
    "answers": [
      "Tom",
      "Bill",
      "Jerry",
      "Bob"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv123",
    "text": "Ranma + eau froide = ?",
    "answers": [
      "Panda",
      "Fille",
      "Canard",
      "Cochon"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv124",
    "text": "IA maléfique dans Code Lyoko ?",
    "answers": [
      "X.A.N.A.",
      "Ulrich",
      "Odd",
      "Aelita"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv125",
    "text": "Super-héros avec un manteau rouge très rapide ?",
    "answers": [
      "Superman",
      "Quicksilver",
      "Flash",
      "Dash"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv126",
    "text": "Prénom civil de Chat Noir ?",
    "answers": [
      "Marin",
      "Adrien",
      "Luka",
      "Nino"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv127",
    "text": "Espèce du dragon Krokmou ?",
    "answers": [
      "Furie Noire",
      "Terreur",
      "Ronfle",
      "Changewing"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv128",
    "text": "Propriétaire des jouets dans Toy Story ?",
    "answers": [
      "Sid",
      "Andy",
      "Bonnie",
      "Al"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv129",
    "text": "Petit chevalier de la Pat' Patrouille ?",
    "answers": [
      "Chase",
      "Marshall",
      "Ruben",
      "Ryder"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv130",
    "text": "Sorcier le plus célèbre du cinéma ?",
    "answers": [
      "Gandalf",
      "Harry Potter",
      "Merlin",
      "Voldemort"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv131",
    "text": "Couleur du sabre de Luke Skywalker ?",
    "answers": [
      "Rouge",
      "Vert",
      "Bleu",
      "Violet"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv132",
    "text": "Frère de Vegeta venu du futur ?",
    "answers": [
      "Gohan",
      "Trunks",
      "Goten",
      "Broly"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv133",
    "text": "Animal qui est Richard (papa de Gumball) ?",
    "answers": [
      "Un lapin rose",
      "Un chat bleu",
      "Un poisson",
      "Un chien"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv134",
    "text": "Ami elfe de maison de Harry Potter ?",
    "answers": [
      "Gobelin",
      "Dobby",
      "Legolas",
      "Yoda"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv135",
    "text": "Tournoi d'arts martiaux de Dragon Ball ?",
    "answers": [
      "Tenkaichi Budokai",
      "Chunin",
      "Olympiades",
      "Les Jeux"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv136",
    "text": "Monture fidèle de Link ?",
    "answers": [
      "Epona",
      "Ruto",
      "Zelda",
      "Midna"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv137",
    "text": "Squelette rigolo dans Undertale ?",
    "answers": [
      "Sans",
      "Papyrus",
      "Undyne",
      "Toriel"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv138",
    "text": "Jeune sorcière avec un balai dans Kiki ?",
    "answers": [
      "Kiki",
      "Jiji",
      "Ursula",
      "Méfiez-vous"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv139",
    "text": "Jeu de tir à la première personne historique ?",
    "answers": [
      "Call of Duty WWII",
      "Battlefield 1",
      "Fortnite",
      "Overwatch"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv140",
    "text": "Petit robot dépanneur dans Star Wars ?",
    "answers": [
      "R2-D2",
      "BD-1",
      "BB-8",
      "C-3PO"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv141",
    "text": "Couleur du bonnet de Mario ?",
    "answers": [
      "Bleu",
      "Vert",
      "Rouge",
      "Jaune"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv142",
    "text": "Araignée de Minecraft ?",
    "answers": [
      "Phantom",
      "Araignée",
      "Cave Spider",
      "Silverfish"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv143",
    "text": "Méchant de Zelda (cochon) ?",
    "answers": [
      "Bowser",
      "Ganon",
      "Dr Eggman",
      "Wario"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv144",
    "text": "Prénom de la nièce de Gadget ?",
    "answers": [
      "Sophie",
      "Penny",
      "Louna",
      "Chloé"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv145",
    "text": "Petit frère de Mario en Wario ?",
    "answers": [
      "Waluigi",
      "Luigi",
      "Toad",
      "Yoshi"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv146",
    "text": "Jeu avec des cubes destructibles ?",
    "answers": [
      "Minecraft",
      "Roblox",
      "Fortnite",
      "Terraria"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv147",
    "text": "Pokémon qui peut copier l'apparence ?",
    "answers": [
      "Mewtwo",
      "Métamorph",
      "Porygon",
      "Zoroark"
    ],
    "correct": 1,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv148",
    "text": "Jeu de stratégie sur un damier ?",
    "answers": [
      "Les Échecs",
      "LEGO",
      "Tetris",
      "Minecraft"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv149",
    "text": "Personnage de Disney avec un nez qui s'allonge ?",
    "answers": [
      "Pinocchio",
      "Dumbo",
      "Peter Pan",
      "Geppetto"
    ],
    "correct": 0,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  },
  {
    "id": "jv150",
    "text": "Super-héros avec un bouclier rond rouge et bleu ?",
    "answers": [
      "Iron Man",
      "Thor",
      "Captain America",
      "Batman"
    ],
    "correct": 2,
    "category": "Jeux Vidéo",
    "type": "multiple-choice"
  }
];

export const ALL_CASH_QUESTIONS_PART2: CashAnswerQuestion[] = [
  {
    "id": "sn_ca1",
    "text": "Combien de pattes a un chat ?",
    "acceptedAnswers": [
      "4",
      "quatre"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca2",
    "text": "Plus grand organe du corps humain ?",
    "acceptedAnswers": [
      "La peau"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca3",
    "text": "Gaz que les plantes absorbent ?",
    "acceptedAnswers": [
      "Le dioxyde de carbone",
      "CO2"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca4",
    "text": "Animal terrestre le plus rapide ?",
    "acceptedAnswers": [
      "Le guépard"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca5",
    "text": "Formule chimique de l'eau ?",
    "acceptedAnswers": [
      "H2O"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca6",
    "text": "Combien de planètes dans le système solaire ?",
    "acceptedAnswers": [
      "8",
      "huit"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca7",
    "text": "Plus grand océan du monde ?",
    "acceptedAnswers": [
      "Le Pacifique"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca8",
    "text": "Nombre d'os dans le corps humain ?",
    "acceptedAnswers": [
      "206"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca9",
    "text": "Animal qui produit du miel ?",
    "acceptedAnswers": [
      "L'abeille"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca10",
    "text": "Nombre de couleurs dans l'arc-en-ciel ?",
    "acceptedAnswers": [
      "7",
      "sept"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca11",
    "text": "Animal qui change de couleur ?",
    "acceptedAnswers": [
      "Le caméléon"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca12",
    "text": "Organe qui pompe le sang ?",
    "acceptedAnswers": [
      "Le cœur"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca13",
    "text": "Nombre de continents sur Terre ?",
    "acceptedAnswers": [
      "7",
      "sept"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca14",
    "text": "Plus gros oiseau du monde ?",
    "acceptedAnswers": [
      "L'autruche"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca15",
    "text": "Planète rouge du système solaire ?",
    "acceptedAnswers": [
      "Mars"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca16",
    "text": "Nombre de sens de l'être humain ?",
    "acceptedAnswers": [
      "5",
      "cinq"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca17",
    "text": "Plus grande étoile de notre système ?",
    "acceptedAnswers": [
      "Le Soleil"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca18",
    "text": "Type d'animal de la baleine ?",
    "acceptedAnswers": [
      "Un mammifère"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca19",
    "text": "Gaz principal de l'air ?",
    "acceptedAnswers": [
      "L'azote"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca20",
    "text": "Oiseau incapable de voler ?",
    "acceptedAnswers": [
      "Le pingouin"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca21",
    "text": "Animal qui hiberne ?",
    "acceptedAnswers": [
      "L'ours"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca22",
    "text": "Définition d'un herbivore ?",
    "acceptedAnswers": [
      "Un animal qui mange des plantes"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca23",
    "text": "Nombre de secondes dans une minute ?",
    "acceptedAnswers": [
      "60",
      "soixante"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca24",
    "text": "Couleur du sang humain ?",
    "acceptedAnswers": [
      "Rouge"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca25",
    "text": "Bébé d'une vache ?",
    "acceptedAnswers": [
      "Un veau"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca26",
    "text": "Planète avec des anneaux ?",
    "acceptedAnswers": [
      "Saturne"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca27",
    "text": "Nombre de pattes d'une pieuvre ?",
    "acceptedAnswers": [
      "8",
      "huit"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca28",
    "text": "Couleur d'une carotte ?",
    "acceptedAnswers": [
      "Orange"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca29",
    "text": "Température du corps humain ?",
    "acceptedAnswers": [
      "37°C",
      "37 degrés"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca30",
    "text": "Gaz que l'on expire ?",
    "acceptedAnswers": [
      "Le dioxyde de carbone",
      "CO2"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca31",
    "text": "Bébé du chat ?",
    "acceptedAnswers": [
      "Un chaton"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca32",
    "text": "Planète la plus grande ?",
    "acceptedAnswers": [
      "Jupiter"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca33",
    "text": "Animal avec une carapace ?",
    "acceptedAnswers": [
      "La tortue"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca34",
    "text": "Gaz nécessaire pour respirer ?",
    "acceptedAnswers": [
      "L'oxygène"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca35",
    "text": "Animal marin à 8 bras ?",
    "acceptedAnswers": [
      "La pieuvre"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca36",
    "text": "Animal le plus gros félin ?",
    "acceptedAnswers": [
      "Le tigre"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca37",
    "text": "Durée d'une grossesse humaine ?",
    "acceptedAnswers": [
      "9 mois",
      "neuf mois"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca38",
    "text": "Animal du désert qui stocke de l'eau ?",
    "acceptedAnswers": [
      "Le chameau"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca39",
    "text": "Planète bleue ?",
    "acceptedAnswers": [
      "La Terre"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca40",
    "text": "Animal avec des plumes ?",
    "acceptedAnswers": [
      "L'oiseau"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca41",
    "text": "Nombre d'heures dans une journée ?",
    "acceptedAnswers": [
      "24",
      "vingt-quatre"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca42",
    "text": "Science des animaux ?",
    "acceptedAnswers": [
      "La zoologie"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca43",
    "text": "Bébé du lapin ?",
    "acceptedAnswers": [
      "Un lapereau"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca44",
    "text": "Animal qui pond les plus gros œufs ?",
    "acceptedAnswers": [
      "L'autruche"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca45",
    "text": "Saison la plus chaude ?",
    "acceptedAnswers": [
      "L'été"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca46",
    "text": "Animal avec un long cou ?",
    "acceptedAnswers": [
      "La girafe"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca47",
    "text": "Saison la plus froide ?",
    "acceptedAnswers": [
      "L'hiver"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca48",
    "text": "Animal le plus lourd ?",
    "acceptedAnswers": [
      "L'éléphant"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca49",
    "text": "Animal nocturne ?",
    "acceptedAnswers": [
      "La chouette"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "sn_ca50",
    "text": "Bébé de l'éléphant ?",
    "acceptedAnswers": [
      "Un éléphanteau"
    ],
    "category": "Sciences & Nature",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca1",
    "text": "Capitale de la France ?",
    "acceptedAnswers": [
      "Paris"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca2",
    "text": "Monument de Paris ?",
    "acceptedAnswers": [
      "La Tour Eiffel"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca3",
    "text": "Pays des pyramides ?",
    "acceptedAnswers": [
      "L'Égypte",
      "Égypte"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca4",
    "text": "Capitale de l'Angleterre ?",
    "acceptedAnswers": [
      "Londres"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca5",
    "text": "Pays de la pizza ?",
    "acceptedAnswers": [
      "L'Italie",
      "Italie"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca6",
    "text": "Capitale de l'Espagne ?",
    "acceptedAnswers": [
      "Madrid"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca7",
    "text": "Plus haut sommet du monde ?",
    "acceptedAnswers": [
      "L'Everest"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca8",
    "text": "Capitale de l'Allemagne ?",
    "acceptedAnswers": [
      "Berlin"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca9",
    "text": "Capitale de l'Italie ?",
    "acceptedAnswers": [
      "Rome"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca10",
    "text": "Capitale du Japon ?",
    "acceptedAnswers": [
      "Tokyo"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca11",
    "text": "Capitale du Brésil ?",
    "acceptedAnswers": [
      "Brasilia"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca12",
    "text": "Capitale du Canada ?",
    "acceptedAnswers": [
      "Ottawa"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca13",
    "text": "Capitale de la Chine ?",
    "acceptedAnswers": [
      "Pékin",
      "Beijing"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca14",
    "text": "Capitale de la Russie ?",
    "acceptedAnswers": [
      "Moscou"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca15",
    "text": "Capitale de l'Inde ?",
    "acceptedAnswers": [
      "New Delhi"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca16",
    "text": "Capitale des États-Unis ?",
    "acceptedAnswers": [
      "Washington"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca17",
    "text": "Capitale de l'Australie ?",
    "acceptedAnswers": [
      "Canberra"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca18",
    "text": "Pays en forme de botte ?",
    "acceptedAnswers": [
      "L'Italie",
      "Italie"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca19",
    "text": "Plus long fleuve du monde ?",
    "acceptedAnswers": [
      "Le Nil"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca20",
    "text": "Pays avec le plus de Coupes du Monde ?",
    "acceptedAnswers": [
      "Le Brésil",
      "Brésil"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca21",
    "text": "Capitale de la Belgique ?",
    "acceptedAnswers": [
      "Bruxelles"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca22",
    "text": "Capitale de la Suisse ?",
    "acceptedAnswers": [
      "Berne"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca23",
    "text": "Capitale de la Grèce ?",
    "acceptedAnswers": [
      "Athènes"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca24",
    "text": "Capitale du Portugal ?",
    "acceptedAnswers": [
      "Lisbonne"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca25",
    "text": "Pays des tulipes ?",
    "acceptedAnswers": [
      "Les Pays-Bas",
      "Pays-Bas"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca26",
    "text": "Capitale de la Suède ?",
    "acceptedAnswers": [
      "Stockholm"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca27",
    "text": "Capitale de la Norvège ?",
    "acceptedAnswers": [
      "Oslo"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca28",
    "text": "Capitale de la Pologne ?",
    "acceptedAnswers": [
      "Varsovie"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca29",
    "text": "Capitale de la Turquie ?",
    "acceptedAnswers": [
      "Ankara"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca30",
    "text": "Pays du soleil levant ?",
    "acceptedAnswers": [
      "Le Japon",
      "Japon"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca31",
    "text": "Capitale de la Croatie ?",
    "acceptedAnswers": [
      "Zagreb"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca32",
    "text": "Capitale du Maroc ?",
    "acceptedAnswers": [
      "Rabat"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca33",
    "text": "Capitale de la Tunisie ?",
    "acceptedAnswers": [
      "Tunis"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca34",
    "text": "Capitale de l'Égypte ?",
    "acceptedAnswers": [
      "Le Caire"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca35",
    "text": "Capitale de l'Autriche ?",
    "acceptedAnswers": [
      "Vienne"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca36",
    "text": "Capitale du Mexique ?",
    "acceptedAnswers": [
      "Mexico"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca37",
    "text": "Capitale de l'Argentine ?",
    "acceptedAnswers": [
      "Buenos Aires"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca38",
    "text": "Capitale de la Finlande ?",
    "acceptedAnswers": [
      "Helsinki"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca39",
    "text": "Capitale de l'Irlande ?",
    "acceptedAnswers": [
      "Dublin"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca40",
    "text": "Pays le plus visité ?",
    "acceptedAnswers": [
      "La France",
      "France"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca41",
    "text": "Capitale de la Hongrie ?",
    "acceptedAnswers": [
      "Budapest"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca42",
    "text": "Capitale de la Roumanie ?",
    "acceptedAnswers": [
      "Bucarest"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca43",
    "text": "Capitale de la Bulgarie ?",
    "acceptedAnswers": [
      "Sofia"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca44",
    "text": "Capitale de la Tchéquie ?",
    "acceptedAnswers": [
      "Prague"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca45",
    "text": "Capitale du Pérou ?",
    "acceptedAnswers": [
      "Lima"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca46",
    "text": "Capitale de la Colombie ?",
    "acceptedAnswers": [
      "Bogota"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca47",
    "text": "Capitale du Chili ?",
    "acceptedAnswers": [
      "Santiago"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca48",
    "text": "Pays qui a découvert l'Amérique ?",
    "acceptedAnswers": [
      "L'Espagne",
      "Espagne"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca49",
    "text": "Capitale de la Slovaquie ?",
    "acceptedAnswers": [
      "Bratislava"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "hg_ca50",
    "text": "Capitale de la Lituanie ?",
    "acceptedAnswers": [
      "Vilnius"
    ],
    "category": "Histoire & Géographie",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca1",
    "text": "Métier de Mario ?",
    "acceptedAnswers": [
      "Plombier"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca2",
    "text": "Hérisson bleu très rapide ?",
    "acceptedAnswers": [
      "Sonic"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca3",
    "text": "Jeu de construction avec des Creepers ?",
    "acceptedAnswers": [
      "Minecraft"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca4",
    "text": "Pokémon jaune avec des éclairs ?",
    "acceptedAnswers": [
      "Pikachu"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca5",
    "text": "Dinosaure vert de Mario ?",
    "acceptedAnswers": [
      "Yoshi"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca6",
    "text": "Jeu de tir avec de la peinture ?",
    "acceptedAnswers": [
      "Splatoon"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca7",
    "text": "Héroïne de Tomb Raider ?",
    "acceptedAnswers": [
      "Lara Croft"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca8",
    "text": "Nom du héros de Zelda ?",
    "acceptedAnswers": [
      "Link"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca9",
    "text": "Rival singe de Mario ?",
    "acceptedAnswers": [
      "Donkey Kong"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca10",
    "text": "Jeu avec l'imposteur dans un vaisseau ?",
    "acceptedAnswers": [
      "Among Us"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca11",
    "text": "Personnage par défaut de Minecraft ?",
    "acceptedAnswers": [
      "Steve"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca12",
    "text": "Boule jaune qui mange des fantômes ?",
    "acceptedAnswers": [
      "Pac-Man"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca13",
    "text": "Console portable de Nintendo à 2 écrans ?",
    "acceptedAnswers": [
      "Nintendo DS",
      "DS"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca14",
    "text": "Console salon/portable de Nintendo ?",
    "acceptedAnswers": [
      "La Switch"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca15",
    "text": "Studio qui a créé Minecraft ?",
    "acceptedAnswers": [
      "Mojang"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca16",
    "text": "Monnaie de Roblox ?",
    "acceptedAnswers": [
      "Robux"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca17",
    "text": "IA de Halo ?",
    "acceptedAnswers": [
      "Cortana"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca18",
    "text": "Princesse sauvée par Mario ?",
    "acceptedAnswers": [
      "Peach"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca19",
    "text": "Objet invisible dans Mario Kart ?",
    "acceptedAnswers": [
      "Boo"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca20",
    "text": "Monstre qui explose dans Minecraft ?",
    "acceptedAnswers": [
      "Le Creeper"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca21",
    "text": "Jeu mobile oiseaux vs cochons ?",
    "acceptedAnswers": [
      "Angry Birds"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca22",
    "text": "Héros de Halo ?",
    "acceptedAnswers": [
      "Master Chief"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca23",
    "text": "Royaume de Zelda ?",
    "acceptedAnswers": [
      "Hyrule"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca24",
    "text": "Bloc rare bleu de Minecraft ?",
    "acceptedAnswers": [
      "Le diamant"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca25",
    "text": "Monde souterrain de Minecraft ?",
    "acceptedAnswers": [
      "Le Nether"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca26",
    "text": "Jeu d'empiler des briques ?",
    "acceptedAnswers": [
      "Tetris"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca27",
    "text": "Petit robot rond de Star Wars ?",
    "acceptedAnswers": [
      "BB-8"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca28",
    "text": "Jeu de combat avec Fatality ?",
    "acceptedAnswers": [
      "Mortal Kombat"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca29",
    "text": "Frère de Mario en vert ?",
    "acceptedAnswers": [
      "Luigi"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca30",
    "text": "Jeu d'aligner des bonbons ?",
    "acceptedAnswers": [
      "Candy Crush"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca31",
    "text": "Objet pour voler dans Minecraft ?",
    "acceptedAnswers": [
      "Les Élytres"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca32",
    "text": "Ville sous-marine de BioShock ?",
    "acceptedAnswers": [
      "Rapture"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca33",
    "text": "Jeu avec un bus volant ?",
    "acceptedAnswers": [
      "Fortnite"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca34",
    "text": "Couleur du bonnet de Mario ?",
    "acceptedAnswers": [
      "Rouge"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca35",
    "text": "Couleur du bonnet de Luigi ?",
    "acceptedAnswers": [
      "Vert"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca36",
    "text": "Chien peureux de Scooby-Doo ?",
    "acceptedAnswers": [
      "Scooby-Doo",
      "Scooby"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca37",
    "text": "Bonhomme de neige de La Reine des Neiges ?",
    "acceptedAnswers": [
      "Olaf"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca38",
    "text": "Petit frère de Peppa Pig ?",
    "acceptedAnswers": [
      "George"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca39",
    "text": "Boule rose qui avale ses ennemis ?",
    "acceptedAnswers": [
      "Kirby"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca40",
    "text": "Dragon violet héros de jeux ?",
    "acceptedAnswers": [
      "Spyro"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca41",
    "text": "Camionnette de Scooby-Doo ?",
    "acceptedAnswers": [
      "La Mystery Machine"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca42",
    "text": "Éponge sous la mer ?",
    "acceptedAnswers": [
      "Bob l'éponge"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca43",
    "text": "Gaulois très fort grâce à une potion ?",
    "acceptedAnswers": [
      "Obélix"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca44",
    "text": "Chat orange amateur de lasagnes ?",
    "acceptedAnswers": [
      "Garfield"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca45",
    "text": "Créatures jaunes adorant les bananes ?",
    "acceptedAnswers": [
      "Les Minions"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca46",
    "text": "Pirate qui veut être Roi des Pirates ?",
    "acceptedAnswers": [
      "Luffy"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca47",
    "text": "Personnage qui mange des épinards ?",
    "acceptedAnswers": [
      "Popeye"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca48",
    "text": "Premier Pokémon de Sacha ?",
    "acceptedAnswers": [
      "Pikachu"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca49",
    "text": "Super-héros avec une armure rouge et or ?",
    "acceptedAnswers": [
      "Iron Man"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  },
  {
    "id": "jv_ca50",
    "text": "Capitaine du Black Pearl ?",
    "acceptedAnswers": [
      "Jack Sparrow"
    ],
    "category": "Jeux Vidéo",
    "type": "cash-answer"
  }
];
