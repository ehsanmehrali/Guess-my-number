'use strict';
/*
// 72 - Selecting and Manipulating Elements
console.log(document.querySelector('.message').textContent);
console.log(
  (document.querySelector('.message').textContent = '🎉 Correct Number!')
);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// 74 - Implementing the Game Logic

// generate random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// 78 - Refactoring Our Code: The DRY Principle
// Refactoring functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const numberStyleManipul = function (color, width) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// 73 - Handling Click Events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');

    // When player wins!
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    // 75 - Manipulating CSS Styles
    numberStyleManipul('#60b347', '30rem');
    displayNumber(secretNumber);
    // 77 - Implementing Highscores
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

// 76 - Coding Challenge #1
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayNumber(secretNumber);
  score = 20;
  displayNumber('?');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  numberStyleManipul('#222', '15rem');
});
