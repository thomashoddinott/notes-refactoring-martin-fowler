const { acquireReading, Reading } = require('./refactored');

const rawReading = acquireReading();
const aReading = new Reading(rawReading);

const baseCharge = aReading.baseCharge;

module.exports = baseCharge