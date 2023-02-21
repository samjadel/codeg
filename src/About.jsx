import React from "react";
import NavBar from "./NavBar";

const About = () => {
  return (
    <>
      <NavBar />
      <div>
        <form id="msform">
          <fieldset>
            <h1> Hello Friends! </h1> <br />
            <h3>Welcome to Codegames</h3>
            <br />
            <p style={{ display: "justify" }}> </p> <br />
            <p style={{ display: "justify" }}>
              {" "}
              To play the game: simply answer the questions to move forward. You
              have 20 seconds to answer each question before your time is up and
              you have to move on to the next question!{" "}
            </p>
            <br></br>
            <p>
              Now that you've entered your name, your score will be displayed
              when the game is over, and you can compare your score with anyone
              that has played as well. Happy coding!
            </p>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default About;
