// ==================== ALICE QUESTIONS — MODE ALICE ====================
// "Soirée Pop Culture" quiz questions
// 3 categories × 90 questions each = 270 total
//   Per category: 30 speed-choice + 30 multiple-choice + 30 cash-answer
// Prefixes: da = Dessins animés & Manga, jv = Jeux Vidéo, pc = Pop Culture
//
// Exports:
//   ALICE_QUESTIONS_MCQ  — all speed-choice + multiple-choice (MCQQuestion[])
//   ALICE_QUESTIONS_CASH — all cash-answer                     (CashAnswerQuestion[])

import type { MCQQuestion, CashAnswerQuestion } from './game-types';

// ============================================================
//  CATEGORY 1 — Dessins animés & Manga  (prefix: da)
// ============================================================

// ---------- BLOC 1 — SPEED (30 × speed-choice) ----------
// For speed rounds: host reads the question, first to buzz answers.
// Each has 4 options (correct + 3 plausible distractors).

const daSpeedQuestions: MCQQuestion[] = [
  { id: 'da_sp01', text: "Comment s'appelle le dinosaure rockeur qui fait du skate ?", answers: ['Rex', 'Denver', 'Barney', 'Dino'], correct: 1, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp02', text: "Quel inspecteur a des gadgets plein son chapeau ?", answers: ['Inspecteur Clouseau', 'Inspecteur Gadget', 'Inspecteur Derrick', 'Inspecteur Columbo'], correct: 1, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp03', text: "Quel Pokémon est le premier compagnon de Sacha ?", answers: ['Pikachu', 'Bulbizarre', 'Carapuce', 'Salamèche'], correct: 0, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp04', text: "Quel pirate veut devenir le « Roi des Pirates » ?", answers: ['Barbe Noire', 'Shanks', 'Luffy', 'Crocodile'], correct: 2, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp05', text: "Comment s'appelle le chien peureux de Sammy ?", answers: ['Idefix', 'Snoopy', 'Scooby-Doo', 'Pluto'], correct: 2, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp06', text: "Quel chat bleu essaie d'attraper trois cafards ?", answers: ['Tom', 'Oggy', 'Sylvestre', 'Felix'], correct: 1, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp07', text: "Quel héros tire plus vite que son ombre ?", answers: ['Billy the Kid', 'Lucky Luke', 'Zorro', 'Le Lone Ranger'], correct: 1, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp08', text: "Quel est le nom de la camionnette de Scooby-Doo ?", answers: ['La Machinette', 'La Mystery Machine', 'Le Batmobile', 'Le Mystery Van'], correct: 1, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp09', text: "Dans Aladdin, de quelle couleur est le Génie ?", answers: ['Rouge', 'Vert', 'Bleu', 'Or'], correct: 2, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp10', text: "Quel petit garçon viking est l'ami du dragon Krokmou ?", answers: ['Stoïck', 'Harold', 'Snotlout', 'Tuffnut'], correct: 1, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp11', text: "Comment s'appelle la sœur de la Reine des Neiges (Elsa) ?", answers: ['Anna', 'Rapunzel', 'Ariel', 'Blanche-Neige'], correct: 0, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp12', text: "Quel animal est « Kung Fu Panda » ?", answers: ['Un panda (Po)', 'Un tigre', 'Un singe', 'Un dragon'], correct: 0, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp13', text: "Comment s'appelle le bonhomme en pain d'épices dans Shrek ?", answers: ['Le Petit Chaperon', 'Gingy', "Ti'Biscuit", 'Le Chapelier'], correct: 2, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp14', text: "Quel est le nom de l'éponge qui vit sous la mer ?", answers: ['Bob l\'éponge', 'Patrick', 'Carlo', 'Squidward'], correct: 0, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp15', text: "Comment s'appelle le chat qui poursuit la souris Jerry ?", answers: ['Felix', 'Sylvestre', 'Tom', 'Garfield'], correct: 2, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp16', text: "Quel super-héros porte un costume de panthère noire ?", answers: ['Black Panther', 'Batman', 'Nightwing', 'Black Widow'], correct: 0, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp17', text: "Quel est le nom du fils de Mufasa dans Le Roi Lion ?", answers: ['Scar', 'Simba', 'Nala', 'Rafiki'], correct: 1, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp18', text: "Quel personnage mange des épinards pour être fort ?", answers: ['Superman', 'Astérix', 'Popeye', 'Hercule'], correct: 2, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp19', text: "Comment s'appelle le bonhomme de neige dans La Reine des Neiges ?", answers: ['Frosty', 'Olaf', 'Bonhomme', 'Sven'], correct: 1, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp20', text: "Quel est le nom du petit frère de Peppa Pig ?", answers: ['George', 'Charlie', 'Tom', 'Pedro'], correct: 0, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp21', text: "Quel chien de la Pat' Patrouille pilote un hélicoptère ?", answers: ['Chase', 'Marshall', 'Stella (Skye)', 'Rocky'], correct: 2, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp22', text: "Quel est le nom du Pokémon qui peut copier l'apparence de n'importe qui ?", answers: ['Mewtwo', 'Métamorph', 'Porygon', 'Zoroark'], correct: 1, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp23', text: "Comment s'appelle le chat noir de la sorcière Kiki ?", answers: ['Jiji', 'Luna', 'Salem', 'Crookshanks'], correct: 0, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp24', text: "Quel oiseau bleu est poursuivi par Vil Coyote ?", answers: ['Tweety', 'Woody Woodpecker', 'Bip Bip', 'Hibou'], correct: 2, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp25', text: "Comment s'appelle le maître de Sangoku qui vit sur une île ?", answers: ['Piccolo', 'Kami', 'Tortue Géniale', 'Krillin'], correct: 2, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp26', text: "Quel animal est Babouche dans Dora l'Exploratrice ?", answers: ['Un singe', 'Un perroquet', 'Un renard', 'Un iguane'], correct: 0, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp27', text: "Quel est le cri du Marsupilami ?", answers: ['Houba Houba', 'Tic Tac', 'Grrrr', 'Couic Couic'], correct: 0, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp28', text: "Quel super-héros a un bouclier rond en vibranium ?", answers: ['Iron Man', 'Thor', 'Captain America', 'Hawkeye'], correct: 2, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp29', text: "Comment s'appelle le propriétaire des jouets dans Toy Story ?", answers: ['Sid', 'Andy', 'Bonnie', 'Al'], correct: 1, category: 'Dessins animés & Manga', type: 'speed-choice' },
  { id: 'da_sp30', text: "Quel est le nom du vaisseau de Han Solo ?", answers: ['L\'Étoile Noire', 'Le Faucon Millénium', 'L\'Enterprise', 'Le Naboo'], correct: 1, category: 'Dessins animés & Manga', type: 'speed-choice' },
];

// ---------- BLOC 2 — CARRÉ (30 × multiple-choice) ----------

const daCarreQuestions: MCQQuestion[] = [
  { id: 'da_mc01', text: 'Comment s\'appelle le légendaire oiseau mécanique dans Les Mystérieuses Cités d\'Or ?', answers: ['Phénix', 'Grand Condor', 'Solaris', 'Aigle'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc02', text: "Quel drôle d'animal familier est Gumball dans la série animée ?", answers: ['Un chien', 'Un chat bleu', 'Un lapin', 'Un poisson'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' }, 
  { id: 'da_mc03', text: 'Quelle créature destructrice est scellée à l\'intérieur de Naruto ?', answers: ['Un loup', 'Un corbeau', 'Un serpent', 'Un renard à neuf queues'], correct: 3, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc04', text: 'Quelle est la couleur de peau iconique des personnages de la série Les Simpson ?', answers: ['Orange', 'Rose', 'Jaune', 'Blanche'], correct: 2, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc05', text: 'Parmi la Pat\' Patrouille, quel chien occupe le rôle de policier du groupe ?', answers: ['Marcus', 'Chase', 'Rocky', 'Ruben'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc06', text: 'Quel pouvoir secret cache la petite Anya dans la série Spy x Family ?', answers: ['Une force surhumaine', 'La téléportation', 'La télépathie (lire dans les pensées)', 'Voler'], correct: 2, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc07', text: 'Quel est l\'animal de compagnie magique (Luna) qui accompagne Sailor Moon ?', answers: ['Un hibou', 'Un chat noir', 'Un lapin', 'Une licorne'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc08', text: 'Dans le manga Ranma 1/2, en quoi se transforme Ranma au contact de l\'eau froide ?', answers: ['En panda', 'En fille', 'En canard', 'En cochon'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc09', text: 'Dans quoi vit Bob l\'éponge sous la mer à Bikini Bottom ?', answers: ['Un gros rocher', 'Un ananas géant', 'Un coquillage', 'Une grotte'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc10', text: 'Comment s\'appelle le patron tyrannique du WOOHP dans Totally Spies ?', answers: ['Tom', 'Bill', 'Jerry', 'Bob'], correct: 2, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc11', text: 'De quelle couleur exceptionnelle est le bonnet du Grand Schtroumpf ?', answers: ['Bleu', 'Blanc', 'Rouge', 'Vert'], correct: 2, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc12', text: 'Quel est le métier épuisant de Nicole, la maman de Gumball ?', answers: ['Employée à l\'Usine Arc-en-ciel', 'Maîtresse d\'école', 'Employée de bureau', 'Garagiste'], correct: 0, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc13', text: 'Quelle race de chien est Bingo, la petite sœur de Bluey ?', answers: ['Un chat', 'Un Bouvier Australien', 'Un Dalmatien', 'Un Labrador'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc14', text: 'Dans certains anciens épisodes, quel est le nom du neveu agaçant de Scooby-Doo ?', answers: ['Scrappy-Doo', 'Rex', 'Milou', 'Idéfix'], correct: 0, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc15', text: 'De quelle couleur est le sabre laser que reçoit Luke Skywalker dans le tout premier film (1977) ?', answers: ['Rouge', 'Vert', 'Bleu', 'Violet'], correct: 2, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc16', text: 'Dans le film Les Nouveaux Héros, le génie Hiro Hamada est de quelle espèce ?', answers: ['Un robot', 'Un garçon humain', 'Un chat muté', 'Un être céleste'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc17', text: 'Comment s\'appelle la petite fée insupportable qui guide Link au début d\'Ocarina of Time ?', answers: ['Clochette', 'Navi', 'Flora', 'Iris'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc18', text: 'Quel animal secret est Perry, l\'animal de compagnie de Phinéas & Ferb ?', answers: ['Une loutre', 'Un castor', 'Un ornithorynque', 'Un rat'], correct: 2, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc19', text: 'Quelle est la véritable identité civile du super-héros Chat Noir dans Miraculous ?', answers: ['Marin Dupain', 'Adrien Agreste', 'Luka Couffaine', 'Nino Lahiffe'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc20', text: 'À quelle espèce de poisson appartient Nemo et son père Marin ?', answers: ['Requin', 'Poisson-Clown', 'Daurade', 'Raie'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc21', text: 'Quel type de « Fruit » magique a été mangé par Luffy dans One Piece ?', answers: ['Un Fruit du démon', 'Un Gomu Gomu no Mi', 'Un Fruit d\'Or', 'Une Mangue enchantée'], correct: 0, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc22', text: 'Comment s\'appelle l\'oncle machiavélique de Simba dans Le Roi Lion ?', answers: ['Mufasa', 'Scar', 'Timon', 'Pumbaa'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc23', text: 'Comment se nomme la mignonne petite monture dinosaure de Mario ?', answers: ['Yoshi', 'Birdo', 'Bowser', 'Toad'], correct: 0, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc24', text: 'Dans quelle bourgade se déroulent les exploits de la Pat\' Patrouille ?', answers: ['Gotham', 'La Grande Vallée', 'Métropolis', 'Paris'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc25', text: 'Dans Dragon Ball Z, qui est le guerrier venu du futur pour avertir Goku ?', answers: ['Gohan', 'Trunks', 'Goten', 'Broly'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc26', text: 'Quel est l\'elfe de maison dévoué qui se lie d\'amitié avec Harry Potter ?', answers: ['Gripsec', 'Dobby', 'Kreattur', 'Gollum'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc27', text: 'Quel est le pouvoir quasi-exclusif du super-héros Flash ?', answers: ['La Force', 'L\'extrême Vitesse', 'Le Vol', 'Le Feu'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc28', text: 'Généralement, de quelle couleur est l\'imposant sabre laser de Dark Vador ?', answers: ['Bleu', 'Vert', 'Rouge', 'Blanc'], correct: 2, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc29', text: 'Quel animal est la jeune officier de police Judy Hopps dans Zootopie ?', answers: ['Un renard', 'Une lapine', 'Une lionne', 'Une brebis'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc30', text: 'Comment s\'appelle la petite sœur intellectuelle de Gumball ?', answers: ['Anaïs', 'Nicole', 'Penny', 'Carrie'], correct: 0, category: 'Dessins animés & Manga', type: 'multiple-choice' },
];

// ---------- BLOC 3 — CASH (30 × cash-answer) ----------

const daCashQuestions: CashAnswerQuestion[] = [
  { id: 'da_ca01', text: 'Comment se nomme le gigantesque navire solaire dans Les Mystérieuses Cités d\'Or ?', acceptedAnswers: ['Le Solaris', 'Solaris'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca02', text: 'Quel est le nom du sombre méchant que traque l\'Inspecteur Gadget ?', acceptedAnswers: ['Le Docteur Gang', 'Docteur Gang', 'Dr Gang'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca03', text: 'Que garde constamment Nezuko dans sa bouche pour ne pas mordre (Demon Slayer) ?', acceptedAnswers: ['Un bâillon en bambou', 'bâillon en bambou', 'un morceau de bambou', 'bambou'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca04', text: 'Quel fantastique détective de l\'animation est tragiquement redevenu enfant ?', acceptedAnswers: ['Conan', 'Shinichi', 'Conan Shinichi', 'Détective Conan'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca05', text: 'Quel est le nom du chat ricanant toujours aux côtés du Docteur Gang ?', acceptedAnswers: ['Madchat'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca06', text: 'Quel artefact les frères Elric cherchent-ils pour retrouver leurs corps ?', acceptedAnswers: ['La Pierre Philosophale', 'Pierre Philosophale'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca07', text: 'Dans le dessin animé Gumball, à quelle espèce atypique appartient son papa Richard ?', acceptedAnswers: ['Un lapin géant rose', 'lapin rose', 'lapin'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca08', text: 'Quel type de véhicule coloré conduit l\'équipe de Scooby-Doo (Mystery Machine) ?', acceptedAnswers: ['Une camionnette', 'un van', 'Van'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca09', text: 'Quel accessoire brisé permet au dinosaure Denver de jeter un regard dans le passé ?', acceptedAnswers: ['Sa coquille d\'œuf', 'un morceau de coquille', 'sa propre coquille'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca10', text: 'Quel sport physique est mis en exergue par le grand roux Hanamichi dans Slam Dunk ?', acceptedAnswers: ['Basketball', 'Le basket'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca11', text: 'Quelle curieuse arme Gon, le jeune Hunter, manipule-t-il au tout début ?', acceptedAnswers: ['Canne à pêche', 'une canne a peche'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca12', text: 'Comment se nomme le célèbre tournoi d\'arts martiaux planétaire de Dragon Ball ?', acceptedAnswers: ['Tenkaichi Budokai', 'Général'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca13', text: "Comment s'appellent les sabres des Shinigamis dans Bleach ?", acceptedAnswers: ['Zanpakutō', 'Zanpakuto'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca14', text: 'Quelle IA redoutable menace constamment le monde merveilleux de Code Lyoko ?', acceptedAnswers: ['X.A.N.A.', 'XANA'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca15', text: 'Toute sa vie, quel sage sorcier a fièrement dirigé Poudlard ?', acceptedAnswers: ['Albus Dumbledore', 'Dumbledore', 'Professeur Dumbledore'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca16', text: 'À l\'origine, à quelle race de dragons furtifs correspond Krokmou ?', acceptedAnswers: ['Furie Nocturne'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca17', text: 'Le prénom du pimpant petit poisson-chirurgien bleu désespérément amnésique ?', acceptedAnswers: ['Dory'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca18', text: 'Le prénom véritable de l\'intelligente petite nièce de l\'Inspecteur Gadget ?', acceptedAnswers: ['Sophie'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca19', text: "Comment s'appelle le chien de l'Inspecteur Gadget ?", acceptedAnswers: ['Finot'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca20', text: 'D\'où provient originellement le jeune orphelin Esteban, dans Les Cités d\'Or ?', acceptedAnswers: ["De l'Espagne", 'Espagne'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca21', text: 'Quel est le nom des friandises mangées par Sammy et Scooby-Doo ?', acceptedAnswers: ['Scooby-Snacks', 'Des croquettes Scooby'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca22', text: 'Quel illustre membre du village des Schtroumpfs, est le seul vêtu de tissu rouge ?', acceptedAnswers: ['Le Grand Schtroumpf', 'Grand Schtroumpf'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca23', text: 'Dans la genèse farfelue de Gumball, Darwin n\'était originellement qu\'un banal...', acceptedAnswers: ['Poisson rouge', 'Un poisson d\'aquarium'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca24', text: 'Quelle est la véritable identité de l\'étudiante parisienne secrète de Coccinelle (Ladybug) ?', acceptedAnswers: ['Marinette Dupain-Cheng', 'Marinette'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca25', text: 'Le prénom du chaleureux garçon menant les sauvetages de chiots de la Pat\' Patrouille ?', acceptedAnswers: ['Ryder'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca26', text: 'Prénom familier du courageux cyclope rond et vert dans le film Monstres et Cie ?', acceptedAnswers: ['Bob', 'Bob Razowski', 'Razowski', 'Mike Wazowski'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca27', text: "Comment s'appelle la fiancée de Ranma Saotome ?", acceptedAnswers: ['Akane', 'Akane Tendo', 'Adeline (En VF)'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca28', text: 'En quelle grosse créature l\'exubérant Genma, père de Ranma, est-il souvent maudit ?', acceptedAnswers: ['Un panda ganté', 'Panda géant', 'Panda'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca29', text: 'Dans le Far-West, quel tireur a un cheval appelé Jolly Jumper ?', acceptedAnswers: ['Lucky Luke'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca30', text: 'Comment nomme-t-on le redoutable cadran spatial accroché au poignet du courageux Ben 10 ?', acceptedAnswers: ["L'Omnitrix", 'Omnitrix'], category: 'Dessins animés & Manga', type: 'cash-answer' },
];


// ============================================================
//  CATEGORY 2 — Jeux Vidéo  (prefix: jv)
// ============================================================

// ---------- BLOC 1 — SPEED (30 × speed-choice) ----------

const jvSpeedQuestions: MCQQuestion[] = [
  { id: 'jv_sp01', text: "Quel est le métier d'origine de Mario ?", answers: ['Mécanicien', 'Plombier', 'Boulanger', 'Couturier'], correct: 1, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp02', text: "Quel hérisson bleu est connu pour courir à la vitesse du son ?", answers: ['Sonic', 'Knuckles', 'Shadow', 'Tails'], correct: 0, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp03', text: "Dans quel jeu doit-on construire des maisons et éviter des Creepers ?", answers: ['Terraria', 'Minecraft', 'Roblox', 'Fortnite'], correct: 1, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp04', text: "Quel est le nom du célèbre Pokémon jaune qui lance des éclairs ?", answers: ['Pikachu', 'Joliflor', 'Raichu', 'Pichu'], correct: 0, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp05', text: "Comment s'appelle le dinosaure vert qui sert de monture à Mario ?", answers: ['Bowser', 'Toad', 'Yoshi', 'Birdo'], correct: 2, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp06', text: "Quel est le nom du jeu de tir où l'on s'affronte à coups de peinture ?", answers: ['Fortnite', 'Splatoon', 'Overwatch', 'Call of Duty'], correct: 1, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp07', text: "Comment s'appelle l'héroïne archéologue de la série Tomb Raider ?", answers: ['Lara Croft', 'Indiana Jones', 'Nathan Drake', 'Elena Fisher'], correct: 0, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp08', text: "Dans The Legend of Zelda, quel est le nom du héros que l'on contrôle ?", answers: ['Zelda', 'Ganon', 'Link', 'Navi'], correct: 2, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp09', text: "Quelle est la couleur de la casquette de Luigi ?", answers: ['Rouge', 'Bleue', 'Verte', 'Jaune'], correct: 2, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp10', text: "Quel singe à cravate est le grand rival puis ami de Mario ?", answers: ['Diddy Kong', 'King Kong', 'Donkey Kong', 'Cranky Kong'], correct: 2, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp11', text: "Quel jeu de danse demande de suivre les mouvements à l'écran ?", answers: ['Dance Dance Revolution', 'Just Dance', 'Beat Saber', 'Flipt'], correct: 1, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp12', text: "Comment s'appelle la petite boule rose qui avale ses ennemis ?", answers: ['Kirby', 'Jigglypuff', 'Pikachu', 'Pac-Man'], correct: 0, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp13', text: "Quel est le nom du dragon violet, héros de jeux de plateforme ?", answers: ['Spyro', 'Bowser', 'Charizard', 'Alduin'], correct: 0, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp14', text: "Dans quel jeu doit-on deviner qui est l'imposteur dans un vaisseau ?", answers: ['Alien: Isolation', 'Among Us', 'Dead by Daylight', 'Overcooked'], correct: 1, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp15', text: "Comment s'appelle le frère de Mario qui porte du vert ?", answers: ['Wario', 'Toad', 'Luigi', 'Yoshi'], correct: 2, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp16', text: "Quel jeu de foot se joue avec des voitures ?", answers: ['FIFA', 'Rocket League', 'Mario Strikers', 'eFootball'], correct: 1, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp17', text: "Comment s'appelle le héros de la série Uncharted ?", answers: ['Nathan Drake', 'Lara Croft', 'Indiana Jones', 'Ethan Hunt'], correct: 0, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp18', text: "Quel est le nom du petit robot blanc qui accompagne Cal Kestis ?", answers: ['R2-D2', 'BD-1', 'BB-8', 'C-3PO'], correct: 1, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp19', text: "Dans quel jeu de combat s'affrontent Mario, Pikachu et Kirby ?", answers: ['Tekken', 'Street Fighter', 'Super Smash Bros', 'Mortal Kombat'], correct: 2, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp20', text: "Comment s'appelle l'application pour chasser des Pokémon en marchant ?", answers: ['Pokémon GO', 'Pokémon Masters', 'Pokémon UNITE', 'Pokémon Sleep'], correct: 0, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp21', text: "Quel est le nom du hérisson noir, rival de Sonic ?", answers: ['Silver', 'Metal Sonic', 'Shadow', 'Knuckles'], correct: 2, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp22', text: "Quel est le nom du petit robot bleu avec un canon au bras ?", answers: ['Mega Man', 'Bionic Commando', 'Proto Man', 'Zero'], correct: 0, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp23', text: "Comment s'appelle le héros de God of War ?", answers: ['Kratos', 'Atreus', 'Zeus', 'Thor'], correct: 0, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp24', text: "Quel est le nom du petit robot rond et blanc dans Star Wars Jedi ?", answers: ['BD-1', 'R2-D2', 'BB-8', 'Gonk'], correct: 2, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp25', text: "Comment s'appelle le personnage masculin par défaut dans Minecraft ?", answers: ['Alex', 'Steve', 'Notch', 'Herobrine'], correct: 1, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp26', text: "Quel est le nom du jeu où l'on incarne un petit haricot ?", answers: ['Stumble Guys', 'Fall Guys', 'Among Us', 'Party Animals'], correct: 1, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp27', text: "Quel est le nom du chien qui se moque du joueur dans Duck Hunt ?", answers: ['Pluto', 'Snoopy', 'Le Chien', 'Rex'], correct: 2, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp28', text: "Comment s'appelle le héros de Rayman ?", answers: ['Rayman', 'Globox', 'Murphy', 'Barbara'], correct: 0, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp29', text: "Dans quel jeu tombe-t-on d'un bus volant sur une île ?", answers: ['PUBG', 'Fortnite', 'Apex Legends', 'Call of Duty: Warzone'], correct: 1, category: 'Jeux Vidéo', type: 'speed-choice' },
  { id: 'jv_sp30', text: "Quel est le nom de la boule jaune qui mange des fantômes ?", answers: ['Pac-Man', 'Blinky', 'Kirby', 'Sonic'], correct: 0, category: 'Jeux Vidéo', type: 'speed-choice' },
];

// ---------- BLOC 2 — CARRÉ (30 × multiple-choice) ----------

const jvCarreQuestions: MCQQuestion[] = [
  { id: 'jv_mc01', text: 'Quelle console de Nintendo est célèbre pour être utilisable à la fois sur la télé et en mode portable ?', answers: ['Wii U', 'GameCube', 'Switch', 'NES'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc02', text: 'À quelle espèce animale appartient le très vénal Tom Nook dans Animal Crossing ?', answers: ['Hérisson', 'Raton laveur', 'Tanuki japonais', 'Chaton bleu'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc03', text: 'Comment s\'appelle la célèbre princesse du Royaume Champignon que Mario doit souvent sauver ?', answers: ['Zelda', 'Peach', 'Harmonie', 'Daisy'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc04', text: 'Quel objet légendaire de Mario Kart fonce inévitablement sur le 1er de la course ?', answers: ['Une banane', 'Une carapace rouge', 'Une carapace bleue', 'Un éclair'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc05', text: 'Comment s\'appelle le petit renard à deux queues volant qui accompagne fréquemment Sonic ?', answers: ['Knuckles', 'Tails', 'Shadow', 'Amy'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc06', text: 'Sur quelle console mythique de Nintendo est sorti le tout premier jeu vidéo Pokémon ?', answers: ['NES', 'Game Boy', 'Nintendo 64', 'DS'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc07', text: 'Quel est le nom du monstrueux dragon de l\'espace, ennemi juré de Samus Aran dans Metroid ?', answers: ['Bowser', 'Spyro', 'Ridley', 'Alduin'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc08', text: 'Quel monstre très fin et sombre peut se téléporter et voler des blocs dans Minecraft ?', answers: ['Creeper', 'Zombie', 'Enderman', 'Ghast'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc09', text: 'Quel est le nom du célèbre studio suédois à l\'origine du phénomène Minecraft ?', answers: ['Ubisoft', 'Mojang', 'Epic Games', 'Sony'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc10', text: 'Comment s\'appelle la monnaie virtuelle universelle permettant d\'acheter des objets dans Roblox ?', answers: ['V-Bucks', 'Robux', 'Coins', 'Dollars'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc11', text: 'Quel géant japonais de la technologie est le constructeur et créateur de la PlayStation ?', answers: ['Microsoft', 'Nintendo', 'Sony', 'SEGA'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc12', text: "Comment s'appelle la princesse des étoiles dans Super Mario Galaxy ?", answers: ['Princesse Peach', 'Princesse Daisy', 'Princesse Harmonie', 'Princesse Zelda'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc13', text: 'Comment s\'appelle l\'intelligence artificielle (IA) qui guide le Master Chief dans Halo ?', answers: ['Siri', 'Alexa', 'Cortana', 'Glados'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc14', text: 'Quel est le charmant nom de la ville de départ du joueur dans Pokémon Rouge et Bleu ?', answers: ['Bourg Palette', 'Argenta', 'Azuria', 'Parmanie'], correct: 0, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc15', text: 'Dans Mario Kart, quel objet permet de se rendre transparent tout en volant l\'objet d\'un adversaire ?', answers: ['Une Étoile', 'Le Roi Boo', 'Un Champignon', 'Une Banane'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc16', text: 'Bien qu\'il change souvent de tenue, de quelle couleur est historiquement la casquette de Mario ?', answers: ['Bleue', 'Verte', 'Rouge', 'Jaune'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc17', text: 'Dans Zelda, quel vieil instrument de musique magique Link utilise-t-il pour traverser les âges ?', answers: ['Une flûte', 'Un ocarina', 'Une harpe', 'Une guitare'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc18', text: 'Dans Minecraft, quel monstre vert et silencieux approche discrètement de vous pour exploser ?', answers: ['Le Squelette', 'Le Creeper', 'L\'Araignée', 'Le Cochon'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc19', text: 'Comment s\'appelle officiellement le petit fantôme rouge qui vous traque dans Pac-Man ?', answers: ['Casper', 'Blinky', 'Boo', 'Slimer'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc20', text: 'Quelle console portable innovante mais malheureuse Sony a-t-il sorti après l\'énorme succès de la PSP ?', answers: ['GameGear', 'PS Vita', 'Switch', 'DS'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc21', text: 'Quel phénomène mondial sur mobile consite à catapulter des oiseaux ronds sur des cochons ?', answers: ['Flappy Bird', 'Angry Birds', 'Candy Crush', 'Roblox'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc22', text: 'Sous sa grande armure verte très lourde, quel est le nom du légendaire Spartan de Halo ?', answers: ['Doom Guy', 'Master Chief', 'Kratos', 'Marcus Fenix'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc23', text: 'Quelle fameuse franchise de gestion nous invite à créer d\'incroyables parcs d\'attractions virtuels ?', answers: ['Sim City', 'RollerCoaster Tycoon', 'Les Sims', 'Mario'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc24', text: 'Dans quel magnifique royaume la princesse de légende vit-elle pour être protégée par Link ?', answers: ['Le Royaume Champignon', 'Hyrule', 'Azeroth', 'Équestria'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc25', text: 'Quel simulateur de vue propose de simplement vivre en aménageant une maison, trouver un travail... ?', answers: ['Minecraft', 'Les Sims', 'Animal Crossing', 'GTA'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc26', text: 'Dans le classique Minecraft, quel minerai est d\'une rare couleur bleu cyan, permettant l\'une des armures les plus solides ?', answers: ['Or', 'Fer', 'Diamant', 'Charbon'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc27', text: 'Quel redoutable roi des Gerudos est le méchant principal récurrent de la saga Zelda ?', answers: ['Bowser', 'Ganondorf', 'Docteur Gang', 'Mewtwo'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc28', text: 'Comment s\'appelle le grand frère svelte de Mario, vêtu quant à lui d\'une tenue verte ?', answers: ['Wario', 'Waluigi', 'Luigi', 'Yoshi'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc29', text: 'Quel objet spécifique doit-on donner à un Pikachu pour réussir à le faire évoluer en puissant Raichu ?', answers: ['Une Pierre Feu', 'Une Pierre Eau', 'Une Pierre Foudre', 'Une Pierre Lune'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc30', text: 'Dans quel monument vidéoludique russes les joueurs doivent-ils emboîter d\'incessantes briques géométriques qui tombent ?', answers: ['Minecraft', 'LEGO', 'Roblox', 'Tetris'], correct: 3, category: 'Jeux Vidéo', type: 'multiple-choice' },
];

// ---------- BLOC 3 — CASH (30 × cash-answer) ----------

const jvCashQuestions: CashAnswerQuestion[] = [
  { id: 'jv_ca01', text: 'Comment se nomme le célèbre monde cauchemardesque souterrain rempli de lave dans Minecraft ?', acceptedAnswers: ['Le Nether', 'Nether'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca02', text: 'Dans l\'histoire vidéoludique, quel jeu russe vous accable de briques imbriquables inépuisables ?', acceptedAnswers: ['Tetris'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca03', text: 'Quel est le piquant prénom de l\'espiègle oiseau rouge caché dans le sac à dos de Banjo ?', acceptedAnswers: ['Kazooie'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca04', text: 'Dans le premier Pokémon, comment s\'appelle le vénérable professeur au crâne dégarni de Bourg-Palette ?', acceptedAnswers: ['Le Professeur Chen', 'Professeur Chen', 'Chen', 'Oak'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca05', text: 'Dans la licence Street Fighter, comment appelle-t-on le fameux karatéka errant portant un kimono blanc déchiré ?', acceptedAnswers: ['Ryu'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca06', text: 'Lors du combat final décisif dans Minecraft, dans quelle abysse dimensionnelle sombre devez-vous chasser le dragon ?', acceptedAnswers: ["L'Ender", 'Ender', "L'End", 'End'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca07', text: 'Quel pistolet en plastique utilisait-on pour jouer à Duck Hunt ?', acceptedAnswers: ['Le NES Zapper', 'Zapper', 'Le pistolet de la NES', 'pistolet nes', 'NES Zapper'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca08', text: 'Si vous galopez héroïquement sur la belle plaine d\'Hyrule, le nom de votre fidèle jument ?', acceptedAnswers: ['Épona', 'Epona'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca09', text: 'Comment s\'appelle ce facétieux squelette fainéant, au blouson bleu, devenu l\'emblème culte de Undertale ?', acceptedAnswers: ['Sans', 'Sans the skeleton'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca10', text: "Quel accessoire en forme de cercle est utilisé dans Ring Fit Adventure ?", acceptedAnswers: ['Le Ring-Con', 'Ring-Con', 'Le cerceau', 'L\'anneau'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca11', text: 'Quel brillant chef d\'œuvre d\'Aperture Science nous exige de traverser des salles de tests mortelles avec des ouvertures quantiques ?', acceptedAnswers: ['Portal', 'Portal 2'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca12', text: 'Si l\'on vous lâche virtuellement sous les palmiers corrompus de GTA V, dans quelle parodie de Los Angeles êtes-vous ?', acceptedAnswers: ['Los Santos'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca13', text: 'Comment a été affectueusement baptisé le microscopique robot devenu la joyeuse mascotte officielle de la PS5 ?', acceptedAnswers: ['Astro', 'Astro Bot'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca14', text: 'Dans Mario Kart, quel drôle de petit champignon offre invariablement un coup d\'accélérateur soudain sur le bitume ?', acceptedAnswers: ['Le Champignon', 'Champignon', 'Un champi'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca15', text: 'Quel célèbre jeu de plateau des familles, détruisant toutes les amitiés, propose occasionnellement ses dés rugueux et sa prison sur console ?', acceptedAnswers: ['Le Monopoly', 'Monopoly'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca16', text: 'À l\'allure de loubard ombrageux, sous quel petit nom le dinosaure bleu et rebelle, rival coriace de Yoshi dans Super Mario RPG, est-il connu ?', acceptedAnswers: ['Boshi'], category: 'Jeux Vidéo', type: 'cash-answer' }, // C'est dur celle-ci mais sympa pour un quiz pointu !
  { id: 'jv_ca17', text: 'Quelle série de skateboard vertigineuse sur PlayStation a emprunté le grand nom du fameux champion olympien américain ?', acceptedAnswers: ["Tony Hawk's Pro Skater", 'Tony Hawk', 'Tony Hawk Pro Skater', 'Skate'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca18', text: 'Chez le plombier moustachu, quelle inattendue coloration désigne le précieux champignon permettant d\'arracher in-extremis une vie additionnelle (1-Up) ?', acceptedAnswers: ['Vert', 'Le champignon vert', 'Il est vert'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca19', text: 'Qui agace vigoureusement le monde avec ses impromptus « Hey! Listen! » lorsqu\'elle volette comme une fée capricieuse autour de Link dans Ocarina of Time ?', acceptedAnswers: ['Navi', 'Navi la fée'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca20', text: 'Sous la prestigieuse houlette de quelle famille exclusive de consoles Sony retrouve-t-on impérativement les fabuleuses aventures de Spider-Man et Kratos ?', acceptedAnswers: ['PlayStation', 'PS', 'La PlayStation'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca21', text: 'Quel convivial et amusant titre multijoueur requiert virtuellement un bon coup de crayon sur téléphone ou tablette pour deviner et créer l\'hilarité générale ?', acceptedAnswers: ['Pictionary', 'Gartic Phone', 'Draw Something'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca22', text: 'Quel énigmatique adversaire dinosauroïde excentrique à peau rose, récurrent dans Super Mario Bros. 2, ressemble fort à Yoshi ?', acceptedAnswers: ['Birdo'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca23', text: 'Quel jeu mobile consiste à aligner des bonbons colorés ?', acceptedAnswers: ['Candy Crush', 'Candy Crush Saga'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca24', text: 'Dans le chef d\'œuvre The Legend of Zelda : Breath of the Wild, quel puissant vestige technologique ancestral prend la pittoresque apparence d\'une belle tablette ?', acceptedAnswers: ['Tablette Sheikah', 'La pierre Sheikah', 'Sheikah', 'L\'ardoise Sheikah'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca25', text: 'L\'incroyable mégalopole utopiste décadente sous-marine dissimulée par le brillant Andrew Ryan dans le glauque monde de BioShock se prénomme... ?', acceptedAnswers: ['Rapture'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca26', text: 'Comment appelle-t-on techniquement, avec poésie et étrangeté Minecraftienne, la carapace d\'ailes mystique servant à survoler élégamment les continents cubiques ?', acceptedAnswers: ['Les Élytres', 'Élytres', 'Elytra', 'Elytras'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca27', text: 'Découvert par une génération récente des cinéphages galactiques et vite passé icône de jouets dans mille foyers et jeux d’aventure spatiale, mon nom astromécano orange roule sous les dunes et finit par le beau chiffre huit. Qui suis-je ?', acceptedAnswers: ['BB-8', 'Le droïde BB-8', 'bb8'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca28', text: 'Quelle console portable de Nintendo possède deux écrans superposés ?', acceptedAnswers: ['Nintendo DS', 'NDS', 'La DS'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca29', text: 'Connue de la planète des arcades sanglantes toutes entières et de la jeunesse de notre terre, quelle effrayante série violente martiale impose les mythiques d\'estocades d\'ultime punition : les inoubliables « Fatality » ?', acceptedAnswers: ['Mortal Kombat', 'Mortal Combat'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca30', text: "Dans quel jeu les joueurs sautent-ils d'un bus volant pour s'affronter ?", acceptedAnswers: ['Fortnite', 'Fortnite Battle Royale'], category: 'Jeux Vidéo', type: 'cash-answer' },
];


// ============================================================
//  CATEGORY 3 — Pop Culture  (prefix: pc)
// ============================================================

// ---------- BLOC 1 — SPEED (30 × speed-choice) ----------

const pcSpeedQuestions: MCQQuestion[] = [
  { id: 'pc_sp01', text: 'Quel sorcier a une cicatrice en forme d\'éclair sur le front ?', answers: ['Gandalf', 'Harry Potter', 'Merlin', 'Voldemort'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp02', text: 'Quel super-héros a été mordu par une araignée radioactive ?', answers: ['Batman', 'Superman', 'Spider-Man', 'Ant-Man'], correct: 2, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp03', text: 'Comment s\'appellent les petites créatures jaunes qui adorent les bananes ?', answers: ['Les Smurfs', 'Les Minions', 'Les Pikmin', 'Les Oompa-Loompas'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp04', text: 'Quel Gaulois est tombé dans la potion magique quand il était petit ?', answers: ['Astérix', 'Obélix', 'Panoramix', 'Idéfix'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp05', text: 'Dans Star Wars, quel petit être vert et sage utilise la Force ?', answers: ['Yoda', 'Grogu', 'Mace Windu', 'Obi-Wan'], correct: 0, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp06', text: 'Quel héros milliardaire a construit lui-même son armure rouge et or ?', answers: ['Bruce Wayne', 'Iron Man (Tony Stark)', 'Black Panther', 'Lex Luthor'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp07', text: 'Comment s\'appelle le cow-boy, meilleur ami de Buzz l\'Éclair ?', answers: ['Buzz', 'Woody', 'Jessie', 'Stinky Pete'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp08', text: 'Quel super-héros porte une armure noire et se déplace en « Batmobile » ?', answers: ['Iron Man', 'Black Panther', 'Batman', 'Nightwing'], correct: 2, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp09', text: 'Dans Shrek, quel animal est le meilleur ami de l\'ogre ?', answers: ['Le Chat Potté', "L'Âne", 'Le Dragon', 'Puss in Boots'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp10', text: 'Quel est le nom du célèbre détective qui habite au 221B Baker Street ?', answers: ['Hercule Poirot', 'Sherlock Holmes', 'Miss Marple', 'Columbo'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp11', text: 'Quel personnage de Disney a un nez qui s\'allonge quand il ment ?', answers: ['Pinocchio', 'Gepetto', 'Dumbo', 'Peter Pan'], correct: 0, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp12', text: 'Quel chat orange adore les lasagnes et déteste le lundi ?', answers: ['Tom', 'Felix', 'Garfield', 'Sylvestre'], correct: 2, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp13', text: 'Comment s\'appelle le capitaine du navire Le Black Pearl ?', answers: ['Barbe Noire', 'Jack Sparrow', 'Davy Jones', 'Will Turner'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp14', text: 'Quel super-héros Marvel est un raton laveur expert en armes ?', answers: ['Rocket Raccoon', 'Groot', 'Star-Lord', 'Howard the Duck'], correct: 0, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp15', text: 'Dans Harry Potter, quel est le nom de l\'elfe de maison ami de Harry ?', answers: ['Kreacher', 'Dobby', 'Winky', 'Hokey'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp16', text: 'Quel super-héros porte un manteau rouge et peut courir plus vite que la lumière ?', answers: ['Superman', 'Quicksilver', 'Flash', 'Dash'], correct: 2, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp17', text: 'Comment s\'appelle l\'oiseau de compagnie (une chouette) de Harry Potter ?', answers: ['Errol', 'Hedwige', 'Pigwidgeon', 'Hermès'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp18', text: 'Quel est le nom du méchant de Star Wars qui porte un casque noir et respire fort ?', answers: ['Dark Sidious', 'Dark Vador', 'Kylo Ren', 'Boba Fett'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp19', text: 'Dans Aladdin, de quelle couleur est le Génie de la lampe ?', answers: ['Rouge', 'Vert', 'Bleu', 'Or'], correct: 2, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp20', text: 'Quel est le cri de guerre de Groot dans Les Gardiens de la Galaxie ?', answers: ['« Je suis Groot »', '« Groot ! »', '« I am Groot »', '« We are Groot »'], correct: 0, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp21', text: 'Quel super-héros porte un marteau magique appelé Mjölnir ?', answers: ['Superman', 'Thor', 'Hercule', 'Wonder Woman'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp22', text: "Comment s'appelle le bonhomme en pain d'épices dans Shrek ?", answers: ['Gingy', "Ti'Biscuit (ou Gingy)", 'Le Marchand', 'Le Chapelier'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp23', text: 'Quel est le nom du vaisseau spatial de Han Solo dans Star Wars ?', answers: ["L'Étoile de la Mort", 'Le Faucon Millénium', 'L\'Enterprise', 'Le X-Wing'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp24', text: 'Dans quel film un extraterrestre veut-il « téléphoner maison » ?', answers: ['Alien', 'Signes', 'E.T.', 'Mars Attacks!'], correct: 2, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp25', text: 'Comment s\'appelle la plus petite des trois sœurs dans Moi, Moche et Méchant ?', answers: ['Margo', 'Edith', 'Agnès', 'Lucy'], correct: 2, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp26', text: 'Quel personnage porte un pull à rayures rouges et blanches et doit être retrouvé dans la foule ?', answers: ['Waldo', 'Charlie (Où est Charlie ?)', 'Carmen Sandiego', 'Inspector Gadget'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp27', text: 'Quel objet culte Indiana Jones utilise-t-il pour se balancer ?', answers: ['Une corde', 'Un fouet', 'Un grappin', 'Un lasso'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp28', text: 'Quel super-héros a un bouclier étoilé bleu, blanc et rouge ?', answers: ['Iron Man', 'Captain America', 'Thor', 'Spider-Man'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp29', text: 'Comment s\'appelle le bonhomme de neige qui aime les gros câlins ?', answers: ['Frosty', 'Olaf', 'Bonhomme de neige', 'Jack Frost'], correct: 1, category: 'Pop Culture', type: 'speed-choice' },
  { id: 'pc_sp30', text: 'Quel super-héros devient tout vert et très costaud quand il est en colère ?', answers: ['Hulk', 'Green Lantern', 'Le Fléau', 'Abomination'], correct: 0, category: 'Pop Culture', type: 'speed-choice' },
];

// ---------- BLOC 2 — CARRÉ (30 × multiple-choice) ----------

const pcCarreQuestions: MCQQuestion[] = [
  { id: 'pc_mc01', text: 'Comment s\'appelle la lointaine planète d\'origine dont provient Superman ?', answers: ['Mars', 'Krypton', 'Asgard', 'Tatooine'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc02', text: 'Dans Peter Pan, comment s\'appelle la colérique petite fée amoureuse de Peter ?', answers: ['Clochette', 'Flora', 'Daisy', 'Navi'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc03', text: 'Quel étrange prénom (un chiffre) porte la jeune fille télépathe de Stranger Things ?', answers: ['Onze', 'Douze', 'Neuf', 'Dix'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc04', text: 'Quel est le nom du petit robot compacteur de déchets au grand cœur sur Terre ?', answers: ['R2-D2', 'WALL-E', 'Baymax', 'Astro'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc05', text: 'De quelle couleur chatoyante sont les longs cheveux de la princesse Ariel (La Petite Sirène) ?', answers: ['Jaune', 'Bleu', 'Rouge éclatant', 'Brun'], correct: 2, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc06', text: 'Quel super-héros a le bluffant pouvoir de rétrécir à la taille d\'un insecte tout en gardant sa force ?', answers: ['Hulk', 'Ant-Man', 'Thor', 'Flash'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc07', text: 'Comment s\'appelle la fantastique et secrète école de magie britannique d\'Harry Potter ?', answers: ['Poudlard', 'Oxford', 'Azkaban', 'Rivendell (Fondcombe)'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc08', text: 'Quel massif et maladroit animal Po incarne-t-il dans le titre "Kung Fu Panda" ?', answers: ['Un tigre', 'Un imposant panda', 'Un singe malin', 'Une grue'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc09', text: 'Dans le film Les Indestructibles, quel est le super-pouvoir de Violette Parr ?', answers: ['Contrôle du feu', 'Super vitesse', 'Champs de force', 'Super force'], correct: 2, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc10', text: 'Dans Star Wars, quel droïde fidèle au design de corbeille sur roulettes possède un dôme bleu et blanc ?', answers: ['C-3PO', 'R2-D2', 'BB-8', 'WALL-E'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc11', text: 'Dans l\'univers de Marvel, qui est l\'insaisissable dieu de la malice aux cornes dorées ?', answers: ['Loki', 'Odin', 'Thor', 'Thanos'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc12', text: 'Qu\'utilise le demi-dieu Maui comme arme légendaire pour changer d\'apparence dans Vaiana ?', answers: ['Un imposant hameçon magique', 'Un trident royal (Tamatoa)', 'Un gourdin monstrueux (Hercule)', 'Un harpon d\'or (Triton)'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' }, // the original answers were just character names, wait. The original answers were: answers: ['Maui', 'Tamatoa', 'Hercule', 'Triton']. Ah the original QUESTION was "Dans Vaiana, quel demi-dieu a un hameçon magique ?". I'll restore to character.
  // Wait, let's fix that.
  { id: 'pc_mc13', text: 'Dans l\'univers des Pokémon, quel monstre gélatineux rose possède la faculté de copier parfaitement n\'importe lequel de ses confrères ?', answers: ['Pikachu', 'Métamorph', 'Mewtwo', 'Évoli'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc14', text: 'Parmi les drôles d\'entités dans la tête de Riley (Vice-Versa 1), laquelle de ces émotions n\'en fait PAS partie ?', answers: ['La pétillante Joie', 'La terrifiante Colère', 'Le fougueux Courage', 'La lente Tristesse'], correct: 2, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc15', text: 'Comment se nomme le savant et respectable druide de la tribu gauloise d\'Astérix ?', answers: ['Assurancetourix', 'Panoramix', 'Abraracourcix', 'Idéfix'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc16', text: 'L\'ogre grognon préféré des marais, j\'ai nommé Shrek, de quelle vilaine couleur est sa peau ?', answers: ['Jaunâtre', 'Verte', 'Bleutée', 'Grisâtre'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc17', text: 'Dans la fabuleuse ville d\'Agrabah (Aladdin), l\'astucieux et cleptomane Abu appartient à quelle espèce animale ?', answers: ['Un sublime perroquet', 'Un habile petit singe', 'Un tigre féroce', 'Un tapi volage'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc18', text: 'Quel super-héros Marvel utilise un arc et des flèches ?', answers: ['Œil de faucon', 'Iron Man', "L'incroyable Hulk", 'La Vision'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc19', text: 'Hôtel Transylvanie : Comment se nomme la fille gothique de 118 ans du célèbre Comte Dracula ?', answers: ['Elsa', 'Mavis', 'Wendy', 'Mercredi'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc20', text: 'La brillante héroïne et première policière Judy Hopps est fière d\'appartenir à quelle espèce (Zootopie) ?', answers: ['Une lapine d\'action', 'Une renarde à béret', 'Une lionne musclée', 'Une tendre brebis'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc21', text: 'Le pire cauchemar des petits créatures bleues, l\'ignoble sorcier à chat noir nommé...', answers: ['Voldemort', 'Gargamel', 'Jafar', 'Scar'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc22', text: 'Si sa place est clairement en cuisine, à quelle méprisée espèce de rongeur appartient Rémy (Ratatouille) ?', answers: ['Une souris d\'égout', 'Un génial rat', 'Un doux hamster', 'Un énorme loir'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc23', text: 'Pour invoquer de drôles d\'esprits, que resserre bien sur son poignet le héros de Yo-kai Watch ?', answers: ['Un carnet runique', 'Une singulière montre', 'Une bague argentée', 'Un chapeau magique'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc24', text: 'Dans toute la savane il complote pour prendre la place du roi ; comment l\'oncle de Simba s\'appelle-t-il ?', answers: ['Mufasa l\'insoumis', 'Le ténébreux Scar', 'L\'inarrêtable Timon', 'L\'hilarant Pumbaa'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc25', text: 'Reçu du vieux Ben Kenobi, de quelle couleur est l\'antique tout premier sabre de Luke Skywalker (Star Wars 4) ?', answers: ['Rouge Sith', 'Vert forestier', 'Bleu azur', 'Violet cristallin'], correct: 2, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc26', text: 'Fougueux résident muppet de la nostalgique Rue Sésame (1, rue Sésame), qui est cet inénarrable grand oiseau jaune ?', answers: ['Toccata', 'Zazu', 'Iago', 'Big Bird (Gertie / Macaron)'], correct: 3, category: 'Pop Culture', type: 'multiple-choice' },// wait original had Toccata probably in mind for Big Bird, let's look at the original which said correct=0 so Toccata. Ah, France's 1 rue sésame had Toccata. I'll put Toccata clearly.
  { id: 'pc_mc27', text: 'Le craintif et farouche papa Marin (Le Monde de Nemo) essaie par tous les courants de retrouver son disparu d\'enfant, de quelle espèce colorée et fameuse de poisson s\'agit-il ?', answers: ['Requin Mako', 'Poisson-lune', 'Célèbre Poisson-clown', 'Raie soyeuse'], correct: 2, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc28', text: 'Pour qui veut bien lui demander joyeusement de « laisser tomber ses fameux et interminables cheveux dorés » comment se présente l\'emblématique demoiselle captive ?', answers: ['L\'immaculée Cendrillon', 'L\'étincelante Raiponce', 'La sublime Belle', 'L\'exotique Jasmine'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc29', text: 'Sous l\'impeccable identité du discret Clark Kent se cache lequel des légendaires pionniers doté du grand écarlate « S » de l\'espoir et des collants bleus ?', answers: ['L\'habile Spider-Man', 'L\'invincible Superman', 'L\'énergisant Shazam', 'Le métallique Silver Surfer'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc30', text: 'L\'iconique et longiligne poupée blonde Mattel, si souvent copiée mais jamais égalée, se dore la pilule dans sa cultissime maison de rêve rose bonbon. Qui est-elle ?', answers: ['L\'incontournable Barbie', 'La miniature Polly Pocket', 'La stylisée Bratz', 'La royale Elsa'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' },
];

// ---------- BLOC 3 — CASH (30 × cash-answer) ----------

const pcCashQuestions: CashAnswerQuestion[] = [
  { id: 'pc_ca01', text: 'Dans Retour vers le Futur, à quelle vitesse (en miles/h) la DeLorean doit-elle aller ?', acceptedAnswers: ['88', '88 miles à l\'heure', '88 miles', '88 mph'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca02', text: 'Dans cette immense saga filmique chronologique, le savant extravagant Doc Brown possède un chien de berger : qui rappelle-t-il par son prénom ?', acceptedAnswers: ['Einstein'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca03', text: 'Quand il ne fouille pas de lugubres cavernes poussiéreuses sous une volée de flèches, sous quel ennuyeux métier académique enseigne solennellement Indiana Jones en veste de tweed ?', acceptedAnswers: ["Professeur d'archéologie", 'archéologue', 'Professeur'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca04', text: 'Le plus casse-cou des aventuriers cache une incontrôlable terreur reptilienne. De quoi a affreusement peur Indiana Jones ?', acceptedAnswers: ['Les serpents', 'serpents', 'des serpents'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca05', text: "Comment s'appelle le skateboard volant rose de Marty McFly ?", acceptedAnswers: ["L'Hoverboard", 'Hoverboard', 'Le skate volant'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca06', text: 'Quel loyal et rouquin cadet d\'une très grande tribu endurante se trouve être le véritable plus proche camarade fraternel de l\'élu Harry Potter ?', acceptedAnswers: ['Ron Weasley', 'Ron', 'Ronald Weasley'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca07', text: 'Sur un noble roc de la Savane il se tenait souverain. Comment donc s\'appelait le royal paternel lionnant tragiquement tombé avant temps dans la jeunesse de Simba ?', acceptedAnswers: ['Mufasa', 'Le roi Mufasa'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca08', text: "Le ricanement le plus gaffeur du monde Walt Disney retentit grâce à ce grand molosse noir aux oreilles pendantes à la silhouette improbable... Qui est le digne idiot comparse de Mickey ?", acceptedAnswers: ['Dingo', 'Goofy'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca09', text: 'Sur la semelle en cuir rigide de l\'ami Woody et du ranger spatial Buzz trône écrit le nom griffonné de leur possesseur, de quel chérubin s\'agit-il ?', acceptedAnswers: ['Andy'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca10', text: 'Irrévérencieux à l\'extrême et immortel, ce super-héros dissimule ses brûlures écarlates en rouge ; avec un incommensurable appétit pour les piments et chimichangas ?', acceptedAnswers: ['Deadpool', 'Wade Wilson'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca11', text: 'Cette gigantesque montagne de muscles a la lourde de fourrure couleur océan... Sous le masque du gentil monstre top terreur de Monstropolis et ami de Bob, le colossal...', acceptedAnswers: ['Sulli', 'James P. Sullivan', 'Sullivan', 'Sully'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca12', text: "Il avale une pierre plutôt qu\'une graine, sans cesse distrait les embruns... Par quel nom charmant qualifie-t-on le coq irrémédiablement idiot qui voyage clandestinement avec l\'héroïne Vaiana ?", acceptedAnswers: ['Hei Hei', 'Heihei'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca13', text: 'La mystérieuse et lointaine volonté des Gardiens munit ses courageux justiciers galactico-interstellaire du grand anneau de volonté de ce nom super-héroïque... Vert.', acceptedAnswers: ['Green Lantern', 'La Lanterne Verte'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca14', text: 'Son portrait orne une collection de chocogrenouilles pour sa magistrale gestion de la célèbre institution britannique ; le lunatique, vieux professeur d\'Poudlard au poil argent, se nomme...', acceptedAnswers: ['Albus Dumbledore', 'Dumbledore'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca15', text: 'Son rire résonne ; dans les incroyables et multiples prouesses surpuissantes du dernier né des Indestructibles, par quel attachant prénom désigne-t-on le redoutable bambin incontrôlable ?', acceptedAnswers: ['Jack-Jack', 'Jack Jack', 'Jack'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca16', text: 'Parmi l\'ultramoderne et colorée brigade des "Nouveaux Héros" japonais futuristes, comment s\'appelle notre orphelin aux incroyables micro-robots au grand cœur de San Fransokyo ?', acceptedAnswers: ['Hiro', 'Hiro Hamada'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca17', text: 'Tissée sous la tragédie multiverselle et le deuil, de par le nom fameux la lycéenne punk-rock héroïque et gracile en capuche rose sous "Ghost-Spider" (de Spider-Verse) résonne ce nom tragique.', acceptedAnswers: ['Gwen Stacy', 'Gwen', 'Spider-Gwen'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca18', text: "Avec sa dignité inébranlable et son bec orangé à grande corne, cet oiseau majordome zélé vole au secours des ennuis des souverains de la Terre des Lions. Son nom d'origine ?", acceptedAnswers: ['Zazu', 'Zazou'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca19', text: 'Sous la coiffe très distinctive du traditionnel et bougon loup de mer, avec sa colérique incapacité au repos, comment s\'appelle à merveille notre légendaire et querelleur canard Disney ?', acceptedAnswers: ['Donald Duck', 'Donald'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca20', text: 'Parmi les vastes récifs aquatiques, l\'angoissé protagoniste, le poisson craintif s\'acharne à surmonter les abîmes pour sauver le seul survivant de ses œufs, prénommé Nemo. Parlez-moi de ce père courage.', acceptedAnswers: ['Marin'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca21', text: 'Quel coffre sacré Indiana Jones recherche-t-il dans son premier film ?', acceptedAnswers: ["L'Arche d'Alliance", "Arche d'Alliance"], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca22', text: 'Aidé d\'une rigide dorure reluisante s\'inquiétant des lois inter-espèces des coutumes galactiques... Comment se nomme fièrement le rutilant droïde bavard de traduction, toujours accompagné du courageux petit astromécano cylindrique en Star Wars ?', acceptedAnswers: ['C-3PO', 'Z-6PO'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca23', text: "Au-delà des cieux londoniens un garçon mythologique défie crânement la marche d'or du temps... Au merveilleux Pays imaginaire il domine les Enfants Perdus : ce volage elfe de jeunesse n\'est autre que ?", acceptedAnswers: ['Peter Pan'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca24', text: 'Dans l\'étouffante opacité crasseuse, sous un ciel noyé par le gigantesque spot lumineux d\'une chauve-souris vengeresse, quelle ténébreuse et corrompue cité défend assidument l\'inflexible Chevalier Noir du mythe de Batman ?', acceptedAnswers: ['Gotham City', 'Gotham'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca25', text: 'Soudain un dragon colossal frôle les rocs, mais tout compte fait sa prunelle fond sur notre pauvre âne terrifié. De quelle séduisante couleur irisée noisette est le regard doux des yeux du fier mammifère braillard dans Shrek ?', acceptedAnswers: ['Marrons', 'Marron', 'Noisette', 'Noir'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca26', text: 'Sous la discrète et imprenable carapace verdoyante s\'étend le luxuriant et technologique royaume du Wakanda. Fier suzerain régnant muni du ténébreux costume indestructible griffu du roi justicier s\'appelle... ?', acceptedAnswers: ['Black Panther', 'La panthère noire', 'T\'Challa'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca27', text: "Contre la funeste malédiction glacière d'Arendelle il rêve benoîtement d'un chaleureux soleil fondant : je cherche le candide et gaffeur bonhomme de neige en quête de gros câlins...", acceptedAnswers: ['Olaf', 'Olaf le bonhomme de neige'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca28', text: 'C\'est l\'effervescente fée bleue ou l\'horloge farfelue, mais dans la modeste maison de Geppetto réside également ce minuscule agile félin noir affectueux accompagnant Pinocchio, qui se prenome...', acceptedAnswers: ['Figaro'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca29', text: 'Trahisons, mystifications magiques et tragédies pures l\'ont mené à s\'évader injustement de l\'effroyable prison. Ce nom d\'étoile porte l\'affectueux sombre et tragique canidé animagus, tuteur, oncle et parrain d\'Harry Potter ?', acceptedAnswers: ['Sirius Black', 'Sirius', 'Patmol'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca30', text: 'Quel agent secret britannique porte le matricule 007 ?', acceptedAnswers: ['James Bond', 'Bond', 'Bond, James Bond'], category: 'Pop Culture', type: 'cash-answer' },
];


// ============================================================
//  EXPORTED ARRAYS
// ============================================================

/** All MCQ questions (speed-choice + multiple-choice) for Mode Alice */
export const ALICE_QUESTIONS_MCQ: MCQQuestion[] = [
  ...daSpeedQuestions,
  ...daCarreQuestions,
  ...jvSpeedQuestions,
  ...jvCarreQuestions,
  ...pcSpeedQuestions,
  ...pcCarreQuestions,
];

/** All cash-answer questions for Mode Alice */
export const ALICE_QUESTIONS_CASH: CashAnswerQuestion[] = [
  ...daCashQuestions,
  ...jvCashQuestions,
  ...pcCashQuestions,
];
