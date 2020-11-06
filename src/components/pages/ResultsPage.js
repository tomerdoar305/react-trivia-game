import React, { useEffect, useContext } from "react";
import Title from "../form/Title";
import Button from "../form/Button";
import { useHistory } from "react-router-dom";
import { TriviaGameContext } from "../../context/TriviaGameContext";
import "./ResultsPage.css";

export default function ResultsPage() {
  const history = useHistory();
  
  const { resetTriviaGameManager, rightResults } = useContext(
    TriviaGameContext
  );

  useEffect(() => {});

  const handlePlayAgainClick = () => {
    resetTriviaGameManager();
    history.push("/");
  };

  return (
    <div className="home-page">
      <Title title={`Result page`} />
      <div>{`You scored ${rightResults.length} / 10`}</div>
      <div>
        <Button label="PLAY AGAIN" onClick={handlePlayAgainClick} />
      </div>
    </div>
  );
}
