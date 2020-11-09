import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Timer.css";

export default function Timer(props) {

  const { counter } = props;

  const [count, setCount] = useState(counter);

  useEffect(() => {
    let timeoutId;
    const runCounter = () => {
      timeoutId = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    };

    if (count > 0) {
      runCounter();
    } else {
      setCount(counter);
      props.handleAnswerAfterTimeIsOut("");
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [count, props, counter]);

  useEffect(() => {
    setCount(counter);
  }, [props.questionIterator, counter]);

  return (
    <div
      className={`${count < 5 ? "short-count" : ""}`}
    >{`Timer: ${count}`}</div>
  );
}

Timer.propTypes = {
  counter: PropTypes.number.isRequired,
  handleAnswerAfterTimeIsOut: PropTypes.func.isRequired,
  questionIterator: PropTypes.number.isRequired,
};
