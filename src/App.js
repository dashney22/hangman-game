import React, { useState } from 'react';
import './App.css';
import Word from './components/Word';
import Alphabet from './components/Alphabet';
import Hangman from './components/Hangman';
import Status from './components/Status';
import HelpModal from './components/HelpModal';
import RestartButton from './components/RestartButton';

const App = () => {
  const [targetWord, setTargetWord] = useState("HANGMAN"); // Default word, can be replaced later
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState("playing"); // Can be "won", "lost", or "playing"

  // Function to handle letter selection
  const selectLetter = (letter) => {
    if (guessedLetters.includes(letter)) return; // Letter already guessed
    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);
    if (!targetWord.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
    checkGameStatus(newGuessedLetters);
  };

  // Function to check if the game is won or lost
  const checkGameStatus = (guessedLetters) => {
    const missingLetters = targetWord.split("").filter(letter => !guessedLetters.includes(letter));
    if (missingLetters.length === 0) {
      setGameStatus("won");
    } else if (incorrectGuesses >= 9) { // Max incorrect guesses
      setGameStatus("lost");
    }
  };

  // Function to restart the game
  const restartGame = () => {
    setTargetWord("HANGMAN"); // Reset word
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameStatus("playing");
  };

  return (
    <div className="App">
      <h1>Hangman Game</h1>
      <Word targetWord={targetWord} guessedLetters={guessedLetters} />
      <Alphabet selectLetter={selectLetter} />
      <Hangman incorrectGuesses={incorrectGuesses} />
      <Status gameStatus={gameStatus} />
      <HelpModal />
      <RestartButton restartGame={restartGame} />
    </div>
  );
}

export default App;
