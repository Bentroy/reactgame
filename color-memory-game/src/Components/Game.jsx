import React, { useEffect, useState } from 'react';
import './Game.css';

const colors = ['red', 'blue', 'green', 'yellow'];

function Game({ onGameOver, score, setScore }) {
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [level, setLevel] = useState(1);
  const [currentHighlight, setCurrentHighlight] = useState('');
  const [shouldPlay, setShouldPlay] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    nextSequence();
  }, []);

  useEffect(() => {
    if (shouldPlay) {
      playSequence();
    }
  }, [sequence, shouldPlay]);

  const nextSequence = () => {
    const nextColor = colors[Math.floor(Math.random() * 4)];
    const newSeq = [...sequence, nextColor];
    setSequence(newSeq);
    setUserInput([]);
    setMessage('');
    setShouldPlay(true);
  };

  const playSequence = () => {
    let i = 0;
    const interval = setInterval(() => {
      setCurrentHighlight(sequence[i]);
      setTimeout(() => setCurrentHighlight(''), 400);
      i++;
      if (i >= sequence.length) {
        clearInterval(interval);
        setShouldPlay(false);
      }
    }, 800);
  };

  const handleColorClick = (color) => {
    if (shouldPlay) return; // Block input while showing sequence
    const newInput = [...userInput, color];
    setUserInput(newInput);
    if (color !== sequence[newInput.length - 1]) {
      setMessage('Wrong!');
      onGameOver();
    } else if (newInput.length === sequence.length) {
      setMessage('Correct!');
      setScore(score + 10);
      setLevel(level + 1);
      setTimeout(() => {
        setMessage('');
        nextSequence();
      }, 1000);
    }
  };

  return (
    <div className="game">
      <h2>Level {level} | Score: {score}</h2>
      <div className="grid">
        {colors.map((color) => (
          <button
            key={color}
            className={`color-btn ${color} ${currentHighlight === color ? 'highlight' : ''}`}
            onClick={() => handleColorClick(color)}
          >
            {color}
          </button>
        ))}
      </div>
      <p className="message">{message}</p>
    </div>
  );
}

export default Game;
