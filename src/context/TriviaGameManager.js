//import { Map, List } from "immutable";

class TriviaGameManager {
  questions = [];
  indexQuestion = 0;
  rightResults = [];
  difficulty = "easy";
  timer = 0;

  constructor(difficulty) {
    this.difficulty = difficulty;
  }

  setQuestions = (questions) => {
    this.questions = questions;
  };

  setDifficulty = (difficulty) => {
    this.difficulty = difficulty;
    switch (difficulty) {
      case "hard":
        this.timer = 60;
        break;
      case "very hard":
        this.timer = 30;
        break;
      default:
        this.timer = 0;
        break;
    }
  };

  addRightAnswer = (index) => {
    this.rightResults.push(index);
  };

  setRightAnswer = (index) => {
    this.questions[index].user_answer_right = true;
  };

  increaseQuestionIndex = () => {
    this.indexQuestion = this.indexQuestion + 1;
  };

  resetTriviaGameManager = () => {
    this.questions = [];
    this.indexQuestion = 0;
    this.rightResults = [];
  };
}

export default TriviaGameManager;
