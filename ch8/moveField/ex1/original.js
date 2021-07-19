class Customer {
    constructor(name, discountRate) {
        this._name = name
        this._discountRate = discountRate
        this._contract = new CustomerContract(this.dateToday())
    }

    get discountRate() { return this._discountRate }
    becomePreferred() {
        this._discountRate += 0.03
        // etc.
    }
    applyDiscount(amount) {
        return amount -= amount * this._discountRate
    }
    dateToday() {
        return new Date();
    }
}

class CustomerContract {
    constructor(startDate) {
        this._startDate = startDate
    }
}

module.exports = Customer