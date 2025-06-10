import React from 'react';
import './Home.css';

function Home({ onStart }) {
  return (
    <div className="home">
      <h1>Color Memory Game</h1>
      <button onClick={onStart}>Start Game</button>
      <p>Remember the color sequence and repeat it!</p>
    </div>
  );
}

export default Home;
