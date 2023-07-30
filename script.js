'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

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

const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).innerText = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

init();

btnRoll.addEventListener('click', function () {
  let randomNumber = Math.round(Math.random() * 5) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${randomNumber}.png`;

  if (randomNumber !== 1) {
    currentScore += randomNumber;
    document.getElementById(`current--${currentPlayer}`).innerText =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold
