'use strict';

// Selecting elements //
const scoreP0 = document.getElementById('score--0');
const scoreP1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// Starting conditions //
scoreP0.textContent = 0;
scoreP1.textContent = 0;
diceEl.classList.add('hidden');

const totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality //
btnRoll.addEventListener('click', function (){
    const random = Math.floor(Math.random() * 6) +1;
    console.log(random);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${random}.png`;

    if (random !== 1){
        currentScore += random;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        // Switch next player after rolling 1//
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        current0.textContent = 0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
    }
});







































