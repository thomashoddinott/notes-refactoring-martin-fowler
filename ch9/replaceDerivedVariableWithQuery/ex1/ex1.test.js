const anAdjustment = { id: 1, details: 'underestimated costs', amount: 1000 }

describe('original', () => {
  const ProductionPlan = require('./original')
  test('1.', () => {
    const productionPlan = new ProductionPlan(1000)
    productionPlan.applyAdjustment(anAdjustment)
    
    expect(productionPlan.production).toEqual(2000)
    expect(productionPlan.adjustments).toEqual([anAdjustment])
  });
});

describe('refactored', () => {
  const ProductionPlan = require('./refactored')
  test('1.', () => {
    const productionPlan = new ProductionPlan(1000)
    productionPlan.applyAdjustment(anAdjustment)
    
    expect(productionPlan.production).toEqual(2000)
    expect(productionPlan.adjustments).toEqual([anAdjustment])
  });
});