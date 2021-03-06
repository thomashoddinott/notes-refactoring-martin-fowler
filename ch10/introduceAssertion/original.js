class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
  }
  applyDiscount(aNumber) {
    return this.discountRate ? aNumber - (this.discountRate * aNumber) : aNumber
  }

  get name() { return this._name; }
  get discountRate() { return this._discountRate; }
  set discountRate(aNumber) { this._discountRate = aNumber; }
}

module.exports = Customer