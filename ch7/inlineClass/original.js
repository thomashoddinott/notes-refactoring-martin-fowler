class Shipment {
  constructor(aTrackingInformation) {
      this._trackingInformation = aTrackingInformation
  }

  get trackingInfo() {return this._trackingInformation.display}
  get trackingInformation() {return this._trackingInformation}
  set trackingInformation(aTrackingInformation) {this._trackingInformation = aTrackingInformation}
}

class TrackingInformation {
  constructor(trackingInformation) {
    this._shippingCompany = trackingInformation.shippingCompany
    this._trackingNumber = trackingInformation.trackingNumber
  }

  get shippingCompany() { return this._shippingCompany }
  set shippingCompany(arg) { this._shippingCompany = arg }
  get trackingNumber() { return this._trackingNumber }
  set trackingNumber(arg) { this._trackingNumber = arg }
  get display() {
    return `${this._shippingCompany}: ${this._trackingNumber}`
  }
}

module.exports = {
  Shipment: Shipment,
  TrackingInformation: TrackingInformation
}