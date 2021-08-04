describe('original', () => {
    const deliveryDate = require('./original')
    test('MA, isRush', () => {
        const anOrder = { placedOn: new Date('2021-08-01'), deliveryState: 'MA' }
        expect(new Date(deliveryDate(anOrder, true))).toEqual(new Date('2021-08-03'))
    })
    test('CA, !isRush', () => {
        const anOrder = { placedOn: new Date('2021-08-01'), deliveryState: 'CA' }
        expect(new Date(deliveryDate(anOrder, false))).toEqual(new Date('2021-08-07'))
    })
});

describe('refactored', () => {
    const { rushDeliveryDate, regularDeliveryDate } = require('./refactored')
    test('MA, rushDeliveryDate', () => {
        const anOrder = { placedOn: new Date('2021-08-01'), deliveryState: 'MA' }
        expect(new Date(rushDeliveryDate(anOrder))).toEqual(new Date('2021-08-03'))
    })
    test('CA, regularDeliveryDate', () => {
        const anOrder = { placedOn: new Date('2021-08-01'), deliveryState: 'CA' }
        expect(new Date(regularDeliveryDate(anOrder))).toEqual(new Date('2021-08-07'))
    })
});