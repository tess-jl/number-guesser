//compare user's guessed number with the correct number, returns 0 if numbers are identical, 1 if guessed number is too high, and -1 if guessed number is too low
//function needs two parameters


const compareNumbers = (guess, correctNumber) => {
    if (guess > 10 || guess < 0) {
        return 'number is out of range';
    } else if (guess > correctNumber) {
        return 1;
    } else if (guess < correctNumber) {
        return -1;
    } else if (guess === correctNumber) {
        return 0;
    }
};

export default compareNumbers;
 