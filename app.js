import compareNumbers from './compare-numbers.js';

//get and store into variables all the DOM elements you will need to either read or write from 
const runTestButton = document.getElementById('run-test');
let userGuess = document.getElementById('number-guess');
const numberOfTries = document.getElementById('number-of-tries');
const numberOfTooHigh = document.getElementById('number-too-high');
const numberOfTooLow = document.getElementById('number-too-low');
const gameResult = document.getElementById('game-result');
const reveal = document.getElementById('reveal');


// const actualNumber = 2;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let actualNumber = getRandomInt(11);
console.log(actualNumber, 'actual number');

numberOfTries.textContent = 5;
numberOfTooHigh.textContent = 0;
numberOfTooLow.textContent = 0;
gameResult.textContent = ' ';

let iterations = 5;
let tooHighs = 0;
let tooLows = 0;


//event-handler function for the DOM elements
runTestButton.addEventListener('click', () => {
    //convert string of the number to a number data type
    const numberUserGuess = parseInt(userGuess.value, 10); 
    console.log(numberUserGuess); // logging the number the user guessed

    const comparison = compareNumbers(numberUserGuess, actualNumber);

    iterations = iterations - 1; // to log number of tries
    numberOfTries.textContent = iterations;

    if (iterations <= 0) { // to stop the game after 5 tries
        runTestButton.disabled = true;
        reveal.classList.remove('hidden');
    }

    if (comparison === 1) {
        tooHighs = tooHighs + 1;
        numberOfTooHigh.textContent = tooHighs;
        gameResult.textContent = 'you lost';
        return 'too high';
    } else if (comparison === -1) {
        tooLows = tooLows + 1;
        numberOfTooLow.textContent = tooLows;
        gameResult.textContent = 'you lost';
        return 'your guess is too low';
    } else {
        gameResult.textContent = 'YOU WON';
        runTestButton.disabled = true;
        reveal.classList.remove('hidden');
        return 'your guess is correct!';
    }
});