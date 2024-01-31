import React from 'react';

const Word = ({ targetWord, guessedLetters }) => {
  const displayWord = targetWord.split("").map((letter, index) => (
    <span key={index}>
      {guessedLetters.includes(letter) ? letter : "_"}
    </span>
  ));

  return (
    <div className="word">
      {displayWord}
    </div>
  );
}

export default Word;
