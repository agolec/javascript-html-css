'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0; 

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

//Use the querySelector method to make an event listener on the
//check guess button.
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    //No text in input field
    if(!guess){
        displayMessage('⛔No Number entered');
    }
    //Player wins

    //set high score if score > the current high score.
    else if(guess === secretNumber){
        displayMessage('⚖Correct number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.score').textContent = score;
       
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } 
    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? '📈Guess too high.' : '💥Guess too low.');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.score').textContent = 0;
            displayMessage('💥You lost the game');
        }
    }
})

//create event listener on the again button.
document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
   
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    
    document.querySelector('.score').textContent = score;
})