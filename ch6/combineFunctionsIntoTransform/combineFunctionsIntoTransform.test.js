describe('combineFunctionsIntoTransform', () => {
    test('baseCharge', () => {
        const expected = 18
        const baseChargeOriginal = require('../combineFunctionsIntoClass/original/client1')
        const baseChargeRefactored = require('./refactored/client1')

        expect(baseChargeOriginal).toEqual(expected);
        expect(baseChargeRefactored).toEqual(expected);
    });
    test('taxableCharge', () => {
        const expected = 2.4
        const taxableChargeOriginal = require('../combineFunctionsIntoClass/original/client2')
        const taxableChargeRefactored = require('./refactored/client2')

        expect(taxableChargeOriginal).toBeCloseTo(expected, 5);
        expect(taxableChargeRefactored).toBeCloseTo(expected, 5);
    });
});