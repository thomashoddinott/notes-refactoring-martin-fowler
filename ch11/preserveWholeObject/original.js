class HeatingPlan {
  constructor(low, high) {
    this._temperatureRange = { low: low, high: high }
  }

  withinRange(bottom, top) {
    return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high)
  }
}
aPlan = new HeatingPlan(10, 20)

const aRoom = { daysTempRange: { low: 11, high: 19 } }
const low = aRoom.daysTempRange.low
const high = aRoom.daysTempRange.high
const isWithinRange = aPlan.withinRange(low, high)

module.exports = isWithinRange
