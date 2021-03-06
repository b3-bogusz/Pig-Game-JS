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

let totalScores, currentScore, activePlayer, playing;

const init = function (){
    totalScores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    scoreP0.textContent = 0;
    scoreP1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    diceEl.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');

    document.querySelector(`#name--${activePlayer}`).textContent = 'PLAYER 1';
}
init();


const switchPlayer = function (){
    // Switch next player after rolling 1//
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}


// Rolling dice functionality //
btnRoll.addEventListener('click', function (){
    if (playing){
        const random = Math.floor(Math.random() * 6) +1;

        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${random}.png`;

        if (random !== 1){
            currentScore += random;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function (){
    if (playing) {
        totalScores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer];

        if (totalScores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        } else {
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', init);



