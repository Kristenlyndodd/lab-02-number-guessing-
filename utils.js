//Random Number Function provided by MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function getRandomInt() {
    return Math.floor(Math.random() * 20);
}

export function compareNumbers(numberInput, randNum) {
    // console.log(numberInput, randNum);
    if (numberInput > randNum) {
        return `Lower.`;
    } else if (numberInput < randNum) {
        return `Higher.`;
    } else {
        document.getElementById('submit-button').disabled = true;
        return `You got it! The answer was ${randNum}`;
    }
}