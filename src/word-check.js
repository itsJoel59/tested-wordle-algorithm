export default function check(guess, correctWord) {
    const letters = {
        guessLetters: [],
        correctWordLetters: []
    };
    for (let i = 0; i < guess.length; i++) {
        const guessChar = {
            letter: guess[i],
            result: '',
        },
        correctWordChar = {
            letter: correctWord[i],
            checked: false  //tells if a letter has been matched already
        };
        letters.guessLetters.push(guessChar);
        letters.correctWordLetters.push(correctWordChar);
    }
    //loop that loops through every letter of guessed word
    for (let i = 0; i < letters.guessLetters.length; i++) {
        //loop that loops through every letter of correct word, allowing comparison between all letters
        for (let y = 0; y < letters.correctWordLetters.length; y++) {
            if (letters.guessLetters[i].result == 'correct') {break;}     // IF a letter from guess is correct from a previous loop/check it is skipped here
            else if (letters.correctWordLetters[y].checked) {continue;}   //IF a letter from correctWord is already correct, skip to next loop round      
            else if (letters.guessLetters[i].letter == letters.correctWordLetters[y].letter) {
                //if a letter is both in the word and in the right space,
                //that letter is removed from the correct word and loop resets
                if(i == y) {
                letters.guessLetters[i].result = 'correct';
                letters.correctWordLetters[y].checked = true;    
                //Resets the first loop to correct any misplaced labeled letters
                i = -1;
                break;
                }
                else {
                    letters.guessLetters[i].result = 'misplaced';
                }
            }
            else {
                letters.guessLetters[i].result = 'incorrect';
            }
        }
        if (i == (guess.length - 1)) {
            return letters.guessLetters;
        }
    }
}
check('HALLÅ', 'CYKLA');