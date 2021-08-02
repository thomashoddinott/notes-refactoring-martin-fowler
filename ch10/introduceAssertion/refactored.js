class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
  }
  applyDiscount(aNumber) {
    if (!this.discountRate) return aNumber
    else {
      console.assert(this.discountRate >= 0)
      return aNumber * (1 - this.discountRate)
    }
  }

  get name() { return this._name; }
  get discountRate() { return this._discountRate; }
  set discountRate(aNumber) { 
    console.assert(null === aNumber || aNumber > 0)
    this._discountRate = aNumber; 
    
  }
}

module.exports = Customer