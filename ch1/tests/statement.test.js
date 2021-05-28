const statement = require('../statement')

const plays = require('../data/plays.json')
const invoices = require('../data/invoices.json')

test('1.', () => {
  const invoice = invoices[0]
  const expected =
`Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`

  expect(statement(invoice, plays)).toBe(expected);
});