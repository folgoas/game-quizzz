import type { MCQQuestion, CashAnswerQuestion } from './game-types';

const hpSpeed: MCQQuestion[] = [
  { id: 'hp_s1', text: "Comment s'appelle le professeur de potions en première année ?", answers: ["McGonagall", "Rogue", "Flitwick", "Chourave"], correct: 1, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_s2', text: "Quel est l'animal de compagnie de Ron Weasley ?", answers: ["Un chat", "Un hibou", "Un rat", "Un crapaud"], correct: 2, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_s3', text: "Comment s'appelle l'école de magie ?", answers: ["Poudlard", "Durmstrang", "Beauxbâtons", "Ilvermorny"], correct: 0, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_s4', text: "Quelle est la maison de Drago Malefoy ?", answers: ["Gryffondor", "Serpentard", "Poufsouffle", "Serdaigle"], correct: 1, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_s5', text: "Où se trouve le quai pour prendre le Poudlard Express ?", answers: ["King's Cross", "Victoria Station", "Waterloo", "Gare du Nord"], correct: 0, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_s6', text: "Quel est le prénom d'Hagrid ?", answers: ["Albus", "Rubeus", "Severus", "Sirius"], correct: 1, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_s7', text: "Quel sortilège permet d'ouvrir une porte verrouillée ?", answers: ["Lumos", "Alohomora", "Expelliarmus", "Nox"], correct: 1, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_s8', text: "Qui donne à Harry la cape d'invisibilité ?", answers: ["Rogue", "Dumbledore", "Hagrid", "Sirius"], correct: 1, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_s9', text: "Quel animal est le Patronus de Harry père ?", answers: ["Une biche", "Un cerf", "Un chien", "Un loup"], correct: 1, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_s10', text: "Combien y a-t-il de balles au Quidditch ?", answers: ["2", "3", "4", "5"], correct: 2, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_s11', text: "Qui tue Nagini le serpent ?", answers: ["Harry", "Ron", "Neville", "Hermione"], correct: 2, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_s12', text: "Où habite l'oncle de Harry au début de la saga ?", answers: ["Godric's Hollow", "Privet Drive", "Chemin de Traverse", "Pré-au-Lard"], correct: 1, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_s13', text: "Quel est le cœur de la baguette de Harry ?", answers: ["Crin de licorne", "Plume de phénix", "Plume de Sombral", "Plume de phénix de Fumseck"], correct: 3, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_s14', text: "Quel est le poste de Harry au Quidditch ?", answers: ["Poursuiveur", "Batteur", "Attrapeur", "Gardien"], correct: 2, category: 'Harry Potter', type: 'speed-choice' },
  { id: 'hp_s15', text: "Comment s'appelle le chat d'Hermione ?", answers: ["Croûtard", "Pattenrond", "Miss Teigne", "Coquecigrue"], correct: 1, category: 'Harry Potter', type: 'speed-choice' }
];

const hpMcq: MCQQuestion[] = [
  { id: 'hp_m1', text: "Lequel de ces objets n'est PAS une Relique de la Mort ?", answers: ["La Baguette de Sureau", "La Cape d'Invisibilité", "Le Retourneur de Temps", "La Pierre de Résurrection"], correct: 2, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_m2', text: "Combien y a-t-il d'Horcruxes (en comptant Harry) ?", answers: ["6", "7", "8", "9"], correct: 1, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_m3', text: "Quelle potion permet de prendre l'apparence de quelqu'un d'autre ?", answers: ["Le Polynectar", "Le Felix Felicis", "Le Veritaserum", "L'Amortentia"], correct: 0, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_m4', text: "Où se trouve l'entrée de la Chambre des Secrets ?", answers: ["Dans la bibliothèque", "Dans les toilettes des filles", "Sous le grand escalier", "Dans le bureau de Dumbledore"], correct: 1, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_m5', text: "Quelle est la créature gardienne de la prison d'Azkaban ?", answers: ["L'Épouvantard", "Le Sombral", "Le Détraqueur", "Le Basilic"], correct: 2, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_m6', text: "Comment s'appelle l'arbre qui garde l'entrée de la Cabane Hurlante ?", answers: ["Le Saule Cogneur", "Le Chêne Furieux", "L'Orme Sanglant", "L'Arbre Mortel"], correct: 0, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_m7', text: "Quel est le nom de plume (faux nom) du père de Harry (Maraudeurs) ?", answers: ["Lunard", "Queudver", "Patmol", "Cornedrue"], correct: 3, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_m8', text: "Lequel de ces personnages est un Fantôme de maison ?", answers: ["Peeves", "Nick Quasi-Sans-Tête", "Mimi Geignarde", "Le Baron Sanglant"], correct: 1, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_m9', text: "Qui enseigne la Défense contre les forces du Mal en 3ème année ?", answers: ["Quirrell", "Lockhart", "Lupin", "Maugrey"], correct: 2, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_m10', text: "Quel est le vrai nom de Lord Voldemort ?", answers: ["Salazar Serpentard", "Tom Elvis Jedusor", "Corvus Gaunt", "Lucius Malefoy"], correct: 1, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_m11', text: "Comment s'appelle le dragon de Gringotts !", answers: ["Pansedefer Ukrainien", "Magyar à Pointes", "Vert Gallois", "Il n'a pas de nom"], correct: 0, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_m12', text: "Qui détruit le médaillon de Serpentard ?", answers: ["Harry", "Ron", "Hermione", "Neville"], correct: 1, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_m13', text: "Qui tue Sirius Black ?", answers: ["Bellatrix Lestrange", "Lucius Malefoy", "Voldemort", "Severus Rogue"], correct: 0, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_m14', text: "Quel objet magique permet de revoir des souvenirs stockés ?", answers: ["La Pensine", "Le Déluminateur", "Le Scrutoscope", "Le Miroir du Riséd"], correct: 0, category: 'Harry Potter', type: 'multiple-choice' },
  { id: 'hp_m15', text: "Quel chiffre (voie) permet d'accéder au Poudlard Express ?", answers: ["7 ¾", "8 ½", "9 ¾", "10 ¼"], correct: 2, category: 'Harry Potter', type: 'multiple-choice' }
];

const hpCash: CashAnswerQuestion[] = [
  { id: 'hp_ca1', text: "Sortilège impardonnable de l’Avada Kedavra ?", acceptedAnswers: ["Avada Kedavra"], category: 'Harry Potter', type: 'cash-answer' },
  { id: 'hp_ca2', text: "Nom du gardien des clés et des lieux à Poudlard ?", acceptedAnswers: ["Rubeus Hagrid", "Hagrid"], category: 'Harry Potter', type: 'cash-answer' },
  { id: 'hp_ca3', text: "Quel est le nom du parrain de Harry Potter ?", acceptedAnswers: ["Sirius Black", "Sirius"], category: 'Harry Potter', type: 'cash-answer' },
  { id: 'hp_ca4', text: "Auteur (écrivaine) de la saga Harry Potter (Initiales et nom) ?", acceptedAnswers: ["J.K. Rowling", "Rowling", "JK Rowling"], category: 'Harry Potter', type: 'cash-answer' },
  { id: 'hp_ca5', text: "Nom du phénix d'Albus Dumbledore ?", acceptedAnswers: ["Fumseck", "Fawkes"], category: 'Harry Potter', type: 'cash-answer' },
  { id: 'hp_ca6', text: "Lieu magique couvert de boutiques pour acheter des fournitures scolaires ?", acceptedAnswers: ["Le Chemin de Traverse", "Chemin de Traverse", "Chemin de traverse"], category: 'Harry Potter', type: 'cash-answer' },
  { id: 'hp_ca7', text: "Village peuplé uniquement de sorciers près de Poudlard ?", acceptedAnswers: ["Pré-au-Lard", "Pre au lard"], category: 'Harry Potter', type: 'cash-answer' },
  { id: 'hp_ca8', text: "Potion dorée qui rend extrêmement chanceux (Félix Felicis) ?", acceptedAnswers: ["Felix Felicis", "Felix", "Chance liquide"], category: 'Harry Potter', type: 'cash-answer' },
  { id: 'hp_ca9', text: "Épée utilisée par Godric Gryffondor, c'est l'épée de... ?", acceptedAnswers: ["L'Épée de Gryffondor", "Gryffondor", "L'epee de gryffondor"], category: 'Harry Potter', type: 'cash-answer' },
  { id: 'hp_ca10', text: "Formule pour créer de la lumière au bout de sa baguette ?", acceptedAnswers: ["Lumos"], category: 'Harry Potter', type: 'cash-answer' }
];

const dpSpeed: MCQQuestion[] = [
  { id: 'dp_s1', text: "Qui perd sa pantoufle de verre à minuit ?", answers: ["Aurore", "Cendrillon", "Blanche-Neige", "Belle"], correct: 1, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_s2', text: "Qui est l'assistant du vieux Carl dans le film 'Là-haut' ?", answers: ["Kevin", "Russell", "Doug", "Andy"], correct: 1, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_s3', text: "De quel animal Ursula se sert-elle dans La Petite Sirène ?", answers: ["Un requin", "Des anguilles", "Des pieuvres", "Des hippocampes"], correct: 2, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_s4', text: "Combien Dingo a-t-il de doigts à chaque main ?", answers: ["3", "4", "5", "6"], correct: 1, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_s5', text: "Quel jouet Woody découvre-t-il affolé au début de Toy Story ?", answers: ["Un soldat", "Un vaisseau", "Buzz l'Éclair", "Une poupée"], correct: 2, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_s6', text: "Quelle est la couleur de la robe de Belle (La Belle et la Bête) ?", answers: ["Bleue", "Rose", "Jaune", "Blanche"], correct: 2, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_s7', text: "Où se passe le film Ratatouille ?", answers: ["Rome", "Londres", "Paris", "New York"], correct: 2, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_s8', text: "Quel insecte est l'acolyte de Mulan ?", answers: ["Un papillon", "Un grillon", "Une abeille", "Une cigale"], correct: 1, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_s9', text: "Quel est le nom du singe du Roi Lion ?", answers: ["Timon", "Rafiki", "Zazu", "Scar"], correct: 1, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_s10', text: "Quelle est l'émotion bleue dans Vice-Versa ?", answers: ["Joie", "Tristesse", "Peur", "Colère"], correct: 1, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_s11', text: "Quel est le poisson jaune amnésique ?", answers: ["Marin", "Nemo", "Dory", "Gill"], correct: 2, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_s12', text: "Dans Aladin, qui est le méchant ?", answers: ["Gaston", "Jafar", "Hades", "Frollo"], correct: 1, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_s13', text: "Qui se cache derrière la voix de Woody en VF ?", answers: ["Richard Darbois", "Gilles Lellouche", "Jean-Philippe Puymartin", "Emmanuel Curtil"], correct: 2, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_s14', text: "Quel est le nom du crabe de la Petite Sirène ?", answers: ["Eurêka", "Sébastien", "Polochon", "Flounder"], correct: 1, category: 'Disney & Pixar', type: 'speed-choice' },
  { id: 'dp_s15', text: "Dans Coco, le petit garçon joue de quel instrument ?", answers: ["Trompette", "Piano", "Guitare", "Violon"], correct: 2, category: 'Disney & Pixar', type: 'speed-choice' }
];

const dpMcq: MCQQuestion[] = [
  { id: 'dp_m1', text: "Dans Monstres et Cie, Bouh appelle Sully...", answers: ["Chéri", "Minou", "Gros nounours", "Sulli"], correct: 1, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_m2', text: "Lequel de ces nains N'EST PAS un nain de Blanche-Neige ?", answers: ["Dormeur", "Joyeux", "Rêveur", "Atchoum"], correct: 2, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_m3', text: "Le méchant de Toy Story 3 en peluche rose s'appelle...", answers: ["Lotso", "Nounours", "Gros Câlin", "Fraise"], correct: 0, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_m4', text: "Quel chef d'orchestre crabe compose pour le Roi Triton ?", answers: ["Sébastien", "Archibald", "Polochon", "Samuel"], correct: 0, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_m5', text: "Quel objet magique permet de faire voler les bateaux dans Peter Pan ?", answers: ["La Poussière de Fée", "Une étoile", "Un parchemin", "Des ailes"], correct: 0, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_m6', text: "Dans Raiponce, de quel objet du quotidien se sert-elle comme arme ?", answers: ["Un balai", "Une poêle", "Un livre", "Sa brosse a cheveux"], correct: 1, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_m7', text: "Dans Zootopie, qui est le partenaire renard de Judy Hopps ?", answers: ["Gideon Grey", "Nick Wilde", "Finnick", "Duke Weaselton"], correct: 1, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_m8', text: "Où travaille Bob Parr (Mr Indestructible) au début du film ?", answers: ["Dans une assurance", "Banque", "Agence immobilière", "Boulangerie"], correct: 0, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_m9', text: "Rebelle (Merida) est une princesse du pays :", answers: ["Irlande", "Galles", "Écosse", "Islande"], correct: 2, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_m10', text: "Que mange la méchante reine de Blanche Neige pour la tromper ?", answers: ["Une poire", "Une orange", "Une pomme", "Une pêche"], correct: 2, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_m11', text: "Dans Wall-E, que cultive l'équipage sur le grand vaisseau spatial ?", answers: ["Des pizzas", "Rien (Ils mangent liquide)", "Des bonbons", "Du maïs"], correct: 1, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_m12', text: "Quelle actrice française faisait la voix d'Esmeralda (Quasimodo) dans la version française ?", answers: ["Ophélie Winter", "Liane Foly", "Lorie", "Rebecca Dreyfus"], correct: 0, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_m13', text: "Le tapir dans Vaiana (Pua) est accompagné d'un autre animal complètement idiot :", answers: ["Un coq (Hei Hei)", "Un chien (Ruff)", "Un cheval (Pony)", "Une mouette"], correct: 0, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_m14', text: "Quelle est l'héroïne du film 'Encanto' ?", answers: ["Isabela", "Luisa", "Mirabel", "Dolores"], correct: 2, category: 'Disney & Pixar', type: 'multiple-choice' },
  { id: 'dp_m15', text: "Dans Le Livre de la Jungle, quel serpent hypnotise Mowgli ?", answers: ["Hiss", "Kaa", "Sly", "Jafar"], correct: 1, category: 'Disney & Pixar', type: 'multiple-choice' }
];

const dpCash: CashAnswerQuestion[] = [
  { id: 'dp_c1', text: "Quel est le nom complet de l'ami de Shrek, l'âne ?", acceptedAnswers: ["L'Âne", "Ane"], category: 'Disney & Pixar', type: 'cash-answer' }, // (Even if Dreamworks, often confused, but ok let's include an actual Disney one)
  { id: 'dp_c2', text: "Nom du tigre de compagnie de la Princesse Jasmine ?", acceptedAnswers: ["Rajah"], category: 'Disney & Pixar', type: 'cash-answer' },
  { id: 'dp_c3', text: "Quel mot magique chante Mary Poppins ?", acceptedAnswers: ["Supercalifragilisticexpialidocious", "Supercalifragilistic"], category: 'Disney & Pixar', type: 'cash-answer' },
  { id: 'dp_c4', text: "Dans quel objet est enfermé le Génie d'Aladdin ?", acceptedAnswers: ["Une lampe magique", "Une lampe", "Lampe"], category: 'Disney & Pixar', type: 'cash-answer' },
  { id: 'dp_c5', text: "Quel est le nom du bonhomme de neige de La Reine des Neiges ?", acceptedAnswers: ["Olaf"], category: 'Disney & Pixar', type: 'cash-answer' },
  { id: 'dp_c6', text: "Le nom du superhéros violet et vert (Les Indestructibles) qui s'étire à l'infini ?", acceptedAnswers: ["Elastigirl", "Helen Parr", "Helen"], category: 'Disney & Pixar', type: 'cash-answer' },
  { id: 'dp_c7', text: "Quel est le seul Schtroumpf de sexe féminin (à l'origine) ?", acceptedAnswers: ["La Schtroumpfette", "Schtroumpfette"], category: 'Disney & Pixar', type: 'cash-answer' }, // Wait, not disney, shifting to Peter Pan
  { id: 'dp_c8', text: "Comment s'appelle l'ennemi au crochet dans Peter Pan ?", acceptedAnswers: ["Capitaine Crochet", "Crochet"], category: 'Disney & Pixar', type: 'cash-answer' },
  { id: 'dp_c9', text: "Ville futuriste des voitures dans Cars ?", acceptedAnswers: ["Radiator Springs", "Radiator"], category: 'Disney & Pixar', type: 'cash-answer' },
  { id: 'dp_c10', text: "Comment s'appelle la petite fille rousse de Monstres et Cie ?", acceptedAnswers: ["Bouh"], category: 'Disney & Pixar', type: 'cash-answer' }
];

const swSpeed: MCQQuestion[] = [
  { id: 'sw_s1', text: "Quel est le lien de parenté entre Luke et Leia ?", answers: ["Cousins", "Frère et sœur", "Mariés", "Aucun"], correct: 1, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_s2', text: "Quelle est la couleur du sabre laser de Yoda ?", answers: ["Bleu", "Rouge", "Violet", "Vert"], correct: 3, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_s3', text: "Qui a construit C-3PO ?", answers: ["Anakin Skywalker", "Luke Skywalker", "R2-D2", "Obi-Wan"], correct: 0, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_s4', text: "Dans quel matériau Han Solo est-il congelé ?", answers: ["Kryptonite", "Carbonite", "Adamantium", "Vibranium"], correct: 1, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_s5', text: "Comment s'appelle l'espèce de Chewbacca ?", answers: ["Gungan", "Ewok", "Jawa", "Hutt"], correct: 1, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_s6', text: "Qui pilote le Faucon Millenium ?", answers: ["Luke Skywalker", "Han Solo", "Dark Vador", "Kylo Ren"], correct: 1, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_s7', text: "Quel Sith a un sabre laser à double lame ?", answers: ["Dark Vador", "Comte Dooku", "Dark Maul", "Dark Maul (Darth Maul)"], correct: 3, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_s8', text: "Qui dit 'C'est un piège' (It's a trap !) ?", answers: ["Lando", "Han Solo", "Amiral Ackbar", "Leia"], correct: 2, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_s9', text: "Où grandit Luke Skywalker ?", answers: ["Naboo", "Coruscant", "Tatooine", "Endor"], correct: 2, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_s10', text: "Quel type de soldat sert l'Empire Galactique (blanche armure) ?", answers: ["Clone Troopers", "Stormtroopers", "Jedi", "Sith"], correct: 1, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_s11', text: "Comment se nomme la base spatiale destructrice de planètes ?", answers: ["Le Faucon", "L'Étoile de la Mort", "Le Destroyeur", "Starkiller"], correct: 1, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_s12', text: "Quel Gungan maladroit aide Obi-Wan et Qui-Gon ?", answers: ["Boss Nass", "Wicket", "Jar Jar Binks", "Sebulba"], correct: 2, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_s13', text: "De qui Kylo Ren est-il le fils ?", answers: ["Luke et Mara", "Han et Leia", "Anakin et Padmé", "Obi-Wan et Satine"], correct: 1, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_s14', text: "Quelle planète de glace abrite la base Écho (Épisode 5) ?", answers: ["Hoth", "Endor", "Naboo", "Tatooine"], correct: 0, category: 'Star Wars', type: 'speed-choice' },
  { id: 'sw_s15', text: "Quelle est la couleur du sabre laser de Mace Windu ?", answers: ["Rouge", "Vert", "Bleu", "Violet"], correct: 3, category: 'Star Wars', type: 'speed-choice' }
];

const swMcq: MCQQuestion[] = [
  { id: 'sw_m1', text: "Quelle créature vit dans la fosse de Carkoon et digère lentement ?", answers: ["Le Sarlacc", "Le Rancor", "Le Wampa", "Le Bantha"], correct: 0, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_m2', text: "Quel acteur incarne Luke Skywalker ?", answers: ["Harrison Ford", "Mark Hamill", "Alec Guinness", "Hayden Christensen"], correct: 1, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_m3', text: "Qui gagne la course de modules (Podracer) de la Boonta Eve ?", answers: ["Sebulba", "Anakin Skywalker", "Watto", "Qui-Gon Jinn"], correct: 1, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_m4', text: "Quel est le surnom officiel de Baby Yoda dans The Mandalorian ?", answers: ["Grogu", "Gorki", "Yoda 2", "Le Petit"], correct: 0, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_m5', text: "Qui a commandé l'Armée des Clones officiellement ?", answers: ["Les Séparatistes", "Les Jedi", "Maître Sifo-Dyas", "La Fédération"], correct: 2, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_m6', text: "Quel chasseur de primes Boba Fett accompagne-t-il ?", answers: ["Jango Fett", "Greedo", "Bossk", "IG-88"], correct: 0, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_m7', text: "Célèbre phrase prononcée par Obi-Wan à Anakin sur Mustafar ?", answers: ["Je suis ton père", "Que la force soit avec toi", "J'ai l'avantage du terrain", "C'est fini"], correct: 2, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_m8', text: "Combien existe-t-il de films numérotés dans la 'Saga Skywalker' ?", answers: ["6", "9", "12", "3"], correct: 1, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_m9', text: "Dans Rogue One, quel est le vrai pilote impérial ?", answers: ["Bodhi", "Cassian Andor", "K-2SO", "Chirrut"], correct: 1, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_m10', text: "Jabba le Hutt réside dans un palais situé sur...", answers: ["Naboo", "Coruscant", "Tatooine", "Geonosis"], correct: 2, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_m11', text: "Quel âge a Yoda (environ) quand il meurt ?", answers: ["90 ans", "300 ans", "900 ans", "3000 ans"], correct: 2, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_m12', text: "Dans la série Obi-Wan Kenobi, quel inquisiteur poursuit Obi-Wan ?", answers: ["Le Grand Inquisiteur", "La Troisième Sœur (Reva)", "Le Cinquième Frère", "Starkiller"], correct: 1, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_m13', text: "Que vendent les Jawas aux oncles de Luke ?", answers: ["Des armes", "Des modules", "Des droïdes", "De l'eau"], correct: 2, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_m14', text: "Lequel de ces personnages ne manie pas la Force ?", answers: ["Leia", "Kylo Ren", "Rey", "Han Solo"], correct: 3, category: 'Star Wars', type: 'multiple-choice' },
  { id: 'sw_m15', text: "Comment s'appelle l'Ordre maléfique mené par Palpatine ?", answers: ["L'Ordre Jedi", "La République", "L'Empire Galactique", "L'Alliance"], correct: 2, category: 'Star Wars', type: 'multiple-choice' }
];

const swCash: CashAnswerQuestion[] = [
  { id: 'sw_c1', text: "Comment s'appelle le personnage principal incarné par Pedro Pascal (Mandalorien) ?", acceptedAnswers: ["Din Djarin", "Mando", "Le Mandalorien"], category: 'Star Wars', type: 'cash-answer' },
  { id: 'sw_c2', text: "Petite créature poilue, semblable à un ourson, vivant sur Endor ?", acceptedAnswers: ["Ewok", "Les Ewoks"], category: 'Star Wars', type: 'cash-answer' },
  { id: 'sw_c3', text: "Quel est le nom de naissance complet de Dark Vador ?", acceptedAnswers: ["Anakin Skywalker", "Anakin"], category: 'Star Wars', type: 'cash-answer' },
  { id: 'sw_c4', text: "Maître Jedi vert mesurant environ 66 cm ?", acceptedAnswers: ["Yoda", "Maitre Yoda"], category: 'Star Wars', type: 'cash-answer' },
  { id: 'sw_c5', text: "Bête géante visqueuse que Luke tue dans les sous-sols de Jabba le Hutt ?", acceptedAnswers: ["Le Rancor", "Rancor"], category: 'Star Wars', type: 'cash-answer' },
  { id: 'sw_c6', text: "Vaisseau légendaire piloté par Han Solo et Chewbacca ?", acceptedAnswers: ["Faucon Millenium", "Millennium Falcon", "Le Faucon Millenium"], category: 'Star Wars', type: 'cash-answer' },
  { id: 'sw_c7', text: "Arme blanche emblématique des Chevaliers Jedi (en français) ?", acceptedAnswers: ["Sabre laser", "Le sabre laser"], category: 'Star Wars', type: 'cash-answer' },
  { id: 'sw_c8', text: "Célèbre droïde astromécano couvert de blanc et bleu ?", acceptedAnswers: ["R2-D2", "R2D2", "R2 D2", "Mirador"], category: 'Star Wars', type: 'cash-answer' },
  { id: 'sw_c9', text: "Dans la série The Clone Wars, nom de l'apprentie padawan d'Anakin ?", acceptedAnswers: ["Ahsoka Tano", "Ahsoka", "Ashoka"], category: 'Star Wars', type: 'cash-answer' },
  { id: 'sw_c10', text: "« ______ , je suis ton père » (Phrase culte). Quel est le prénom ?", acceptedAnswers: ["Luke", "Non Luke"], category: 'Star Wars', type: 'cash-answer' }
];

export const THEMES_PART1_MCQ = [...hpSpeed, ...hpMcq, ...dpSpeed, ...dpMcq, ...swSpeed, ...swMcq];
export const THEMES_PART1_CASH = [...hpCash, ...dpCash, ...swCash];
