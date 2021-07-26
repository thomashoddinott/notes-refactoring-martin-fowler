describe('original', () => {
    const disabilityAmount = require('./original')
    const anEmployee = { seniority: 3, monthsDisabled: 3, isPartTime: false }
    test('gets benefit', () => {
        expect(disabilityAmount(anEmployee)).toEqual(500)
    });
    test('denied benefit', () => {
        anEmployee.isPartTime = true
        expect(disabilityAmount(anEmployee)).toEqual(0)
    });
});

describe('refactored', () => {
    const disabilityAmount = require('./refactored')
    const anEmployee = { seniority: 3, monthsDisabled: 3, isPartTime: false }
    test('gets benefit', () => {
        expect(disabilityAmount(anEmployee)).toEqual(500)
    });
    test('denied benefit', () => {
        anEmployee.isPartTime = true
        expect(disabilityAmount(anEmployee)).toEqual(0)
    });
});