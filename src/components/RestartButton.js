import React from 'react';

const RestartButton = ({ restartGame }) => {
  return (
    <div className="restart-button">
      <button onClick={restartGame}>Restart Game</button>
    </div>
  );
}

export default RestartButton;
