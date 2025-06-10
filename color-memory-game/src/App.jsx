import React, { useState } from 'react';
import Home from './Components/Home';
import Game from './Components/Game';
import GameOver from './Components/GameOver';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('home');
  const [score, setScore] = useState(0);

  const startGame = () => {
    setScore(0);
    setGameState('playing');
  };

  const endGame = () => {
    setGameState('over');
  };

  const goHome = () => {
    setGameState('home');
  };

  return (
    <div className="App">
      {gameState === 'home' && <Home onStart={startGame} />}
      {gameState === 'playing' && (
        <Game
          onGameOver={endGame}
          score={score}
          setScore={setScore}
        />
      )}
      {gameState === 'over' && <GameOver score={score} onRestart={startGame} onHome={goHome} />}
    </div>
  );
}

export default App;