const priceOrderOriginal = require('./original')
const priceOrderRefactored = require('./refactored')

describe('Split Phase', () => {
  let input
  beforeEach(() => {
      input = {
        product: {
          basePrice: 10,
          discountThreshold: 9,
          discountRate: 0.1,
      
        },
        quantity: 5,
        shippingMethod: {
          discountThreshold: 50,
          discountedFee: 5,
          feePerCase: 10
        }
      }
  })
  
  // Just fiddling with some values. Not sure what scenarios these cases represent.

  test('test case 1', () => {
    const expected = 100
    expect(priceOrderOriginal(input.product, input.quantity, input.shippingMethod)).toEqual(expected)
    expect(priceOrderRefactored(input.product, input.quantity, input.shippingMethod)).toEqual(expected)
  });
  test('test case 2', () => {
    const expected = 149
    input.quantity = 10
    expect(priceOrderOriginal(input.product, input.quantity, input.shippingMethod)).toEqual(expected)
    expect(priceOrderRefactored(input.product, input.quantity, input.shippingMethod)).toEqual(expected)
  });
})

