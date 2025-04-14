function check(guess, correctWord) {
    const letters = [];
    for (let i = 0; i < guess.length; i++) {
        const char = {
            letter: guess[i],
            result: ""
        };
        for (let y = 0; y < correctWord.length; y++) {
            
            if (guess[i] == correctWord[y]) {
                //if a letter is both in the word and in the right space
                if(i == y) {
                char.result = "correct";
                break;
                }
                else {
                    char.result = "misplaced";
                }
            }
            else {
                char.result = "incorrect";
            }
            //Adds character to the list just before the loop ends
            if (y == (correctWord.length - 1)) {
                letters.push(char);
            }
        }
        if (i == (guess.length - 1)) {
            return letters;
        }
    }
}