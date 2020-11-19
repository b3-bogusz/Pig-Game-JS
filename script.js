'use strict';

// Selecting elements //
const scoreP0 = document.getElementById('score--0');
const scoreP1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

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
        // Switch next player //

    }
});







































