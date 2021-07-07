const { acquireReading, enrichReading } = require('./refactored');

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge * aReading.quantity

//quantity should be pushed into enrichReading?

module.exports = taxableCharge