'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal');

let count = 0;

for(let i = 0; i < btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click',function(){
        count++;
        console.log('Button clicked ' + count + ' times.');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        
    });
    btnCloseModal.addEventListener('click',function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    })
}

