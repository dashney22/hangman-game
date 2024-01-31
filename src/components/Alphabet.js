import React from 'react';

const Alphabet = ({ selectLetter }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="alphabet">
      {alphabet.split("").map((letter, index) => (
        <button key={index} onClick={() => selectLetter(letter)} disabled={false}>
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Alphabet;
