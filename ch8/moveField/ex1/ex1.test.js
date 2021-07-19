describe('original', () => {
    const Customer = require('./original')

    let customer
    beforeEach(() => {
        customer = new Customer("Thomas", 0.07)
    })
    test('calculate discount', () => {  
        expect(customer.applyDiscount(100)).toEqual(93)
    });
    test(`calculate discount after becoming a 'preferred' customer`, () => {  
        customer.becomePreferred()
        expect(customer.applyDiscount(100)).toEqual(90)
    });
});

describe('refactored', () => {
    const Customer = require('./refactored')

    let customer
    beforeEach(() => {
        customer = new Customer("Thomas", 0.07)
    })
    test('calculate discount', () => {  
        expect(customer.applyDiscount(100)).toEqual(93)
    });
    test(`calculate discount after becoming a 'preferred' customer`, () => {  
        customer.becomePreferred()
        expect(customer.applyDiscount(100)).toEqual(90)
    });
})