Hangman Game
Description
This is a Hangman game implemented using React. The game randomly selects a word, and the player must attempt to guess the word letter-by-letter. Incorrect guesses result in the hangman being drawn step-by-step. The player wins if they guess the word correctly before the hangman is completed.

How to Play
To start the game, simply click on the "Help" button to understand the game rules.
Guess letters from the alphabet by clicking on the buttons.
Each correct guess reveals the letters in the word.
Each incorrect guess adds a part to the hangman.
The game is won if the word is guessed correctly before the hangman is completed.
The game is lost if the hangman is completed before the word is guessed.

Features
Attractively styled components using React Bootstrap.
Use of state management to track game progress.
Help modal to explain game rules.
Restart button to reset the game.
Hangman images displayed for each incorrect guess.

Installation

Clone the repository:
git clone https://github.com/dashney22/hangman-game.git

Navigate to the project directory:
cd hangman-game

Install dependencies:
npm install
Start the development server:
npm start
Open your browser and navigate to http://localhost:3000 to play the game.

Technologies Used
React
React Bootstrap
CSS (for custom styling)
Folder Structure
arduino
Copy code
hangman-game/
  ├── public/
  │   ├── index.html
  │   └── hangman/
  │       ├── state0.gif
  |       |__ state1.gif
  │       ├── state2.gif
  │       ├── state3.gif
  │       ├── state4.gif
  │       ├── state5.gif
  │       ├── state6.gif
  │       └── state7.gif
  │       ├── state8.gif
  │       ├── state9.gif
  │       └── state10.gif
  ├── src/
  │   ├── components/
  │   │   ├── Hangman.js
  │   │   ├── HelpModal.js
  │   │   └── ...
  │   ├── App.css
  │   ├── App.js
  │   ├── index.css
  │   └── index.js
  ├── README.md
  └── ...
Author
Dashney Makgafela
dmakgafela@csir.co.za