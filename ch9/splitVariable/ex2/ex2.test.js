describe('original', () => {
  const discount = require('./original')
  test('1.', () => {
      expect(discount(1, 1)).toEqual(1)
  });
  test('2.', () => {
      expect(discount(51, 1)).toEqual(49)
  });
  test('3.', () => {
      expect(discount(51, 101)).toEqual(48)
  });
});

describe('refactored', () => {
  const discount = require('./refactored')
  test('1.', () => {
      expect(discount(1, 1)).toEqual(1)
  });
  test('2.', () => {
      expect(discount(51, 1)).toEqual(49)
  });
  test('3.', () => {
      expect(discount(51, 101)).toEqual(48)
  });
});