//compare userGuess number with the correct number
//has 2 parameters guess and correctNumber, returns either 0 (number guessed is identical), 1 (number guessed is too high), -1 (number guessed is too low)

const compareNumbers = (guess, correctNumber) => {
    if (guess === correctNumber) {
        return 0;
    } else if (guess > correctNumber) {
        return 1;
    } else if (guess < correctNumber) {
        return -1;
    }
};

export default compareNumbers;
 