"use strict";

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector(".number").textContent = '?';
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

    //   When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No Number!";
    displayMessage('No Number!');
  } 
    //   Player WINS 
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number!";
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector(".number").textContent = secretNumber;

    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
  } 
   //   Player LOST 
  else if (guess !== secretNumber){
    if (score > 1) {
    //   document.querySelector(".message").textContent = guess > secretNumber ? "Too High!":"Too Low!";
      displayMessage('Too Low!')
      score--;
      document.querySelector(".score").textContent = score;
    } else {
    //   document.querySelector(".message").textContent = "You LOST!";
      displayMessage("You LOST!");
      document.querySelector(".score").textContent = 0;
    }
   }
   /*
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You LOST!";
      document.querySelector(".score").textContent = 0;
    }
  } 
  //   Player LOST
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    }else{
        document.querySelector(".message").textContent = "You LOST!";
        document.querySelector(".score").textContent = 0;
    }
  }
    */
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector(".again").addEventListener("click", function (){
    score = 20;
    document.querySelector(".score").textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").textContent = '?';
    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});