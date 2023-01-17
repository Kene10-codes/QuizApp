// ES6 class
class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }

  qetQuestionIndex() {
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
    if(Quiz.isEnded()){}
}