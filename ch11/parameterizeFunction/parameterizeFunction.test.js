describe('original', () => {
    const baseCharge = require('./original')
    test('no usage', () => {
        expect(baseCharge(0)).toEqual({ currency: "$", currencyName: "USD", value: 0 })
    })
    test('some usage', () => {
        expect(baseCharge(100)).toEqual({ currency: "$", currencyName: "USD", value: 3 })
    })
});

describe('refactored', () => {
    const baseCharge = require('./refactored')
    test('no usage', () => {
        expect(baseCharge(0)).toEqual({ currency: "$", currencyName: "USD", value: 0 })
    })
    test('some usage', () => {
        expect(baseCharge(100)).toEqual({ currency: "$", currencyName: "USD", value: 3 })
    })
});