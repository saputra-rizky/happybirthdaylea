const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const popupClose = document.getElementById('popup-close');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];

fetch('./questions.json')
    .then((res) => res.json())
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });

// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    game.classList.remove('hidden');
    loader.classList.add('hidden');
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('./end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    currentQuestion = availableQuesions.shift(); // Pop the first question
    question.innerText = currentQuestion.question;

    choices.forEach((choice, index) => {
        const choiceNumber = index + 1;
        choice.innerText = currentQuestion['choice' + choiceNumber];
    });

    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = '';
        if (currentQuestion.answer === '*') {
            classToApply = 'correct'; // Mark all choices as correct
        } else {
            classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        }

        selectedChoice.parentElement.classList.add(classToApply);

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);

            // Show correct pop-up and set its text based on the question's correctPopup
            popupText.textContent = currentQuestion.correctPopup;
            popup.style.display = 'flex'; // Show the popup with display property
        } else {
            // Show wrong pop-up and set its text based on the question's wrongPopup
            popupText.textContent = currentQuestion.wrongPopup;
            popup.style.display = 'flex'; // Show the popup with display property

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                acceptingAnswers = true; // Re-enable answering for the next attempt
            }, 1000);
        }
    });
});


// Popup event listener for the "OK" button
popupClose.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the popup with display property

    if (popupText.textContent === currentQuestion.correctPopup) {
        getNewQuestion(); // Proceed to the next question
        choices.forEach((choice) => {
            choice.parentElement.classList.remove('correct');
            choice.parentElement.classList.remove('incorrect');
        });
    } else {
        acceptingAnswers = true; // Re-enable answering for the next attempt
    }
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};
