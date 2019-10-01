// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../compare-numbers.js';

const test = QUnit.test;

//assuming input is always a valid number!



test('user guesses the correct number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 2;
    const correctNumber = 2;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    const expected = 0;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('user guesses a number higher than the correct number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 3;
    const correctNumber = 2;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    const expected = 1;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('user guesses a number lower than the correct number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 1;
    const correctNumber = 2;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    const expected = -1;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
