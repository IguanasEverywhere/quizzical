import React from "react";
import './App.css';
import GameScreen from "./GameScreen";
import BeginScreen from "./BeginScreen";

function App() {

  const [gameStatus, setGameStatus] = React.useState(false);

  const startGame = () => {
    setGameStatus(!gameStatus);
  }
  return (
    <div>
        {gameStatus === false ? <BeginScreen startGame={startGame} /> : <GameScreen />}
    </div>
  );
}

export default App;
