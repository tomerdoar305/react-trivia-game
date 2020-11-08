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
  const [difficulty, setDifficulty] = useState(contextType.difficulty);
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

  const selectDifficulty = (event) => {
    contextType.setDifficulty(event.target.value);
    setDifficulty(event.target.value);
  };

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

      <div className="difficulty">
        <div className="selection">
          <div>Please select difficulty:</div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="easy"
                checked={difficulty === "easy"}
                onChange={selectDifficulty}
              />
              Easy
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="hard"
                checked={difficulty === "hard"}
                onChange={selectDifficulty}
              />
              Hard (60 sec per question)
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="very hard"
                checked={difficulty === "very hard"}
                onChange={selectDifficulty}
              />
              Harder (30 sec per question)
            </label>
          </div>
        </div>
      </div>
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
