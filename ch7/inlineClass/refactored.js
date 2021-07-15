class Shipment {
  constructor(trackingInformation) {
      this._trackingNumber = trackingInformation.trackingNumber
      this._shippingCompany = trackingInformation.shippingCompany
  }

  get shippingCompany() {return this._shippingCompany}
  set shippingCompany(arg) {this._shippingCompany = arg}
  get trackingNumber() {return this._trackingNumber}
  set trackingNumber(arg) {this._trackingNumber = arg}
  get trackingInfo() {return `${this._shippingCompany}: ${this._trackingNumber}`}
}

module.exports = Shipment