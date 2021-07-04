const ex1CircumOriginal = require('./ex1Original')
const ex1CircumRefactored = require('./ex1Refactored')

describe('changeFunctionDeclaration1', () => {
    const radius = 0.5
    const expected = Math.PI
    test('ex1 - original', () => {
        expect(ex1CircumOriginal(radius)).toEqual(expected)
    });
    test('ex1 - refactored', () => {
        expect(ex1CircumRefactored(radius)).toEqual(expected)
    });
})

const ex2BookOriginal = require('./ex2Original')
describe('changeFunctionDeclaration2 - Original', () => {
    let book, customer
    beforeEach(() => {
        book = new ex2BookOriginal();
        customer = { id: "1" };
    })
    test('test case 1', () => {
        book.addReservation(customer)
        expect(book.hasReservation(customer)).toEqual(true);
    });
    test('test case 2', () => {
        expect(book.hasReservation(customer)).toEqual(false);
    });
})

const ex2BookRefactored = require('./ex2Refactored')
describe('changeFunctionDeclaration2 - Refactored', () => {
    let book, customer
    beforeEach(() => {
        book = new ex2BookRefactored();
        customer = { id: "1" };
    })
    test('test the isPriority flag', () => {
        book.addReservation(customer, true)
        expect(book.hasReservation(customer)).toEqual(true);
    });
    // test('forgetting the isPriority flag', () => {
    //     book.addReservation(customer)
    //     expect(book.hasReservation(customer)).toEqual(true);
    // });
})
