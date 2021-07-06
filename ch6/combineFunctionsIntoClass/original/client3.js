const { acquireReading, baseRate } = require('./original');

const aReading = acquireReading();

function calculateBaseCharge(aReading) {
    return baseRate(aReading.year) * aReading.quantity;
}

const basicCharge = calculateBaseCharge(aReading);

module.exports = basicCharge