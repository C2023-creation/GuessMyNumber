'use strict';

// const checkbtn = document.querySelector('.btn check');
const check = document.querySelector('.check');

const message = document.querySelector('.message');
const number = document.querySelector('.number');

const again = document.querySelector('.again');

const secretNumber = Math.trunc(Math.random() * 21);
number.textContent = secretNumber;

const score = document.querySelector('.score');
score.textContent = 20;

// console.log(score);

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = 'No number';
  }

  if (guess === secretNumber) {
    message.textContent = 'CorrectNumber !';
    document.body.style.background = 'green';
    number.textContent = secretNumber;
    number.classList.add('guessStyle');
  } else if (guess > secretNumber) {
    message.textContent = 'Too low ';
    if (score.textContent > 0) {
      score.textContent--;
    } else {
      message.textContent = 'You lost the game';
    }
  } else {
    message.textContent = 'Too high ';

    if (score.textContent > 0) {
      score.textContent--;
    } else {
      message.textContent = 'You lost the game';
    }
  }
});

again.addEventListener('click', () => {
  document.body.style.backgroundColor = '#222';
  score.textContent = 20;
  number.textContent = '?';
  message.textContent = 'Start guessing';
  number.style.width = '15rem';
  number.classList.remove('guessStyle');
});
