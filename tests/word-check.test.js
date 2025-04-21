const check = require('../src/word-check.js');
//Detta test ser till att en gissning med bokstavsdublett räknas ut korrekt
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
//Detta test bekräftar att korrekt gissning får passande resultat
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
//Detta test testar att inkorrekt gissning får passande resultat
test('compares the guessedWord FÖRST with the correctWord CYKLA', () => {
    expect(check('FÖRST', 'CYKLA')).toEqual(
        [
            {
                letter: 'F',
                result: 'incorrect'
            },
            {
                letter: 'Ö',
                result: 'incorrect'
            },
            {
                letter: 'R',
                result: 'incorrect'
            },
            {
                letter: 'S',
                result: 'incorrect'
            },
            {
                letter: 'T',
                result: 'incorrect'
            }
        ]
    );
});