import React, { useEffect, useState } from 'react';
import './Game.css';

const colors = ['red', 'blue', 'green', 'yellow'];

function Game({ onGameOver, score, setScore }) {
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [level, setLevel] = useState(1);
  const [showing, setShowing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    nextSequence();
  }, []);

  const nextSequence = () => {
    const nextColor = colors[Math.floor(Math.random() * 4)];
    const newSeq = [...sequence, nextColor];
    setSequence(newSeq);
    setUserInput([]);
    setShowing(true);
    setTimeout(() => setShowing(false), newSeq.length * 600);
  };

  const handleColorClick = (color) => {
    if (showing) return;
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
            className={`color-btn ${showing && sequence.includes(color) ? 'highlight' : ''} ${color}`}
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