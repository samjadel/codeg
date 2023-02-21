import NavBar from "./NavBar";

const GameOver = ({ name, score }) => {
  return (
    <div className="gameover confetti">
      <h1>GAME OVER</h1>
      <br></br>
      <h1>Great job, {name}!</h1>
      <br></br>
      <h1>You scored {score}/10! </h1>
    </div>
  );
};

export default GameOver;
