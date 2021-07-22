const scenario = {
  mass: 1,
  primaryForce: 200,
  delay: 5,
  secondaryForce: 200
}
const time = 10

describe('original', () => {
  const distanceTravelled = require('./original')
  test('1.', () => {
      expect(distanceTravelled(scenario, time)).toEqual(10500)
  });
});

describe('refactored', () => {
  const distanceTravelled = require('./refactored')
  test('1.', () => {
      expect(distanceTravelled(scenario, time)).toEqual(10500)
  });
});