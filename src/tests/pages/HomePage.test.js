import React from "react";
import HomePage from "../../components/pages/HomePage";
import { render } from "@testing-library/react";
import { TriviaGameContext } from "../../context/TriviaGameContext";
import  TriviaGameManager  from "../../context/TriviaGameManager";
import { data } from "./mock";

describe("View HomePage correctly", () => {
    const triviaGameManager = new TriviaGameManager("easy");
   triviaGameManager.setQuestions(data.results);

  it("should have 3 radio buttons", () => {
     
    const { queryAllByTestId } = render(
      <TriviaGameContext.Provider value={triviaGameManager}>
        <HomePage />
      </TriviaGameContext.Provider>
    );
    expect(queryAllByTestId("radio-button")).toHaveLength(3);
  });

  it("should have 1 button", () => {
   
  const { queryAllByTestId } = render(
    <TriviaGameContext.Provider value={triviaGameManager}>
      <HomePage />
    </TriviaGameContext.Provider>
  );
  expect(queryAllByTestId("button")).toHaveLength(1);
  expect(queryAllByTestId("button")[0]).not.toHaveAttribute('disabled');
});
});
