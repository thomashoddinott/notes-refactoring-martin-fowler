const _ = require('lodash')

const reading = require('../../combineFunctionsIntoClass/data/reading');

function acquireReading() {
    return reading;
}

function baseRate(year) {
    if (year < 2018) return 0.15;
    return 0.17;
}

function taxThreshold() {
    return 0.13;
}

function enrichReading(original) {
    const result = _.cloneDeep(original)
    result.baseCharge = baseRate(result.year)
    result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold())
    return result
}

module.exports = {
    acquireReading: acquireReading,
    enrichReading: enrichReading
}