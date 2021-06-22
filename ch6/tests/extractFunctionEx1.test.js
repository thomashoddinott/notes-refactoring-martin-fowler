const printOwingOriginal = require('../extractFunctionEx1Original')
const printOwing = require('../extractFunctionEx1')



describe('extractFunctionEx1', () => {
    const expected =
`***********************
**** Customer Owes ****
***********************
name: ACME
amount: 600
due: 20/08/2021
`
    const invoice = {
        customer: 'ACME',
        orders: [{ id: 0, amount: 100 }, { id: 1, amount: 200 }, { id: 2, amount: 300 }]
    }
    test('original', () => {
        expect(printOwingOriginal(invoice)).toBe(expected)
    });

    test('refactored', () => {
        expect(printOwing(invoice)).toBe(expected)
    });
})




