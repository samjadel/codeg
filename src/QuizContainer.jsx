import { useState, useEffect } from "react";
import GameCard from "./GameCard";
import GameOver from "./GameOver";
import NavBar from "./NavBar";

const QuizContainer = ({
  questions,
  name,
  score,
  setScore,
  players,
  currentPlayer,
}) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(20); // added this line

  useEffect(() => {
    // start the timer when the component mounts or updates
    const timer = setTimeout(() => {
      setQuestionNumber(questionNumber + 1);
      setTimeRemaining(20); // reset the timer
    }, 20000); // 20 seconds in milliseconds
    // clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [questionNumber]);

  // added this effect to update the timer displayç
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000); // 1 second in milliseconds
    return () => clearTimeout(timer);
  }, [timeRemaining]);

  const postScore = () => {
    console.log("score", score);
    fetch(`http://localhost:3001/players/${currentPlayer.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        score: score,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((updatedScore) => console.log("UPDATED", updatedScore));
  };

  if (!questions[questionNumber]) {
    postScore();
    return <GameOver name={name} score={score} />;
  }

  return (
    <div>
      {/* added this element to display the timer */}
      <GameCard
        question={questions[questionNumber]}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        timeRemaining={timeRemaining}
        setTimeRemaining={setTimeRemaining}
        name={name}
        score={score}
        setScore={setScore}
      />
      <div></div>
    </div>
  );
};
export default QuizContainer;
