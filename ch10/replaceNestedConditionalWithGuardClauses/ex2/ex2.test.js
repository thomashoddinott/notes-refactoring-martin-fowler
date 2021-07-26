describe('original', () => {
    const adjustedCapital = require('./original')
    const anInstrument = {
        capital: 0,
        interestRate: 1,
        duration: 2,
        income: 3,
        adjustmentFactor: 4,
    } 
    test('1.', () => {
        expect(adjustedCapital(anInstrument)).toEqual(0)
    });
    test('2.', () => {
        anInstrument.capital = 9
        expect(adjustedCapital(anInstrument)).toEqual(6)
    });
});

describe('refactored', () => {
    const adjustedCapital = require('./refactored')
    const anInstrument = {
        capital: 0,
        interestRate: 1,
        duration: 2,
        income: 3,
        adjustmentFactor: 4,
    } 
    test('1.', () => {
        expect(adjustedCapital(anInstrument)).toEqual(0)
    });
    test('2.', () => {
        anInstrument.capital = 9
        expect(adjustedCapital(anInstrument)).toEqual(6)
    });
});