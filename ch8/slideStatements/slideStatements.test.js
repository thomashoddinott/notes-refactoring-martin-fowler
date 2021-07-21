describe('original', () => {
    const trivialExample = require('./original')
    test('1.', () => {
        const someObj = { aNumber: 6 }
        expect(trivialExample(someObj).info).toEqual('Your number is greater than (or equal) to 5.')
    });
    test('2.', () => {
        const someObj = { aNumber: 4 }
        expect(trivialExample(someObj).info).toEqual('Your number is less than 5.')
    });
});

describe('refactored', () => {
    const trivialExample = require('./refactored')
    test('1.', () => {
        const someObj = { aNumber: 6 }
        expect(trivialExample(someObj).info).toEqual('Your number is greater than (or equal) to 5.')
    });
    test('2.', () => {
        const someObj = { aNumber: 4 }
        expect(trivialExample(someObj).info).toEqual('Your number is less than 5.')
    });
});