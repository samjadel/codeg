import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import QuizContainer from "./QuizContainer";

const Home = ({
  setShowGame,
  name,
  setName,
  currentPlayer,
  setCurrentPlayer,
}) => {
  const [score, setScore] = useState(0); // added this state variable to store the score

  // let navigate = useNavigate();

  function handleChange(e) {
    setName(e.target.value);
  }

  const newUser = {
    name: name,
    score: 0,
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Submitting name: ${name}`);
    // post the name and score to the db.json file
    fetch("http://localhost:3001/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("CURRENT PLAYER", data);
        setCurrentPlayer(data);
        setShowGame(false);
      });
  }

  return (
    <div className="home">
      {/* added the form element */}
      <form id="msform" onSubmit={handleSubmit}>
        <fieldset>
          <h2 className="fs-title">Welcome to CodeGames!</h2>
          <label htmlFor="name">
            <input
              placeholder="Enter Your Name Here"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <input id="startgame" type="submit" value="Start Game!" />
        </fieldset>
      </form>
    </div>
  );
};

export default Home;
