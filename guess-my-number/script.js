'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0; 

//Use the querySelector method to make an event listener on the
//check guess button.
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    //No text in input field
    if(!guess){
        document.querySelector('.message').textContent = '⛔No Number entered';
    }
    //Player wins

    //set high score if score > the current high score.
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = '⚖Correct number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.score').textContent = score;
       
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } 
    //User guess is too high
    else if (guess > secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = '📈Guess too high.';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = '💥You lost the game';
        }
        
    //User guess is too low.
    } else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📉Guess too low.'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = '💥You lost the game';
        }
        
    } 
})

//create event listener on the again button.
document.querySelector('.again').addEventListener('click',function(){
    //user must reset the page back to how it is at the start of the game.
    //Generate a new random number.
    //guess text box must not have text.
    //Guess too low/high text reset.
    //Score label reset.
    //High Schore label reset.

    secretNumber = Math.trunc(Math.random() * 20) + 1;

    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
   
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    
    document.querySelector('.score').textContent = score;
})