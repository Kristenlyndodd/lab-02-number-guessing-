// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from '../utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('when guess is higher than answer show "lower"', (expect) => {
    const guess = 9;
    const answer = 4;
    const expected = 'Lower.';
    const actual = compareNumbers(guess, answer);
    expect.equal(actual, expected);
});

test('when guess is lower than answer show "Higher."', (expect) => {
    const guess = 9;
    const answer = 11;
    const expected = 'Higher.';
    const actual = compareNumbers(guess, answer);
    expect.equal(actual, expected);
});

test('when guess is equal than answer show "You guessed it!"', (expect) => {
    const guess = 9;
    const answer = 9;
    const expected = 'You guessed it!';
    const actual = compareNumbers(guess, answer);
    expect.equal(actual, expected);
});