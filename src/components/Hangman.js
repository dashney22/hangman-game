import React from 'react';

const Hangman = ({ incorrectGuesses }) => {
  const getHangmanImage = (step) => `/hangman/state${step}.GIF`;

  return (
    <div className="hangman">
      <img src={getHangmanImage(incorrectGuesses)} alt={`Hangman step ${incorrectGuesses}`} />
    </div>
  );
}

export default Hangman;
