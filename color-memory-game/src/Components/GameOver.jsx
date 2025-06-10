import React from 'react';
import './GameOver.css';

function GameOver({ score, onRestart, onHome }) {
  return (
    <div className="game-over">
      <h1>Game Over</h1>
      <p>Your Score: {score}</p>
      <button onClick={onRestart}>Restart</button>
      <button onClick={onHome}>Home</button>
    </div>
  );
}

export default GameOver;