import React from "react";

const BeginScreen = (props) => {

    return (
        <div className="content">
        <div className="begin-game-header">
          <h1 className="title-header">Quizzical</h1>
          <h3>Test Your Wits</h3>
        </div>
        <button onClick={props.startGame} className="start-game-btn">Start Quiz</button>
      </div>
    )
}

export default BeginScreen;