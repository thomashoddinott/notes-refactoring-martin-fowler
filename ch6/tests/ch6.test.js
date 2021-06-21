const printOwingOriginal = require('../ch6Original')

test('ch6 - original', () => {
    const expected = `***********************
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
    expect(printOwingOriginal(invoice)).toBe(expected)
});
