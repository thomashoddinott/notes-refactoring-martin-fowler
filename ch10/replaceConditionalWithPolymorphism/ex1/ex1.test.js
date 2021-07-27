const birds = require('./data')

describe('original', () => {
    const { plumages, speeds } = require('./original')
    test('plumages', () => {
        const expected = new Map([['a', 'average'], ['b', 'average'], ['c', 'scorched']]);
        expect(plumages(birds)).toEqual(expected)
    });
    test('speeds', () => {
        const expected = new Map([['a', 35], ['b', 36], ['c', 109.9]]);
        expect(speeds(birds)).toEqual(expected)
    });
});

describe('refactored', () => {
    const { plumages, speeds } = require('./refactored')
    test('plumages', () => {
        const expected = new Map([['a', 'average'], ['b', 'average'], ['c', 'scorched']]);
        expect(plumages(birds)).toEqual(expected)
    });
    test('speeds', () => {
        const expected = new Map([['a', 35], ['b', 36], ['c', 109.9]]);
        expect(speeds(birds)).toEqual(expected)
    });
});