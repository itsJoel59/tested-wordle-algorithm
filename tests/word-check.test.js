const check = require('../src/word-check.js');

test('compares the guessedWord HALLÅ with the correctWord CYKLA', () => {
    expect(check('HALLÅ', 'CYKLA')).toEqual(
        [
            {
                letter: 'H',
                result: 'incorrect'
            },
            {
                letter: 'A',
                result: 'misplaced'
            },
            {
                letter: 'L',
                result: 'incorrect'
            },
            {
                letter: 'L',
                result: 'correct'
            },
            {
                letter: 'Å',
                result: 'incorrect'
            }
        ]
    );
});
test('compares the guessedWord CYKLA with the correctWord CYKLA', () => {
    expect(check('CYKLA', 'CYKLA')).toEqual(
        [
            {
                letter: 'C',
                result: 'correct'
            },
            {
                letter: 'Y',
                result: 'correct'
            },
            {
                letter: 'K',
                result: 'correct'
            },
            {
                letter: 'L',
                result: 'correct'
            },
            {
                letter: 'A',
                result: 'correct'
            }
        ]
    );
});