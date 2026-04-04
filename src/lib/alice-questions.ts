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
  { id: 'da_mc01', text: 'Nom du grand oiseau mécanique (Cités d\'Or) ?', answers: ['Phénix', 'Grand Condor', 'Solaris', 'Aigle'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc02', text: 'Quel animal est Gumball ?', answers: ['Chien', 'Lapin', 'Chat', 'Poisson'], correct: 2, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc03', text: 'Démon enfermé dans Naruto ?', answers: ['Loup', 'Corbeau', 'Serpent', 'Renard'], correct: 3, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc04', text: 'Couleur de peau des Simpson ?', answers: ['Orange', 'Rose', 'Jaune', 'Blanche'], correct: 2, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc05', text: 'Quel chien est le policier de la Pat\' Patrouille ?', answers: ['Marcus', 'Chase', 'Rocky', 'Ruben'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc06', text: 'Pouvoir secret d\'Anya dans Spy x Family ?', answers: ['Force', 'Téléportation', 'Télépathie', 'Voler'], correct: 2, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc07', text: 'Animal de Sailor Moon (Luna) ?', answers: ['Hibou', 'Chat noir', 'Lapin', 'Licorne'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc08', text: 'Ranma + eau froide = ?', answers: ['Panda', 'Fille', 'Canard', 'Cochon'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc09', text: 'Lieu de vie de Bob l\'éponge ?', answers: ['Rocher', 'Ananas', 'Coquillage', 'Grotte'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc10', text: 'Chef du WOOHP dans Totally Spies ?', answers: ['Tom', 'Bill', 'Jerry', 'Bob'], correct: 2, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc11', text: 'Couleur du bonnet du Grand Schtroumpf ?', answers: ['Bleu', 'Blanc', 'Rouge', 'Vert'], correct: 2, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc12', text: 'Métier de Nicole (maman de Gumball) ?', answers: ['Usine Arc-en-ciel', 'École', 'Bureau', 'Garage'], correct: 0, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc13', text: 'Quel animal est Bingo, la petite sœur de Bluey ?', answers: ['Un chat', 'Un chien', 'Un oiseau', 'Un koala'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc14', text: 'Quel chien accompagne Scooby-Doo (son neveu) ?', answers: ['Scrappy-Doo', 'Rex', 'Milou', 'Idéfix'], correct: 0, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc15', text: 'Couleur du sabre de Luke Skywalker (film 1) ?', answers: ['Rouge', 'Vert', 'Bleu', 'Violet'], correct: 2, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc16', text: 'Quel animal est Hiro dans Les Nouveaux Héros ?', answers: ['Robot', 'Humain', 'Chat', 'Chien'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc17', text: 'Nom de la petite fée de Link ?', answers: ['Clochette', 'Navi', 'Flora', 'Iris'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc18', text: 'Animal de Perry (Phinéas & Ferb) ?', answers: ['Loutre', 'Castor', 'Ornithorynque', 'Rat'], correct: 2, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc19', text: 'Prénom civil de Chat Noir ?', answers: ['Marin', 'Adrien', 'Luka', 'Nino'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc20', text: 'Espèce de Nemo ?', answers: ['Requin', 'Poisson-Clown', 'Daurade', 'Raie'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc21', text: 'Nom du fruit magique mangé par Luffy ?', answers: ['Fruit du démon', 'Gomu Gomu', 'Fruit d\'Or', 'Mangue'], correct: 0, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc22', text: 'Oncle méchant de Simba ?', answers: ['Mufasa', 'Scar', 'Timon', 'Pumbaa'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc23', text: 'Nom du petit dinosaure rose (Mario) ?', answers: ['Yoshi', 'Birdo', 'Bowser', 'Toad'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc24', text: 'Ville de la Pat\' Patrouille ?', answers: ['Gotham', 'Grande Vallée', 'Métropolis', 'Paris'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc25', text: 'Nom du fils de Vegeta venu du futur (DBZ) ?', answers: ['Gohan', 'Trunks', 'Goten', 'Broly'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc26', text: 'Ami elfe de maison d\'Harry Potter ?', answers: ['Gobelin', 'Dobby', 'Legolas', 'Yoda'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc27', text: 'Pouvoir principal de Flash ?', answers: ['Force', 'Vitesse', 'Vol', 'Feu'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc28', text: 'Couleur du sabre laser de Dark Vador ?', answers: ['Bleu', 'Vert', 'Rouge', 'Blanc'], correct: 2, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc29', text: 'Animal de Judy Hopps dans Zootopie ?', answers: ['Renard', 'Lapine', 'Lionne', 'Mouton'], correct: 1, category: 'Dessins animés & Manga', type: 'multiple-choice' },
  { id: 'da_mc30', text: 'Comment s\'appelle la petite sœur de Gumball ?', answers: ['Anaïs', 'Nicole', 'Penny', 'Carrie'], correct: 0, category: 'Dessins animés & Manga', type: 'multiple-choice' },
];

// ---------- BLOC 3 — CASH (30 × cash-answer) ----------

const daCashQuestions: CashAnswerQuestion[] = [
  { id: 'da_ca01', text: 'Navire solaire dans les Cités d\'Or ?', acceptedAnswers: ['Le Solaris', 'Solaris'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca02', text: 'Nom du méchant invisible de l\'Inspecteur Gadget ?', acceptedAnswers: ['Le Docteur Gang', 'Docteur Gang', 'Dr Gang'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca03', text: 'Que porte Nezuko (Demon Slayer) dans sa bouche ?', acceptedAnswers: ['Un bâillon en bambou', 'bâillon en bambou', 'bâillon'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca04', text: 'Détective coincé dans un corps d\'enfant ?', acceptedAnswers: ['Conan', 'Shinichi', 'Conan Shinichi', 'Détective Conan'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca05', text: 'Comment s\'appelle le chat du Docteur Gang ?', acceptedAnswers: ['Madchat'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca06', text: 'Ce que cherchent les frères Elric (Alchimistes) ?', acceptedAnswers: ['La Pierre Philosophale', 'Pierre Philosophale'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca07', text: 'Quel animal est Richard, le papa de Gumball ?', acceptedAnswers: ['Un lapin rose', 'lapin rose', 'lapin'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca08', text: 'Quel est le type de véhicule de la Mystery Machine ?', acceptedAnswers: ['Une camionnette', 'camionnette', 'Van', 'un van'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca09', text: 'Objet de Denver pour voyager dans le passé ?', acceptedAnswers: ['Sa coquille d\'œuf', 'coquille d\'œuf', 'coquille'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca10', text: 'Sport pratiqué par Hanamichi dans Slam Dunk ?', acceptedAnswers: ['Basketball', 'basket'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca11', text: 'Arme de prédilection de Gon (Hunter x Hunter) ?', acceptedAnswers: ['Canne à pêche', 'canne à peche'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca12', text: 'Tournoi d\'arts martiaux culte de Dragon Ball ?', acceptedAnswers: ['Tenkaichi Budokai'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca13', text: 'Nom des sabres des Shinigamis dans Bleach ?', acceptedAnswers: ['Zanpakutō', 'Zanpakuto'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca14', text: 'Intelligence artificielle maléfique dans Code Lyoko ?', acceptedAnswers: ['X.A.N.A.', 'XANA'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca15', text: 'Nom du directeur barbu de Poudlard ?', acceptedAnswers: ['Albus Dumbledore', 'Dumbledore'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca16', text: 'De quelle espèce est le dragon Krokmou ?', acceptedAnswers: ['Furie Nocturne'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca17', text: 'Poisson bleu amnésique (Nemo) ?', acceptedAnswers: ['Dory'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca18', text: 'Prénom de la nièce maligne de Gadget ?', acceptedAnswers: ['Sophie'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca19', text: 'Nom du chien de Gadget qui se déguise ?', acceptedAnswers: ['Finot'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca20', text: 'Pays d\'origine d\'Esteban (Cités d\'Or) ?', acceptedAnswers: ["L'Espagne", 'Espagne'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca21', text: 'Friandises préférées de Scooby-Doo ?', acceptedAnswers: ['Scooby-Snacks'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca22', text: 'Seul Schtroumpf avec bonnet et habit rouges ?', acceptedAnswers: ['Le Grand Schtroumpf', 'Grand Schtroumpf'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca23', text: 'Quel animal est Darwin (Gumball) à l\'origine ?', acceptedAnswers: ['Un poisson rouge', 'poisson rouge', 'poisson'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca24', text: 'Prénom de l\'héroïne de Miraculous ?', acceptedAnswers: ['Marinette'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca25', text: 'Prénom du petit garçon chef de la Pat\' Patrouille ?', acceptedAnswers: ['Ryder'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca26', text: 'Prénom du cyclope vert dans Monstres et Cie ?', acceptedAnswers: ['Bob', 'Bob Razowski', 'Razowski'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca27', text: 'Fiancée de Ranma dans Ranma 1/2 ?', acceptedAnswers: ['Akane', 'Adeline'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca28', text: 'En quel animal se transforme le père de Ranma ?', acceptedAnswers: ['Un Panda', 'Panda'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca29', text: 'Prénom du cow-boy dont le cheval est Jolly Jumper ?', acceptedAnswers: ['Lucky Luke'], category: 'Dessins animés & Manga', type: 'cash-answer' },
  { id: 'da_ca30', text: 'Nom de la montre magique de Ben 10 ?', acceptedAnswers: ["L'Omnitrix", 'Omnitrix'], category: 'Dessins animés & Manga', type: 'cash-answer' },
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
  { id: 'jv_mc01', text: 'Console de Nintendo utilisable en salon ou portable ?', answers: ['Wii U', 'GameCube', 'Switch', 'NES'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc02', text: 'Animal qu\'est Tom Nook (Animal Crossing) ?', answers: ['Rat', 'Raton laveur', 'Tanuki', 'Chat'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc03', text: 'Nom de la princesse que Mario doit souvent sauver ?', answers: ['Zelda', 'Peach', 'Harmonie', 'Daisy'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc04', text: 'Objet pour viser le 1er dans Mario Kart ?', answers: ['Banane', 'Carapace rouge', 'Carapace bleue', 'Éclair'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc05', text: 'Renard à deux queues qui accompagne Sonic ?', answers: ['Knuckles', 'Tails', 'Shadow', 'Amy'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc06', text: 'Console pour la 1ère version de Pokémon ?', answers: ['NES', 'Game Boy', 'Nintendo 64', 'DS'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc07', text: 'Nom du dragon ennemi juré de Samus (Metroid) ?', answers: ['Bowser', 'Spyro', 'Ridley', 'Alduin'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc08', text: 'Monstre de Minecraft qui se téléporte ?', answers: ['Creeper', 'Zombie', 'Enderman', 'Ghast'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc09', text: 'Nom du studio suédois qui a créé Minecraft ?', answers: ['Ubisoft', 'Mojang', 'Epic Games', 'Sony'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc10', text: 'Monnaie virtuelle de Roblox ?', answers: ['V-Bucks', 'Robux', 'Coins', 'Dollars'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc11', text: 'Studio créateur de la PlayStation ?', answers: ['Microsoft', 'Nintendo', 'Sony', 'SEGA'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc12', text: 'Princesse de l\'espace dans Mario Galaxy ?', answers: ['Peach', 'Daisy', 'Harmonie', 'Zelda'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc13', text: 'IA qui aide Master Chief dans Halo ?', answers: ['Siri', 'Alexa', 'Cortana', 'Glados'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc14', text: 'Ville de départ de Pokémon Rouge et Bleu ?', answers: ['Bourg Palette', 'Argenta', 'Azuria', 'Parmanie'], correct: 0, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc15', text: 'Objet pour rendre invisible dans Mario Kart ?', answers: ['Étoile', 'Boo', 'Champignon', 'Banane'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc16', text: 'Couleur de la casquette de Mario ?', answers: ['Bleue', 'Verte', 'Rouge', 'Jaune'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc17', text: 'Instrument pour voyager dans le temps (Zelda) ?', answers: ['Flûte', 'Ocarina', 'Harpe', 'Guitare'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc18', text: 'Monstre qui explose dans Minecraft ?', answers: ['Squelette', 'Creeper', 'Araignée', 'Cochon'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc19', text: 'Petit fantôme que l\'on mange dans Pac-Man ?', answers: ['Casper', 'Blinky', 'Boo', 'Slimer'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc20', text: 'Nom de la console portable de Sony après la PSP ?', answers: ['GameGear', 'PS Vita', 'Switch', 'DS'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc21', text: 'Jeu mobile où l\'on lance des oiseaux sur des cochons ?', answers: ['Flappy Bird', 'Angry Birds', 'Candy Crush', 'Roblox'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc22', text: 'Héros de Halo, soldat en armure verte ?', answers: ['Doom Guy', 'Master Chief', 'Kratos', 'Marcus'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc23', text: 'Jeu où l\'on crée ses propres parcs d\'attractions ?', answers: ['Sim City', 'RollerCoaster Tycoon', 'Les Sims', 'Mario'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc24', text: 'Nom du royaume protégé par Link ?', answers: ['Mushroom Kingdom', 'Hyrule', 'Azeroth', 'Équestria'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc25', text: 'Nom du jeu de « bac à sable » sur la vie quotidienne ?', answers: ['Minecraft', 'Les Sims', 'Animal Crossing', 'GTA'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc26', text: 'Quel bloc rare et bleu permet les meilleures armures ?', answers: ['Or', 'Fer', 'Diamant', 'Charbon'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc27', text: 'Nom du méchant récurrent dans Zelda ?', answers: ['Bowser', 'Ganondorf', 'Docteur Gang', 'Mewtwo'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc28', text: 'Nom du frère de Mario en tenue verte ?', answers: ['Wario', 'Waluigi', 'Luigi', 'Yoshi'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc29', text: 'Pierre pour faire évoluer Pikachu en Raichu ?', answers: ['Pierre Feu', 'Pierre Eau', 'Pierre Foudre', 'Pierre Lune'], correct: 2, category: 'Jeux Vidéo', type: 'multiple-choice' },
  { id: 'jv_mc30', text: 'Quel jeu utilise des briques emboîtables ?', answers: ['Minecraft', 'LEGO', 'Roblox', 'Tetris'], correct: 1, category: 'Jeux Vidéo', type: 'multiple-choice' },
];

// ---------- BLOC 3 — CASH (30 × cash-answer) ----------

const jvCashQuestions: CashAnswerQuestion[] = [
  { id: 'jv_ca01', text: 'Nom du monde souterrain rempli de lave (Minecraft) ?', acceptedAnswers: ['Le Nether', 'Nether'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca02', text: 'Jeu où l\'on doit empiler des briques pour faire des lignes ?', acceptedAnswers: ['Tetris'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca03', text: 'Nom de l\'oiseau rose qui accompagne Banjo ?', acceptedAnswers: ['Kazooie'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca04', text: 'Professeur qui donne le premier Pokémon au héros ?', acceptedAnswers: ['Le Professeur Chen', 'Professeur Chen', 'Chen'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca05', text: 'Personnage de Street Fighter au kimono blanc ?', acceptedAnswers: ['Ryu'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca06', text: 'Dimension où l\'on combat le dragon final (Minecraft) ?', acceptedAnswers: ["L'Ender", 'Ender', "L'End", 'End'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca07', text: 'Accessoire pour chasser des canards sur NES ?', acceptedAnswers: ['Le NES Zapper', 'NES Zapper', 'Zapper'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca08', text: 'Nom de la jument fidèle de Link ?', acceptedAnswers: ['Épona', 'Epona'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca09', text: 'Squelette rigolo et mystérieux dans Undertale ?', acceptedAnswers: ['Sans'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca10', text: 'Accessoire sport pour la Nintendo Switch ?', acceptedAnswers: ['Le Ring-Con', 'Ring-Con'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca11', text: 'Jeu où il faut s\'échapper d\'un complexe avec des portails ?', acceptedAnswers: ['Portal'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca12', text: 'Ville imaginaire de la série GTA (inspirée de LA) ?', acceptedAnswers: ['Los Santos'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca13', text: 'Comment s\'appelle le petit robot de Astro\'s Playroom ?', acceptedAnswers: ['Astro'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca14', text: 'Quel objet donne un boost de vitesse dans Mario Kart ?', acceptedAnswers: ['Le Champignon', 'Champignon'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca15', text: 'Jeu de société avec une version vidéo pour acheter des rues ?', acceptedAnswers: ['Le Monopoly', 'Monopoly'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca16', text: 'Nom du dinosaure noir, frère de Yoshi ?', acceptedAnswers: ['Boshi'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca17', text: 'Jeu de skate portant le nom d\'un champion américain ?', acceptedAnswers: ["Tony Hawk's Pro Skater", 'Tony Hawk'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca18', text: 'Champignon qui donne une vie supplémentaire ?', acceptedAnswers: ['Le champignon vert', 'champignon vert', '1-Up'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca19', text: 'Nom de la petite fée qui accompagne Link dans Ocarina of Time ?', acceptedAnswers: ['Navi'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca20', text: 'Sur quelle console joue-t-on à Spider-Man ou God of War ?', acceptedAnswers: ['PlayStation', 'PS4', 'PS5'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca21', text: 'Jeu pour faire deviner des mots en dessinant ?', acceptedAnswers: ['Pictionary', 'Gartic Phone'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca22', text: 'Bébé dinosaure rose qui ressemble à Yoshi ?', acceptedAnswers: ['Birdo'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca23', text: 'Jeu où l\'on doit aligner des bonbons ?', acceptedAnswers: ['Candy Crush'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca24', text: 'Tablette technologique de Link dans Breath of the Wild ?', acceptedAnswers: ['Tablette Sheikah', 'Sheikah'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca25', text: 'Ville sous-marine dans le jeu BioShock ?', acceptedAnswers: ['Rapture'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca26', text: 'Objet pour voler et planer dans Minecraft ?', acceptedAnswers: ['Les Élytres', 'Élytres', 'Elytra'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca27', text: 'Nom du petit robot rond qui roule dans Star Wars ?', acceptedAnswers: ['BB-8'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca28', text: 'Nom de la console portable Nintendo à deux écrans ?', acceptedAnswers: ['Nintendo DS', 'DS'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca29', text: 'Jeu de combat avec des « Fatality » ?', acceptedAnswers: ['Mortal Kombat'], category: 'Jeux Vidéo', type: 'cash-answer' },
  { id: 'jv_ca30', text: 'Quel jeu de tir a un bus volant au début ?', acceptedAnswers: ['Fortnite'], category: 'Jeux Vidéo', type: 'cash-answer' },
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
  { id: 'pc_mc01', text: 'Nom de la planète d\'origine de Superman ?', answers: ['Mars', 'Krypton', 'Asgard', 'Tatooine'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc02', text: 'Quelle petite fée brille de mille feux dans Peter Pan ?', answers: ['Clochette', 'Flora', 'Daisy', 'Navi'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc03', text: 'Dans Stranger Things, prénom de la fille télépathe ?', answers: ['Onze', 'Douze', 'Neuf', 'Dix'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc04', text: 'Quel est le nom du robot de nettoyage amoureux d\'EVE ?', answers: ['R2-D2', 'WALL-E', 'Baymax', 'Astro'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc05', text: 'Couleur des cheveux de la Petite Sirène, Ariel ?', answers: ['Jaune', 'Bleu', 'Rouge', 'Brun'], correct: 2, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc06', text: 'Quel super-héros peut devenir minuscule ?', answers: ['Hulk', 'Ant-Man', 'Thor', 'Flash'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc07', text: 'Nom de l\'école de magie de Harry Potter ?', answers: ['Poudlard', 'Oxford', 'Azkaban', 'Rivendell'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc08', text: 'Quel animal est « Kung Fu Panda » ?', answers: ['Tigre', 'Panda', 'Singe', 'Grue'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc09', text: 'Pouvoir de Violette dans Les Indestructibles ?', answers: ['Feu', 'Vitesse', 'Invisibilité', 'Force'], correct: 2, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc10', text: 'Nom du robot blanc et bleu qui ressemble à une poubelle ?', answers: ['C-3PO', 'R2-D2', 'BB-8', 'WALL-E'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc11', text: 'Quel super-héros Marvel est un dieu malicieux ?', answers: ['Loki', 'Odin', 'Thor', 'Thanos'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc12', text: 'Dans Vaiana, quel demi-dieu a un hameçon magique ?', answers: ['Maui', 'Tamatoa', 'Hercule', 'Triton'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc13', text: 'Quel Pokémon peut prendre l\'apparence de n\'importe qui ?', answers: ['Pikachu', 'Métamorph', 'Mewtwo', 'Évoli'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc14', text: 'Quelle émotion n\'est PAS dans le film Vice-Versa ?', answers: ['Joie', 'Colère', 'Courage', 'Tristesse'], correct: 2, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc15', text: 'Nom du druide qui prépare la potion magique ?', answers: ['Assurancetourix', 'Panoramix', 'Abraracourcix', 'Idéfix'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc16', text: 'Couleur de peau de l\'ogre Shrek ?', answers: ['Jaune', 'Vert', 'Bleu', 'Gris'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc17', text: 'Dans Aladdin, de quel animal Abu est-il l\'espèce ?', answers: ['Un perroquet', 'Un singe', 'Un tigre', 'Un tapis'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc18', text: 'Quel super-héros Marvel utilise un arc et des flèches ?', answers: ['Hawkeye', 'Iron Man', 'Hulk', 'Vision'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc19', text: 'Comment s\'appelle la fille du Comte Dracula ?', answers: ['Elsa', 'Mavis', 'Wendy', 'Mercredi'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc20', text: 'Dans Zootopie, quel animal est l\'héroïne Judy Hopps ?', answers: ['Une lapine', 'Une renarde', 'Une lionne', 'Une brebis'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc21', text: 'Quel méchant sorcier veut capturer les Schtroumpfs ?', answers: ['Voldemort', 'Gargamel', 'Jafar', 'Scar'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc22', text: 'Animal qui est Rémy dans le film Ratatouille ?', answers: ['Une souris', 'Un rat', 'Un hamster', 'Un loir'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc23', text: 'Objet magique utilisé par le héros de Yo-kai Watch ?', answers: ['Un carnet', 'Une montre', 'Une bague', 'Un chapeau'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc24', text: 'Nom du lion méchant, oncle de Simba ?', answers: ['Mufasa', 'Scar', 'Timon', 'Pumbaa'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc25', text: 'Couleur du sabre de Luke dans le tout premier film ?', answers: ['Rouge', 'Vert', 'Bleu', 'Violet'], correct: 2, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc26', text: 'Quel oiseau géant vit dans la rue Sésame ?', answers: ['Toccata', 'Zazu', 'Iago', 'Donald'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc27', text: 'Espèce de Nemo dans le film de Pixar ?', answers: ['Requin', 'Poisson-lune', 'Poisson-clown', 'Raie'], correct: 2, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc28', text: 'Nom de la jeune fille aux cheveux magiques très longs ?', answers: ['Cendrillon', 'Raiponce', 'Belle', 'Jasmine'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc29', text: 'Quel super-héros porte un costume bleu et un « S » rouge ?', answers: ['Spider-Man', 'Superman', 'Shazam', 'Silver Surfer'], correct: 1, category: 'Pop Culture', type: 'multiple-choice' },
  { id: 'pc_mc30', text: 'Comment s\'appelle la poupée qui vit dans une « Dreamhouse » ?', answers: ['Barbie', 'Polly Pocket', 'Bratz', 'Elsa'], correct: 0, category: 'Pop Culture', type: 'multiple-choice' },
];

// ---------- BLOC 3 — CASH (30 × cash-answer) ----------

const pcCashQuestions: CashAnswerQuestion[] = [
  { id: 'pc_ca01', text: 'Vitesse nécessaire à la Delorean pour voyager dans le temps ?', acceptedAnswers: ['88 miles à l\'heure', '88 miles', '141 km/h', '141km/h'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca02', text: "Comment s'appelle le chien de Doc Brown dans le futur ?", acceptedAnswers: ['Einstein'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca03', text: 'Véritable métier d\'Indiana Jones ?', acceptedAnswers: ["Professeur d'archéologie", 'archéologue'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca04', text: 'Phobie (peur bleue) d\'Indiana Jones ?', acceptedAnswers: ['Les serpents', 'serpents'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca05', text: 'Nom du skateboard volant dans Retour vers le Futur 2 ?', acceptedAnswers: ["L'Hoverboard", 'Hoverboard'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca06', text: 'Meilleur ami roux de Harry Potter ?', acceptedAnswers: ['Ron Weasley', 'Ron'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca07', text: 'Père de Simba dans Le Roi Lion ?', acceptedAnswers: ['Mufasa'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca08', text: "Nom de l'ami de Mickey qui est un grand chien maladroit ?", acceptedAnswers: ['Dingo'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca09', text: 'Dans Toy Story, nom de l\'enfant à qui appartiennent les jouets ?', acceptedAnswers: ['Andy'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca10', text: 'Quel super-héros Marvel est très bavard et adore les chimichangas ?', acceptedAnswers: ['Deadpool'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca11', text: 'Nom du monstre bleu et poilu, ami de Bob Razowski ?', acceptedAnswers: ['Sulli', 'James P. Sullivan', 'Sullivan'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca12', text: "Comment s'appelle le coq un peu « idiot » dans Vaiana ?", acceptedAnswers: ['Hei Hei'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca13', text: 'Quel super-héros porte une bague magique verte ?', acceptedAnswers: ['Green Lantern'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca14', text: 'Nom du directeur de l\'école de Poudlard ?', acceptedAnswers: ['Albus Dumbledore', 'Dumbledore'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca15', text: 'Dans Les Indestructibles, quel est le prénom du bébé ?', acceptedAnswers: ['Jack-Jack'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca16', text: 'Quel est le nom du garçon leader des Nouveaux Héros ?', acceptedAnswers: ['Hiro', 'Hiro Hamada'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca17', text: 'Quel super-héros Marvel est une femme vêtue d\'araignée blanche et rose ?', acceptedAnswers: ['Ghost-Spider', 'Gwen Stacy'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca18', text: "Comment s'appelle l'oiseau qui sert de majordome au Roi Lion ?", acceptedAnswers: ['Zazu'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca19', text: 'Quel est le nom du canard colérique, ami de Mickey ?', acceptedAnswers: ['Donald Duck', 'Donald'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca20', text: 'Dans Le Monde de Nemo, comment s\'appelle le père de Nemo ?', acceptedAnswers: ['Marin'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca21', text: 'Quel objet Indiana Jones cherche-t-il dans le premier film ?', acceptedAnswers: ["L'Arche d'Alliance", "Arche d'Alliance"], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca22', text: 'Quel est le nom du robot doré qui parle 6 millions de langues ?', acceptedAnswers: ['C-3PO'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca23', text: "Comment s'appelle l'ami de Peter Pan qui ne veut pas grandir ?", acceptedAnswers: ['Peter Pan'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca24', text: 'Quel est le nom de la ville protégée par Batman ?', acceptedAnswers: ['Gotham City', 'Gotham'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca25', text: 'Dans Shrek, de quelle couleur sont les yeux de l\'âne ?', acceptedAnswers: ['Marrons'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca26', text: 'Quel super-héros porte un costume noir avec une panthère ?', acceptedAnswers: ['Black Panther'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca27', text: "Comment s'appelle le bonhomme de neige qui aime l'été ?", acceptedAnswers: ['Olaf'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca28', text: 'Quel est le nom du chat noir dans Pinocchio ?', acceptedAnswers: ['Figaro'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca29', text: 'Dans Harry Potter, quel est le nom du parrain de Harry ?', acceptedAnswers: ['Sirius Black', 'Sirius'], category: 'Pop Culture', type: 'cash-answer' },
  { id: 'pc_ca30', text: 'Quel est le nom de l\'agent secret 007 ?', acceptedAnswers: ['James Bond'], category: 'Pop Culture', type: 'cash-answer' },
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
