describe('original', () => {
    const alertForMiscreant = require('./original')
    let people = ['Don']
    test('Don', () => {
        expect(alertForMiscreant(people)).toEqual('Don')
    });
    test('John', () => {
        people.unshift('John')
        expect(alertForMiscreant(people)).toEqual('John')
    });
    test('no miscreant', () => {
        people = []
        expect(alertForMiscreant(people)).toEqual('')
    });
});

describe('refactored', () => {
    const alertForMiscreant = require('./refactored')
    let people = ['Don']
    test('Don', () => {
        expect(alertForMiscreant(people)).toEqual('Don')
    });
    test('John', () => {
        people.unshift('John')
        expect(alertForMiscreant(people)).toEqual('John')
    });
    test('no miscreant', () => {
        people = []
        expect(alertForMiscreant(people)).toEqual('')
    });
});