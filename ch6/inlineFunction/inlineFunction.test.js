const reportLinesOriginal = require('./original')
const reportLinesRefactored = require('./refactored')

const expected = [["name", "Joe Bloggs"], ["location", "New Town"]]

describe('inlineFunction', () => {
    let aCustomer
    beforeEach(() => {
        aCustomer = {
            name: 'Joe Bloggs',
            location: 'New Town',
        }
    })
    test('original', () => {
        expect(reportLinesOriginal(aCustomer)).toEqual(expected)
    });
    test('refactored', () => {
        expect(reportLinesRefactored(aCustomer)).toEqual(expected)
    });
})
