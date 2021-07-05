const readingsOutsideRangeOriginal = require('./original')
const { readingsOutsideRangeRefactored, NumberRange } = require('./refactored')

describe('introduceParameterObject', () => {
    const station = {
        name: "ZB1",
        readings: [
            { temp: 47, time: "2016-11-10 09:10" },
            { temp: 53, time: "2016-11-10 09:20" },
            { temp: 58, time: "2016-11-10 09:30" },
            { temp: 53, time: "2016-11-10 09:40" },
            { temp: 51, time: "2016-11-10 09:50" },
        ]
    }
    const expected = [{ temp: 58, time: "2016-11-10 09:30" }]

    test('original', () => {
        expect(readingsOutsideRangeOriginal(station, 45, 55)).toEqual(expected)
    });
    test('refactored', () => {
        const operatingPlan = { temperatureFloor: 45, temperatureCeiling: 55 }
        const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling)
        expect(readingsOutsideRangeRefactored(station, range)).toEqual(expected)
    });
})