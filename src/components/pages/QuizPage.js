import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Title from "../form/Title";
import Button from "../form/Button";
import Timer from "../form/Timer";
import { TriviaGameContext } from "../../context/TriviaGameContext";
import "./QuizPage.css";

export default function QuizPage() {
  const history = useHistory();
  const {
    questions,
    resetTriviaGameManager,
    addRightAnswer,
    setRightAnswer,
    indexQuestion,
    increaseQuestionIndex,
    timer
  } = useContext(TriviaGameContext);

  const [questionIterator, setQuestionIterator] = useState(indexQuestion);

  useEffect(() => {
    if (questions.length === 0) {
      history.push("/");
    }
    console.log("contextType:", questions);
  });

  const handleAnswerClick = (answer) => {
    saveAnswer(answer);
    increaseQuestionIndex();
    setQuestionIterator(questionIterator + 1);
    if (questionIterator === 9) {
      history.push("/resultspage");
    }
  };

  const saveAnswer = (answer) => {
    if (questions[questionIterator].correct_answer === answer) {
      setRightAnswer(questionIterator);
      addRightAnswer(questionIterator);
    }
  };

  const handleRestartGame = () => {
    resetTriviaGameManager();
    history.push("/");
  };

  return (
    <div className="quiz-page">
      <div className="top-controllers-container">
        <div className="timer-container">
          {timer !== 0 && (
            <Timer
              counter={timer}
              questionIterator={questionIterator}
              saveAnswer={handleAnswerClick}
            />
          )}
        </div>
        <div className="button-container">
          <Button label="Restart" size="small" onClick={handleRestartGame} />
        </div>
      </div>
      <Title title={questions[questionIterator].category} />
      <span
        className="question"
        dangerouslySetInnerHTML={{
          __html: `${questions[questionIterator].question}`,
        }}
      ></span>
      <div className="question-number">{`${questionIterator + 1} of 10`}</div>

      <div className="bottom-controllers-container">
        <Button
          label="True"
          size="large"
          onClick={() => handleAnswerClick("True")}
        />
        <Button
          label="False"
          size="large"
          onClick={() => handleAnswerClick("False")}
        />
      </div>
    </div>
  );
}
