import React from "react";
import "./QuestionResult.css";

export default function QuestionResult(props) {
  return (
    <div className="question-result">
      <div className="question-container">
        {props.userAnswer ? (
          <div className="result">&#10004; </div>
        ) : (
          <div className="result">&times;</div>
        )}
        <div
          className="question"
          dangerouslySetInnerHTML={{
            __html: `${props.question}`,
          }}
        ></div>
      </div>
      <div className={"correct-answer"}>{`Correct answer: ${props.correctAnswer}`}</div>
    </div>
  );
}
