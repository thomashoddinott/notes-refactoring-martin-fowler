const { acquireReading, baseRate } = require('./original');

const aReading = acquireReading();

const baseCharge = baseRate(aReading.year) * aReading.quantity;

module.exports = baseCharge