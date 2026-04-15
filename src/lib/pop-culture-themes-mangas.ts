import type { MCQQuestion, CashAnswerQuestion } from './game-types';

const mangaSpeed: MCQQuestion[] = [
  { id: 'mg_s1', text: "Dans Dragon Ball Z, combien de boules de cristal (Dragon Balls) faut-il ?", answers: ["5", "6", "7", "9"], correct: 2, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s2', text: "Quelle est la particularité du chapeau de Luffy dans One Piece ?", answers: ["Il est en paille", "Il est magique", "Il vient de son père", "Il a été mangé"], correct: 0, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s3', text: "Quel est le nom du village de Naruto ?", answers: ["Konoha", "Kumo", "Iwa", "Suna"], correct: 0, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s4', text: "Quel manga met en scène un carnet tuant les personnes dont le nom y est inscrit ?", answers: ["Bleach", "Tokyo Ghoul", "Death Note", "Monster"], correct: 2, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s5', text: "Dans L'Attaque des Titans, de quoi les murs sont-ils faits ?", answers: ["Terre Cuite", "De Titans colossaux", "Acier", "Bois"], correct: 1, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s6', text: "Comment s'appelle l'attaque signature de Goku ?", answers: ["Kamehameha", "Rasengan", "Final Flash", "Genki Dama"], correct: 0, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s7', text: "Quel sport est central dans le manga 'Haikyu!!' ?", answers: ["Basket", "Football", "Volley-ball", "Base-ball"], correct: 2, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s8', text: "Quel démon renard est scellé en Naruto ?", answers: ["Shukaku", "Kurama", "Matatabi", "Gyûki"], correct: 1, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s9', text: "Dans My Hero Academia, quel est le pourcentage de la population mondiale ayant un 'Alter' ?", answers: ["10%", "50%", "80%", "99%"], correct: 2, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s10', text: "Quel fruit du démon a mangé Monkey D. Luffy ?", answers: ["Le Fruit des Ténèbres", "Le Fruit de l'Élastique", "Le Fruit du Feu", "Le Fruit de la Glace"], correct: 1, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s11', text: "Qui accompagne Edward dans sa quête (Fullmetal Alchemist) ?", answers: ["Winry", "Roy Mustang", "Alphonse", "Scar"], correct: 2, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s12', text: "Quel manga des années 80 montre des chevaliers défendant Athéna ?", answers: ["Saint Seiya", "Ken le Survivant", "City Hunter", "Captain Tsubasa"], correct: 0, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s13', text: "Quelle est la couleur des cheveux du Super Saiyan classique ?", answers: ["Bleu", "Noir", "Rouge", "Doré"], correct: 3, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s14', text: "Que mange un Ghoul pour survivre (Tokyo Ghoul) ?", answers: ["De la chair humaine", "Du sang", "Des animaux", "Des esprits"], correct: 0, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s15', text: "Combien y a-t-il de capitaines dans la Soul Society (Bleach) ?", answers: ["10", "11", "12", "13"], correct: 3, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s16', text: "Qui est le mentor aux cheveux blancs et au bandeau sur l'oeil de Naruto ?", answers: ["Jiraya", "Kakashi", "Asuma", "Iruka"], correct: 1, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s17', text: "Dans Hunter x Hunter, quel est le type d'arbre colossal atteint par Gon ?", answers: ["L'arbre Monde", "Yggdrasil", "L'arbre Kakin", "Shinju"], correct: 0, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s18', text: "Dans Sword Art Online, que se passe-t-il si un joueur meurt dans le jeu ?", answers: ["Il respawn", "Il perd son niveau", "Il meurt dans la vraie vie", "Il est déconnecté"], correct: 2, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s19', text: "Quel animal est Happy dans Fairy Tail ?", answers: ["Un chat bleu", "Un chien blanc", "Un dragon rouge", "Un singe brun"], correct: 0, category: 'Mangas', type: 'speed-choice' },
  { id: 'mg_s20', text: "Dans Demon Slayer, quelle créature affronte Tanjiro la nuit ?", answers: ["Des Esprits", "Des Vampires", "Des Démons", "Des Zombies"], correct: 2, category: 'Mangas', type: 'speed-choice' }
];

const mangaMcq: MCQQuestion[] = [
  { id: 'mg_m1', text: "Dans One Piece, quel est l'équipage de Trafalgar Law ?", answers: ["L'Équipage du Cœur", "L'Équipage de Kidd", "L'Équipage de Luffy", "L'Équipage de Spade"], correct: 0, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m2', text: "Quel est l'arme de poing d'Edward Elric (Fullmetal Alchemist) ?", answers: ["Un revolver", "Une automail transformée", "Une hallebarde", "L'épée philosophale"], correct: 1, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m3', text: "Comment s'appelle l'organisation de méchants emblématique (avec des nuages rouges) de Naruto Shippuden ?", answers: ["Orochimaru", "La Racine", "L'Akatsuki", "Kara"], correct: 2, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m4', text: "Quel dieu de la mort (Shinigami) accompagne Light Yagami dans Death Note ?", answers: ["Rem", "Ryuk", "Sidoh", "Gelus"], correct: 1, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m5', text: "Dans Jujutsu Kaisen, le roi des fléaux loge dans le corps d'Itadori. Il s'appelle :", answers: ["Gojo", "Megumi", "Sukuna", "Mahito"], correct: 2, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m6', text: "Comment Levi (Livaï) aime-t-il combattre dans l'Attaque des Titans ?", answers: ["À mains nues", "Avec l'équipement tridimensionnel", "À cheval", "Au fusil"], correct: 1, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m7', text: "Lequel de ces Z Fighter de Dragon Ball appartient à la race des Nameks ?", answers: ["Krillin", "Yamcha", "Tenshinhan", "Piccolo"], correct: 3, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m8', text: "Quel est l'alter d'Izuku Midoriya au tout début de l'histoire ?", answers: ["Le pouvoir du feu", "Il n'a aucun alter", "La transparence", "Une force surhumaine"], correct: 1, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m9', text: "Quel personnage de Naruto possède le Sharingan grâce à son clan ?", answers: ["Neji Hyuga", "Sasuke Uchiwa", "Shikamaru Nara", "Rock Lee"], correct: 1, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m10', text: "Quelle série met en scène Jolyne, Jotaro, Dio et des 'Stands' ?", answers: ["Jojo's Bizarre Adventure", "Persona", "Gintama", "Shaman King"], correct: 0, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m11', text: "Le manga Nana conte l'histoire de deux filles prénommées Nana qui... ?", answers: ["Voyagent dans le temps", "Montent à Paris", "Deviennent colocataires", "Se battent"], correct: 2, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m12', text: "Dans Spy x Family, le père Loid est un espion. Que cache la mère (Yor) ?", answers: ["Elle est princesse", "C'est une tueuse à gages", "Elle est extra-terrestre", "Elle est voyante"], correct: 1, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m13', text: "Quel animal mystique scelle le destin du Japon dans Princesse Mononoké ?", answers: ["Le Grand Dragon", "L'Esprit de la forêt", "L'Araignée géante", "Le Poisson divin"], correct: 1, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m14', text: "Quel célèbre pirate détient le trésor légendaire du 'One Piece' au début de l'oeuvre ?", answers: ["Barbe Blanche", "Gol D. Roger", "Shanks le Roux", "Kaido"], correct: 1, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m15', text: "De quel animé culte provient l'unité 'EVA-01' ?", answers: ["Gundam", "Code Geass", "Neon Genesis Evangelion", "Gurren Lagann"], correct: 2, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m16', text: "Lequel n'est PAS un des trois grands types de Haki dans One Piece ?", answers: ["Le Fluide de l'Armement", "Le Fluide de l'Observation", "Le Fluide Végétal", "Le Fluide Royal"], correct: 2, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m17', text: "Dans Hunter x Hunter, Gon fait l'examen de Hunter pour accomplir quoi ?", answers: ["Trouver son père", "Venger sa mère", "Devenir milliardaire", "Tuer un ennemi"], correct: 0, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m18', text: "Qui a dessiné Akira ?", answers: ["Hayao Miyazaki", "Osamu Tezuka", "Katsuhiro Otomo", "Akira Toriyama"], correct: 2, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m19', text: "Quelle attaque de feu mythique utilise le clan Uchiwa ?", answers: ["Boule de feu suprême", "Oiseau de feu", "Tornade incandescente", "Frappe solaire"], correct: 0, category: 'Mangas', type: 'multiple-choice' },
  { id: 'mg_m20', text: "Comment s'appelle le personnage principal chauve de One Punch Man ?", answers: ["Mob", "Krillin", "Saitama", "Ikkaku"], correct: 2, category: 'Mangas', type: 'multiple-choice' }
];

const mangaCash: CashAnswerQuestion[] = [
  { id: 'mg_c1', text: "Le terme pour désigner l'énergie vitale libérée dans Dragon Ball ?", acceptedAnswers: ["Ki"], category: 'Mangas', type: 'cash-answer' },
  { id: 'mg_c2', text: "Nom du créateur/auteur originel de Dragon Ball ?", acceptedAnswers: ["Akira Toriyama", "Toriyama"], category: 'Mangas', type: 'cash-answer' },
  { id: 'mg_c3', text: "Nom de l'épée à la lame tournante ou la tronçonneuse dans un célèbre manga sanglant ?", acceptedAnswers: ["Chainsaw Man", "Le tronçonneur"], category: 'Mangas', type: 'cash-answer' },
  { id: 'mg_c4', text: "L'escrimeur à trois sabres, second de l'équipage de Luffy ?", acceptedAnswers: ["Roronoa Zoro", "Zoro", "Zorro"], category: 'Mangas', type: 'cash-answer' },
  { id: 'mg_c5', text: "Prénom du frère de Luffy contrôlant le pouvoir du feu (décédé tragiquement) ?", acceptedAnswers: ["Portgas D. Ace", "Ace"], category: 'Mangas', type: 'cash-answer' },
  { id: 'mg_c6', text: "Énergie utilisée dans Naruto pour déclencher les jutsu ?", acceptedAnswers: ["Chakra", "Le chakra"], category: 'Mangas', type: 'cash-answer' },
  { id: 'mg_c7', text: "Prénom du père de Goku (Dragon Ball) ?", acceptedAnswers: ["Bardack", "Bardock"], category: 'Mangas', type: 'cash-answer' },
  { id: 'mg_c8', text: "Surnom du personnage principal blond du manga 'Fullmetal Alchemist' ?", acceptedAnswers: ["Ed", "Edward Elric", "Edward"], category: 'Mangas', type: 'cash-answer' },
  { id: 'mg_c9', text: "Petite fille télépathe aux cheveux roses adoptée dans Spy x Family ?", acceptedAnswers: ["Anya", "Anya Forger"], category: 'Mangas', type: 'cash-answer' },
  { id: 'mg_c10', text: "Technique interdite de Naruto qui invoque une armée de doubles ?", acceptedAnswers: ["Multi clonage", "Multi Clonage Supra"], category: 'Mangas', type: 'cash-answer' }
];

export const THEMES_MANGA_MCQ = [...mangaSpeed, ...mangaMcq];
export const THEMES_MANGA_CASH = [...mangaCash];
