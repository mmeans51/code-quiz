const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion ={}
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
    }
]
let questions = [
    {
        question: "How long did the Big Cypress show last?",
        choice1: "46 days",
        choice2: "555 hours",
        choice3: "10:31:94",
        choice4: "7ish hours",
        answer: 4,
    }
]
let questions = [
    {
        question: "Is this still Lawn Boy?",
        choice1: "NO WAY",
        choice2: "Yes",
        choice3: "Possibly",
        choice4: "Heady ground score?",
        answer: 2,
    }
]
let questions = [
    {
        question: "Deduct the _____ carrots from your pay",
        choice1: "Carrots, you worthless swampy fool!",
        choice2: "Money",
        choice3: "Sheckles",
        choice4: "Prussian francs",
        answer: 1,
    }
]
let questions = [
    {
        question: "Who is the 5th member of Phish?",
        choice1: "Karini",
        choice2: "Wilson",
        choice3: "kuroda",
        choice4: "Reba",
        answer: 3,
    }
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

STARTgAME = ()  => {
questionCounter = 0;
score = 0;
availableQuestions = [...questions]
getNewQuestion()
}

if(availableQuestions.length === 0 || questions_Counter > MAX_QUESTIONS) {

}
