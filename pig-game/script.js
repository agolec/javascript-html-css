'use strict';



/*
there are ways to select an element by an Id, that only works with Id.

instead of using the following code:

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');

we can use .getElementById('');

*/

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

/* We do not use the # symbol when we use .getElementById */ 

//Setting starting conditions.
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

//Rolling Dice functionality.
btnRoll.addEventListener('click', function(){

    //Generating a random dice roll.
    const SIZE_OF_DICE = 6;
    const diceRoll = Math.ceil(Math.random() * SIZE_OF_DICE);
    console.log(`Your dice roll was ${diceRoll}`);

    //Display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${diceRoll}.png`;

    //Check for rolled 1. If true, switch player.
    if(diceRoll !== 1){
        //Add dice value to player's current score.
        currentScore += diceRoll;
         //How to select an element dynamically.
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        


      
    } 
     //Select the current player's score. Set it to 0.
    //Then, switch active players.
    else {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0Element.classList.toggle('player--active');
        player1Element.classList.toggle('player--active');
    }
});




