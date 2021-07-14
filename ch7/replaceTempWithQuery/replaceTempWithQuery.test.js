describe('original', () => {
    const Order = require('./original')
    test('1.', () => {
        const anOrder = new Order(1, {id: 7, name: 'laptop', price: 333})
        expect(anOrder.price).toEqual(326.34)
    });
    test('2.', () => {
        const anOrder = new Order(1, {id: 2, name: 'car', price: 3333})
        expect(anOrder.price).toEqual(3166.35)
    });
});

describe('refactored', () => {
    const Order = require('./refactored')
    test('1.', () => {
        const anOrder = new Order(1, {id: 7, name: 'laptop', price: 333})
        expect(anOrder.price).toEqual(326.34)
    });
    test('2.', () => {
        const anOrder = new Order(1, {id: 2, name: 'car', price: 3333})
        expect(anOrder.price).toEqual(3166.35)
    });
});