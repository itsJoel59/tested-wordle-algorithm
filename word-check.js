function check(guess, correctWord) {
    const letters = [];
    for (let i = 0; i < guess.length; i++) {
        const char = {
            letter: guess[i],
            result: '',
        }
        letters.push(char);
    }
    //loop that loops through every letter of guessed word
    for (let i = 0; i < letters.length; i++) {
        //loop that loops through every letter of correct word, allowing comparison between all letters
        for (let y = 0; y < correctWord.length; y++) {
            if (letters[i].result == 'correct')     // IF a letter is correct from a previous loop/check it is skipped here
                continue;
            else if (letters[i].letter == correctWord[y]) {
                //if a letter is both in the word and in the right space,
                //that letter is removed from the correct word and loop resets
                if(i == y) {
                letters[i].result = 'correct';
                    correctWord = (y, correctWord) => {
                        const tmp = correctWord.split('');
                        tmp.splice(y, 1);
                        return tmp.join('');
                    };
                //Resets the first loop to correct any misplaced labeled letters
                i = -1;
                break;
                }
                else {
                    letters[i].result = 'misplaced';
                }
            }
            else {
                letters[i].result = 'incorrect';
            }
        }
        // letters.push(char);
        if (i == (guess.length - 1)) {
            return letters;
        }
    }
/* 
    for (let i = 0; i < guess.length; i++) {
        
        for (let y = 0; y < correctWord.length; y++) {
            
            if (guess[i] == correctWord[y]) {
                //if a letter is both in the word and in the right space
                if(i == y) {
                char.result = "correct";

                // INSERT remove-letter-from-correctWord-function

                break;
                }
                else {
                    char.result = "misplaced";
                }
            }
            else {
                char.result = "incorrect";
            }
        }
        // letters.push(char);
        if (i == (guess.length - 1)) {
            return letters;
        }
    }
     */
}