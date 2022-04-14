'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnNew = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1.genratingg a random dice rolll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2.display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3.check for rolled 1Lif true,switch to next player
});
