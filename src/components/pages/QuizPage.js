import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
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
    addCorrectAnswer,
    setRightAnswer,
    indexQuestion,
    increaseQuestionIndex,
    timer,
  } = useContext(TriviaGameContext);

  const [questionIterator, setQuestionIterator] = useState(indexQuestion);
  const [answerResult, setAnswerResult] = useState("");

  useEffect(() => {
    if (questions.length === 0) {
      history.push("/");
    }
  });

  const handleAnswerClick = (answer) => {
    if (questions[questionIterator].correct_answer === answer) {
      setRightAnswer(questionIterator);
      addCorrectAnswer();
      setResult(CORRECT_ANSWER_RESULT);
    } else if (answer === "") {
      setResult(OUT_OF_TIME_ANSWER_RESULT);
    } else {
      setResult(WRONG_ANSWER_RESULT);
    }
  };

  const setResult = (result) => {
    setAnswerResult(result);
    let timeoutId = setTimeout(() => {
      increaseQuestionIndex();
      setAnswerResult("");
      setQuestionIterator(questionIterator + 1);
      clearTimeout(timeoutId);
      if (questionIterator === questions.length - 1) {
        history.push("/resultspage");
      }
    }, 1000);
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
        {timer !== 0 && answerResult === "" && (
          <Timer
            counter={timer}
            questionIterator={questionIterator}
            handleAnswerAfterTimeIsOut={handleAnswerClick}
          />
        )}
        <div
          className={
            answerResult === CORRECT_ANSWER_RESULT
              ? "answer-result-color-green"
              : "answer-result-color-red"
          }
        >
          {answerResult}
        </div>
      </div>
      <span
        className="question"
        dangerouslySetInnerHTML={{
          __html: `${questions[questionIterator]?.question}`,
        }}
      ></span>
      <div className="question-number">{`${questionIterator + 1} of ${questions.length}`}</div>

      <div className="bottom-controllers-container">
        <Button
          disabled={!!answerResult}
          label="True"
          size="large"
          onClick={() => handleAnswerClick("True")}
        />
        <Button
          disabled={!!answerResult}
          label="False"
          size="large"
          onClick={() => handleAnswerClick("False")}
        />
      </div>
    </div>
  );
}
