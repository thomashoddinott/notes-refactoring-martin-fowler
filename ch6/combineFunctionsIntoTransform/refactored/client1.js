const { acquireReading, enrichReading } = require('./refactored');

const rawReading = acquireReading();
const aReading = enrichReading(rawReading)
const baseCharge = aReading.baseCharge * aReading.quantity;

//quantity should be pushed into enrichReading?

module.exports = baseCharge