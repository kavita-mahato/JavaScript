'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show-modal');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModel = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpen.length; i++)
    btnOpen[i].addEventListener('click',openModal);  

// Use closeModal insteed of closeModal() because we want to call the function when user clicks the button 
// and not immediately after the page loads.

btnClose.addEventListener('click',closeModel);
overlay.addEventListener('click',closeModel);

    // btnClose.addEventListener('click',function(){
    //     modal.classList.add('hidden');
    //     overlay.classList.add('hidden');
    // });

    // overlay.addEventListener('click',function(){
    //     modal.classList.add('hidden');
    //     overlay.classList.add('hidden');
    // });

document.addEventListener('keydown',function(e){
    // console.log('A key was pressed');
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});