const { Province, sampleProvinceData } = require('../ch4')

describe('province', () => {
    test('shortfall', () => {
        const asia = new Province(sampleProvinceData());
        expect(asia.shortfall).toBe(5);
    });
    test('profit', () => {
        const asia = new Province(sampleProvinceData());
        expect(asia.profit).toBe(230);
    });
  });