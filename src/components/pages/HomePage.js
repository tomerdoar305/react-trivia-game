import React, { useEffect, useContext, useState } from "react";
import Title from "../form/Title";
import Button from "../form/Button";
import { useHistory } from "react-router-dom";
import { TriviaGameContext } from "../../context/TriviaGameContext";
import { getQuestions } from "../../api/api";
import "./HomePage.css";

export default function HomePage() {
  const history = useHistory();
  const contextType = useContext(TriviaGameContext);
  const [readyToPlay, setReadyToPlay] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getQuestions();
        contextType.setQuestions(response.results);
        setReadyToPlay(true);
      } catch (e) {
        console.error(
          "-> Error getGameQuestions:",
          contextType.questions.length
        );
      }
    }
    fetchData();
  });

  const handleBeginClick = () => {
    history.push("/quizpage");
  };

  return (
    <div className="home-page">
      <Title title={`Welcome to \n Trivia Challenge!`} />
      <div className="description">
        You will be presented with 10 True or False questions
      </div>
      <div className="sub-description">Can you score 100%?</div>
      <div className="controllers-container">
        <Button
          label="Begin"
          onClick={handleBeginClick}
          disabled={!readyToPlay}
        />
      </div>
    </div>
  );
}
