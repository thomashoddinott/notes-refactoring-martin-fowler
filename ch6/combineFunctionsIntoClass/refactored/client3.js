const {acquireReading, Reading}= require('./refactored');

const rawReading = acquireReading();
const aReading = new Reading(rawReading);

const basicCharge = aReading.baseCharge

module.exports = basicCharge