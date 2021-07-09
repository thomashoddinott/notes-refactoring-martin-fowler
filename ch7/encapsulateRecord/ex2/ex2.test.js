// with help from: https://github.com/korkorna/refactoring-2nd/blob/master/test/ch7/item1-2.spec.js

const { compareUsage, getCustomerData } = require('./refactored');

describe('Encapsulate Record ex2 - nested record', () => {
  let customerId, year, month;
  beforeEach(() => {
    customerId = 777;
    year = 2021;
    month = 1;
  });

  test('get usage', () => {
    expect(getCustomerData().usage(customerId, year, month)).toEqual(14);
  });

  const newUsage = 60
  test('set usage', () => {
    getCustomerData().setUsage(customerId, year, month, newUsage);
    expect(getCustomerData().usage(customerId, year, month)).toEqual(newUsage);
  });

  test('compare usage', () => {
    // expected laterAmount = newUsage (coupled to last test)
    // expected change = 60 - 30 (see ./data/customerData.js)
    expect(compareUsage(customerId, 2021, month)).toStrictEqual({ laterAmount: newUsage, change: 30 });
  });
});