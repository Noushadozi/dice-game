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
let playing = 0;
let modalBtn = 1;

const init = function () {
  current0El.innerText = 0;
  current1El.innerText = 0;
  score0El.innerText = 0;
  score1El.innerText = 0;
  playing = true;
  scores = [0, 0];
  currentPlayer = 0;
  currentScore = 0;
  modalBtn = 1;

  diceEl.classList.add('hidden');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  document.querySelector('.show-modal').innerText = 'How to play?';
};

init();
const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).innerText = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing == true) {
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
  }
});

btnHold.addEventListener('click', function () {
  if (currentScore > 0) {
    if (playing == true) {
      scores[currentPlayer] += currentScore;
      document.getElementById(`score--${currentPlayer}`).innerText =
        scores[currentPlayer];
      if (scores[currentPlayer] >= 30) {
        document
          .querySelector(`.player--${currentPlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${currentPlayer}`)
          .classList.remove('player--active');
        playing = false;

        document.querySelector('.show-modal').innerText = ` player ${
          currentPlayer == 0 ? 1 : 2
        } won!`;
        modalBtn = 0;
      } else {
        switchPlayer();
      }
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  if (modalBtn == 1) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
