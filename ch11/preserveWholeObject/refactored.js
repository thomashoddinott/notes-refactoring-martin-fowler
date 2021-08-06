class HeatingPlan {
  constructor(low, high) {
    this._temperatureRange = { low: low, high: high }
  }

  withinRange(tempRange) {
    const bottom = tempRange.low
    const top = tempRange.high
    return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high)
  }
}
aPlan = new HeatingPlan(10, 20)

const aRoom = { daysTempRange: { low: 11, high: 19 } }
const tempRange = aRoom.daysTempRange
const isWithinRange = aPlan.withinRange(tempRange)

module.exports = isWithinRange
