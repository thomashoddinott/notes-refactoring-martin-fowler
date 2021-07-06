// with help from: https://github.com/wickedwukong/martin-fowler-refactoring-2nd/commits/master/src/chp6/CombineFunctionsIntoClass.js

const reading = require('../data/reading');

function acquireReading() {
    return reading;
}

function baseRate(year) {
    if (year < 2018) return 0.15;
    return 0.17;
}

module.exports = {
    acquireReading: acquireReading,
    baseRate: baseRate
}