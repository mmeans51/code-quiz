const questionEl = document.querySelector('#question');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const choiceContainer = document.querySelector(".choice-container");
var time = 60;
setInterval(clockTick, 1000)

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What state is the band Phish from?",
        choices:["New York", "Oregon", "Vermont", "Scandinavia"],
        answer: "Vermont",
    },

    {
        question: "How long did the Big Cypress show last?",
        choices:["46 days", "555 hours", "10:31:94", "7ish hours"],
        answer: "7ish hours",
    },

    {
        question: "Is this still Lawn Boy?",
        choices:["NO WAY", "Yes", "Possibly", "Heady ground score?"],
        answer: "Yes",
    },

    {
        question: "Deduct the _____ from your pay",
        choices:["Carrots, you worthless swampy fool!", "Money", "sheckles", "prussian francs"],
        answer: "Carrots, you worthless swampy fool!",
    },

    {
        question: "Who is the 5th member of Phish?",
        choices:["Karini", "Wilson", "Kuroda", "Reba"],
        answer: "Kuroda",
    },
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

function startGame() {
questionCounter = 0;
score = 0;
availableQuestions = [...questions];
getNewQuestion();
}

function getNewQuestion() {
    var currentQuestion = questions[questionCounter].question;
    questionEl.textContent = currentQuestion;
    choiceContainer.innerHTML = "";
    questions[questionCounter].choices.forEach(function(choice){
        var button = document.createElement("p");
       button.setAttribute("class", "choice-text");
       button.setAttribute("value", choice)
       button.textContent = choice;
       button.onclick = evaluateAnswer;
       choiceContainer.appendChild(button)

    })
// if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
// localStorage.setItem('mostRecentScore', score);

// return window.location.assign('/end.html')
// }

// questionCounter++
// progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`; 
// progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

// const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
// currentQuestion = availableQuestions[questionsIndex];
// question.innerText = currentQuestion.question

// choices.forEach(choice => {
//     const number = choice.dataset['number'];
//     choice.innerText - currentQuestion['choice' + number];
// })

// availableQuestions.splice(questionsIndex, 1);

// acceptingAnswers = true;

}
function evaluateAnswer(){
    const selectedAnswer = this.getAttribute("value")
    if(selectedAnswer !== questions[questionCounter].answer){
        console.log("wrong")
    }
    else {
        console.log("right")
    }
    questionCounter++;
    if(questionCounter===questions.length){
        console.log("end game")
    }
    else{
        getNewQuestion();
    }
}
function clockTick(){
    const timerEl = document.getElementById("timer")
    time--;
    timerEl.textContent = time
    if(time === 0)
    return;
    
}
// choices.forEach(choice => {
//     choice.addEventListener('click', e => {
//         if(!acceptingAnswers) return

//         acceptingAnswers = false;
//         const selectedChoice = e.tartet;
//         const selectedAnswer = selectedChoice.dataset['number']

//         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

//         if(classToApply === 'correct') {
//             incrementScore(SCORE_POINTS);
//         }

//         selectedChoice.parentElement.classList.add(classToApply);

//         setTimeout(() => {
//             selectedChoice.parentElement.classList.remove(classToApply);
//             getNewQuestion();


//         }, 1000)
//     })
// })

// incrementScore = num => {
//     score =+num;
//     scoreText.innerText = score;
// }

startGame();