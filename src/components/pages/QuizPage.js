import React, { useState, useEffect, useContext } from "react";
import Title from "../form/Title";
import Button from "../form/Button";
import { TriviaGameContext } from "../../context/TriviaGameContext";
import "./QuizPage.css";

export default function QuizPage() {
  const { questions } = useContext(TriviaGameContext);
  const [indexQuestion, setIndexQuestion] = useState(0);

  useEffect(() => {
    console.log("contextType:", questions);
  });

  const handleTrueClick = () => {
    setIndexQuestion(indexQuestion + 1);
  };

  const handleFalseClick = () => {
    setIndexQuestion(indexQuestion + 1);
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
        <Button label="True" onClick={handleTrueClick} />
        <Button label="False" onClick={handleFalseClick} />
      </div>
    </div>
  );
}
