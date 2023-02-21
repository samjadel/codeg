import "./App.css";
import NavBar from "./NavBar";
import GameCard from "./GameCard";
import Footer from "./footer";
import { useEffect, useState } from "react";
import QuizContainer from "./QuizContainer";
import ScoreCard from "./ScoreCard";
import Home from "./Home";

function App() {
  const [questions, setQuestions] = useState([]);
  const [players, setPlayers] = useState();
  const [showGame, setShowGame] = useState(true);
  const [name, setName] = useState(""); // added this state variable to store the name
  const [score, setScore] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState([]);

  const isShowGame = () => {
    setShowGame(!showGame);
  };

  const loadQuestions = () => {
    fetch("http://localhost:3001/questions")
      .then((res) => res.json())
      .then((qs) => {
        console.log("render", qs);
        setQuestions(qs);
      });
  };
  useEffect(loadQuestions, []);

  const loadPlayers = () => {
    fetch("http://localhost:3001/players")
      .then((res) => res.json())
      .then((ps) => {
        console.log(ps);
        setPlayers(ps);
      });
  };
  useEffect(loadPlayers, []);

  return (
    <div className="App">
      <NavBar setShowGame={setShowGame} />
      {showGame ? (
        <Home
          setShowGame={setShowGame}
          name={name}
          setName={setName}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
        />
      ) : (
        <QuizContainer
          questions={questions}
          name={name}
          score={score}
          setScore={setScore}
          players={players}
          currentPlayer={currentPlayer}
        />
      )}
    </div>
  );
}

export default App;
