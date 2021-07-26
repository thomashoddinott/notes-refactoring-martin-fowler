describe('original', () => {
    const payAmount = require('./original')

    let anEmployee
    beforeEach(() => {
        anEmployee = { name: 'joe', id: 123, otherData: {} }
    })

    test('is not separated or retired', () => {
        expect(payAmount(anEmployee)).toEqual(2000)
    });
    test('is separated', () => {
        anEmployee.isSeparated = true
        expect(payAmount(anEmployee)).toEqual({ amount: 0, reasonCode: "SEP" })
    });
    test('is retired', () => {
        anEmployee.isRetired = true
        expect(payAmount(anEmployee)).toEqual({ amount: 0, reasonCode: "RET" })
    });
});

describe('refactored', () => {
    const payAmount = require('./refactored')

    let anEmployee
    beforeEach(() => {
        anEmployee = { name: 'joe', id: 123, otherData: {} }
    })

    test('is not separated or retired', () => {
        expect(payAmount(anEmployee)).toEqual(2000)
    });
    test('is separated', () => {
        anEmployee.isSeparated = true
        expect(payAmount(anEmployee)).toEqual({ amount: 0, reasonCode: "SEP" })
    });
    test('is retired', () => {
        anEmployee.isRetired = true
        expect(payAmount(anEmployee)).toEqual({ amount: 0, reasonCode: "RET" })
    });
});