// Removed duplicate declaration
// const questions = []; // This will be populated from questions.js

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

const progressBar = document.querySelector('.progress');
const questionBubble = document.querySelector('.question-bubble');
const answersBubble = document.querySelector('.answers-bubble');
const sendButton = document.querySelector('.send-button');

const startButton = document.getElementById('start-button');
const scoreButton = document.getElementById('score-button');
const backToMenuButton = document.getElementById('back-to-menu');

// Removed fetch and eval for questions.js

function loadQuestions() {
    selectedQuestions = getRandomQuestions(10);
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    if (!currentQuestion) return;
    questionBubble.textContent = currentQuestion.question;
    answersBubble.innerHTML = '';
    currentQuestion.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.textContent = answer;
        answerDiv.classList.add('answer');
        answerDiv.addEventListener('click', () => selectAnswer(index));
        answersBubble.appendChild(answerDiv);
    });
    sendButton.textContent = currentQuestionIndex < selectedQuestions.length - 1 ? 'Suivant' : 'Terminer';
}

function selectAnswer(index) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const comment = document.createElement('div');
    comment.textContent = currentQuestion.humor;
    comment.classList.add('comment');
    answersBubble.appendChild(comment);
    if (index === currentQuestion.correct) {
        score++;
    }
    currentQuestionIndex++;
    updateProgressBar();
    if (currentQuestionIndex < selectedQuestions.length) {
        setTimeout(loadQuestion, 2000);
    } else {
        showScore();
    }
}

function updateProgressBar() {
    const progressPercentage = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
    progressBar.style.width = progressPercentage + '%';
}

function showScore() {
    questionBubble.textContent = `Votre score est ${score}/${selectedQuestions.length}`;
    answersBubble.innerHTML = '';
    const debrief = document.createElement('div');
    const sarcasm = score > 7 ? "Bravo, vous êtes un vrai gamer... ou vous avez triché." : score > 4 ? "Pas mal, mais vous devriez peut-être jouer un peu plus." : "Aïe, peut-être devriez-vous lire quelques manuels de jeux vidéo.";
    debrief.textContent = sarcasm;
    debrief.classList.add('comment');
    answersBubble.appendChild(debrief);

    const nameInput = document.createElement('input');
    nameInput.placeholder = 'Entrez votre prénom';
    nameInput.classList.add('name-input');
    answersBubble.appendChild(nameInput);

    const finishButton = document.createElement('button');
    finishButton.textContent = 'Fin';
    finishButton.classList.add('send-button');
    finishButton.addEventListener('click', () => {
        const name = nameInput.value || 'Anonyme';
        addScoreToLeaderboard(name, score);
        document.querySelector('.quiz-container').style.display = 'none';
        document.querySelector('.menu').style.display = 'block';
        resetQuiz();
    });
    answersBubble.appendChild(finishButton);
}

function addScoreToLeaderboard(name, score) {
    const scoreList = document.getElementById('score-list');
    const scoreEntry = document.createElement('div');
    scoreEntry.textContent = `${name}: ${score}/${selectedQuestions.length}`;
    scoreList.appendChild(scoreEntry);
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
}

function displayScores() {
    // TO DO: implement display scores functionality
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomQuestions(num) {
    return shuffleArray([...questions]).slice(0, num);
}

function addChatMessage(message, isSent = false) {
    const chatMessages = document.querySelector('.chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isSent ? 'sent' : 'received'}`;
    messageDiv.textContent = message;
    chatMessages.insertBefore(messageDiv, chatMessages.firstChild);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.querySelector('.chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.insertBefore(typingDiv, chatMessages.firstChild);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingDiv;
}

function hideTypingIndicator(indicator) {
    if (indicator && indicator.parentNode) {
        indicator.parentNode.removeChild(indicator);
    }
}

function startQuiz() {
    document.querySelector('.menu').classList.add('hidden');
    document.querySelector('.quiz-container').classList.remove('hidden');
    selectedQuestions = getRandomQuestions(10);
    currentQuestionIndex = 0;
    score = 0;
    
    // Réinitialiser le chat
    const chatMessages = document.querySelector('.chat-messages');
    chatMessages.innerHTML = '';
    addChatMessage("C'est parti ! Montre-moi ce que tu sais sur les jeux vidéo ! ");
    
    loadQuestion();
}

function showScore() {
    document.querySelector('.quiz-container').classList.add('hidden');
    document.querySelector('.score-container').classList.remove('hidden');
    
    const scoreList = document.getElementById('score-list');
    scoreList.innerHTML = `<h3>Votre score : ${score}/${selectedQuestions.length}</h3>`;

    // Ajouter un message de fin dans le chat
    const finalMessage = score === selectedQuestions.length 
        ? "Perfect score ! Tu es un vrai gamer ! " 
        : score >= selectedQuestions.length * 0.7 
        ? "Pas mal du tout ! Tu t'y connais en jeux vidéo ! " 
        : score >= selectedQuestions.length * 0.5 
        ? "Tu as encore des choses à apprendre... " 
        : "Hum... Tu devrais peut-être jouer à autre chose que Candy Crush... ";

    addChatMessage(finalMessage);
}

function loadQuestion() {
    const questionBubble = document.querySelector('.question-bubble');
    const answersBubble = document.querySelector('.answers-bubble');
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const progress = document.querySelector('.progress');

    // Mise à jour de la barre de progression
    const progressWidth = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
    progress.style.width = progressWidth + '%';

    questionBubble.textContent = currentQuestion.question;
    answersBubble.innerHTML = '';

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-option';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersBubble.appendChild(button);
    });
}

function selectAnswer(index) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const isCorrect = index === currentQuestion.correct;
    
    // Afficher l'indicateur de typing
    const typingIndicator = showTypingIndicator();

    // Simuler un délai de typing
    setTimeout(() => {
        // Cacher l'indicateur de typing
        hideTypingIndicator(typingIndicator);

        // Ajouter le commentaire humoristique
        addChatMessage(currentQuestion.humor);

        if (isCorrect) {
            score++;
            setTimeout(() => addChatMessage("Bien joué ! "), 1000);
        } else {
            const correctAnswer = currentQuestion.answers[currentQuestion.correct];
            setTimeout(() => addChatMessage(`La bonne réponse était : ${correctAnswer} `), 1000);
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < selectedQuestions.length) {
            setTimeout(loadQuestion, 2000);
        } else {
            setTimeout(showScore, 2000);
        }
    }, 1500);
}

document.getElementById('start-button').onclick = startQuiz;
document.getElementById('back-to-menu').onclick = () => {
    document.querySelector('.score-container').classList.add('hidden');
    document.querySelector('.menu').classList.remove('hidden');
    addChatMessage("Prêt pour une nouvelle partie ? ");
};

startButton.addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    loadQuestions();
});

scoreButton.addEventListener('click', () => {
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.score-container').style.display = 'block';
    displayScores();
});

sendButton.addEventListener('click', () => {
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion();
    }
});

backToMenuButton.addEventListener('click', () => {
    document.querySelector('.score-container').style.display = 'none';
    document.querySelector('.menu').style.display = 'block';
});
