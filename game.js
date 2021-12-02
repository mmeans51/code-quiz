const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What state is the band Phish from?",
        choice1: "New York",
        choice2: "Oregon",
        choice3: "Vermont",
        choice4: "Scandinavia",
        answer: 3,
    },

    {
        question: "How long did the Big Cypress show last?",
        choice1: "46 days",
        choice2: "555 hours",
        choice3: "10:31:94",
        choice4: "7ish hours",
        answer: 4,
    },

    {
        question: "Is this still Lawn Boy?",
        choice1: "NO WAY",
        choice2: "Yes",
        choice3: "Possibly",
        choice4: "Heady ground score?",
        answer: 2,
    },

    {
        question: "Deduct the _____ from your pay",
        choice1: "Carrots, you worthless swampy fool!",
        choice2: "Money",
        choice3: "Sheckles",
        choice4: "Prussian francs",
        answer: 1,
    },

    {
        question: "Who is the 5th member of Phish?",
        choice1: "Karini",
        choice2: "Wilson",
        choice3: "kuroda",
        choice4: "Reba",
        answer: 3,
    },
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

startGame = ()  => {
questionCounter = 0;
score = 0;
availableQuestions = [...questions];
getNewQuestion();
}

getNewQuestion = () => {
if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
localStorage.setItem('mostRecentScore', score);

return window.location.assign('/end.html')
}

questionCounter++
progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`; 
progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
currentQuestion = availableQuestions[questionsIndex];
question.innerText = currentQuestion.question

choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText - currentQuestion['choice' + number];
})

availableQuestions.splice(questionsIndex, 1);

acceptingAnswers = true;

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false;
        const selectedChoice = e.tartet;
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();


        }, 1000)
    })
})

incrementScore = num => {
    score =+num;
    scoreText.innerText = score;
}

startGame();