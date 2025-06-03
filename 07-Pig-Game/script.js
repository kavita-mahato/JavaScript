"use strict";

// Selecting ELEMENTS
const playerE1 = document.querySelector(".player--0");
const playerE2 = document.querySelector(".player--1");
const scoreE1 = document.querySelector("#score--0");
const scoreE2 = document.getElementById("score--1");
const currentE1 = document.getElementById("current--0");
const currentE2 = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreE1.textContent = 0;
  scoreE2.textContent = 0;
  currentE1.textContent = 0;
  currentE2.textContent = 0;

  diceEl.classList.add("hidden");
  playerE1.classList.remove("player--winner");
  playerE2.classList.remove("player--winner");
  playerE1.classList.add("player--active");
  playerE2.classList.remove("player--active");
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerE1.classList.toggle("player--active");
  playerE2.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // Generating a random number dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    // Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // Check for rolled 1: if true
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // currentE1.textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >=100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to other player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
