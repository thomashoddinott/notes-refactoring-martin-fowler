describe('original', () => {
    const Order = require('./original')
    test('discount level 1', () => {   
        const anOrder = new Order(10, 5)
        expect(anOrder.finalPrice).toEqual(47.5)
    })
    test('discount level 2', () => {   
        const anOrder = new Order(101, 5)
        expect(anOrder.finalPrice).toEqual(454.5)
    })
});

describe('refactored', () => {
    const Order = require('./refactored')
    test('discount level 1', () => {   
        const anOrder = new Order(10, 5)
        expect(anOrder.finalPrice).toEqual(47.5)
    })
    test('discount level 2', () => {   
        const anOrder = new Order(101, 5)
        expect(anOrder.finalPrice).toEqual(454.5)
    })
});