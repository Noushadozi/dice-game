'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

const diceEl = document.querySelector('.dice');

let currentScore = 0;
let currentPlayer = 0;
let scores = [0, 0];

const init = function () {
  current0El.innerText = 0;
  current0El.innerText = 0;
  score0El.innerText = 0;
  score1El.innerText = 0;

  diceEl.classList.add('hidden');
};

init();

btnRoll.addEventListener('click', function () {
  let randomNumber = Math.round(Math.random() * 5) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${randomNumber}.png`;

  if (randomNumber != 1) {
    currentScore += randomNumber;
    current0El.innerText = currentScore;

  } else {
    currentPlayer = 1;
    scores[1] =  currentScore;
  }
});
