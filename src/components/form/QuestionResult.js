import React from "react";
import PropTypes from "prop-types";
import HTMLEntities from "./HTMLEntities";
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
        <div className="question">
          <HTMLEntities>{props.question}</HTMLEntities>
        </div>
      </div>
      <div
        className={"correct-answer"}
      >{`Correct answer: ${props.correctAnswer}`}</div>
    </div>
  );
}

QuestionResult.propTypes = {
  userAnswer: PropTypes.bool,
  question: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string,
};
