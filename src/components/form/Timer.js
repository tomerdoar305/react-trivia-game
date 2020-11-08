import React, { useState, useEffect } from "react";
import "./Timer.css";

export default function Timer(props) {
  const { counter } = props;

  const [count, setCount] = useState(counter);

  useEffect(() => {
    let ccccc;
    const runCounter = () => {
      ccccc = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    };

    if (count > 0) {
      runCounter();
    } else {
      setCount(counter);
      props.handleAnswerAfterTimeIsOut();
    }
    return () => {
      clearTimeout(ccccc);
    };
  }, [count, props, counter]);

  useEffect(() => {
    setCount(counter);
  }, [props.questionIterator, counter]);

  return <div>{`Timer: ${count}`}</div>;
}
