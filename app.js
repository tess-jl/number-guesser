import compareNumbers from './compare-numbers.js';

//get and store into variables all the DOM elements you will need to either read or write from 
const runTestButton = document.getElementById('run-test');
let userGuess = document.getElementById('number-guess');
const numberOfTries = document.getElementById('number-of-tries');


const actualNumber = 2;

numberOfTries.textContent = 5;
let iterations = 5;

//event-handler function for the DOM elements

runTestButton.addEventListener('click', () => {
    //convert string of the number to a number data type
    const numberUserGuess = parseInt(userGuess.value, 10); 
    console.log(numberUserGuess); 

    const comparison = compareNumbers(numberUserGuess, actualNumber);

    iterations = iterations - 1;
    numberOfTries.textContent = iterations; // DOM is responding to chnage in number of iterations to show the user that iterations has changed

    if (comparison === 1) {
        console.log('logged same number');
        return 'your guess is too high!';
    } else if (comparison === -1) {
        return 'your guess is too low';
    } else {
        return 'your guess is correct!';
    }


});