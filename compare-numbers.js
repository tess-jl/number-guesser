//compare user's guessed number with the correct number, returns 0 if numbers are identical, 1 if guessed number is too high, and -1 if guessed number is too low
//function needs two parameters


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
 