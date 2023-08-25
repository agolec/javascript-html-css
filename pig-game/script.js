'use strict';



/*
there are ways to select an element by an Id, that only works with Id.

instead of using the following code:

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');

we can use .getElementById('');

*/

const WINNING_VALUE = 10;

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
let playing = true;

const changePlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
}

//Rolling Dice functionality.
btnRoll.addEventListener('click', function(){

    if(playing){
        //Generating a random dice roll.
        const SIZE_OF_DICE = 6;
        const diceRoll = Math.ceil(Math.random() * SIZE_OF_DICE);

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
            changePlayer();
        }
    }
    
});

//When clicked, take the active player's current store, and
//add it to their total score.

//If active player's score after clicking 'hold', is 100 or more, they win.

//If active player's score is not at least 100, switch active players.
btnHold.addEventListener('click', function(){
    //Number(document.getElementById(`score--${activePlayer}`).textContent) += scores[activePlayer];
    //currentScore = 0
    
    //Additionalcheck - not part of video - Scenario: Number is 1 and next player clicks 'hold'.
    //Intended Implementation: We don't allow anything to happen within the hold button because holding a 1 would be pointlessly toggling between players?

    if(playing){
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if(scores[activePlayer] >= WINNING_VALUE){
            playing = false;
            diceElement.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.getElementById(`score--${activePlayer}`).textContent += '🎊 Winner!';
        } else {
            changePlayer();
        }
    }
    
});

/*
new game button functionality. Resets the game's styles and game state.

if game was won, the playing variable is reset to true.

current score = 0;
both plater's total scores are reset to 0.

player 1 is made the active player.

The dice graphic is hidden again.
*/
btnNew.addEventListener('click',function(){
    if(playing === false){
        playing = true;
    }
    diceElement.classList.add('hidden');

    currentScore = 0;
    
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    activePlayer = 0;

    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');

    current0Element.textContent = 0;
    current1Element.textContent = 0;

    score0Element.textContent = 0;
    score1Element.textContent = 0;
    for(let i = 0; i < scores.length; i++){
        scores[i] = 0;
    }

})


