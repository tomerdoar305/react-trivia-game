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
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getQuestions();
        contextType.setQuestions(response.results);
      } catch (e) {
        console.error(
          "-> Error getGameQuestions:",
          contextType.questions.length
        );
        setErrorMessage("Can't load the game");
      }
    }
    fetchData();
  });

  const handleBeginClick = () => {
    history.push("/quizpage");
  };

  return (
    <div className="home-page">
      <div className="error-message">{errorMessage}</div>
      <div className="title">
        <Title title={`Welcome to \n Trivia Challenge!`} />
      </div>
      <div className="description">
        You will be presented with 10 True or False questions
      </div>
      <div className="sub-description">Can you score 100%?</div>
      <div className="controllers-container">
        <Button
          label="Begin"
          onClick={handleBeginClick}
          size={"large"}
          disabled={!!errorMessage}
        />
      </div>
    </div>
  );
}
