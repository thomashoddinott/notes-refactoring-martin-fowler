const statementOriginal = require('../statementOriginal')
const statement = require('../statement')

const plays = require('../data/plays.json')
const invoices = require('../data/invoices.json')
const invoice = invoices[0]

test('statement - original', () => {
  const expected =
`Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`

  expect(statementOriginal(invoice, plays)).toBe(expected);
});

test('statement - refactored', () => {
  const expected =
`<h1>Statement for BigCo</h1>
<table>
<tr><th>play</th><th>seats</th><th>cost</th></tr>  <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>
  <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>
  <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>
</table>
<p>Amount owed is <em>$1,730.00</em></p>
<p>You earned <em>47</em> credits</p>
`

  expect(statement(invoice, plays)).toBe(expected);
});