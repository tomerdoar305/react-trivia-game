import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Title from "../form/Title";
import Button from "../form/Button";
import { TriviaGameContext } from "../../context/TriviaGameContext";
import "./QuizPage.css";

export default function QuizPage() {
  const history = useHistory();
  const { questions, resetTriviaGameManager, addRightAnswer } = useContext(
    TriviaGameContext
  );

  const [indexQuestion, setIndexQuestion] = useState(0);

  useEffect(() => {
    if (questions.length === 0) {
      history.push("/");
    }
    console.log("contextType:", questions);
  });

  const handleAnswerClick = (answer) => {
    saveAnswer(answer);
    setIndexQuestion(indexQuestion + 1);
    if (indexQuestion === 9) {
        history.push("/resultspage");
    }
  };

  const saveAnswer = (answer) => {
    if (questions[indexQuestion].correct_answer === answer) {
      addRightAnswer(indexQuestion);
    }
  };

  const handleRestartGame = () => {
    resetTriviaGameManager();
    history.push("/");
  };

  return (
    <div className="quiz-page">
      <Title title={questions[indexQuestion].category} />

      <span
        className="question"
        dangerouslySetInnerHTML={{
          __html: `${questions[indexQuestion].question}`,
        }}
      ></span>
      <div>{`${indexQuestion + 1} of 10`}</div>

      <div className="controllers-container">
        <Button label="True" onClick={() => handleAnswerClick("True")} />
        <Button label="False" onClick={() => handleAnswerClick("False")} />
      </div>
      <div>
        <Button label="Restart" onClick={handleRestartGame} />
      </div>
    </div>
  );
}
