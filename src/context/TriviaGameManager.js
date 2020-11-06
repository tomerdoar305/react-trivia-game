//import { Map, List } from "immutable";

class TriviaGameManager {
  questions = [];
  indexQuestion = 0;
  rightResults = [];
  wrongResults = [];

  constructor(testValue) {
    this.testValue = testValue;
  }

  setQuestions = (questions) => {
    this.questions = questions;
  };

  addRightAnswer = (index) => {
    this.rightResults.push(index);
  }

  setRightResults = (questions) => {
    this.questions = questions;
  };

  setWrongResults = (questions) => {
    this.questions = questions;
  };

  increaseQuestionIndex = () => {
    this.questionIndex = this.questionIndex++;
  };

  resetTriviaGameManager = () => {
    this.questions = [];
    this.indexQuestion = 0;
    this.rightResults = [];
    this.wrongResults = [];
  };
}

export default TriviaGameManager;
