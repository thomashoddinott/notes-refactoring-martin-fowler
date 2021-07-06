const {acquireReading, Reading} = require('./refactored');

const rawReading = acquireReading();
const aReading = new Reading(rawReading);

const taxableCharge =  aReading.taxableCharge;

module.exports = taxableCharge