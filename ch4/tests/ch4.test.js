const { Province, sampleProvinceData } = require('../ch4')

describe('province', () => {
    let asia;
    beforeEach(() => {
        asia = new Province(sampleProvinceData())
    })
    test('shortfall', () => {
        expect(asia.shortfall).toBe(5);
    });
    test('profit', () => {
        expect(asia.profit).toBe(230);
    });
    test('change production', () => {
        asia.producers[0].production = 20;
        expect(asia.shortfall).toBe(-6);
        expect(asia.profit).toBe(292);
    })
});

describe('no producers', () => {
    let noProducers;
    beforeEach(() => {
        const data = {
            name: "No producers",
            producers: [],
            demand: 30,
            price: 20
        };
        noProducers = new Province(data)
    })
    test('shortfall', () => {
        expect(noProducers.shortfall).toBe(30);
    })
    test('profit', () => {
        expect(noProducers.profit).toBe(0);
    })
})