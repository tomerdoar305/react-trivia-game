//import { Map, List } from "immutable";

class TriviaGameManager {
  questions = [];
  indexQuestion = 0;
  rightResults = [];

  // constructor(testValue) {
  //   this.testValue = testValue;
  // }

  setQuestions = (questions) => {
    this.questions = questions;
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
