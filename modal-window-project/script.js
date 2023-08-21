'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//Create the closeModal named function.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//create the openModal named function.
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//create a for loop that goes over every button on the page.
//If any button is clicked that opens a modal, the Event Handler for that will run the openModal function.

//If the btnCloseModal or overlay are clicked, then we will close the overlay.

//Earlier, we defined the functions as part of the addEventListener's second parameters, which resulted in duplicate code as our btnCloseModal and
//elements contained the same code

/*
for(let i = 0; i < btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click',function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        btn.closeModal.classList.remove('hidden');
        modal.style.display = 'block';
    });
}
*/

//if our class called 'hidden' contains more styles than just the 'display: none' property, it would set them all at once.
//The more properties we want to change on a style, the more manual work has to be done if we write out code like modal.style.display = 'block', 
//rather than saying 'modify this class with this name'
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}


/*
key press events
*/

document.addEventListener('keydown',function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});