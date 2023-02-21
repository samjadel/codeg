import ScoreCard from "./ScoreCard";
import { useNavigate } from "react-router-dom";

const NavBar = ({ setShowGame }) => {
  let navigate = useNavigate();

  return (
    <div className="header">
      <img src="/brackets.png" id="navimg" />
      <div className="codegames">CodeGames</div>
      <button
        className="navbutton"
        onClick={() => {
          navigate("/scores");
        }}
      >
        High Scores
      </button>
      <button
        className="navbutton"
        onClick={() => {
          navigate("/about");
        }}
      >
        About
      </button>
      <p></p>
      <button
        className="navbutton"
        onClick={() => {
          navigate("/");
          setShowGame(true);
        }}
      >
        Home
      </button>
    </div>
  );
};

export default NavBar;
