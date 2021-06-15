const { Province, sampleProvinceData } = require('../ch4')

test('province', () => {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).toBe(5);
});