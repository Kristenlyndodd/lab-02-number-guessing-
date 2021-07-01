import { getRandomInt } from './utils.js';
import { compareNumbers } from './utils.js';

const resetBtn = document.getElementById('reset-button');
const numberInput = document.getElementById('user-guess');
const submitBtn = document.getElementById('submit-button');
const response = document.getElementById('response');
const attempts = document.getElementById('attempts-left');
let randNum = getRandomInt();
let clickCount = 0;
console.log(randNum);

resetBtn.addEventListener('click', ()=>{
    clickCount = 0;
    document.getElementById('submit-button').disabled = false;
    randNum = getRandomInt();
    console.log(randNum);
    attempts.textContent = ``;
    response.textContent = `Higher or Lower?`;
});
  
  
submitBtn.addEventListener('click', ()=>{
    let numberInputValue = Number(numberInput.value);
    response.textContent = compareNumbers(numberInputValue, randNum);
    clickCount++;
    console.log(clickCount);
    attempts.textContent = `You've guessed ${clickCount}/4 times.`;
    if ((clickCount > 3) && (numberInputValue === randNum)) {
        submitBtn.disabled = true;
    } else if (clickCount > 3) {
        submitBtn.disabled = true;
        attempts.textContent = `You're out of guesses! The answer was ${randNum}`;
    }
});