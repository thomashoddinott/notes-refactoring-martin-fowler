class ProductionPlan {
  constructor(production) {
    this._production = production
    this._adjustments = []
  }

  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, this._production)
  }

  get adjustments() { return this._adjustments }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment)
  }
}

module.exports = ProductionPlan