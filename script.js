"use strict";

const check = document.querySelector(".check");

const message = document.querySelector(".message");
const number = document.querySelector(".number");

const again = document.querySelector(".again");
const highS = document.querySelector(".highscore");

let secretNumber = Math.trunc(Math.random() * 2 + 1);
number.textContent = secretNumber;
let newScore = 20;
let highscore = 0;

// console.log(score);

check.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    message.textContent = "No number";
  }

  if (guess === secretNumber) {
    message.textContent = "CorrectNumber !";
    document.body.style.background = "green";
    number.textContent = secretNumber;
    number.classList.add("guessStyle");

    if (newScore > highscore) {
      highscore = newScore;
      document.querySelector(".score").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    message.textContent = "Too high ";
    if (newScore > 0) {
      newScore--;
      document.querySelector(".score").textContent = newScore;
    } else {
      message.textContent = "You lost the game";
    }
  } else {
    message.textContent = "Too low ";

    if (newScore > 0) {
      newScore--;
      document.querySelector(".score").textContent = newScore;
    } else {
      message.textContent = "You lost the game";
    }
  }
});

again.addEventListener("click", () => {
  document.body.style.backgroundColor = "#222";
  newScore = 20;
  secretNumber = Math.trunc(Math.random() * 2 + 1);
  number.textContent = "?";
  message.textContent = "Start guessing";
  number.style.width = "15rem";
  number.classList.remove("guessStyle");
});
