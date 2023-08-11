'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
//document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);
//Use the querySelector method to specify
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = '⛔No Number entered';
    }
    else if(guess === secretNumber){
        score--
        document.querySelector('.message').textContent = '⚖Correct number!';
        document.querySelector('.score').textContent = score;
    } 
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