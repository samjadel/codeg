import React, { useState } from "react";
import NavBar from "./NavBar";
const GameCard = ({
  question,
  questionNumber,
  setQuestionNumber,
  timeRemaining,
  setTimeRemaining,
  name,
  score,
  setScore,
}) => {
  const { q, answerKey, hint } = question;
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [formError, setFormError] = useState(false);

  function handleChange(e) {
    setUserInput(e.target.value);
    setIsCorrect(e.target.value === answer);
    setAnswer(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    if (answer === answerKey) {
      setQuestionNumber(questionNumber + 1);
      setIsCorrect(!isCorrect);
      console.log("correct");
      setUserInput("");
      setScore(score + 1);
      setTimeRemaining(20);
      setFormError(true);
    } else {
      setQuestionNumber(questionNumber);
      console.log("incorrect");
      setUserInput("");
      setFormError(false);
      navigator.vibrate(200); // Vibrate for 200ms
    }
    // submit the question and answer to the server
  }

  // setTimeRemaining(20)
  return (
    <div>
      <form id="msform" onSubmit={handleSubmit}>
        <fieldset>
          <h2 className="fs-title" id="question">
            Question:
          </h2>

          <h2 className="fs-title">{q}</h2>
          <h1 className="fs-subtitle" id="hint">
            Hint: {hint}
          </h1>
          <input
            type="text"
            name="fname"
            placeholder="Type Your Code Here!"
            value={userInput}
            onChange={handleChange}
            style={
              formError
                ? { border: "2px solid green" }
                : { border: "2px solid red" }
            }
          />
          <input
            type="submit"
            name="next"
            className="next action-button"
            value="Submit"
          />
          {isCorrect !== true && <p>{isCorrect ? "Correct!" : "Try Again"}</p>}
        </fieldset>
      </form>
      <div className="timer">
        <p>Time remaining:</p>
        <p>
          <div id="time">{timeRemaining}</div>
          seconds
        </p>
      </div>
      <form id="msform" onSubmit={handleSubmit}>
        <fieldset>
          <h2 className="fs-title">Player: {name}</h2>
          <h2 className="fs-title">Score: {score}/10</h2>
        </fieldset>
      </form>
    </div>
  );
};

export default GameCard;
