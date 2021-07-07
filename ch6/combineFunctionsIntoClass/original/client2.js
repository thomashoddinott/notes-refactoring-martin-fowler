const { acquireReading, baseRate } = require('./original');

const aReading = acquireReading();
const base = (baseRate(aReading.year));

function taxThreshold() {
    return 0.13;
}

const taxableCharge = Math.max(0, base - taxThreshold()) * aReading.quantity;

module.exports = taxableCharge