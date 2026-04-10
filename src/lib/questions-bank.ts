// ==================== QUESTIONS BANK ====================
// Family-friendly quiz questions (ages 7-77)
// Categories: Culture Générale, Cinéma & Séries, Sport, Musique
// Each category: 150 MCQ + 50 Cash = 200 questions
// Total: 800 questions
//
// MCQ format: { id, text, answers: string[], correct: number, category, type }
// Cash format: { id, text, acceptedAnswers: string[], category, type }
// ID prefixes: cg=culture, cs=cinéma, sp=sport, mu=musique

import type { MCQQuestion, CashAnswerQuestion } from './game-types';

export const ALL_MCQ_QUESTIONS_PART1: MCQQuestion[] = [
  {
    "id": "cg1",
    "text": "De quelle couleur est le ciel par jour ?",
    "answers": [
      "Rouge",
      "Bleu",
      "Vert",
      "Noir"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg2",
    "text": "Combien de pattes a un chien ?",
    "answers": [
      "2",
      "3",
      "4",
      "6"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg3",
    "text": "Combien font 2 + 2 ?",
    "answers": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg4",
    "text": "Quel animal dit \"Meuh\" ?",
    "answers": [
      "Le chien",
      "Le chat",
      "La vache",
      "Le cheval"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg5",
    "text": "Quel animal dit \"Ouaf Ouaf\" ?",
    "answers": [
      "Le chat",
      "Le chien",
      "La vache",
      "Le coq"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg6",
    "text": "Combien y a-t-il de jours dans la semaine ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg7",
    "text": "Combien de saisons y a-t-il ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg8",
    "text": "De quelle couleur est l'herbe ?",
    "answers": [
      "Bleu",
      "Jaune",
      "Vert",
      "Rouge"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg9",
    "text": "Quel fruit est rouge et rond ?",
    "answers": [
      "La banane",
      "La pomme",
      "Le raisin",
      "Le citron"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg10",
    "text": "Combien d'yeux a un humain ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg11",
    "text": "Quel est le contraire de chaud ?",
    "answers": [
      "Tiède",
      "Froid",
      "Chaud",
      "Frais"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg12",
    "text": "Combien de doigts sur une main ?",
    "answers": [
      "4",
      "5",
      "6",
      "10"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg13",
    "text": "Quel animal a de grandes oreilles et une trompe ?",
    "answers": [
      "Le lion",
      "Le singe",
      "L'éléphant",
      "Le crocodile"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg14",
    "text": "De quelle couleur est la neige ?",
    "answers": [
      "Bleue",
      "Blanche",
      "Jaune",
      "Grise"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg15",
    "text": "Quel animal produit du lait ?",
    "answers": [
      "La poule",
      "La vache",
      "Le poisson",
      "L'abeille"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg16",
    "text": "Combien font 5 + 3 ?",
    "answers": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg17",
    "text": "Que boit-on quand on a soif ?",
    "answers": [
      "Du jus",
      "De l'eau",
      "Du lait",
      "De la soupe"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg18",
    "text": "Quel est le plus gros animal du monde ?",
    "answers": [
      "L'éléphant",
      "La girafe",
      "La baleine bleue",
      "Le requin"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg19",
    "text": "Combien y a-t-il de mois dans une année ?",
    "answers": [
      "10",
      "11",
      "12",
      "13"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg20",
    "text": "Quel animal ronronne ?",
    "answers": [
      "Le chien",
      "Le chat",
      "Le lapin",
      "Le canard"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg21",
    "text": "Quel légume est orange et allongé ?",
    "answers": [
      "La tomate",
      "La carotte",
      "La pomme de terre",
      "Le concombre"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg22",
    "text": "Combien font 10 - 3 ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg23",
    "text": "Quel animal pond des œufs ?",
    "answers": [
      "Le chien",
      "La poule",
      "Le chat",
      "Le lapin"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg24",
    "text": "Comment s'appelle le père de Noël ?",
    "answers": [
      "Le Père Noël",
      "Le Père Fouettard",
      "Le lutin",
      "Le bonhomme de neige"
    ],
    "correct": 0,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg25",
    "text": "Combien d'heures y a-t-il dans une journée ?",
    "answers": [
      "12",
      "20",
      "24",
      "36"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg26",
    "text": "Quel transport roule sur des rails ?",
    "answers": [
      "La voiture",
      "Le train",
      "L'avion",
      "Le bateau"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg27",
    "text": "Quel insecte produit du miel ?",
    "answers": [
      "La mouche",
      "La guêpe",
      "L'abeille",
      "Le moustique"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg28",
    "text": "De quelle couleur est une banane bien mûre ?",
    "answers": [
      "Rouge",
      "Verte",
      "Jaune",
      "Bleue"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg29",
    "text": "Combien font 3 × 3 ?",
    "answers": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correct": 3,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg30",
    "text": "Quel oiseau pond des œufs au chocolat à Pâques ?",
    "answers": [
      "Le canard",
      "Le corbeau",
      "Le lapin",
      "La poule"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg31",
    "text": "Quel est le plus grand pays du monde ?",
    "answers": [
      "Chine",
      "Canada",
      "Russie",
      "États-Unis"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg32",
    "text": "Combien de continents y a-t-il ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg33",
    "text": "Quelle est la monnaie du Japon ?",
    "answers": [
      "Le dollar",
      "L'euro",
      "Le yen",
      "La livre"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg34",
    "text": "Quel est le plus long fleuve de France ?",
    "answers": [
      "La Seine",
      "Le Rhône",
      "La Loire",
      "La Garonne"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg35",
    "text": "Quelle planète est la Planète Rouge ?",
    "answers": [
      "Vénus",
      "Jupiter",
      "Mars",
      "Saturne"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg36",
    "text": "Qui a peint la Joconde ?",
    "answers": [
      "Michel-Ange",
      "Raphaël",
      "Léonard de Vinci",
      "Picasso"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg37",
    "text": "Combien de couleurs dans un arc-en-ciel ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg38",
    "text": "Quel est l'animal terrestre le plus rapide ?",
    "answers": [
      "Le lion",
      "Le guépard",
      "Le cheval",
      "L'aigle"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg39",
    "text": "Quelle est la langue officielle du Brésil ?",
    "answers": [
      "L'espagnol",
      "Le portugais",
      "Le français",
      "L'anglais"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg40",
    "text": "Combien y a-t-il de départements en France ?",
    "answers": [
      "86",
      "94",
      "96",
      "101"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg41",
    "text": "Qui a écrit Les Misérables ?",
    "answers": [
      "Émile Zola",
      "Victor Hugo",
      "Jules Verne",
      "Molière"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg42",
    "text": "Quelle est la plus petite planète du système solaire ?",
    "answers": [
      "Mars",
      "Vénus",
      "Mercure",
      "Pluton"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg43",
    "text": "Quel pays a la forme d'une botte ?",
    "answers": [
      "La Grèce",
      "L'Espagne",
      "L'Italie",
      "Le Portugal"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg44",
    "text": "Combien de dents a un adulte ?",
    "answers": [
      "28",
      "30",
      "32",
      "34"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg45",
    "text": "Quelle est la capitale de la Turquie ?",
    "answers": [
      "Istanbul",
      "Ankara",
      "Izmir",
      "Antalya"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg46",
    "text": "Quel est le plus haut sommet du monde ?",
    "answers": [
      "Le Mont Blanc",
      "Le K2",
      "L'Everest",
      "Le Kilimandjaro"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg47",
    "text": "Combien de côtés a un hexagone ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg48",
    "text": "Quelle est la devise de la France ?",
    "answers": [
      "Liberté, Égalité, Fraternité",
      "Liberté, Justice, Paix",
      "Liberté, Égalité, Démocratie",
      "Liberté, Honneur, Courage"
    ],
    "correct": 0,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg49",
    "text": "Quel est le plus grand mammifère terrestre ?",
    "answers": [
      "Le rhinocéros",
      "L'éléphant d'Afrique",
      "La girafe",
      "L'hippopotame"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg50",
    "text": "Combien de lettres dans l'alphabet français ?",
    "answers": [
      "24",
      "25",
      "26",
      "27"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg51",
    "text": "Quelle est la capitale du Canada ?",
    "answers": [
      "Toronto",
      "Vancouver",
      "Montréal",
      "Ottawa"
    ],
    "correct": 3,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg52",
    "text": "Quel est le plus grand océan du monde ?",
    "answers": [
      "Atlantique",
      "Indien",
      "Arctique",
      "Pacifique"
    ],
    "correct": 3,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg53",
    "text": "Combien de sens a l'être humain ?",
    "answers": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg54",
    "text": "Quel est le seul mammifère capable de voler ?",
    "answers": [
      "L'écureuil volant",
      "Le lézard volant",
      "La chauve-souris",
      "La chouette"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg55",
    "text": "Combien pèse environ 1 litre d'eau ?",
    "answers": [
      "500g",
      "750g",
      "1 kg",
      "1,5 kg"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg56",
    "text": "Quelle est la capitale de l'Australie ?",
    "answers": [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Brisbane"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg57",
    "text": "Quel est le plus long mur du monde ?",
    "answers": [
      "Le Mur de Berlin",
      "La Grande Muraille de Chine",
      "Le mur d'Hadrien",
      "Le mur des Lamentations"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg58",
    "text": "Quelle est la capitale de la Pologne ?",
    "answers": [
      "Krakovie",
      "Gdańsk",
      "Varsovie",
      "Wrocław"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg59",
    "text": "Quel oiseau est le symbole de la paix ?",
    "answers": [
      "L'aigle",
      "La colombe",
      "L'hirondelle",
      "Le cygne"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg60",
    "text": "Quelle est la planète la plus proche du Soleil ?",
    "answers": [
      "Vénus",
      "Mercure",
      "Mars",
      "La Terre"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg61",
    "text": "Quel est le plus grand organe du corps humain ?",
    "answers": [
      "Le foie",
      "Le poumon",
      "La peau",
      "L'intestin"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg62",
    "text": "Quelle est la capitale de l'Inde ?",
    "answers": [
      "Mumbai",
      "New Delhi",
      "Kolkata",
      "Chennai"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg63",
    "text": "Quelle est la formule de l'eau ?",
    "answers": [
      "H2O2",
      "HO",
      "H2O",
      "OH2"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg64",
    "text": "Quelle est la capitale de la Suède ?",
    "answers": [
      "Oslo",
      "Stockholm",
      "Copenhague",
      "Helsinki"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg65",
    "text": "Combien de secondes dans une minute ?",
    "answers": [
      "30",
      "45",
      "60",
      "90"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg66",
    "text": "Quelle est la capitale de la Grèce ?",
    "answers": [
      "Sparte",
      "Athènes",
      "Thessalonique",
      "Patras"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg67",
    "text": "Quel est le plus petit pays du monde ?",
    "answers": [
      "Monaco",
      "Le Vatican",
      "Saint-Marin",
      "Malte"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg68",
    "text": "Quelle est la capitale du Danemark ?",
    "answers": [
      "Copenhague",
      "Malmö",
      "Oslo",
      "Aarhus"
    ],
    "correct": 0,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg69",
    "text": "Combien d'os dans le corps humain adulte ?",
    "answers": [
      "186",
      "206",
      "226",
      "246"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg70",
    "text": "Quelle est la capitale de la Suisse ?",
    "answers": [
      "Zurich",
      "Genève",
      "Berne",
      "Bâle"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg71",
    "text": "Combien de pièces dans un jeu d'échecs ?",
    "answers": [
      "28",
      "30",
      "32",
      "34"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg72",
    "text": "Quelle est la capitale de l'Afrique du Sud ?",
    "answers": [
      "Le Cap",
      "Johannesburg",
      "Pretoria",
      "Durban"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg73",
    "text": "Quel pays est le plus grand exportateur de café ?",
    "answers": [
      "Brésil",
      "Colombie",
      "Vietnam",
      "Éthiopie"
    ],
    "correct": 0,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg74",
    "text": "Combien de phases a la Lune ?",
    "answers": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg75",
    "text": "Quelle est la capitale de l'Argentine ?",
    "answers": [
      "Santiago",
      "Buenos Aires",
      "Lima",
      "Montevideo"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg76",
    "text": "Quelle est la capitale de l'Égypte ?",
    "answers": [
      "Le Caire",
      "Alexandrie",
      "Louxor",
      "Gizeh"
    ],
    "correct": 0,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg77",
    "text": "Quel animal peut dormir jusqu'à 22h par jour ?",
    "answers": [
      "Le chat",
      "Le koala",
      "Le paresseux",
      "Le lion"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg78",
    "text": "Combien de cartes dans un jeu de 52 cartes ?",
    "answers": [
      "48",
      "50",
      "52",
      "54"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg79",
    "text": "Quelle est la capitale de la Norvège ?",
    "answers": [
      "Stockholm",
      "Oslo",
      "Helsinki",
      "Copenhague"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg80",
    "text": "Combien de pays en Europe ?",
    "answers": [
      "25",
      "35",
      "44",
      "50"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg81",
    "text": "Quelle est la capitale de la Finlande ?",
    "answers": [
      "Stockholm",
      "Oslo",
      "Helsinki",
      "Tallinn"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg82",
    "text": "Combien de signes du zodiaque ?",
    "answers": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg83",
    "text": "Quelle est la capitale du Portugal ?",
    "answers": [
      "Porto",
      "Lisbonne",
      "Faro",
      "Coimbra"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg84",
    "text": "Combien de cordes a une guitare classique ?",
    "answers": [
      "4",
      "5",
      "6",
      "8"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg85",
    "text": "Quel est le monument le plus visité de France ?",
    "answers": [
      "La Tour Eiffel",
      "Le Mont Saint-Michel",
      "Le château de Versailles",
      "Le Louvre"
    ],
    "correct": 0,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg86",
    "text": "Quelle est la capitale de la Roumanie ?",
    "answers": [
      "Budapest",
      "Bucarest",
      "Sofia",
      "Belgrade"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg87",
    "text": "Combien de jours dans une année bissextile ?",
    "answers": [
      "364",
      "365",
      "366",
      "367"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg88",
    "text": "Quelle est la capitale de l'Irlande ?",
    "answers": [
      "Belfast",
      "Dublin",
      "Cork",
      "Galway"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg89",
    "text": "Combien d'années dure un mandat présidentiel en France ?",
    "answers": [
      "4 ans",
      "5 ans",
      "6 ans",
      "7 ans"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg90",
    "text": "Quelle est la capitale de l'Autriche ?",
    "answers": [
      "Munich",
      "Vienne",
      "Zurich",
      "Salzbourg"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg91",
    "text": "Combien de trous sur un terrain de golf ?",
    "answers": [
      "9",
      "12",
      "18",
      "27"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg92",
    "text": "Quelle est la capitale de la Croatie ?",
    "answers": [
      "Zagreb",
      "Split",
      "Dubrovnik",
      "Rijeka"
    ],
    "correct": 0,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg93",
    "text": "Combien de couleurs dans le drapeau français ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg94",
    "text": "Quelle est la capitale de la Bulgarie ?",
    "answers": [
      "Sofia",
      "Bucarest",
      "Belgrade",
      "Athènes"
    ],
    "correct": 0,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg95",
    "text": "Combien de faces a un cube ?",
    "answers": [
      "4",
      "5",
      "6",
      "8"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg96",
    "text": "Quelle est la capitale de la Serbie ?",
    "answers": [
      "Sarajevo",
      "Zagreb",
      "Belgrade",
      "Skopje"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg97",
    "text": "Combien de touches noires sur un piano ?",
    "answers": [
      "24",
      "36",
      "48",
      "88"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg98",
    "text": "Quelle est la capitale du Mexique ?",
    "answers": [
      "Guadalajara",
      "Monterrey",
      "Mexico",
      "Puebla"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg99",
    "text": "Combien de trompes a un éléphant ?",
    "answers": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg100",
    "text": "Quelle est la capitale de la Tchéquie ?",
    "answers": [
      "Bratislava",
      "Prague",
      "Budapest",
      "Vienne"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg101",
    "text": "Dans quel pays trouve-t-on la Tour Eiffel ?",
    "answers": [
      "Italie",
      "Espagne",
      "France",
      "Angleterre"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg102",
    "text": "Combien font 100 ÷ 10 ?",
    "answers": [
      "5",
      "8",
      "10",
      "15"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg103",
    "text": "Quel aliment les sourcis aiment-elles ?",
    "answers": [
      "Le fromage",
      "Le pain",
      "La carotte",
      "Le poisson"
    ],
    "correct": 0,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg104",
    "text": "Combien y a-t-il de joueurs dans une équipe de football ?",
    "answers": [
      "8",
      "9",
      "11",
      "15"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg105",
    "text": "Quel est le fruit préféré des singes ?",
    "answers": [
      "La pomme",
      "La banane",
      "L'orange",
      "Le raisin"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg106",
    "text": "De quelle couleur est un escargot ?",
    "answers": [
      "Blanc",
      "Rouge",
      "Vert",
      "Gris ou brun"
    ],
    "correct": 3,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg107",
    "text": "Combien de pattes a une araignée ?",
    "answers": [
      "4",
      "6",
      "8",
      "10"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg108",
    "text": "Quel jour vient après lundi ?",
    "answers": [
      "Dimanche",
      "Mardi",
      "Mercredi",
      "Jeudi"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg109",
    "text": "Quelle est la saison où il neige ?",
    "answers": [
      "Le printemps",
      "L'été",
      "L'automne",
      "L'hiver"
    ],
    "correct": 3,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg110",
    "text": "Quel instrument a 88 touches ?",
    "answers": [
      "La guitare",
      "Le violon",
      "Le piano",
      "La flute"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg111",
    "text": "Combien font 7 × 8 ?",
    "answers": [
      "48",
      "54",
      "56",
      "64"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg112",
    "text": "Quel est le dernier mois de l'année ?",
    "answers": [
      "Octobre",
      "Novembre",
      "Décembre",
      "Septembre"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg113",
    "text": "Comment s'appelle un bébé chien ?",
    "answers": [
      "Un chaton",
      "Un veau",
      "Un chiot",
      "Un lapereau"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg114",
    "text": "Quel légume fait pleurer quand on le coupe ?",
    "answers": [
      "La carotte",
      "La tomate",
      "L'oignon",
      "Le poivron"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg115",
    "text": "Combien de côtés a un triangle ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg116",
    "text": "Quel est le premier mois de l'année ?",
    "answers": [
      "Février",
      "Mars",
      "Janvier",
      "Décembre"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg117",
    "text": "Comment s'appelle un bébé chat ?",
    "answers": [
      "Un chiot",
      "Un chaton",
      "Un chevreau",
      "Un veau"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg118",
    "text": "Quelle boisson est fabriquée à partir de raisin ?",
    "answers": [
      "La bière",
      "Le jus de pomme",
      "Le vin",
      "Le thé"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg119",
    "text": "Combien font 9 × 9 ?",
    "answers": [
      "72",
      "80",
      "81",
      "90"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg120",
    "text": "Quel animal vit dans une cocagne ?",
    "answers": [
      "Le chien",
      "La fourmi",
      "L'araignée",
      "La vache"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg121",
    "text": "Quelle est la capitale de l'Espagne ?",
    "answers": [
      "Barcelone",
      "Séville",
      "Madrid",
      "Valence"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg122",
    "text": "Quel est le contraire de grand ?",
    "answers": [
      "Large",
      "Petit",
      "Long",
      "Gros"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg123",
    "text": "De quelle couleur est un citron ?",
    "answers": [
      "Rouge",
      "Jaune",
      "Vert",
      "Orange"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg124",
    "text": "Combien de pattes a un papillon ?",
    "answers": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg125",
    "text": "Quel sport se joue avec un ballon et des paniers ?",
    "answers": [
      "Le football",
      "Le handball",
      "Le basketball",
      "Le volley"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg126",
    "text": "Comment s'appelle le mâle de la vache ?",
    "answers": [
      "Le veau",
      "Le taureau",
      "Le bœuf",
      "Le cochon"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg127",
    "text": "Quel est le plus grand désert du monde ?",
    "answers": [
      "Le Sahara",
      "Le Gobi",
      "L'Antarctique",
      "Le Kalahari"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg128",
    "text": "Combien y a-t-il de minutes dans une heure ?",
    "answers": [
      "30",
      "45",
      "60",
      "90"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg129",
    "text": "De quelle couleur est un canard ?",
    "answers": [
      "Rose",
      "Jaune",
      "Bleu",
      "Vert"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg130",
    "text": "Quel est le repas du matin ?",
    "answers": [
      "Le dîner",
      "Le goûter",
      "Le petit-déjeuner",
      "Le souper"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg131",
    "text": "Quel arbre produit des glands ?",
    "answers": [
      "Le chêne",
      "Le sapin",
      "Le pommier",
      "Le saule"
    ],
    "correct": 0,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg132",
    "text": "Combien de zéros dans un millier ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg133",
    "text": "Comment s'appelle bébé poule ?",
    "answers": [
      "Un poussin",
      "Un caneton",
      "Un chevreau",
      "Un veau"
    ],
    "correct": 0,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg134",
    "text": "Quelle est la capitale de l'Italie ?",
    "answers": [
      "Milan",
      "Rome",
      "Naples",
      "Venise"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg135",
    "text": "Combien d'étoiles dans le drapeau de l'UE ?",
    "answers": [
      "10",
      "12",
      "15",
      "20"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg136",
    "text": "De quelle couleur est le sang ?",
    "answers": [
      "Bleu",
      "Vert",
      "Rouge",
      "Jaune"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg137",
    "text": "Quel animal vit dans une termitière ?",
    "answers": [
      "La fourmi",
      "La termitière",
      "Le termite",
      "L'abeille"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg138",
    "text": "Combien de faces a un dé ?",
    "answers": [
      "4",
      "5",
      "6",
      "8"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg139",
    "text": "Quelle est la capitale de l'Allemagne ?",
    "answers": [
      "Munich",
      "Berlin",
      "Hambourg",
      "Francfort"
    ],
    "correct": 1,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg140",
    "text": "Comment s'appelle bébé mouton ?",
    "answers": [
      "Un chevreau",
      "Un veau",
      "Un agneau",
      "Un cochon de lait"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg141",
    "text": "Quel légume est rouge et sert pour la sauce tomate ?",
    "answers": [
      "Le poivron",
      "L'aubergine",
      "La tomate",
      "La carotte"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg142",
    "text": "Combien font 6 × 7 ?",
    "answers": [
      "36",
      "40",
      "42",
      "48"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg143",
    "text": "De quelle couleur est le cheval blanc d'Henri IV ?",
    "answers": [
      "Noir",
      "Gris",
      "Blanc",
      "Marron"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg144",
    "text": "Quel animal est le roi de la savane ?",
    "answers": [
      "Le tigre",
      "L'élephant",
      "Le lion",
      "Le guépard"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg145",
    "text": "Quelle est la capitale de la Belgique ?",
    "answers": [
      "Anvers",
      "Bruges",
      "Bruxelles",
      "Liège"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg146",
    "text": "Combien de zéros dans un million ?",
    "answers": [
      "3",
      "4",
      "6",
      "8"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg147",
    "text": "Quel est le premier jour de la semaine ?",
    "answers": [
      "Lundi",
      "Mardi",
      "Dimanche",
      "Mercredi"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg148",
    "text": "De quelle couleur est un melon d'eau à l'intérieur ?",
    "answers": [
      "Jaune",
      "Vert",
      "Rouge",
      "Orange"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg149",
    "text": "Quelle est la capitale des États-Unis ?",
    "answers": [
      "New York",
      "Los Angeles",
      "Chicago",
      "Washington"
    ],
    "correct": 3,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cg150",
    "text": "Combien y a-t-il de semaines dans une année ?",
    "answers": [
      "48",
      "50",
      "52",
      "54"
    ],
    "correct": 2,
    "category": "Culture Générale",
    "type": "multiple-choice"
  },
  {
    "id": "cs1",
    "text": "Quel est le premier film d'animation Disney ?",
    "answers": [
      "Cendrillon",
      "Blanche-Neige",
      "Fantasia",
      "Pinocchio"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs2",
    "text": "Comment s'appelle le poisson clown dans Nemo ?",
    "answers": [
      "Nemo",
      "Gill",
      "Dory",
      "Marlin"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs3",
    "text": "De quelle couleur est le bonhomme en pain d'épices dans Shrek ?",
    "answers": [
      "Rouge",
      "Vert",
      "Jaune",
      "Marron"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs4",
    "text": "Comment s'appelle le chat dans Shrek ?",
    "answers": [
      "Garfield",
      "Le Chat Potté",
      "Sylvestre",
      "Félix"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs5",
    "text": "Quel est le nom du roi lion dans Le Roi Lion ?",
    "answers": [
      "Scar",
      "Mufasa",
      "Simba",
      "Rafiki"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs6",
    "text": "Dans quel film trouve-t-on la Reine des Neiges Elsa ?",
    "answers": [
      "Raiponce",
      "La Reine des Neiges",
      "Vaiana",
      "Tangled"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs7",
    "text": "Comment s'appelle la sœur d'Elsa ?",
    "answers": [
      "Rapunzel",
      "Anna",
      "Moana",
      "Ariel"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs8",
    "text": "Comment s'appelle le bonhomme de neige dans La Reine des Neiges ?",
    "answers": [
      "Frosty",
      "Olaf",
      "Bonhomme",
      "Sven"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs9",
    "text": "Quel est le nom du cowboy dans Toy Story ?",
    "answers": [
      "Buzz",
      "Woody",
      "Jessie",
      "Stinky Pete"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs10",
    "text": "Comment s'appelle le ranger de l'espace dans Toy Story ?",
    "answers": [
      "Woody",
      "Buzz l'Éclair",
      "Jessie",
      "Rex"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs11",
    "text": "Dans quel film un rat veut devenir chef cuisinier ?",
    "answers": [
      "Monstres et Cie",
      "Ratatouille",
      "Le Monde de Nemo",
      "Vice-Versa"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs12",
    "text": "Comment s'appelle le sorcier avec une cicatrice en éclair ?",
    "answers": [
      "Gandalf",
      "Harry Potter",
      "Merlin",
      "Voldemort"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs13",
    "text": "Comment s'appelle la chouette de Harry Potter ?",
    "answers": [
      "Errol",
      "Hedwige",
      "Pigwidgeon",
      "Hermès"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs14",
    "text": "Quel est le nom du chien de la Pat' Patrouille qui vole ?",
    "answers": [
      "Chase",
      "Marshall",
      "Skye",
      "Rocky"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs15",
    "text": "De quelle couleur est le dinosaure dans Toy Story ?",
    "answers": [
      "Bleu",
      "Rouge",
      "Vert",
      "Jaune"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs16",
    "text": "Quel super-héros porte un costume rouge et bleu avec une toile ?",
    "answers": [
      "Batman",
      "Superman",
      "Spider-Man",
      "Iron Man"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs17",
    "text": "Quel super-héros a un bouclier rond ?",
    "answers": [
      "Iron Man",
      "Thor",
      "Captain America",
      "Batman"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs18",
    "text": "Quel super-héros vêt d'une armure noire est le chevalier noir ?",
    "answers": [
      "Iron Man",
      "Black Panther",
      "Batman",
      "Nightwing"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs19",
    "text": "Comment s'appelle le héros de Star Wars qui devient Dark Vador ?",
    "answers": [
      "Luke",
      "Obi-Wan",
      "Han Solo",
      "Anakin Skywalker"
    ],
    "correct": 3,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs20",
    "text": "De quelle couleur est le sabre laser de Yoda ?",
    "answers": [
      "Bleu",
      "Rouge",
      "Vert",
      "Violet"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs21",
    "text": "Qui joue le rôle de Jack dans Titanic ?",
    "answers": [
      "Brad Pitt",
      "Leonardo DiCaprio",
      "Tom Cruise",
      "Johnny Depp"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs22",
    "text": "Dans quelle saga trouve-t-on le personnage de Darth Vader ?",
    "answers": [
      "Star Trek",
      "Star Wars",
      "Stargate",
      "Starcraft"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs23",
    "text": "Qui joue Forrest Gump ?",
    "answers": [
      "Tom Hanks",
      "Robert Redford",
      "Dustin Hoffman",
      "Robin Williams"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs24",
    "text": "Qui incarne Iron Man dans les films Marvel ?",
    "answers": [
      "Chris Evans",
      "Chris Hemsworth",
      "Robert Downey Jr.",
      "Mark Ruffalo"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs25",
    "text": "Quel est le premier film d'animation Pixar ?",
    "answers": [
      "Toy Story",
      "Ratatouille",
      "Le Monde de Nemo",
      "Monstres et Cie"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs26",
    "text": "Quelle actrice joue le rôle de Hermione Granger ?",
    "answers": [
      "Emma Watson",
      "Keira Knightley",
      "Natalie Portman",
      "Bonnie Wright"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs27",
    "text": "Quel film met en scène des émotions dans la tête d'une fillette ?",
    "answers": [
      "Toy Story",
      "Vice-Versa",
      "Monstres et Cie",
      "Les Nouveaux Héros"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs28",
    "text": "Dans quelle série trouve-t-on Walter White ?",
    "answers": [
      "Dexter",
      "Breaking Bad",
      "The Wire",
      "Ozark"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs29",
    "text": "Qui a créé la saga Star Wars ?",
    "answers": [
      "Steven Spielberg",
      "George Lucas",
      "James Cameron",
      "Ridley Scott"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs30",
    "text": "Quel film d'animation parle d'un rat cuisinier à Paris ?",
    "answers": [
      "Le Voyage de Chihiro",
      "Ratatouille",
      "Monstres et Cie",
      "Coco"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs31",
    "text": "Comment s'appelle le créateur de la série Les Simpsons ?",
    "answers": [
      "Seth MacFarlane",
      "Matt Groening",
      "Trey Parker",
      "Mike Judge"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs32",
    "text": "Quelle est la saga de films la plus rentable ?",
    "answers": [
      "Harry Potter",
      "Le Seigneur des Anneaux",
      "Star Wars",
      "Marvel"
    ],
    "correct": 3,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs33",
    "text": "Qui a réalisé Le Parrain (The Godfather) ?",
    "answers": [
      "Martin Scorsese",
      "Francis Ford Coppola",
      "Brian De Palma",
      "Sergio Leone"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs34",
    "text": "Quel film de Pixar parle d'une famille de super-héros ?",
    "answers": [
      "Ratatouille",
      "Les Indestructibles",
      "Vice-Versa",
      "Toy Story"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs35",
    "text": "Dans quelle série trouve-t-on Sheldon Cooper ?",
    "answers": [
      "The Big Bang Theory",
      "Friends",
      "How I Met Your Mother",
      "Scrubs"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs36",
    "text": "Qui a composé la musique de Star Wars ?",
    "answers": [
      "Hans Zimmer",
      "John Williams",
      "Howard Shore",
      "Danny Elfman"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs37",
    "text": "Quelle est la boisson préférée de James Bond ?",
    "answers": [
      "Whisky",
      "Martini",
      "Vodka",
      "Champagne"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs38",
    "text": "Quel film parle d'un ogre vert et d'un âne ?",
    "answers": [
      "Monstres et Cie",
      "Shrek",
      "Le Monde de Nemo",
      "Ice Age"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs39",
    "text": "Comment s'appelle la princesse que Mario sauve ?",
    "answers": [
      "Zelda",
      "Peach",
      "Daisy",
      "Rosalie"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs40",
    "text": "Dans quelle série trouve-t-on des amis dans un café ?",
    "answers": [
      "The Office",
      "Friends",
      "Seinfeld",
      "How I Met Your Mother"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs41",
    "text": "Quel super-héros peut voler et a une cape rouge ?",
    "answers": [
      "Batman",
      "Superman",
      "Iron Man",
      "Hulk"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs42",
    "text": "Comment s'appelle le panda dans le film Kung Fu Panda ?",
    "answers": [
      "Bao",
      "Po",
      "Ling",
      "Shifu"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs43",
    "text": "Quel film raconte l'histoire d'un poisson qui cherche son fils ?",
    "answers": [
      "Ratatouille",
      "Le Monde de Nemo",
      "Shark Tale",
      "Vaiana"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs44",
    "text": "Qui a réalisé E.T. l'extra-terrestre ?",
    "answers": [
      "George Lucas",
      "Steven Spielberg",
      "Ridley Scott",
      "Francis Ford Coppola"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs45",
    "text": "Quelle est la couleur de peau des Simpson ?",
    "answers": [
      "Orange",
      "Rose",
      "Jaune",
      "Blanche"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs46",
    "text": "Quel film de Miyazaki parle d'un château qui marche ?",
    "answers": [
      "Princesse Mononoké",
      "Le Château ambulant",
      "Mon voisin Totoro",
      "Le Voyage de Chihiro"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs47",
    "text": "Comment s'appelle le robot dans Wall-E ?",
    "answers": [
      "Eva",
      "Wall-E",
      "Baymax",
      "R2-D2"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs48",
    "text": "Quel personnage de Disney a des oreilles rondes et est un souris ?",
    "answers": [
      "Donald",
      "Minnie",
      "Mickey",
      "Dingo"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs49",
    "text": "Dans quel film un garçon cherche son vélo volé par des extraterrestres ?",
    "answers": [
      "Super 8",
      "E.T.",
      "Stranger Things",
      "Stand by Me"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs50",
    "text": "Qui est le méchant dans Le Roi Lion ?",
    "answers": [
      "Mufasa",
      "Scar",
      "Rafiki",
      "Zazu"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs51",
    "text": "Quel acteur incarne le Joker dans The Dark Knight ?",
    "answers": [
      "Jared Leto",
      "Jack Nicholson",
      "Heath Ledger",
      "Joaquin Phoenix"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs52",
    "text": "Quel film de Pixar parle d'un vieil homme avec des ballons ?",
    "answers": [
      "Toy Story",
      "Là-haut",
      "Vice-Versa",
      "Ratatouille"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs53",
    "text": "Comment s'appelle le dragon de Raiponce ?",
    "answers": [
      "Stromboli",
      "Pascal",
      "Fidélité",
      "Malefique"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs54",
    "text": "Quelle créature magique a des oreilles longues dans Star Wars ?",
    "answers": [
      "Un Wookiee",
      "Un Ewok",
      "Un Jaw",
      "Un Tusken"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs55",
    "text": "Comment s'appelle le fils de Dark Vador ?",
    "answers": [
      "Obi-Wan",
      "Han Solo",
      "Luke Skywalker",
      "Lando"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs56",
    "text": "Quel film d'animation montre le jour des morts au Mexique ?",
    "answers": [
      "Le Voyage de Chihiro",
      "Coco",
      "Ratatouille",
      "La Reine des Neiges"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs57",
    "text": "Comment s'appelle le petit robot dans Star Wars ?",
    "answers": [
      "R2-D2",
      "C-3PO",
      "BB-8",
      "Darth Maul"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs58",
    "text": "Quel film parle d'un pingouin qui danse ?",
    "answers": [
      "Le Roi Lion",
      "Happy Feet",
      "Madagascar",
      "Ice Age"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs59",
    "text": "Qui est le personnage principal d'Indiana Jones ?",
    "answers": [
      "Tom Cruise",
      "Harrison Ford",
      "Brad Pitt",
      "Bruce Willis"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs60",
    "text": "Comment s'appelle l'elfe de maison ami de Harry Potter ?",
    "answers": [
      "Kreacher",
      "Dobby",
      "Winky",
      "Hokey"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs61",
    "text": "Quel film raconte la vie de Muhammad Ali ?",
    "answers": [
      "Ali",
      "Rocky",
      "Creed",
      "Raging Bull"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs62",
    "text": "Dans quel film Keanu Reeves découvre la Matrice ?",
    "answers": [
      "Speed",
      "John Wick",
      "Matrix",
      "Point Break"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs63",
    "text": "Comment s'appelle le héros de Retour vers le Futur ?",
    "answers": [
      "Marty McFly",
      "Doc Brown",
      "Biff",
      "George McFly"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs64",
    "text": "Quel film parle de dinosaures recréés dans un parc ?",
    "answers": [
      "King Kong",
      "Jurassic Park",
      "Godzilla",
      "La Guerre du Feu"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs65",
    "text": "Comment s'appelle la fée de Peter Pan ?",
    "answers": [
      "Ariel",
      "Clochette",
      "Blanche-Neige",
      "Cendrillon"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs66",
    "text": "Quel film montre des vikings qui dressent des dragons ?",
    "answers": [
      "Le Roi Lion",
      "Comment dresser votre dragon",
      "Shrek",
      "Les Croods"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs67",
    "text": "Comment s'appelle le robot de Big Hero 6 ?",
    "answers": [
      "Wall-E",
      "Baymax",
      "Eva",
      "Iron Giant"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs68",
    "text": "Dans quel film un enfant possède un livre qui raconte des histoires ?",
    "answers": [
      "La Princesse Bride",
      "Princesse Mononoké",
      "Le Château ambulant",
      "Le Voyage de Chihiro"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs69",
    "text": "Quel film de Tim Burton met en scène un homme aux ciseaux pour mains ?",
    "answers": [
      "Batman",
      "Edward aux mains d'argent",
      "Charlie et la Chocolaterie",
      "L'Étrange Noël de M. Jack"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs70",
    "text": "Comment s'appelle l'as de l'espace dans Star Wars ?",
    "answers": [
      "Luke Skywalker",
      "Han Solo",
      "Leia",
      "Chewbacca"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs71",
    "text": "Quel film raconte l'histoire de Toy Story du point de vue de la fourchette ?",
    "answers": [
      "Toy Story 4",
      "Toy Story 3",
      "Toy Story 2",
      "Toy Story 1"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs72",
    "text": "Qui est le génie dans Aladdin ?",
    "answers": [
      "Jafar",
      "Le Génie",
      "Iago",
      "Abu"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs73",
    "text": "Quel personnage a un nez qui s'allonge quand il ment ?",
    "answers": [
      "Pinocchio",
      "Gepetto",
      "Dumbo",
      "Peter Pan"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs74",
    "text": "Quelle série parle d'un groupe de survivants face à des zombies ?",
    "answers": [
      "The Walking Dead",
      "Stranger Things",
      "Game of Thrones",
      "Breaking Bad"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs75",
    "text": "Comment s'appelle le vaisseau de Han Solo ?",
    "answers": [
      "L'Étoile Noire",
      "Le Faucon Millénium",
      "L'Enterprise",
      "Le Naboo"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs76",
    "text": "Quel film de Pixar parle d'un vieil homme qui se transforme en ballon ?",
    "answers": [
      "Là-haut",
      "Vice-Versa",
      "Soul",
      "Ratatouille"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs77",
    "text": "Comment s'appelle le gorille dans Sing ?",
    "answers": [
      "Gorille",
      "Johnny",
      "Rosita",
      "Gunther"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs78",
    "text": "Qui a réalisé Avatar ?",
    "answers": [
      "Steven Spielberg",
      "James Cameron",
      "Peter Jackson",
      "George Lucas"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs79",
    "text": "Quel film parle d'un hérisson bleu ?",
    "answers": [
      "Sonic le film",
      "Super Mario",
      "Detective Pikachu",
      "Pokémon"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs80",
    "text": "Comment s'appelle le chien de Mickey ?",
    "answers": [
      "Pluto",
      "Dingo",
      "Donald",
      "Goofy"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs81",
    "text": "Quel film montre un panda qui devient dragon guerrier ?",
    "answers": [
      "Kung Fu Panda",
      "Mulan",
      "Le Roi Lion",
      "Vaiana"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs82",
    "text": "Comment s'appelle la sorcière dans La Petite Sirène ?",
    "answers": [
      "Maléfique",
      "Ursula",
      "Cruella",
      "La Reine"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs83",
    "text": "Quelle actrice incarne Wonder Woman ?",
    "answers": [
      "Gal Gadot",
      "Margot Robbie",
      "Scarlett Johansson",
      "Angelina Jolie"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs84",
    "text": "Quel film montre des LEGO qui prennent vie ?",
    "answers": [
      "L'Étoile de Noël",
      "La Grande Aventure LEGO",
      "Toy Story",
      "Wreck-It Ralph"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs85",
    "text": "Comment s'appelle le génial singe dans La Planète des Singes ?",
    "answers": [
      "César",
      "Cornélius",
      "Zira",
      "Brent"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs86",
    "text": "Quel film de Disney parle d'une princesse polynésienne ?",
    "answers": [
      "La Petite Sirène",
      "Raiponce",
      "Vaiana",
      "La Reine des Neiges"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs87",
    "text": "Comment s'appelle le chat de Alice au pays des merveilles ?",
    "answers": [
      "Le Chat du Cheshire",
      "Le Chat Potté",
      "Garfield",
      "Sylvestre"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs88",
    "text": "Quel film montre un bébé qui parle et a un vocabulaire très riche ?",
    "answers": [
      "Boss Baby",
      "Minions",
      "Les Croods",
      "Baby Boss"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs89",
    "text": "Quelle est la planète natale de Dark Vador ?",
    "answers": [
      "Alderaan",
      "Coruscant",
      "Tatooine",
      "Kamino"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs90",
    "text": "Comment s'appelle le héros du Seigneur des Anneaux ?",
    "answers": [
      "Aragorn",
      "Gandalf",
      "Frodon",
      "Legolas"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs91",
    "text": "Quel film de Burton montre un Halloween et Noël mélangés ?",
    "answers": [
      "Edward aux mains d'argent",
      "Charlie et la Chocolaterie",
      "L'Étrange Noël de M. Jack",
      "Sweeney Todd"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs92",
    "text": "Qui est la créature verte avec des oreilles dans Shrek ?",
    "answers": [
      "L'Âne",
      "Puss",
      "Chat Potté",
      "Le dragon"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs93",
    "text": "Quel film raconte une course entre des voitures qui parlent ?",
    "answers": [
      "Cars",
      "Monstres et Cie",
      "Planes",
      "Thomas et ses amis"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs94",
    "text": "Comment s'appelle le frère de Mario ?",
    "answers": [
      "Wario",
      "Luigi",
      "Toad",
      "Yoshi"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs95",
    "text": "Quelle sorcière vole sur un balai dans Fantasia ?",
    "answers": [
      "Maléfique",
      "La Méchante Sorcière de l'Ouest",
      "Ursula",
      "La Reine de Cœur"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs96",
    "text": "Quel film parle d'un kid qui rentre dans un jeu vidéo ?",
    "answers": [
      "Ready Player One",
      "Jumanji",
      "Wreck-It Ralph",
      "Tron"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs97",
    "text": "Comment s'appelle le lutin vert qui veut Noël ?",
    "answers": [
      "Le Grinch",
      "Le lutin",
      "Le Père Noël",
      "Buddy"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs98",
    "text": "Quel film parle d'un rat qui rêve d'être cuisinier ?",
    "answers": [
      "Soul",
      "Ratatouille",
      "Le Monde de Nemo",
      "Coco"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs99",
    "text": "Qui est le méchant principal dans Harry Potter ?",
    "answers": [
      "Voldemort",
      "Drago Malefoy",
      "Dolores Ombrage",
      "Lucius Malefoy"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs100",
    "text": "Comment s'appelle le lion de la MGM ?",
    "answers": [
      "Leo",
      "Rex",
      "Simba",
      "Alex"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs101",
    "text": "Quel film parle de monstres qui travaillent pour faire peur ?",
    "answers": [
      "Monstres et Cie",
      "Vice-Versa",
      "Là-haut",
      "Soul"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs102",
    "text": "Comment s'appelle le chien de Snoopy ?",
    "answers": [
      "Charlie",
      "Woodstock",
      "Linus",
      "Lucy"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs103",
    "text": "Quel film parle d'un pingouin sur glace ?",
    "answers": [
      "Happy Feet",
      "Sur la glace",
      "Les Rois de la glisse",
      "Pingouin"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs104",
    "text": "Comment s'appelle la fée dans Peter Pan ?",
    "answers": [
      "Aurore",
      "Clochette",
      "Cendrillon",
      "Blanche-Neige"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs105",
    "text": "Quel film de Marvel parle d'un soldat gelé ?",
    "answers": [
      "Thor",
      "Iron Man",
      "Captain America",
      "Hulk"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs106",
    "text": "Comment s'appelle le vaisseau dans Alien ?",
    "answers": [
      "Nostromo",
      "Enterprise",
      "Millennium Falcon",
      "Discovery"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs107",
    "text": "Quel film montre un gorille sur un immeuble ?",
    "answers": [
      "King Kong",
      "Godzilla",
      "Jurassic Park",
      "Mighty Joe Young"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs108",
    "text": "Comment s'appelle le personnage principal d'Amélie Poulain ?",
    "answers": [
      "Marion",
      "Amélie",
      "Sophie",
      "Léa"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs109",
    "text": "Quel film de Spielberg montre un requin géant ?",
    "answers": [
      "Le Monde Perdu",
      "Les Dents de la Mer",
      "Jurassic Park",
      "Jaws"
    ],
    "correct": 3,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs110",
    "text": "Comment s'appelle le magicien dans Harry Potter ?",
    "answers": [
      "Voldemort",
      "Dumbledore",
      "Rogue",
      "Potter"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs111",
    "text": "Quel film parle d'un oiseau rouge en colère ?",
    "answers": [
      "Rio",
      "Angry Birds",
      "Les Oiseaux",
      "Le Roi des Oiseaux"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs112",
    "text": "Comment s'appelle le gorille dans Le Roi Lion ?",
    "answers": [
      "Scar",
      "Mufasa",
      "Rafiki",
      "Banzai"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs113",
    "text": "Quel film de Marvel parle d'un dieu du tonnerre ?",
    "answers": [
      "Iron Man",
      "Thor",
      "Hulk",
      "Spider-Man"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs114",
    "text": "Comment s'appelle le héros de Les Gardiens de la Galaxie ?",
    "answers": [
      "Peter Quill",
      "Tony Stark",
      "Steve Rogers",
      "Thor"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs115",
    "text": "Quel film parle d'un garçon qui vit dans une gare ?",
    "answers": [
      "Harry Potter",
      "Hugo",
      "Le Magicien d'Oz",
      "E.T."
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs116",
    "text": "Comment s'appelle le robot dans le film I, Robot ?",
    "answers": [
      "Sonny",
      "Wall-E",
      "Baymax",
      "Terminator"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs117",
    "text": "Quel film montre une famille de super-héros ?",
    "answers": [
      "Les Avengers",
      "Les Indestructibles",
      "Les Incredibles",
      "Les X-Men"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs118",
    "text": "Comment s'appelle le fils de Mufasa ?",
    "answers": [
      "Scar",
      "Simba",
      "Nala",
      "Zazu"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs119",
    "text": "Quel film parle d'un petit robot qui nettoie la Terre ?",
    "answers": [
      "Ratatouille",
      "Wall-E",
      "Cars",
      "Là-haut"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs120",
    "text": "Comment s'appelle le sorcier dans Le Seigneur des Anneaux ?",
    "answers": [
      "Aragorn",
      "Frodon",
      "Gandalf",
      "Saroumane"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs121",
    "text": "Quel film montre des aliens qui envahissent la Terre ?",
    "answers": [
      "Independence Day",
      "Alien",
      "Predator",
      "E.T."
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs122",
    "text": "Comment s'appelle la ville où vit Batman ?",
    "answers": [
      "New York",
      "Gotham",
      "Metropolis",
      "Star City"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs123",
    "text": "Quel film parle de jouets qui prennent vie ?",
    "answers": [
      "Monstres et Cie",
      "Toy Story",
      "L'Histoire de Jouets",
      "Cars"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs124",
    "text": "Comment s'appelle l'éléphant qui sait voler dans Dumbo ?",
    "answers": [
      "Dumbo",
      "Jumbo",
      "Mumbo",
      "Tantor"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs125",
    "text": "Quel film montre une course-poursuite de BMX ?",
    "answers": [
      "E.T.",
      "BMX Bandits",
      "Rad",
      "Premium Rush"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs126",
    "text": "Comment s'appelle le frère d'Anna dans La Reine des Neiges ?",
    "answers": [
      "Hans",
      "Kristoff",
      "Olaf",
      "Sven"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs127",
    "text": "Quel film parle d'un ogre qui sauve une princesse ?",
    "answers": [
      "Hercules",
      "Aladdin",
      "Shrek",
      "Le Chat Potté"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs128",
    "text": "Comment s'appelle la méchante dans 101 Dalmatiens ?",
    "answers": [
      "Malefique",
      "Cruella d'Enfer",
      "Ursula",
      "La Reine de Cœur"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs129",
    "text": "Quel film parle d'un poisson jaune ?",
    "answers": [
      "Le Monde de Nemo",
      "Shark Tale",
      "Poisson d'avril",
      "Oscar"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs130",
    "text": "Comment s'appelle la méchante dans La Belle au Bois Dormant ?",
    "answers": [
      "Ursula",
      "Malefique",
      "Cruella",
      "La Reine de Cœur"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs131",
    "text": "Quel film montre des monstres qui font peur aux enfants ?",
    "answers": [
      "Monstres et Cie",
      "Vice-Versa",
      "Soul",
      "Tous en Scène"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs132",
    "text": "Comment s'appelle le personnage principal de Blanche-Neige ?",
    "answers": [
      "Cendrillon",
      "Ariel",
      "Blanche-Neige",
      "Raiponce"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs133",
    "text": "Quel film parle d'un voleur avec un sling ?",
    "answers": [
      "Cars",
      "Cars 2",
      "Cars 3",
      "Les Bagnoles"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs134",
    "text": "Comment s'appelle le dragon dans Aladdin ?",
    "answers": [
      "Saphir",
      "Rajah",
      "Iago",
      "Abu"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs135",
    "text": "Quel film parle de deux frères qui cherchent un trésor ?",
    "answers": [
      "Indiana Jones",
      "Les Goonies",
      "Pirates des Caraïbes",
      "La Chasse au Trésor"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs136",
    "text": "Comment s'appelle le dragon dans Comment dresser votre dragon ?",
    "answers": [
      "Furie Noire",
      "Stormfly",
      "Hookfang",
      "Meatlug"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs137",
    "text": "Quel film montre des animaux qui s'échappent d'un zoo ?",
    "answers": [
      "Madagascar",
      "Ice Age",
      "Le Roi Lion",
      "Zootopie"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs138",
    "text": "Comment s'appelle le héros d'Astérix ?",
    "answers": [
      "Obélix",
      "Astérix",
      "Panoramix",
      "Idéfix"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs139",
    "text": "Quel film parle d'un rat qui cuisine ?",
    "answers": [
      "Ratatouille",
      "Coco",
      "Soul",
      "Là-haut"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs140",
    "text": "Comment s'appelle le frère de Mario dans le jeu ?",
    "answers": [
      "Wario",
      "Luigi",
      "Toad",
      "Yoshi"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs141",
    "text": "Quel film montre un singe qui joue au base-ball ?",
    "answers": [
      "Kong",
      "Mighty Joe Young",
      "King Kong",
      "Editeur"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs142",
    "text": "Comment s'appelle le poisson dans Le Monde de Nemo ?",
    "answers": [
      "Dory",
      "Nemo",
      "Marlin",
      "Gill"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs143",
    "text": "Quel film parle d'un chat qui voyage dans le temps ?",
    "answers": [
      "Le Chat du Cheshire",
      "Le Chat Potté",
      "Le Chat qui vient de l'espace",
      "Doraemon"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs144",
    "text": "Comment s'appelle la fille de Malefique ?",
    "answers": [
      "Aurore",
      "Ariel",
      "Belle",
      "Cendrillon"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs145",
    "text": "Quel film parle d'une sorcière qui veut manger des enfants ?",
    "answers": [
      "Malefique",
      "La Méchante Sorcière",
      "Hansel et Gretel",
      "Blanche-Neige"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs146",
    "text": "Comment s'appelle le héros de Charlie et la Chocolaterie ?",
    "answers": [
      "Charlie",
      "Willy Wonka",
      "Augustus",
      "Veruca"
    ],
    "correct": 0,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs147",
    "text": "Quel film montre un garçon qui entre dans le monde de MONSTRES ?",
    "answers": [
      "Soul",
      "Tous en Scène",
      "Monstres et Cie",
      "Vice-Versa"
    ],
    "correct": 2,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs148",
    "text": "Comment s'appelle la ville où vit Superman ?",
    "answers": [
      "Gotham",
      "Metropolis",
      "Star City",
      "Central City"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs149",
    "text": "Quel film parle d'un lutin qui adore Noël ?",
    "answers": [
      "Le Grinch",
      "Buddy",
      "Le Père Noël",
      "Noël Express"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "cs150",
    "text": "Comment s'appelle la princesse dans Aladdin ?",
    "answers": [
      "Ariel",
      "Jasmine",
      "Belle",
      "Cendrillon"
    ],
    "correct": 1,
    "category": "Cinéma & Séries",
    "type": "multiple-choice"
  },
  {
    "id": "sp1",
    "text": "Combien de joueurs dans une équipe de football ?",
    "answers": [
      "8",
      "9",
      "11",
      "15"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp2",
    "text": "Avec quoi joue-t-on au tennis ?",
    "answers": [
      "Une raquette et une balle",
      "Un bâton et une balle",
      "Une main et un ballon",
      "Un pied et un ballon"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp3",
    "text": "De quelle couleur est le ballon de football traditionnel ?",
    "answers": [
      "Rouge",
      "Bleu",
      "Blanc et noir",
      "Jaune"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp4",
    "text": "Combien de joueurs dans une équipe de basketball ?",
    "answers": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp5",
    "text": "Dans quel sport nage-t-on ?",
    "answers": [
      "Le cyclisme",
      "La natation",
      "L'athlétisme",
      "Le rugby"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp6",
    "text": "Avec quoi marque-t-on un essai au rugby ?",
    "answers": [
      "Le pied",
      "La main",
      "La tête",
      "Le coude"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp7",
    "text": "Combien de périodes dans un match de hockey sur glace ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp8",
    "text": "Quel sport se pratique avec un vélo ?",
    "answers": [
      "Le foot",
      "Le tennis",
      "Le cyclisme",
      "La natation"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp9",
    "text": "Combien de trous sur un parcours de golf ?",
    "answers": [
      "9",
      "12",
      "18",
      "27"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp10",
    "text": "Quel sport se joue avec une table et une petite balle ?",
    "answers": [
      "Le tennis",
      "Le ping-pong",
      "Le badminton",
      "Le squash"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp11",
    "text": "Dans quel sport lance-t-on un javelot ?",
    "answers": [
      "La boxe",
      "Le judo",
      "L'athlétisme",
      "Le football"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp12",
    "text": "Combien de sets gagne-t-on pour gagner un match de tennis (hommes) ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp13",
    "text": "Quel sport se pratique en montagne avec des skis ?",
    "answers": [
      "Le surf",
      "Le ski",
      "Le VTT",
      "L'escalade"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp14",
    "text": "Combien de points vaut un panier au basket ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp15",
    "text": "Quel sport utilise des gants de boxe ?",
    "answers": [
      "La natation",
      "Le karaté",
      "La boxe",
      "Le tennis"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp16",
    "text": "Combien de joueurs dans une équipe de volley ?",
    "answers": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp17",
    "text": "Quel sport se pratique sur la glace avec des patins ?",
    "answers": [
      "Le roller",
      "Le skateboard",
      "Le hockey sur glace",
      "Le curling"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp18",
    "text": "Comment s'appelle la compétition internationale de football ?",
    "answers": [
      "La Ligue 1",
      "Les Jeux Olympiques",
      "La Coupe du Monde",
      "L'Euro"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp19",
    "text": "Combien de points vaut un but au rugby ?",
    "answers": [
      "2",
      "3",
      "5",
      "7"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp20",
    "text": "Quel sport se pratique dans une piscine ?",
    "answers": [
      "Le football",
      "Le water-polo",
      "Le rugby",
      "Le tennis"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp21",
    "text": "Combien de tours compte le circuit de Monaco en F1 ?",
    "answers": [
      "58",
      "68",
      "78",
      "88"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp22",
    "text": "Quel pays a gagné le plus de Coupes du Monde de football ?",
    "answers": [
      "Allemagne",
      "Brésil",
      "Italie",
      "Argentine"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp23",
    "text": "Combien de joueurs sur le terrain au rugby à 15 ?",
    "answers": [
      "11",
      "13",
      "15",
      "17"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp24",
    "text": "Quelle est la distance d'un marathon ?",
    "answers": [
      "21 km",
      "30 km",
      "42,195 km",
      "50 km"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp25",
    "text": "Quel sport se pratique avec un filet et un volant ?",
    "answers": [
      "Le tennis",
      "Le badminton",
      "Le ping-pong",
      "Le squash"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp26",
    "text": "Combien de temps dure un match de football ?",
    "answers": [
      "60 min",
      "80 min",
      "90 min",
      "120 min"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp27",
    "text": "Quels Jeux Olympiques ont eu lieu à Paris en 2024 ?",
    "answers": [
      "Les JO d'été",
      "Les JO d'hiver",
      "Les JO de la jeunesse",
      "Les Jeux Paralympiques"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp28",
    "text": "Quel est le sport le plus populaire en France ?",
    "answers": [
      "Le tennis",
      "Le basketball",
      "Le football",
      "Le rugby"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp29",
    "text": "Combien d'essais faut-il pour gagner un set au tennis ?",
    "answers": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp30",
    "text": "Quel sport de combat se pratique en kimono blanc ?",
    "answers": [
      "La boxe",
      "Le judo",
      "La boxe thaï",
      "Le karaté"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp31",
    "text": "Quelle équipe française est surnommée \"Les Bleus\" ?",
    "answers": [
      "Le tennis",
      "Le football",
      "Le rugby",
      "Le basket"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp32",
    "text": "Combien de cerceaux sur un terrain de basketball ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp33",
    "text": "Quel pays a inventé le judo ?",
    "answers": [
      "Chine",
      "Corée",
      "Japon",
      "Thaïlande"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp34",
    "text": "Combien de médailles d'or la France a-t-elle gagnées aux JO de Paris 2024 ?",
    "answers": [
      "10",
      "16",
      "20",
      "25"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp35",
    "text": "Quelle est la hauteur du filet au volleyball (hommes) ?",
    "answers": [
      "2,00 m",
      "2,24 m",
      "2,43 m",
      "2,60 m"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp36",
    "text": "Quel sport de glace utilise une pierre et un balai ?",
    "answers": [
      "Le hockey",
      "Le curling",
      "Le patinage",
      "Le bobsleigh"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp37",
    "text": "Combien de km fait un Ironman de natation ?",
    "answers": [
      "1,9 km",
      "2,4 km",
      "3,8 km",
      "5 km"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp38",
    "text": "Quel pays a remporté la Coupe du Monde 2022 ?",
    "answers": [
      "France",
      "Brésil",
      "Argentine",
      "Allemagne"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp39",
    "text": "Combien de phases dans un triathlon ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp40",
    "text": "Quel tennisman français a remporté Roland-Garros le plus souvent ?",
    "answers": [
      "Tsonga",
      "Monfils",
      "Gasquet",
      "Noah"
    ],
    "correct": 3,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp41",
    "text": "Quelle est la nationalité de Lionel Messi ?",
    "answers": [
      "Portugais",
      "Brésilien",
      "Argentin",
      "Espagnol"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp42",
    "text": "Combien de points pour un drop au rugby ?",
    "answers": [
      "1",
      "2",
      "3",
      "5"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp43",
    "text": "Quel sport se pratique en mer avec des vagues ?",
    "answers": [
      "Le surf",
      "Le ski",
      "Le VTT",
      "Le golf"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp44",
    "text": "Quels Jeux Olympiques ont eu lieu en 2024 ?",
    "answers": [
      "Pékin",
      "Tokyo",
      "Paris",
      "Londres"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp45",
    "text": "Combien d'épreuves dans un décathlon ?",
    "answers": [
      "5",
      "7",
      "10",
      "12"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp46",
    "text": "Quelle équipe de foot est surnommée \"Le Barça\" ?",
    "answers": [
      "Le Real Madrid",
      "Le PSG",
      "Le FC Barcelone",
      "Manchester"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp47",
    "text": "Combien de sets au maximum dans un match de tennis dames ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp48",
    "text": "Quel coureur cycliste a remporté le plus de Tours de France ?",
    "answers": [
      "Eddy Merckx",
      "Bernard Hinault",
      "Jacques Anquetil",
      "Lance Armstrong"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp49",
    "text": "Combien de points vaut une transformation au rugby ?",
    "answers": [
      "1",
      "2",
      "3",
      "5"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp50",
    "text": "Quel est le sport national du Japon ?",
    "answers": [
      "Le football",
      "Le baseball",
      "Le sumo",
      "Le karaté"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp51",
    "text": "Combien de joueurs dans une équipe de handball ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp52",
    "text": "Quel pays a gagné la Coupe du Monde 2018 ?",
    "answers": [
      "Croatie",
      "France",
      "Belgique",
      "Brésil"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp53",
    "text": "Quelle est la formule 1 en abrégé ?",
    "answers": [
      "F1",
      "F2",
      "F3",
      "GP"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp54",
    "text": "Combien de manches dans un Grand Prix de F1 ?",
    "answers": [
      "3",
      "5",
      "7",
      "10"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp55",
    "text": "Quel sport utilise une crosse ?",
    "answers": [
      "Le hockey sur glace",
      "Le lacrosse",
      "Le baseball",
      "Le cricket"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp56",
    "text": "Combien de courses compose le Tour de France ?",
    "answers": [
      "10",
      "15",
      "21",
      "25"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp57",
    "text": "Quel est le ballon officiel de la NBA ?",
    "answers": [
      "Wilson",
      "Spalding",
      "Nike",
      "Adidas"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp58",
    "text": "Quelle est la couleur du maillot du leader du Tour de France ?",
    "answers": [
      "Vert",
      "Blanc",
      "Jaune",
      "Rouge"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp59",
    "text": "Combien de fautes avant expulsion au basket ?",
    "answers": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp60",
    "text": "Quel pays a remporté le plus de titres olympiques ?",
    "answers": [
      "Chine",
      "Russie",
      "États-Unis",
      "Grande-Bretagne"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp61",
    "text": "Quelle est la distance du 100 mètres ?",
    "answers": [
      "50 m",
      "100 m",
      "200 m",
      "400 m"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp62",
    "text": "Combien de joueurs dans une équipe de football américain ?",
    "answers": [
      "9",
      "11",
      "13",
      "15"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp63",
    "text": "Quel sport de raquette se joue en double ?",
    "answers": [
      "Le tennis",
      "Le badminton",
      "Le squash",
      "Le ping-pong"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp64",
    "text": "Quelle équipe a gagné la Ligue des Champions en 2023 ?",
    "answers": [
      "Real Madrid",
      "Manchester City",
      "Bayern",
      "PSG"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp65",
    "text": "Combien de rounds dans un combat de boxe professionnelle ?",
    "answers": [
      "6",
      "8",
      "10",
      "12"
    ],
    "correct": 3,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp66",
    "text": "Quel pays a gagné le dernier Mondial de rugby ?",
    "answers": [
      "Nouvelle-Zélande",
      "Afrique du Sud",
      "France",
      "Angleterre"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp67",
    "text": "Combien de temps entre chaque JO d'été ?",
    "answers": [
      "2 ans",
      "3 ans",
      "4 ans",
      "5 ans"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp68",
    "text": "Quelle est la nation la plus titrée en football ?",
    "answers": [
      "Allemagne",
      "Brésil",
      "Argentine",
      "Italie"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp69",
    "text": "Quel est le stade de l'équipe de France de football ?",
    "answers": [
      "Parc des Princes",
      "Stade de France",
      "Vélodrome",
      "Gerland"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp70",
    "text": "Combien de points vaut un ace au tennis ?",
    "answers": [
      "10",
      "15",
      "20",
      "25"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp71",
    "text": "Quelle est la capitale olympique ?",
    "answers": [
      "Paris",
      "Lausanne",
      "Londres",
      "New York"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp72",
    "text": "Combien de cerceaux dans un terrain de basket ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp73",
    "text": "Quel pays a remporté le plus de Tours de France ?",
    "answers": [
      "Italie",
      "Espagne",
      "France",
      "Belgique"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp74",
    "text": "Quelle est la plus grande compétition de tennis ?",
    "answers": [
      "Roland-Garros",
      "Wimbledon",
      "US Open",
      "Open d'Australie"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp75",
    "text": "Combien d'équipes dans la NFL ?",
    "answers": [
      "24",
      "28",
      "32",
      "36"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp76",
    "text": "Quel est le sport principal des États-Unis ?",
    "answers": [
      "Le basketball",
      "Le football américain",
      "Le baseball",
      "Le hockey"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp77",
    "text": "Combien de courses dans une saison de F1 ?",
    "answers": [
      "12",
      "16",
      "20",
      "24"
    ],
    "correct": 3,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp78",
    "text": "Quel gymnaste français est célèbre ?",
    "answers": [
      "Nadal",
      "Duplantis",
      "Barden",
      "Roulin"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp79",
    "text": "Combien de matches dans une saison de Ligue 1 ?",
    "answers": [
      "30",
      "34",
      "38",
      "42"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp80",
    "text": "Quel pays est le meilleur au handball ?",
    "answers": [
      "France",
      "Allemagne",
      "Espagne",
      "Danemark"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp81",
    "text": "Combien de points pour un panier à 3 points ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp82",
    "text": "Quelle équipe a gagné la Coupe du Monde féminine 2023 ?",
    "answers": [
      "USA",
      "Angleterre",
      "Espagne",
      "France"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp83",
    "text": "Quel sport se pratique avec un arc et des flèches ?",
    "answers": [
      "Le javelot",
      "Le tir à l'arc",
      "Le golf",
      "Le hockey"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp84",
    "text": "Combien de set gagne-t-on au volley pour gagner ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp85",
    "text": "Quelle est la distance d'un semi-marathon ?",
    "answers": [
      "10 km",
      "15 km",
      "21,1 km",
      "30 km"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp86",
    "text": "Quel pays a gagné l'Euro 2024 de football ?",
    "answers": [
      "France",
      "Angleterre",
      "Espagne",
      "Allemagne"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp87",
    "text": "Combien de joueurs sur la glace au hockey ?",
    "answers": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp88",
    "text": "Quel est le plus grand tournoi de tennis sur terre battue ?",
    "answers": [
      "Roland-Garros",
      "Wimbledon",
      "US Open",
      "Open d'Australie"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp89",
    "text": "Combien de points pour une pénalité au rugby ?",
    "answers": [
      "2",
      "3",
      "5",
      "7"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp90",
    "text": "Quel est le sport le plus populaire au monde ?",
    "answers": [
      "Le basketball",
      "Le football",
      "Le cricket",
      "Le tennis"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp91",
    "text": "Combien de temps dure un mi-temps de foot ?",
    "answers": [
      "30 min",
      "35 min",
      "45 min",
      "50 min"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp92",
    "text": "Quelle est la hauteur du filet au tennis ?",
    "answers": [
      "0,80 m",
      "0,91 m",
      "1,07 m",
      "1,20 m"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp93",
    "text": "Quel pays a remporté les JO d'hiver 2022 ?",
    "answers": [
      "Norvège",
      "Allemagne",
      "Canada",
      "États-Unis"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp94",
    "text": "Combien d'officiels sur le terrain au football ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp95",
    "text": "Quel sprinter détient le record du 100m ?",
    "answers": [
      "Carl Lewis",
      "Usain Bolt",
      "Tyson Gay",
      "Justin Gatlin"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp96",
    "text": "Combien de temps entre les JO d'hiver et d'été ?",
    "answers": [
      "2 ans",
      "3 ans",
      "4 ans",
      "5 ans"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp97",
    "text": "Quelle est la distance entre les 2 poteaux de rugby ?",
    "answers": [
      "4 m",
      "5,6 m",
      "7 m",
      "8 m"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp98",
    "text": "Quel sport a été inventé par un Canadien ?",
    "answers": [
      "Le baseball",
      "Le hockey sur glace",
      "Le basketball",
      "Le football"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp99",
    "text": "Combien de points pour une victoire en Ligue 1 ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp100",
    "text": "Quelle est la plus grande arène de France ?",
    "answers": [
      "Stade de France",
      "Vélodrome",
      "Parc des Princes",
      "Stade Pierre Mauroy"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp101",
    "text": "Quel pays a gagné la Coupe du Monde 2014 ?",
    "answers": [
      "Brésil",
      "Allemagne",
      "Argentine",
      "Pays-Bas"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp102",
    "text": "Combien de temps dure un set de tennis ?",
    "answers": [
      "Pas de limite",
      "30 min",
      "45 min",
      "1h"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp103",
    "text": "Quel est le plus vieux tournoi de tennis du monde ?",
    "answers": [
      "Roland-Garros",
      "Wimbledon",
      "US Open",
      "Open d'Australie"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp104",
    "text": "Combien de joueurs sur un terrain de foot ?",
    "answers": [
      "20",
      "22",
      "24",
      "26"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp105",
    "text": "Quel pays a inventé le basketball ?",
    "answers": [
      "France",
      "Canada",
      "États-Unis",
      "Angleterre"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp106",
    "text": "Combien de couleurs sur un ring de boxe ?",
    "answers": [
      "2",
      "3",
      "4",
      "6"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp107",
    "text": "Quel sport utilise une planche avec des roulettes ?",
    "answers": [
      "Le surf",
      "Le skateboard",
      "Le ski",
      "Le snowboard"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp108",
    "text": "Quelle est la différence entre le football et le futsal ?",
    "answers": [
      "La balle",
      "Le terrain plus petit",
      "Les joueurs",
      "Le temps"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp109",
    "text": "Combien de rounds dans un combat d'UFC ?",
    "answers": [
      "3",
      "5",
      "7",
      "10"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp110",
    "text": "Quel est le plus grand événement sportif au monde ?",
    "answers": [
      "Les JO",
      "La Coupe du Monde",
      "Le Super Bowl",
      "Roland-Garros"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp111",
    "text": "Quelle est la taille d'un terrain de tennis ?",
    "answers": [
      "20m x 10m",
      "23,77m x 8,23m",
      "25m x 10m",
      "28m x 12m"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp112",
    "text": "Combien d'heures dure le Super Bowl ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp113",
    "text": "Quel pays a gagné le plus de médailles aux JO 2024 ?",
    "answers": [
      "États-Unis",
      "Chine",
      "France",
      "Grande-Bretagne"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp114",
    "text": "Combien de clubs en Ligue 1 ?",
    "answers": [
      "16",
      "18",
      "20",
      "22"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp115",
    "text": "Quel sport se pratique sous l'eau ?",
    "answers": [
      "Le water-polo",
      "La plongée",
      "Le hockey sous-marin",
      "La natation synchronisée"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp116",
    "text": "Quelle est la distance du 400 mètres ?",
    "answers": [
      "200m",
      "300m",
      "400m",
      "500m"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp117",
    "text": "Quel est le sport le plus regardé en France ?",
    "answers": [
      "Le tennis",
      "Le rugby",
      "Le football",
      "Le basket"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp118",
    "text": "Combien de joueurs dans une équipe de cricket ?",
    "answers": [
      "9",
      "10",
      "11",
      "13"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp119",
    "text": "Quel est le continent qui n'a jamais gagné la Coupe du Monde ?",
    "answers": [
      "Afrique",
      "Asie",
      "Amérique du Sud",
      "Europe"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp120",
    "text": "Quelle est la vitesse d'un service de tennis pro ?",
    "answers": [
      "150 km/h",
      "200 km/h",
      "250 km/h",
      "300 km/h"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp121",
    "text": "Quel est le sport national des États-Unis ?",
    "answers": [
      "Le baseball",
      "Le basketball",
      "Le football américain",
      "Le hockey"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp122",
    "text": "Combien de temps entre deux éditions de la Coupe du Monde ?",
    "answers": [
      "2 ans",
      "3 ans",
      "4 ans",
      "6 ans"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp123",
    "text": "Quel pays a remporté le plus de finales de Roland-Garros (hommes) ?",
    "answers": [
      "Espagne",
      "France",
      "Suède",
      "États-Unis"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp124",
    "text": "Combien de joueurs dans une équipe de rugby à 7 ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp125",
    "text": "Quelle est la hauteur du panier de basket ?",
    "answers": [
      "2,50 m",
      "2,75 m",
      "3,05 m",
      "3,50 m"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp126",
    "text": "Quel est le plus rapide des 100 mètres féminin ?",
    "answers": [
      "10,49 s",
      "10,65 s",
      "10,78 s",
      "10,90 s"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp127",
    "text": "Combien de matchs dans une Coupe du Monde de football ?",
    "answers": [
      "32",
      "48",
      "64",
      "96"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp128",
    "text": "Quel sport utilise des patins à roulettes ?",
    "answers": [
      "Le roller derby",
      "Le hockey",
      "Le curling",
      "Le skateboard"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp129",
    "text": "Combien de points vaut un penalty au football ?",
    "answers": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp130",
    "text": "Quel pays a gagné la Coupe du Monde féminine la plus de fois ?",
    "answers": [
      "Allemagne",
      "USA",
      "Japon",
      "Norvège"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp131",
    "text": "Quelle est la différence entre le surf et le bodyboard ?",
    "answers": [
      "La planche",
      "Les vagues",
      "L'océan",
      "Le temps"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp132",
    "text": "Combien de demi-finales en Coupe du Monde de football ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp133",
    "text": "Quel est le sport national de l'Inde ?",
    "answers": [
      "Le cricket",
      "Le hockey sur gazon",
      "Le kabaddi",
      "Le tennis"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp134",
    "text": "Combien de sets maximum en finale de Grand Chelem ?",
    "answers": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp135",
    "text": "Quel pays a remporté le Championnat d'Europe 2016 ?",
    "answers": [
      "France",
      "Portugal",
      "Allemagne",
      "Italie"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp136",
    "text": "Quelle est la distance du saut en longueur masculin record ?",
    "answers": [
      "8,50 m",
      "8,95 m",
      "9,00 m",
      "9,50 m"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp137",
    "text": "Combien de joueurs dans une équipe de water-polo ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp138",
    "text": "Quel est le plus grand événement sportif en Europe ?",
    "answers": [
      "Les JO",
      "Champions League",
      "Tour de France",
      "Super Bowl"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp139",
    "text": "Combien d'équipes en Champions League ?",
    "answers": [
      "16",
      "24",
      "32",
      "36"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp140",
    "text": "Quelle est la différence entre le judo et le jiu-jitsu ?",
    "answers": [
      "Le kimono",
      "Le sol",
      "Les prises",
      "Tout est pareil"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp141",
    "text": "Quel pays a remporté le plus de médailles d'or aux JO 2024 ?",
    "answers": [
      "États-Unis",
      "Chine",
      "Japon",
      "France"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp142",
    "text": "Combien de temps entre deux Jeux Paralympiques ?",
    "answers": [
      "2 ans",
      "3 ans",
      "4 ans",
      "5 ans"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp143",
    "text": "Quel est le sport le plus ancien du monde ?",
    "answers": [
      "La lutte",
      "Le football",
      "La course",
      "La natation"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp144",
    "text": "Combien de joueurs dans une équipe de pelote basque ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp145",
    "text": "Quel pays a gagné la Coupe Davis le plus de fois ?",
    "answers": [
      "France",
      "États-Unis",
      "Australie",
      "Espagne"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp146",
    "text": "Combien de rounds dans un combat de boxe amateur ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp147",
    "text": "Quel est le sport le plus pratiqué en France ?",
    "answers": [
      "Le tennis",
      "Le football",
      "La natation",
      "Le judo"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp148",
    "text": "Combien de temps dure un match de rugby ?",
    "answers": [
      "60 min",
      "70 min",
      "80 min",
      "90 min"
    ],
    "correct": 2,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp149",
    "text": "Quelle est la différence entre un marathon et un semi ?",
    "answers": [
      "La moitié de la distance",
      "Le double",
      "Le tiers",
      "Le quart"
    ],
    "correct": 0,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "sp150",
    "text": "Quel pays a inventé le tennis moderne ?",
    "answers": [
      "France",
      "Angleterre",
      "États-Unis",
      "Australie"
    ],
    "correct": 1,
    "category": "Sport",
    "type": "multiple-choice"
  },
  {
    "id": "mu1",
    "text": "Combien de cordes a une guitare ?",
    "answers": [
      "4",
      "5",
      "6",
      "8"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu2",
    "text": "Quel instrument a des touches noires et blanches ?",
    "answers": [
      "La guitare",
      "Le violon",
      "Le piano",
      "La flute"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu3",
    "text": "De quelle couleur est un piano classique ?",
    "answers": [
      "Bleu",
      "Rouge",
      "Noir",
      "Vert"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu4",
    "text": "Quel instrument est petit et se met dans une poche ?",
    "answers": [
      "La guitare",
      "Le piano",
      "Le harmonica",
      "La batterie"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu5",
    "text": "Combien de pédales a un piano ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu6",
    "text": "Quel instrument joue-t-on en soufflant ?",
    "answers": [
      "La guitare",
      "Le piano",
      "La flute",
      "Le tambour"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu7",
    "text": "Combien de cordes a un violon ?",
    "answers": [
      "2",
      "3",
      "4",
      "6"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu8",
    "text": "Quel instrument a une anche ?",
    "answers": [
      "La clarinette",
      "Le piano",
      "La guitare",
      "Le xylophone"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu9",
    "text": "De quelle couleur est la flamme d'une bougie ?",
    "answers": [
      "Bleue",
      "Rouge",
      "Jaune",
      "Blanche"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu10",
    "text": "Combien de touches a un piano ?",
    "answers": [
      "76",
      "82",
      "88",
      "92"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu11",
    "text": "Quel instrument a des cordes et s'appuie sur l'épaule ?",
    "answers": [
      "La guitare",
      "Le violon",
      "Le piano",
      "Le harpe"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu12",
    "text": "Quel instrument est souvent rouge avec des boutons ?",
    "answers": [
      "La trompette",
      "L'accordéon",
      "Le piano",
      "Le saxophone"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu13",
    "text": "Combien de membres du groupe \"Les Beatles\" ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu14",
    "text": "Comment s'appelle le chanteur des Queen ?",
    "answers": [
      "John Lennon",
      "Freddie Mercury",
      "Mick Jagger",
      "David Bowie"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu15",
    "text": "Quel chanteur est surnommé le Roi de la Pop ?",
    "answers": [
      "Elvis Presley",
      "Michael Jackson",
      "Prince",
      "Stevie Wonder"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu16",
    "text": "Combien de notes dans une gamme musicale ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu17",
    "text": "Quel instrument de percussion est le plus courant ?",
    "answers": [
      "La flute",
      "Le violon",
      "Le tambour",
      "La harpe"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu18",
    "text": "Comment s'appelle un chanteur de rap ?",
    "answers": [
      "Un rappeur",
      "Un rocker",
      "Un chanteur",
      "Un batteur"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu19",
    "text": "Combien de cordes a une basse ?",
    "answers": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu20",
    "text": "Quel instrument ressemble à une grande guitare ?",
    "answers": [
      "La basse",
      "Le ukulélé",
      "Le banjo",
      "Le mandoline"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu21",
    "text": "Combien de cordes a un ukulélé ?",
    "answers": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu22",
    "text": "Quel est l'instrument le plus grave ?",
    "answers": [
      "La flute",
      "La contrebasse",
      "Le violon",
      "La trompette"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu23",
    "text": "Comment s'appelle le chef d'un orchestre ?",
    "answers": [
      "Le chef d'orchestre",
      "Le soliste",
      "Le compositeur",
      "Le metteur en scène"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu24",
    "text": "Combien d'instruments dans un quatuor à cordes ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu25",
    "text": "Quel est le plus grand instrument à cordes ?",
    "answers": [
      "Le violon",
      "L'alto",
      "Le violoncelle",
      "La contrebasse"
    ],
    "correct": 3,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu26",
    "text": "Combien de membres dans un duo ?",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu27",
    "text": "Quel chanteur français est connu pour ses lunettes noires ?",
    "answers": [
      "Johnny Hallyday",
      "Serge Gainsbourg",
      "Jacques Brel",
      "Charles Aznavour"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu28",
    "text": "Comment s'appelle un groupe de 3 musiciens ?",
    "answers": [
      "Un duo",
      "Un trio",
      "Un quatuor",
      "Un quintette"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu29",
    "text": "Quel instrument est en métal et se joue en soufflant ?",
    "answers": [
      "Le saxophone",
      "Le violon",
      "La guitare",
      "Le piano"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu30",
    "text": "Combien de lignes dans une portée musicale ?",
    "answers": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu31",
    "text": "Quel groupe a chanté \"Imagine\" ?",
    "answers": [
      "The Beatles",
      "The Rolling Stones",
      "John Lennon",
      "Pink Floyd"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu32",
    "text": "Quel est le plus grand festival de musique en France ?",
    "answers": [
      "Rock en Seine",
      "Hellfest",
      "Les Vieilles Charrues",
      "Paris Jazz Festival"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu33",
    "text": "Combien d'octaves sur un piano ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu34",
    "text": "Quel artiste français a chanté \"La Vie en Rose\" ?",
    "answers": [
      "Charles Aznavour",
      "Édith Piaf",
      "Jacques Brel",
      "Mylène Farmer"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu35",
    "text": "Comment s'appelle le chant sans paroles ?",
    "answers": [
      "Le rap",
      "Le slam",
      "Le chœur",
      "La mélodie"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu36",
    "text": "Quel instrument se joue avec des baguettes ?",
    "answers": [
      "La flute",
      "La guitare",
      "La batterie",
      "Le piano"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu37",
    "text": "Combien de cordes a une harpe ?",
    "answers": [
      "10",
      "22",
      "47",
      "88"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu38",
    "text": "Quel genre musical est originaire de la Jamaïque ?",
    "answers": [
      "Le reggae",
      "Le jazz",
      "Le rock",
      "La samba"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu39",
    "text": "Comment s'appelle la voix d'une femme aiguë ?",
    "answers": [
      "Soprano",
      "Alto",
      "Ténor",
      "Basse"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu40",
    "text": "Combien de notes dans une octave ?",
    "answers": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu41",
    "text": "Quel groupe a chanté \"Bohemian Rhapsody\" ?",
    "answers": [
      "The Beatles",
      "The Rolling Stones",
      "Queen",
      "Pink Floyd"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu42",
    "text": "Combien de membres dans un quintette ?",
    "answers": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu43",
    "text": "Quel instrument a le son le plus grave d'un orchestre ?",
    "answers": [
      "Le violon",
      "Le tuba",
      "Le violoncelle",
      "La harpe"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu44",
    "text": "Quel chanteur américain est surnommé \"The King\" ?",
    "answers": [
      "Michael Jackson",
      "Elvis Presley",
      "Frank Sinatra",
      "Bobby Darin"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu45",
    "text": "Combien de bandes dans un groupe de rock classique ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu46",
    "text": "Quel genre musical est rapide et agressif ?",
    "answers": [
      "La musique classique",
      "Le metal",
      "Le jazz",
      "La bossa nova"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu47",
    "text": "Comment s'appelle une chanson très connue ?",
    "answers": [
      "Un tube",
      "Un bide",
      "Un flop",
      "Une prime"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu48",
    "text": "Quel instrument se met devant la bouche ?",
    "answers": [
      "La trompette",
      "Le saxophone",
      "Le harmonica",
      "Tous les trois"
    ],
    "correct": 3,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu49",
    "text": "Combien de partitions dans un orchestre symphonique ?",
    "answers": [
      "20",
      "40",
      "60",
      "Plus de 80"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu50",
    "text": "Quel groupe a chanté \"Stairway to Heaven\" ?",
    "answers": [
      "The Beatles",
      "Led Zeppelin",
      "Pink Floyd",
      "The Doors"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu51",
    "text": "Combien d'instruments dans un orchestre symphonique ?",
    "answers": [
      "20",
      "40",
      "60",
      "Plus de 80"
    ],
    "correct": 3,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu52",
    "text": "Quel artiste a chanté \"Thriller\" ?",
    "answers": [
      "Prince",
      "Michael Jackson",
      "Elvis Presley",
      "Stevie Wonder"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu53",
    "text": "Comment s'appelle la personne qui écrit de la musique ?",
    "answers": [
      "Le chanteur",
      "Le compositeur",
      "Le producteur",
      "Le réalisateur"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu54",
    "text": "Combien de touches noires sur un piano ?",
    "answers": [
      "24",
      "36",
      "48",
      "88"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu55",
    "text": "Quel chanteur français est surnommé \"Frenchy\" ?",
    "answers": [
      "Johnny Hallyday",
      "Serge Gainsbourg",
      "Stromae",
      "Indila"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu56",
    "text": "Quel genre musical est né à La Nouvelle-Orléans ?",
    "answers": [
      "Le rock",
      "Le jazz",
      "Le blues",
      "La soul"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu57",
    "text": "Combien de cordes a un banjo ?",
    "answers": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu58",
    "text": "Quel groupe a chanté \"We Will Rock You\" ?",
    "answers": [
      "The Beatles",
      "The Rolling Stones",
      "Queen",
      "U2"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu59",
    "text": "Comment s'appelle la danse du ventre ?",
    "answers": [
      "La salsa",
      "La danse orientale",
      "Le tango",
      "La valse"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu60",
    "text": "Quel instrument est le plus aigu ?",
    "answers": [
      "Le violon",
      "La flute",
      "Le piccolo",
      "La trompette"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu61",
    "text": "Quel groupe a chanté \"Come As You Are\" ?",
    "answers": [
      "Nirvana",
      "Pearl Jam",
      "Guns N' Roses",
      "AC/DC"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu62",
    "text": "Combien de lignes dans une partition classique ?",
    "answers": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu63",
    "text": "Quel chanteur français a fait l'Olympia 2015 ?",
    "answers": [
      "Stromae",
      "Indila",
      "Julien Doré",
      "Christine and the Queens"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu64",
    "text": "Quel genre de musique est le plus rapide ?",
    "answers": [
      "La musique classique",
      "La musique électronique",
      "Le rock",
      "Le jazz"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu65",
    "text": "Combien de cordes a un violoncelle ?",
    "answers": [
      "2",
      "3",
      "4",
      "6"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu66",
    "text": "Quel groupe a chanté \"Smells Like Teen Spirit\" ?",
    "answers": [
      "Nirvana",
      "Pearl Jam",
      "The Pixies",
      "Radiohead"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu67",
    "text": "Comment s'appelle un instrument qui fait vibrer l'air ?",
    "answers": [
      "Un instrument à vent",
      "Un instrument à cordes",
      "Un instrument à percussion",
      "Un synthétiseur"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu68",
    "text": "Quel est le plus vieil instrument de musique ?",
    "answers": [
      "La flute",
      "Le tambour",
      "La harpe",
      "Le lyre"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu69",
    "text": "Combien de notes dans un accord ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu70",
    "text": "Quel chanteur a chanté \"Shape of You\" ?",
    "answers": [
      "Justin Bieber",
      "Ed Sheeran",
      "Bruno Mars",
      "The Weeknd"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu71",
    "text": "Quel instrument a un archet ?",
    "answers": [
      "La trompette",
      "Le piano",
      "Le violon",
      "La flute"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu72",
    "text": "Combien de styles de guitare existent ?",
    "answers": [
      "2",
      "3",
      "4",
      "Plus de 10"
    ],
    "correct": 3,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu73",
    "text": "Quel artiste belge a percé avec \"Alors on danse\" ?",
    "answers": [
      "Angèle",
      "Stromae",
      "Mylène Farmer",
      "Indila"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu74",
    "text": "Quel genre musical a inventé le rock ?",
    "answers": [
      "Le blues",
      "Le jazz",
      "Le folk",
      "La musique classique"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu75",
    "text": "Combien de personnes dans un chœur classique ?",
    "answers": [
      "10",
      "20",
      "30",
      "40 ou plus"
    ],
    "correct": 3,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu76",
    "text": "Quel groupe a chanté \"Hotel California\" ?",
    "answers": [
      "The Eagles",
      "The Beatles",
      "Fleetwood Mac",
      "The Doors"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu77",
    "text": "Comment s'appelle le tempo rapide ?",
    "answers": [
      "Allegro",
      "Andante",
      "Adagio",
      "Prestissimo"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu78",
    "text": "Quel instrument se joue en frappant des touches ?",
    "answers": [
      "Le xylophone",
      "La flute",
      "La harpe",
      "Le violon"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu79",
    "text": "Combien de cordes a une mandoline ?",
    "answers": [
      "3",
      "4",
      "6",
      "8"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu80",
    "text": "Quel chanteur a percé avec \"La Marseillaise\" ?",
    "answers": [
      "Johnny Hallyday",
      "Édith Piaf",
      "Non, c'est l'hymne national",
      "Charles Aznavour"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu81",
    "text": "Quel chanteur est surnommé \"Le Boss\" ?",
    "answers": [
      "Bruce Springsteen",
      "Bob Dylan",
      "Elton John",
      "Billy Joel"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu82",
    "text": "Combien d'octaves peut chanter Mariah Carey ?",
    "answers": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu83",
    "text": "Quel groupe a chanté \"Yesterday\" ?",
    "answers": [
      "The Beatles",
      "The Rolling Stones",
      "The Kinks",
      "The Who"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu84",
    "text": "Comment s'appelle une voix grave d'homme ?",
    "answers": [
      "Soprano",
      "Ténor",
      "Baryton",
      "Basse"
    ],
    "correct": 3,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu85",
    "text": "Quel instrument a un anche double ?",
    "answers": [
      "La clarinette",
      "Le hautbois",
      "Le saxophone",
      "La flute"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu86",
    "text": "Combien de cordes a une sitar ?",
    "answers": [
      "5",
      "10",
      "18",
      "20"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu87",
    "text": "Quel chanteur français est le plus vendu ?",
    "answers": [
      "Johnny Hallyday",
      "Édith Piaf",
      "Jacques Brel",
      "Charles Aznavour"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu88",
    "text": "Quel genre musical vient de Cuba ?",
    "answers": [
      "Le reggae",
      "La salsa",
      "La bossa nova",
      "Le jazz"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu89",
    "text": "Combien de bandes dans un big band de jazz ?",
    "answers": [
      "3",
      "4",
      "5",
      "6 ou plus"
    ],
    "correct": 3,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu90",
    "text": "Quel groupe a chanté \"Billie Jean\" ?",
    "answers": [
      "Prince",
      "Michael Jackson",
      "Stevie Wonder",
      "Marvin Gaye"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu91",
    "text": "Comment s'appelle un instrument électronique ?",
    "answers": [
      "Le synthétiseur",
      "La guitare",
      "Le piano",
      "Le violon"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu92",
    "text": "Combien de cordes a une guitare électrique ?",
    "answers": [
      "4",
      "5",
      "6",
      "8"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu93",
    "text": "Quel chanteur a chanté \"Let It Be\" ?",
    "answers": [
      "John Lennon",
      "Paul McCartney",
      "George Harrison",
      "Ringo Starr"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu94",
    "text": "Comment s'appelle la musique des films ?",
    "answers": [
      "La bande-son",
      "La bande-originale",
      "La partition",
      "La playlist"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu95",
    "text": "Quel instrument est le plus gros dans un orchestre ?",
    "answers": [
      "Le piano",
      "Les timbales",
      "La contrebasse",
      "Le tuba"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu96",
    "text": "Combien de touches a un synthétiseur classique ?",
    "answers": [
      "25",
      "49",
      "61",
      "88 ou plus"
    ],
    "correct": 3,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu97",
    "text": "Quel artiste a chanté \"Despacito\" ?",
    "answers": [
      "J Balvin",
      "Luis Fonsi",
      "Ricky Martin",
      "Enrique Iglesias"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu98",
    "text": "Comment s'appelle le batteur des Beatles ?",
    "answers": [
      "John Lennon",
      "Paul McCartney",
      "George Harrison",
      "Ringo Starr"
    ],
    "correct": 3,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu99",
    "text": "Quel genre musical a percé en France dans les années 90 ?",
    "answers": [
      "Le rap",
      "Le rock",
      "Le jazz",
      "La musique classique"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu100",
    "text": "Combien d'instruments de percussion dans un orchestre ?",
    "answers": [
      "5",
      "10",
      "15",
      "20 ou plus"
    ],
    "correct": 3,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu101",
    "text": "Quel groupe a chanté \"Yellow Submarine\" ?",
    "answers": [
      "The Rolling Stones",
      "The Beatles",
      "The Kinks",
      "The Who"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu102",
    "text": "Comment s'appelle la fin d'une chanson ?",
    "answers": [
      "L'intro",
      "Le refrain",
      "L'outro",
      "Le pont"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu103",
    "text": "Quel instrument est le plus ancien ?",
    "answers": [
      "La flute",
      "Le tambour",
      "La harpe",
      "Le lyre"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu104",
    "text": "Combien de cordes a un clavecin ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu105",
    "text": "Quel chanteur a chanté \"Hallelujah\" ?",
    "answers": [
      "Leonard Cohen",
      "Bob Dylan",
      "Paul Simon",
      "Neil Young"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu106",
    "text": "Comment s'appelle la musique avec un rythme de 4/4 ?",
    "answers": [
      "Binaire",
      "Ternaire",
      "Composé",
      "Libre"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu107",
    "text": "Quel groupe français a chanté \"Aux Armes Citoyens\" ?",
    "answers": [
      "Indochine",
      "NTM",
      "Trust",
      "Noir Désir"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu108",
    "text": "Combien de cordes a un violon alto ?",
    "answers": [
      "2",
      "3",
      "4",
      "6"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu109",
    "text": "Quel artiste a chanté \"Blinding Lights\" ?",
    "answers": [
      "The Weeknd",
      "Dua Lipa",
      "Ed Sheeran",
      "Bruno Mars"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu110",
    "text": "Comment s'appelle une musique très forte ?",
    "answers": [
      "Fortissimo",
      "Piano",
      "Pianissimo",
      "Mezzo-forte"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu111",
    "text": "Quel groupe a chanté \"Le Moribond\" ?",
    "answers": [
      "Johnny Hallyday",
      "Jacques Brel",
      "Georges Brassens",
      "Serge Gainsbourg"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu112",
    "text": "Combien de frettes a une guitare ?",
    "answers": [
      "12",
      "15",
      "20-24",
      "30"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu113",
    "text": "Quel artiste a chanté \"Bad Guy\" ?",
    "answers": [
      "Billie Eilish",
      "Ariana Grande",
      "Taylor Swift",
      "Dua Lipa"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu114",
    "text": "Comment s'appelle la voix la plus aiguë ?",
    "answers": [
      "Soprano",
      "Alto",
      "Ténor",
      "Basse"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu115",
    "text": "Quel instrument a des pédales ?",
    "answers": [
      "Le piano",
      "L'orgue",
      "La batterie",
      "Le xylophone"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu116",
    "text": "Combien de styles de musique classique existent ?",
    "answers": [
      "2",
      "5",
      "10",
      "Des dizaines"
    ],
    "correct": 3,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu117",
    "text": "Quel groupe a chanté \"Dernière danse\" ?",
    "answers": [
      "Indila",
      "Stromae",
      "Angèle",
      "Louane"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu118",
    "text": "Comment s'appelle le rythme du blues ?",
    "answers": [
      "Binaire",
      "Shuffle",
      "Ternaire",
      "Libre"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu119",
    "text": "Quel instrument se joue debout ?",
    "answers": [
      "Le saxophone",
      "Le piano",
      "Le violoncelle",
      "La harpe"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu120",
    "text": "Combien de notes dans un arpège ?",
    "answers": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu121",
    "text": "Quel groupe a chanté \"Wonderwall\" ?",
    "answers": [
      "Oasis",
      "Blur",
      "Pulp",
      "Suede"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu122",
    "text": "Comment s'appelle le tempo lent ?",
    "answers": [
      "Allegro",
      "Adagio",
      "Presto",
      "Vivace"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu123",
    "text": "Quel instrument est en bois ?",
    "answers": [
      "La flute traversière",
      "Le saxophone",
      "La clarinette",
      "Tous les trois"
    ],
    "correct": 3,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu124",
    "text": "Combien de cordes a une guitare folk ?",
    "answers": [
      "4",
      "5",
      "6",
      "8"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu125",
    "text": "Quel artiste a chanté \"Watermelon Sugar\" ?",
    "answers": [
      "Ed Sheeran",
      "Harry Styles",
      "Shawn Mendes",
      "Lewis Capaldi"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu126",
    "text": "Comment s'appelle la partie qui se répète dans une chanson ?",
    "answers": [
      "L'intro",
      "Le refrain",
      "Le pont",
      "L'outro"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu127",
    "text": "Quel instrument a le son le plus puissant ?",
    "answers": [
      "La flute",
      "Le tuba",
      "Le saxophone",
      "La contrebasse"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu128",
    "text": "Combien de notes dans un accord de 7ème ?",
    "answers": [
      "3",
      "4",
      "5",
      "7"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu129",
    "text": "Quel chanteur français a chanté \"Ne me quitte pas\" ?",
    "answers": [
      "Charles Aznavour",
      "Jacques Brel",
      "Serge Gainsbourg",
      "Johnny Hallyday"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu130",
    "text": "Comment s'appelle la vitesse d'une musique ?",
    "answers": [
      "Le tempo",
      "Le rythme",
      "La mélodie",
      "L'harmonie"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu131",
    "text": "Quel groupe a chanté \"Parce que c'est toi\" ?",
    "answers": [
      "Téléphone",
      "Indochine",
      "Trust",
      "Noir Désir"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu132",
    "text": "Combien de types de guitare existent ?",
    "answers": [
      "2",
      "3",
      "4",
      "5 ou plus"
    ],
    "correct": 3,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu133",
    "text": "Quel artiste a chanté \"Le Temps des Cathédrales\" ?",
    "answers": [
      "Bruno Pelletier",
      "Garou",
      "Daniel Lavoie",
      "Patrick Fiori"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu134",
    "text": "Comment s'appelle le chanteur principal d'un groupe ?",
    "answers": [
      "Le batteur",
      "Le bassiste",
      "Le chanteur",
      "Le guitariste"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu135",
    "text": "Quel instrument a un son de cloche ?",
    "answers": [
      "Le glockenspiel",
      "Le tambour",
      "La flute",
      "Le violon"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu136",
    "text": "Combien de touches blanches sur un piano ?",
    "answers": [
      "36",
      "42",
      "52",
      "60"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu137",
    "text": "Quel groupe français a percé avec \"La Femme Chocolat\" ?",
    "answers": [
      "Amadou & Mariam",
      "Magic System",
      "Tryo",
      "Mano Solo"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu138",
    "text": "Comment s'appelle la musique sans instrument ?",
    "answers": [
      "A cappella",
      "Acoustique",
      "Électrique",
      "Orchestrale"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu139",
    "text": "Quel instrument se joue avec un archet en bois ?",
    "answers": [
      "Le violon",
      "La flute",
      "Le piano",
      "La batterie"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu140",
    "text": "Combien de notes dans une gamme pentatonique ?",
    "answers": [
      "3",
      "5",
      "7",
      "9"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu141",
    "text": "Quel artiste a chanté \"La Bohème\" ?",
    "answers": [
      "Charles Aznavour",
      "Jacques Brel",
      "Georges Moustaki",
      "Serge Lama"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu142",
    "text": "Comment s'appelle l'art de combiner les sons ?",
    "answers": [
      "La danse",
      "La musique",
      "La peinture",
      "La poésie"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu143",
    "text": "Quel instrument a un long tuyau ?",
    "answers": [
      "Le didgeridoo",
      "Le saxophone",
      "La flute",
      "Le trombone"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu144",
    "text": "Combien de cordes a un violon moderne ?",
    "answers": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": 1,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu145",
    "text": "Quel chanteur français a percé avec \"Je veux\" ?",
    "answers": [
      "Zaz",
      "Indila",
      "Louane",
      "Angèle"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu146",
    "text": "Comment s'appelle la musique des jeux vidéo ?",
    "answers": [
      "Le chip-tune",
      "La musique classique",
      "Le jazz",
      "Le rock"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu147",
    "text": "Quel instrument a un son métallique ?",
    "answers": [
      "Le triangle",
      "Le tambour",
      "La flute",
      "Le piano"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu148",
    "text": "Combien de parties dans une symphonie ?",
    "answers": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 2,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu149",
    "text": "Quel artiste a chanté \"Chandelier\" ?",
    "answers": [
      "Sia",
      "Adele",
      "Beyoncé",
      "Rihanna"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  },
  {
    "id": "mu150",
    "text": "Comment s'appelle le créateur de la musique d'un film ?",
    "answers": [
      "Le compositeur",
      "Le réalisateur",
      "Le scénariste",
      "Le producteur"
    ],
    "correct": 0,
    "category": "Musique",
    "type": "multiple-choice"
  }
];

export const ALL_CASH_QUESTIONS_PART1: CashAnswerQuestion[] = [
  {
    "id": "cg_ca1",
    "text": "Nom du plus grand animal du monde ?",
    "acceptedAnswers": [
      "La baleine bleue",
      "baleine bleue",
      "baleine"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca2",
    "text": "Couleur du ciel par temps clair ?",
    "acceptedAnswers": [
      "Bleu",
      "bleu"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca3",
    "text": "Combien de jours dans une semaine ?",
    "acceptedAnswers": [
      "7",
      "sept"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca4",
    "text": "Animal qui fait \"Meuh\" ?",
    "acceptedAnswers": [
      "La vache",
      "vache"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca5",
    "text": "Combien de saisons y a-t-il ?",
    "acceptedAnswers": [
      "4",
      "quatre"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca6",
    "text": "Planète rouge du système solaire ?",
    "acceptedAnswers": [
      "Mars",
      "mars"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca7",
    "text": "Combien de doigts sur deux mains ?",
    "acceptedAnswers": [
      "10",
      "dix"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca8",
    "text": "Nom du plus long fleuve de France ?",
    "acceptedAnswers": [
      "La Loire",
      "Loire"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca9",
    "text": "Peintre de la Joconde ?",
    "acceptedAnswers": [
      "Léonard de Vinci",
      "Leonard de Vinci",
      "De Vinci"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca10",
    "text": "Combien de couleurs dans un arc-en-ciel ?",
    "acceptedAnswers": [
      "7",
      "sept"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca11",
    "text": "Animal terrestre le plus rapide ?",
    "acceptedAnswers": [
      "Le guépard",
      "guépard"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca12",
    "text": "Capitale de l'Italie ?",
    "acceptedAnswers": [
      "Rome"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca13",
    "text": "Combien de continents sur Terre ?",
    "acceptedAnswers": [
      "7",
      "sept"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca14",
    "text": "Capitale de l'Espagne ?",
    "acceptedAnswers": [
      "Madrid"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca15",
    "text": "Monnaie du Japon ?",
    "acceptedAnswers": [
      "Le yen",
      "yen"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca16",
    "text": "Auteur des Misérables ?",
    "acceptedAnswers": [
      "Victor Hugo",
      "Hugo"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca17",
    "text": "Capitale de l'Allemagne ?",
    "acceptedAnswers": [
      "Berlin"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca18",
    "text": "Plus haut sommet du monde ?",
    "acceptedAnswers": [
      "L'Everest",
      "Everest"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca19",
    "text": "Capitale de la France ?",
    "acceptedAnswers": [
      "Paris"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca20",
    "text": "Formule chimique de l'eau ?",
    "acceptedAnswers": [
      "H2O"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca21",
    "text": "Combien de mois dans une année ?",
    "acceptedAnswers": [
      "12",
      "douze"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca22",
    "text": "Oiseau symbole de la paix ?",
    "acceptedAnswers": [
      "La colombe",
      "colombe"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca23",
    "text": "Capitale de l'Angleterre ?",
    "acceptedAnswers": [
      "Londres"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca24",
    "text": "Plus grand pays du monde ?",
    "acceptedAnswers": [
      "La Russie",
      "Russie"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca25",
    "text": "Combien de joueurs dans une équipe de foot ?",
    "acceptedAnswers": [
      "11",
      "onze"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca26",
    "text": "Fruit jaune et courbé ?",
    "acceptedAnswers": [
      "La banane",
      "banane"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca27",
    "text": "Capitale des États-Unis ?",
    "acceptedAnswers": [
      "Washington"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca28",
    "text": "Animal qui pond des œufs ?",
    "acceptedAnswers": [
      "La poule",
      "poule"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca29",
    "text": "Monument le plus visité de France ?",
    "acceptedAnswers": [
      "La Tour Eiffel",
      "Tour Eiffel"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca30",
    "text": "Capitale du Japon ?",
    "acceptedAnswers": [
      "Tokyo"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca31",
    "text": "Légume orange et allongé ?",
    "acceptedAnswers": [
      "La carotte",
      "carotte"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca32",
    "text": "Combien d'heures dans une journée ?",
    "acceptedAnswers": [
      "24",
      "vingt-quatre",
      "vingt quatre"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca33",
    "text": "Capitale de la Belgique ?",
    "acceptedAnswers": [
      "Bruxelles"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca34",
    "text": "Quel animal a une trompe ?",
    "acceptedAnswers": [
      "L'éléphant",
      "éléphant"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca35",
    "text": "Nom du roi des animaux ?",
    "acceptedAnswers": [
      "Le lion",
      "lion"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca36",
    "text": "Combien font 10 × 10 ?",
    "acceptedAnswers": [
      "100",
      "cent"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca37",
    "text": "Capitale de l'Australie ?",
    "acceptedAnswers": [
      "Canberra"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca38",
    "text": "Plus petit pays du monde ?",
    "acceptedAnswers": [
      "Le Vatican",
      "Vatican"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca39",
    "text": "Quel animal ronronne ?",
    "acceptedAnswers": [
      "Le chat",
      "chat"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca40",
    "text": "Capitale du Canada ?",
    "acceptedAnswers": [
      "Ottawa"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca41",
    "text": "Couleur de l'herbe ?",
    "acceptedAnswers": [
      "Vert",
      "verte"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca42",
    "text": "Combien de sens a l'être humain ?",
    "acceptedAnswers": [
      "5",
      "cinq"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca43",
    "text": "Capitale de la Suisse ?",
    "acceptedAnswers": [
      "Berne"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca44",
    "text": "Instrument à 88 touches ?",
    "acceptedAnswers": [
      "Le piano",
      "piano"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca45",
    "text": "Capitale de la Pologne ?",
    "acceptedAnswers": [
      "Varsovie"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca46",
    "text": "Fruit rouge et rond ?",
    "acceptedAnswers": [
      "La pomme",
      "pomme"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca47",
    "text": "Capitale de la Grèce ?",
    "acceptedAnswers": [
      "Athènes"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca48",
    "text": "Plus long mur du monde ?",
    "acceptedAnswers": [
      "La Grande Muraille de Chine",
      "Grande Muraille"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca49",
    "text": "Capitale du Danemark ?",
    "acceptedAnswers": [
      "Copenhague"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cg_ca50",
    "text": "Langue officielle du Brésil ?",
    "acceptedAnswers": [
      "Le portugais",
      "portugais"
    ],
    "category": "Culture Générale",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca1",
    "text": "Nom du sorcier à la cicatrice en éclair ?",
    "acceptedAnswers": [
      "Harry Potter",
      "Harry"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca2",
    "text": "Animal qui ronronne dans Shrek ?",
    "acceptedAnswers": [
      "L'Âne",
      "L'âne",
      "âne"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca3",
    "text": "Premier film d'animation Disney ?",
    "acceptedAnswers": [
      "Blanche-Neige"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca4",
    "text": "Nom du poisson clown ?",
    "acceptedAnswers": [
      "Nemo"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca5",
    "text": "Acteur de Jack dans Titanic ?",
    "acceptedAnswers": [
      "Leonardo DiCaprio",
      "DiCaprio"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca6",
    "text": "Acteur d'Iron Man ?",
    "acceptedAnswers": [
      "Robert Downey Jr.",
      "Robert Downey"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca7",
    "text": "Premier film Pixar ?",
    "acceptedAnswers": [
      "Toy Story"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca8",
    "text": "Actrice d'Hermione ?",
    "acceptedAnswers": [
      "Emma Watson"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca9",
    "text": "Film sur les émotions dans une tête ?",
    "acceptedAnswers": [
      "Vice-Versa",
      "Vice versa",
      "Inside Out"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca10",
    "text": "Couleur de peau des Simpson ?",
    "acceptedAnswers": [
      "Jaune"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca11",
    "text": "Créateur des Simpsons ?",
    "acceptedAnswers": [
      "Matt Groening",
      "Groening"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca12",
    "text": "Méchant dans Le Roi Lion ?",
    "acceptedAnswers": [
      "Scar"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca13",
    "text": "Bonhomme de neige de La Reine des Neiges ?",
    "acceptedAnswers": [
      "Olaf"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca14",
    "text": "Sœur d'Elsa ?",
    "acceptedAnswers": [
      "Anna"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca15",
    "text": "Cowboy dans Toy Story ?",
    "acceptedAnswers": [
      "Woody"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca16",
    "text": "Ranger de l'espace dans Toy Story ?",
    "acceptedAnswers": [
      "Buzz l'Éclair",
      "Buzz"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca17",
    "text": "Film sur un rat cuisinier ?",
    "acceptedAnswers": [
      "Ratatouille"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca18",
    "text": "Saga avec Darth Vader ?",
    "acceptedAnswers": [
      "Star Wars"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca19",
    "text": "Film avec Walter White ?",
    "acceptedAnswers": [
      "Breaking Bad"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca20",
    "text": "Série avec Sheldon Cooper ?",
    "acceptedAnswers": [
      "The Big Bang Theory"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca21",
    "text": "Film sur un panda Kung Fu ?",
    "acceptedAnswers": [
      "Kung Fu Panda"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca22",
    "text": "Série sur des amis dans un café ?",
    "acceptedAnswers": [
      "Friends"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca23",
    "text": "Film d'E.T. réalisé par ?",
    "acceptedAnswers": [
      "Steven Spielberg",
      "Spielberg"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca24",
    "text": "Méchant dans Harry Potter ?",
    "acceptedAnswers": [
      "Voldemort"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca25",
    "text": "Robot dans Wall-E ?",
    "acceptedAnswers": [
      "Wall-E"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca26",
    "text": "Film sur les dinosaures dans un parc ?",
    "acceptedAnswers": [
      "Jurassic Park"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca27",
    "text": "Chouette de Harry Potter ?",
    "acceptedAnswers": [
      "Hedwige"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca28",
    "text": "Film avec un pingouin qui danse ?",
    "acceptedAnswers": [
      "Happy Feet"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca29",
    "text": "Vaisseau de Han Solo ?",
    "acceptedAnswers": [
      "Le Faucon Millénium",
      "Faucon Millénium"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca30",
    "text": "Fée de Peter Pan ?",
    "acceptedAnswers": [
      "Clochette"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca31",
    "text": "Souris de Disney ?",
    "acceptedAnswers": [
      "Mickey",
      "Mickey Mouse"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca32",
    "text": "Film avec des monstres qui font peur ?",
    "acceptedAnswers": [
      "Monstres et Cie",
      "Monstres et Compagnie"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca33",
    "text": "Créateur de Star Wars ?",
    "acceptedAnswers": [
      "George Lucas"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca34",
    "text": "Réalisateur du film Avatar ?",
    "acceptedAnswers": [
      "James Cameron"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca35",
    "text": "Super-héros avec un bouclier rond ?",
    "acceptedAnswers": [
      "Captain America"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca36",
    "text": "Héros de Retour vers le Futur ?",
    "acceptedAnswers": [
      "Marty McFly",
      "Marty"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca37",
    "text": "Méchante dans 101 Dalmatiens ?",
    "acceptedAnswers": [
      "Cruella d'Enfer",
      "Cruella"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca38",
    "text": "Film Pixar sur les ballons ?",
    "acceptedAnswers": [
      "Là-haut"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca39",
    "text": "Elf de maison de Harry Potter ?",
    "acceptedAnswers": [
      "Dobby"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca40",
    "text": "Méchant dans La Belle au Bois Dormant ?",
    "acceptedAnswers": [
      "Malefique"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca41",
    "text": "Ville de Batman ?",
    "acceptedAnswers": [
      "Gotham"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca42",
    "text": "Film sur les LEGO ?",
    "acceptedAnswers": [
      "La Grande Aventure LEGO",
      "The Lego Movie"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca43",
    "text": "Princesse d'Aladdin ?",
    "acceptedAnswers": [
      "Jasmine"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca44",
    "text": "Film Pixar Coco : fête mexicaine ?",
    "acceptedAnswers": [
      "Le jour des morts",
      "Dia de los Muertos"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca45",
    "text": "Personnage avec un nez qui s'allonge ?",
    "acceptedAnswers": [
      "Pinocchio"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca46",
    "text": "Ville de Superman ?",
    "acceptedAnswers": [
      "Metropolis"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca47",
    "text": "Film Pixar sur l'âme d'un musicien ?",
    "acceptedAnswers": [
      "Soul"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca48",
    "text": "Héros de Keanu Reeves dans la Matrice ?",
    "acceptedAnswers": [
      "Neo",
      "Thomas Anderson"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca49",
    "text": "Film sur le Grinch ?",
    "acceptedAnswers": [
      "Le Grinch"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "cs_ca50",
    "text": "Film sur les Indestructibles ?",
    "acceptedAnswers": [
      "Les Indestructibles",
      "The Incredibles"
    ],
    "category": "Cinéma & Séries",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca1",
    "text": "Combien de joueurs dans une équipe de football ?",
    "acceptedAnswers": [
      "11",
      "onze"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca2",
    "text": "Couleur traditionnelle du ballon de foot ?",
    "acceptedAnswers": [
      "Blanc et noir"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca3",
    "text": "Sport qui se pratique avec un vélo ?",
    "acceptedAnswers": [
      "Le cyclisme"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca4",
    "text": "Combien de trous au golf ?",
    "acceptedAnswers": [
      "18",
      "dix-huit"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca5",
    "text": "Compétition internationale de football ?",
    "acceptedAnswers": [
      "La Coupe du Monde"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca6",
    "text": "Combien de temps dure un match de foot ?",
    "acceptedAnswers": [
      "90 minutes",
      "90 min"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca7",
    "text": "Distance d'un marathon ?",
    "acceptedAnswers": [
      "42,195 km",
      "42 km"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca8",
    "text": "Pays avec le plus de Coupes du Monde ?",
    "acceptedAnswers": [
      "Le Brésil",
      "Brésil"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca9",
    "text": "Équipe de France surnommée ?",
    "acceptedAnswers": [
      "Les Bleus"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca10",
    "text": "Sport national du Japon ?",
    "acceptedAnswers": [
      "Le sumo"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca11",
    "text": "Nationalité de Messi ?",
    "acceptedAnswers": [
      "Argentine"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca12",
    "text": "Couleur du maillot leader du Tour de France ?",
    "acceptedAnswers": [
      "Jaune"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca13",
    "text": "Pays inventeur du judo ?",
    "acceptedAnswers": [
      "Le Japon",
      "Japon"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca14",
    "text": "Combien de points pour un but au foot ?",
    "acceptedAnswers": [
      "1",
      "un"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca15",
    "text": "Stade de l'équipe de France ?",
    "acceptedAnswers": [
      "Le Stade de France",
      "Stade de France"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca16",
    "text": "Détenteur du record du 100m ?",
    "acceptedAnswers": [
      "Usain Bolt"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca17",
    "text": "Sport avec arc et flèches ?",
    "acceptedAnswers": [
      "Le tir à l'arc"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca18",
    "text": "Combien de sets pour gagner au tennis hommes ?",
    "acceptedAnswers": [
      "3",
      "trois"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca19",
    "text": "Ville des JO 2024 ?",
    "acceptedAnswers": [
      "Paris"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca20",
    "text": "Distance d'un semi-marathon ?",
    "acceptedAnswers": [
      "21,1 km"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca21",
    "text": "Sport avec des gants de boxe ?",
    "acceptedAnswers": [
      "La boxe"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca22",
    "text": "Pays vainqueur de la Coupe du Monde 2022 ?",
    "acceptedAnswers": [
      "L'Argentine",
      "Argentine"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca23",
    "text": "Sport sur glace avec patins et crosse ?",
    "acceptedAnswers": [
      "Le hockey sur glace",
      "hockey"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca24",
    "text": "Combien de joueurs en basket ?",
    "acceptedAnswers": [
      "5",
      "cinq"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca25",
    "text": "Pays inventeur du basketball ?",
    "acceptedAnswers": [
      "Les États-Unis",
      "États-Unis"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca26",
    "text": "Sport qui se pratique en mer ?",
    "acceptedAnswers": [
      "Le surf"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca27",
    "text": "Équipe surnommée \"Le Barça\" ?",
    "acceptedAnswers": [
      "Le FC Barcelone",
      "Barcelone"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca28",
    "text": "Combien d'épreuves dans un décathlon ?",
    "acceptedAnswers": [
      "10",
      "dix"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca29",
    "text": "Plus grand événement sportif au monde ?",
    "acceptedAnswers": [
      "Les Jeux Olympiques",
      "Les JO"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca30",
    "text": "Sport le plus populaire au monde ?",
    "acceptedAnswers": [
      "Le football"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca31",
    "text": "Combien de courses dans le Tour de France ?",
    "acceptedAnswers": [
      "21",
      "vingt et un"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca32",
    "text": "Hauteur du panier de basket ?",
    "acceptedAnswers": [
      "3,05 m"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca33",
    "text": "Plus grand tournoi sur terre battue ?",
    "acceptedAnswers": [
      "Roland-Garros"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca34",
    "text": "Pays qui a gagné le plus de Tours de France ?",
    "acceptedAnswers": [
      "La France",
      "France"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca35",
    "text": "Sport national des États-Unis ?",
    "acceptedAnswers": [
      "Le football américain"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca36",
    "text": "Combien de temps entre chaque JO ?",
    "acceptedAnswers": [
      "4 ans",
      "quatre ans"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca37",
    "text": "Sport avec raquette et volant ?",
    "acceptedAnswers": [
      "Le badminton"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca38",
    "text": "Pays inventeur du hockey sur glace ?",
    "acceptedAnswers": [
      "Le Canada",
      "Canada"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca39",
    "text": "Combien de médailles d'or pour la France en 2024 ?",
    "acceptedAnswers": [
      "16",
      "seize"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca40",
    "text": "Plus grand événement sportif en Europe ?",
    "acceptedAnswers": [
      "Le Tour de France"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca41",
    "text": "Couleur du ballon de basket ?",
    "acceptedAnswers": [
      "Orange"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca42",
    "text": "Pays gagnant de la Coupe du Monde 2018 ?",
    "acceptedAnswers": [
      "La France",
      "France"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca43",
    "text": "Sport qui se nage ?",
    "acceptedAnswers": [
      "La natation"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca44",
    "text": "Combien de points pour un essai au rugby ?",
    "acceptedAnswers": [
      "5",
      "cinq"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca45",
    "text": "Sport le plus pratiqué en France ?",
    "acceptedAnswers": [
      "La natation"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca46",
    "text": "Pays gagnant de l'Euro 2024 ?",
    "acceptedAnswers": [
      "L'Espagne",
      "Espagne"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca47",
    "text": "Quels Jeux ont eu lieu en 2024 ?",
    "acceptedAnswers": [
      "Les JO de Paris"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca48",
    "text": "Sport de combat en kimono blanc ?",
    "acceptedAnswers": [
      "Le judo"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca49",
    "text": "Combien de joueurs au volley ?",
    "acceptedAnswers": [
      "6",
      "six"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "sp_ca50",
    "text": "Pays gagnant de la Coupe du Monde 2014 ?",
    "acceptedAnswers": [
      "L'Allemagne",
      "Allemagne"
    ],
    "category": "Sport",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca1",
    "text": "Combien de cordes a une guitare ?",
    "acceptedAnswers": [
      "6",
      "six"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca2",
    "text": "Instrument à touches noires et blanches ?",
    "acceptedAnswers": [
      "Le piano",
      "piano"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca3",
    "text": "Combien de touches a un piano ?",
    "acceptedAnswers": [
      "88"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca4",
    "text": "Chanteur des Queen ?",
    "acceptedAnswers": [
      "Freddie Mercury"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca5",
    "text": "Roi de la Pop ?",
    "acceptedAnswers": [
      "Michael Jackson"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca6",
    "text": "Combien de notes dans une gamme ?",
    "acceptedAnswers": [
      "7",
      "sept"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca7",
    "text": "Combien de cordes a un violon ?",
    "acceptedAnswers": [
      "4",
      "quatre"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca8",
    "text": "Chanteuse de La Vie en Rose ?",
    "acceptedAnswers": [
      "Édith Piaf",
      "Edith Piaf"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca9",
    "text": "Groupe qui a chanté Imagine ?",
    "acceptedAnswers": [
      "John Lennon",
      "Lennon"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca10",
    "text": "Combien de lignes dans une portée ?",
    "acceptedAnswers": [
      "5",
      "cinq"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca11",
    "text": "Combien de membres dans un quatuor ?",
    "acceptedAnswers": [
      "4",
      "quatre"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca12",
    "text": "Chanteur surnommé The King ?",
    "acceptedAnswers": [
      "Elvis Presley",
      "Elvis"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca13",
    "text": "Groupe qui a chanté Bohemian Rhapsody ?",
    "acceptedAnswers": [
      "Queen"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca14",
    "text": "Combien de cordes a une basse ?",
    "acceptedAnswers": [
      "4",
      "quatre"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca15",
    "text": "Instrument en métal soufflé ?",
    "acceptedAnswers": [
      "Le saxophone",
      "saxophone"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca16",
    "text": "Combien de membres dans les Beatles ?",
    "acceptedAnswers": [
      "4",
      "quatre"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca17",
    "text": "Combien de cordes a un ukulélé ?",
    "acceptedAnswers": [
      "4",
      "quatre"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca18",
    "text": "Instrument avec des baguettes ?",
    "acceptedAnswers": [
      "La batterie",
      "batterie"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca19",
    "text": "Genre né en Jamaïque ?",
    "acceptedAnswers": [
      "Le reggae",
      "reggae"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca20",
    "text": "Groupe qui a chanté We Will Rock You ?",
    "acceptedAnswers": [
      "Queen"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca21",
    "text": "Combien de cordes a une harpe ?",
    "acceptedAnswers": [
      "47"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca22",
    "text": "Chanteur qui a chanté Thriller ?",
    "acceptedAnswers": [
      "Michael Jackson"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca23",
    "text": "Combien de cordes a un violoncelle ?",
    "acceptedAnswers": [
      "4",
      "quatre"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca24",
    "text": "Combien de touches noires sur un piano ?",
    "acceptedAnswers": [
      "36"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca25",
    "text": "Artiste de Alors on danse ?",
    "acceptedAnswers": [
      "Stromae"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca26",
    "text": "Genre musical originaire de La Nouvelle-Orléans ?",
    "acceptedAnswers": [
      "Le jazz",
      "jazz"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca27",
    "text": "Groupe qui a chanté Hotel California ?",
    "acceptedAnswers": [
      "The Eagles",
      "Eagles"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca28",
    "text": "Combien de notes dans une octave ?",
    "acceptedAnswers": [
      "8",
      "huit"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca29",
    "text": "Chanteur de Shape of You ?",
    "acceptedAnswers": [
      "Ed Sheeran"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca30",
    "text": "Artiste de Despacito ?",
    "acceptedAnswers": [
      "Luis Fonsi"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca31",
    "text": "Combien d'octaves sur un piano ?",
    "acceptedAnswers": [
      "7",
      "sept"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca32",
    "text": "Groupe qui a chanté Yesterday ?",
    "acceptedAnswers": [
      "The Beatles",
      "Beatles"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca33",
    "text": "Chanteur le plus vendu en France ?",
    "acceptedAnswers": [
      "Johnny Hallyday"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca34",
    "text": "Instrument qui se joue avec un archet ?",
    "acceptedAnswers": [
      "Le violon",
      "violon"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca35",
    "text": "Combien de cordes a une mandoline ?",
    "acceptedAnswers": [
      "8",
      "huit"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca36",
    "text": "Artiste de Bad Guy ?",
    "acceptedAnswers": [
      "Billie Eilish"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca37",
    "text": "Chanteur de Billie Jean ?",
    "acceptedAnswers": [
      "Michael Jackson"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca38",
    "text": "Combien de cordes a une guitare folk ?",
    "acceptedAnswers": [
      "6",
      "six"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca39",
    "text": "Groupe qui a chanté Yellow Submarine ?",
    "acceptedAnswers": [
      "The Beatles",
      "Beatles"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca40",
    "text": "Chanteur de Ne me quitte pas ?",
    "acceptedAnswers": [
      "Jacques Brel"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca41",
    "text": "Instrument avec des pédales ?",
    "acceptedAnswers": [
      "L'orgue",
      "orgue"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca42",
    "text": "Chanteur de Wonderwall ?",
    "acceptedAnswers": [
      "Liam Gallagher",
      "Noel Gallagher",
      "Oasis"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca43",
    "text": "Combien de frettes sur une guitare ?",
    "acceptedAnswers": [
      "20",
      "21",
      "22",
      "23",
      "24"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca44",
    "text": "Artiste de Dernière danse ?",
    "acceptedAnswers": [
      "Indila"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca45",
    "text": "Genre musical le plus rapide ?",
    "acceptedAnswers": [
      "La musique électronique",
      "électro"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca46",
    "text": "Combien de cordes a un banjo ?",
    "acceptedAnswers": [
      "5",
      "cinq"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca47",
    "text": "Chanteur de La Bohème ?",
    "acceptedAnswers": [
      "Charles Aznavour"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca48",
    "text": "Combien de touches blanches sur un piano ?",
    "acceptedAnswers": [
      "52"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca49",
    "text": "Artiste de Je veux ?",
    "acceptedAnswers": [
      "Zaz"
    ],
    "category": "Musique",
    "type": "cash-answer"
  },
  {
    "id": "mu_ca50",
    "text": "Chanteur de Le Temps des Cathédrales ?",
    "acceptedAnswers": [
      "Bruno Pelletier"
    ],
    "category": "Musique",
    "type": "cash-answer"
  }
];
