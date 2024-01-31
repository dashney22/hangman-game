import React from 'react';

const Status = ({ gameStatus }) => {
  return (
    <div className="status">
      {gameStatus === "playing" && <p>Keep guessing!</p>}
      {gameStatus === "won" && <p>Congratulations! You've won!</p>}
      {gameStatus === "lost" && <p>Game over! Try again.</p>}
    </div>
  );
}

export default Status;
