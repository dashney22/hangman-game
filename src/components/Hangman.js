import React from 'react';

const Hangman = ({ incorrectGuesses }) => {
  const hangmanSteps = [
    "/path/to/step1.png",
    "/path/to/step2.png",
    "/path/to/step3.png",
    "/path/to/step4.png",
    "/path/to/step5.png",
    "/path/to/step6.png",
    "/path/to/step7.png"
  ];

  return (
    <div className="hangman">
      <img src={hangmanSteps[incorrectGuesses]} alt={`Hangman step ${incorrectGuesses}`} />
    </div>
  );
}

export default Hangman;
