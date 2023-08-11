'use strict';

//Use the querySelector method to specify
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = '⛔No Number entered';
    }
})