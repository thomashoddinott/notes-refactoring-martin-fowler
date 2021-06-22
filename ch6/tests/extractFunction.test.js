const printOwingOriginal = require('../extractFunction/Original')
const printOwingNoVariablesOutOfScope = require('../extractFunction/NoVariablesOutOfScope')
const printOwingUsingLocalVariables = require('../extractFunction/UsingLocalVariables')
const printOwingReassigningLocalVariable = require('../extractFunction/ReassigningLocalVariable')

const expected =
`***********************
**** Customer Owes ****
***********************
name: ACME
amount: 600
due: 20/08/2021
`

describe('extractFunction', () => {
    let invoice
    beforeEach(() => {
        invoice = {
            customer: 'ACME',
            orders: [{ id: 0, amount: 100 }, { id: 1, amount: 200 }, { id: 2, amount: 300 }]
        }
    })

    test('original', () => {
        expect(printOwingOriginal(invoice)).toBe(expected)
    });
    test('refactored - No Variables Out Of Scope', () => {
        expect(printOwingNoVariablesOutOfScope(invoice)).toBe(expected)
    });
    test('refactored - Using Local Varables', () => {
        expect(printOwingUsingLocalVariables(invoice)).toBe(expected)
    });
    test('refactored - Reassigning a Local Variable', () => {
        expect(printOwingReassigningLocalVariable(invoice)).toBe(expected)
    });
})




