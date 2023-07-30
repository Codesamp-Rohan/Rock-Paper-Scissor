"use strict";

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const moveLeftEl = document.querySelector(".moveLeft");

const startEl = document.querySelector(".start");
const message = document.querySelector(".message");

const btnRock = document.querySelector(".buttonRock");
const btnPaper = document.querySelector(".buttonPaper");
const btnScissor = document.querySelector(".buttonScissor");

const btn = document.querySelector(".btn");
const newGame = document.querySelector(".newGame");

btn.classList.remove("hidden");

score0El.textContent = 0;
score1El.textContent = 0;
moveLeftEl.textContent = 10;

var number = Math.trunc(Math.random() * 3) + 1;
let leftMove = 10;
let playerScore = 0;
let computerScore = 0;
let playing = true;

console.log(number);

// playerScore.textContent = 0;
// computerScore.textContent = 0;

const newNumber = function () {
  number = Math.trunc(Math.random() * 3) + 1;
  console.log(number);
  leftMove = 10;
  message.textContent = `Choose Your Move!!!`;
  moveLeftEl.textContent = 10;
  btn.classList.remove("hidden");
  playerScore = 0;
  computerScore = 0;
  score0El.textContent = playerScore;
  score1El.textContent = computerScore;
};

btnRock.addEventListener("click", function () {
  if (number === 3) {
    message.textContent = "YOU WON!!!🏆🏆🏆";
    playerScore++;
    score0El.innerText = playerScore;
  } else if (number === 2) {
    message.textContent = "YOU LOST💀💀💀";
    computerScore++;
    score1El.textContent = computerScore;
  } else {
    message.textContent = "TIE🐒🐒🐒";
  }
});
btnPaper.addEventListener("click", function () {
  if (number === 1) {
    message.textContent = "YOU WON!!!🏆🏆🏆";
    playerScore++;
    score0El.innerText = playerScore;
  } else if (number === 3) {
    message.textContent = "YOU LOST💀💀💀";
    computerScore++;
    score1El.textContent = computerScore;
  } else {
    message.textContent = "TIE🐒🐒🐒";
  }
});
btnScissor.addEventListener("click", function () {
  if (number === 2) {
    message.textContent = "YOU WON!!!🏆🏆🏆";
    playerScore++;
    score0El.innerText = playerScore;
  } else if (number === 1) {
    message.textContent = "YOU LOST💀💀💀";
    computerScore++;
    score1El.textContent = computerScore;
  } else {
    message.textContent = "TIE🐒🐒🐒";
  }
});

newGame.addEventListener("click", newNumber);

btn.addEventListener("click", function () {
  leftMove--;
  moveLeftEl.textContent = leftMove;
  if (leftMove <= 0) {
    message.textContent = `Game Over`;
    btn.classList.add("hidden");
    if (playerScore > computerScore) {
      message.textContent = `Human Won`;
    } else if (playerScore < computerScore) {
      message.textContent = `Computer Won`;
    } else {
      message.textContent = `Tie`;
    }
  }
  number = Math.trunc(Math.random() * 3) + 1;
  console.log(number);
});
