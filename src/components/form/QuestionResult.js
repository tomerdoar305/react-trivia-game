import React from "react";
import "./QuestionResult.css";

export default function QuestionResult(props) {
  return (
    <div className="question-result">
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
  );
}
