import React, { useEffect, useContext } from "react";
import Title from "../form/Title";
import Button from "../form/Button";
import QuestionResult from "../form/QuestionResult";
import { useHistory } from "react-router-dom";
import { TriviaGameContext } from "../../context/TriviaGameContext";
import "./ResultsPage.css";

export default function ResultsPage() {
  const history = useHistory();

  const {
    questions,
    resetTriviaGameManager,
    rightResults,
    indexQuestion,
  } = useContext(TriviaGameContext);

  useEffect(() => {
    //console.log("ResultsPage useEffect:", questions[0].question);
    if (questions.length === 0 || indexQuestion < 9) {
      history.push("/");
    }
  });

  const handlePlayAgainClick = () => {
    resetTriviaGameManager();
    history.push("/");
  };

  return (
    <div className="results-page">
      <div className="title">
        <Title title={`Result page`} />
      </div>
      <div className="score">{`You scored ${rightResults.length} / 10`}</div>
      <div className="results">
        {questions.map((question, index) => (
          <QuestionResult
            key={index}
            question={question.question}
            userAnswer={question?.user_answer_right}
            correctAnswer={question.correct_answer}
          />
        ))}
      </div>
      <div className="bottom-controllers-container">
        <Button
          label="PLAY AGAIN"
          size="large"
          onClick={handlePlayAgainClick}
        />
      </div>
    </div>
  );
}
