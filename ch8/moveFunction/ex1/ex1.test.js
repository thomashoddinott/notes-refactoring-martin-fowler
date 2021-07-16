const points = require('./data')
const expected =  { time: 4, distance: 0.010574882486720035, pace: 6.30424657204341 }

describe('original', () => {
  const trackSummary  = require('./original')
  test('1.', () => {
    expect(trackSummary(points)).toEqual(expected)
  })
})

describe('refactored', () => {
  const trackSummary  = require('./refactored')
  test('1.', () => {
    expect(trackSummary(points)).toEqual(expected)
  })
})