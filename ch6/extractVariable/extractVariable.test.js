const ex1PriceOriginal = require('./ex1Original')
const ex1PriceRefactored = require('./ex1Refactored')

const ex2OrderOriginal = require('./ex2Original')
const ex2OrderRefactored = require('./ex2Refactored')

const expected = 297

describe('extractVariable', () => {
    let anOrder
    beforeEach(() => {
        anOrder = {
            quantity: 6,
            itemPrice: 45,
        }
    })
    test('ex1 - original', () => {
        expect(ex1PriceOriginal(anOrder)).toEqual(expected)
    });
    test('ex1 - refactored', () => {
        expect(ex1PriceRefactored(anOrder)).toEqual(expected)
    });
    test('ex2 - original', () => {
        expect(new ex2OrderOriginal(anOrder).price).toEqual(expected);
    });
    test('ex2 - refactored', () => {
        expect(new ex2OrderRefactored(anOrder).price).toEqual(expected);
    });
})
