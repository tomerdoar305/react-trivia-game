import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import HTMLEntities from "../form/HTMLEntities";
import Title from "../form/Title";
import Button from "../form/Button";
import Timer from "../form/Timer";
import { TriviaGameContext } from "../../context/TriviaGameContext";
import "./QuizPage.css";
import {
  CORRECT_ANSWER_RESULT,
  WRONG_ANSWER_RESULT,
  OUT_OF_TIME_ANSWER_RESULT,
} from "../../utils/constants";

export default function QuizPage() {
  const history = useHistory();
  const {
    questions,
    resetTriviaGameManager,
    increaseCorrectAnswersCounter,
    setUserAnswerRight,
    indexQuestion,
    increaseQuestionIndex,
    timer,
    checkAnswer,
  } = useContext(TriviaGameContext);

  const [questionIterator, setQuestionIterator] = useState(indexQuestion);
  const [answerResultMessage, setAnswerResultMessage] = useState("");

  useEffect(() => {
    if (questions.length === 0) {
      history.push("/");
    }
  }, []);

  const handleAnswerClick = (answer) => {
    if (checkAnswer(answer)) {
      setUserAnswerRight(questionIterator);
      increaseCorrectAnswersCounter();
      setResult(CORRECT_ANSWER_RESULT);
    } else if (answer === "") {
      setResult(OUT_OF_TIME_ANSWER_RESULT);
    } else {
      setResult(WRONG_ANSWER_RESULT);
    }
  };

  const setResult = (result) => {
    setAnswerResultMessage(result);
    setTimeout(() => {
      increaseQuestionIndex();
      setAnswerResultMessage("");
      setQuestionIterator(questionIterator + 1);
      if (questionIterator === questions.length - 1) {
        history.push("/resultspage");
      }
    }, 500);
  };

  const handleRestartGame = () => {
    resetTriviaGameManager();
    history.push("/");
  };

  return (
    <div className="quiz-page">
      <div className="top-controllers-container">
        <div className="button-container">
          <Button label="Restart" size="small" onClick={handleRestartGame} />
        </div>
      </div>
      <Title title={questions[questionIterator]?.category} />

      <div className="timer-container">
        {timer !== 0 && answerResultMessage === "" && (
          <Timer
            counter={timer}
            questionIterator={questionIterator}
            handleAnswerAfterTimeIsOut={handleAnswerClick}
          />
        )}
        <div
          className={
            answerResultMessage === CORRECT_ANSWER_RESULT
              ? "answer-result-color-green"
              : "answer-result-color-red"
          }
        >
          {answerResultMessage}
        </div>
      </div>
      <span className="question">
        <HTMLEntities>{questions[questionIterator]?.question}</HTMLEntities>
      </span>
      <div className="question-number">{`${questionIterator + 1} of ${
        questions.length
      }`}</div>

      <div className="bottom-controllers-container">
        <Button
          disabled={!!answerResultMessage}
          label="True"
          size="large"
          onClick={() => handleAnswerClick("True")}
        />
        <Button
          disabled={!!answerResultMessage}
          label="False"
          size="large"
          onClick={() => handleAnswerClick("False")}
        />
      </div>
    </div>
  );
}
