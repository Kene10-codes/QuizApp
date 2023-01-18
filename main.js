// ES6 class
class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }

  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}

// Question class
class Question {
  constructor(text, choice, answer) {
    this.text = text;
    this.choice = choice;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer == choice;
  }
}

// Display func
function displayQuestion() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // Show the question
    let questionElement = document.querySelector(".question");
    questionElement.innerHTML = quiz.getQuestionIndex().text;

    // Show the options
    let choices = quiz.getQuestionIndex().choice;
    for (let i = 0; i < choices.length; i++) {
      let choiceElement = document.querySelector(`#choice${i}`);
      choiceElement.innerHTML = choices[i];
      guess(`btn${i}`, choices[i]);
    }
  }
}

// Guess func
function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    displayQuestion();
  };

  showProgress();
}

// Show progress
function showProgress() {
  let currentQstNumber = quiz.questionIndex + 1;
  let questionElement = document.querySelector(".progress");
  questionElement.innerHTML = `Question ${currentQstNumber} of ${quiz.questions.length}`;
}

// Show score
function showScores() {
  let quizEndHTML = `
   <h1>Quiz has completed</h1>
   <h2 class="score">You scored ${quiz.score} out of ${quiz.questions.length}</h2>
   <div class="quiz-repeat">
     <a href="index.html">Start New Quiz </a>
   </div>
  `;
  let quizElement = document.querySelector("#quiz");
  quizElement.innerHTML = quizEndHTML;
}

// Questions Array
let questions = [
  new Question(
    "Which is a proper class function name ?",
    ["quiz", "Quiz", "1Quiz", "QUIZ"],
    "Quiz"
  ),
  new Question(
    "is HTML a programming language ?",
    ["No", "Yes", "Maybe", "Not sure"],
    "No"
  ),
  new Question(
    "Which one is not among the Array methods in JavaScript ?",
    ["sort", "filter", "map", "includes"],
    "includes"
  ),
  new Question(
    "How do you declare a variable in JavaScript ?",
    ["let", "const", "var", "All of the above"],
    "All of the above"
  ),
  new Question(
    "Which one is a string method ?",
    ["substring", "slice", "forEach", "map"],
    "substring"
  ),
  new Question(
    "Which method do you use remove a key value pair from an Object ?",
    ["substring", "pop", "remove", "delete"],
    "delete"
  ),
];

// initialize the Quiz
let quiz = new Quiz(questions);

// dipslay questions
displayQuestion();

// Add a countdown timer
let time = 8;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let countTimer = document.querySelector(".count-down");

function starTimer() {
  let quizTimer = setInterval(function () {
    if (quizTime < 1) {
      clearInterval(quizTimer);
      showScores();
    } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor((quizTime / 60) % 60);
      countTimer.innerHTML = `Time: ${min} : ${sec}`;
    }
  }, 1000);
}

starTimer();
