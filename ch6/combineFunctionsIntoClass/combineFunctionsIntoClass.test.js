describe('combineFunctionsIntoClass', () => {
    test('baseCharge', () => {
        const expected = 18
        const baseChargeOriginal = require('./original/client1')
        const baseChargeRefactored = require('./refactored/client1')

        expect(baseChargeOriginal).toEqual(expected);
        expect(baseChargeRefactored).toEqual(expected);
    });
    test('taxableCharge', () => {
        const expected = 2.4
        const taxableChargeOriginal = require('./original/client2')
        const taxableChargeRefactored = require('./refactored/client2')

        expect(taxableChargeOriginal).toBeCloseTo(expected, 5);
        expect(taxableChargeRefactored).toBeCloseTo(expected, 5);
    });
    test('basicCharge', () => {
        const expected = 18
        const basicChargeOriginal = require('./original/client3')
        const basicChargeRefactored = require('./refactored/client3')

        expect(basicChargeOriginal).toEqual(expected);
        expect(basicChargeRefactored).toEqual(expected);
    });
});