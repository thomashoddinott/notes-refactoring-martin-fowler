describe('original', () => {
  const Customer = require('./original')
  const aCustomer = new Customer('Joe', null)
  test('No discount', () => {
    expect(aCustomer.applyDiscount(10)).toEqual(10)
  });
  test('Discount', () => {
    aCustomer.discountRate = 0.1
    expect(aCustomer.applyDiscount(10)).toEqual(9)
  });
})

describe('refactored', () => {
  const Customer = require('./refactored')
  const aCustomer = new Customer('Joe', null)
  test('No discount', () => {
    expect(aCustomer.applyDiscount(10)).toEqual(10)
  });
  test('Discount', () => {
    aCustomer.discountRate = 0.1
    expect(aCustomer.applyDiscount(10)).toEqual(9)
  });
})