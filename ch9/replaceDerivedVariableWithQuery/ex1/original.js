class ProductionPlan {
  constructor(production) {
    this._production = production
    this._adjustments = []
  }

  get production() { return this._production }
  get adjustments() { return this._adjustments }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment)
    this._production += anAdjustment.amount
  }
}

module.exports = ProductionPlan