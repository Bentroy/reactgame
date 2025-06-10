// App.js
import React, { useState } from 'react';
import './App.css';
import React from 'react';
import Home from './Components/Home.jsx';
import Game from './Components/Game.jsx';
import GameOver from './Components/GameOver.jsx';


function App() {
  const [gameState, setGameState] = useState('home'); // 'home', 'playing', 'over'
  const [score, setScore] = useState(0);
  // 'score' will hold the current score of the player
  // 'gameState' will manage the current state of the game
  // 'home' for the home screen, 'playing' for the game in progress, and 'over' for the game over screen
  // 'setScore' will be used to update the score during the game
  // 'setGameState' will be used to change the game state
  // 'useState' is a React hook that allows us to add state to functional components
  // 'useState' returns an array with two elements: the current state and a function to update it   

  const startGame = () => {
    setScore(0);
    setGameState('playing');
  };
  // 'startGame' function resets the score to 0 and changes the game state to 'playing'
  // This function is called when the player starts a new game 
  const endGame = () => {
    setGameState('over');
  };
  // 'endGame' function changes the game state to 'over'
  // This function is called when the game is over, for example, when the player fails to match colors
  // and needs to see their final score
  // 'GameOver' component will display the final score and options to restart or go back to the home screen

  const goHome = () => {
    setGameState('home');
  };
  // 'goHome' function changes the game state back to 'home'
  // This function is called when the player wants to return to the home screen after finishing the game
  // 'Home' component will display the welcome message and the option to start a new game
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
// The App component manages the overall game state and renders the appropriate component based on the current game state
// It uses conditional rendering to display either the Home, Game, or GameOver component
// The 'Home' component will display a welcome message and a button to start the game
// The 'Game' component will handle the game logic, including color matching and score tracking
// The 'GameOver' component will display the final score and options to restart the game or go back to the home screen
// The 'App' component is the main entry point of the application and manages the game flow


export default App;