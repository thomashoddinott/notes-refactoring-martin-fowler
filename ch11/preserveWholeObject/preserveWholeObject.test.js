describe('original', () => {
  const isWithinRange = require('./original')
  test('within range', () => {
    expect(isWithinRange).toEqual(true)
  })
});

describe('refactored', () => {
  const isWithinRange = require('./refactored')
  test('within range', () => {
    expect(isWithinRange).toEqual(true)
  })
});