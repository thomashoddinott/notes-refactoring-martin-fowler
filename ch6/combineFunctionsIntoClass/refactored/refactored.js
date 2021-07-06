const reading = require('../data/reading');

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

class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._year = data.year;
    }

    get customer() { return this._customer; }
    get quantity() { return this._quantity; }
    get year() { return this._year; }

    get baseCharge() {
        return baseRate(this.year) * this.quantity;
    }

    get taxableCharge() {
        return Math.max(0, this.baseCharge - taxThreshold(reading.year));
    }
}

module.exports = {
    acquireReading: acquireReading,
    Reading: Reading
}