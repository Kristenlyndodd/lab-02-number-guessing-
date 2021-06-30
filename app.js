// Functions & Dom Elements 

import { numCheck } from './utils.js';

const targetNum = Math.floor(Math.random() * 10);
const userGuess = document.getElementById('input');
const gBtn = document.getElementById('guess-btn');
//const rBtn = document.getElementById('reset-btn');
const scr = document.getElementById('score');

let guessesRemaining = 4;

gBtn.addEventListener('click', () => {
    guessesRemaining --;
    // console.log(guessesRemaining);
    // console.log(targetNum);
    // console.log(userGuess);
   
    if (userGuess.value === targetNum) {
        gBtn.disabled = true;
    }
    if (userGuess.value < targetNum) {
        return numCheck.textContent = `Wrong Answer ${guessesRemaining}`;
    }
    if (userGuess.value > targetNum) {
        return numCheck.textContent = `Wrong Answer ${guessesRemaining}`;
    }
    else
        return numCheck.textContent = `you did it!`;
});






//rBtn.addEventListener('click', () => {

//});

//   get the userGuess from the input -- convert it to a number
//   check the userGuess against the targetNumber
//   if userGuess === targetNumber --> 
//       END THE GAME
//       display winning message
//   if userGuess !== targetNumber --> 
//       display feedback with over or under
//       decrement remaining guesses
//          if no guesses remaining
//             END THE GAME
//             display losing message
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state