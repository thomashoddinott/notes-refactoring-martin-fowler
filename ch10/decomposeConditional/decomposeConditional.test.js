const plan = {
  summerStart: new Date('2021-06-21'),
  summerEnd: new Date('2021-09-22'),
  summerRate: 100,
  regularRate: 50,
  regularServiceCharge: 10
}
const quantity = 1

describe('original', () => {
  const calculateCharge = require('./original')
  test('is summer', () => {
      expect(calculateCharge(new Date('2021-07-01'), plan, quantity)).toEqual(100)
  });
  test('is not summer', () => {
      expect(calculateCharge(new Date('2021-10-01'), plan, quantity)).toEqual(60)
  });
});

describe('refactored', () => {
  const calculateCharge = require('./refactored')
  test('is summer', () => {
      expect(calculateCharge(new Date('2021-07-01'), plan, quantity)).toEqual(100)
  });
  test('is not summer', () => {
      expect(calculateCharge(new Date('2021-10-01'), plan, quantity)).toEqual(60)
  });
});