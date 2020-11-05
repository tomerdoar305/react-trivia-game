//import { Map, List } from "immutable";

class TriviaGameManager {
  questions = [];
  questionIndex = 0;

  testValue = "";

  constructor(testValue) {
    this.testValue = testValue;
  }

  getTestValue = () => {
    return this.testValue;
  };

  setQuestions = (questions) => {
    this.questions = questions;
  };

  increaseQuestionIndex = () => {
    this.questionIndex = this.questionIndex++;
  };

  getQuestionIndex = () => {
      return this.questionIndex;
  };
}

export default TriviaGameManager;
