import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Memory Game</h1>
    <p className="lead">This is a memory game made with React.js and Bootstrap</p>
    <p>When you click on an image, they will shuffle around at random. Try to see how many you can click without clicking on the same image twice</p>
    <h5>Current game score: {props.currentScore} | Top score: {props.topScore}</h5>

  </div>
</div>
);

export default Jumbotron;
