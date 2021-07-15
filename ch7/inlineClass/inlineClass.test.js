const trackingInformation = { 'shippingCompany': 'Evergreen', 'trackingNumber': 1234 }

describe('Original', () => {
  const { Shipment, TrackingInformation } = require('./original')
  test('1.', () => {
    const aShipment = new Shipment(new TrackingInformation(trackingInformation));
    expect(aShipment.trackingInfo).toEqual("Evergreen: 1234")

    aShipment.trackingInformation.shippingCompany = "Maersk"
    expect(aShipment.trackingInfo).toEqual("Maersk: 1234")
  })
})

describe('Refactored', () => {
  const Shipment  = require('./refactored')
  test('1.', () => {
    const aShipment = new Shipment(trackingInformation)
    expect(aShipment.trackingInfo).toEqual("Evergreen: 1234")

    aShipment.shippingCompany = "Maersk"
    expect(aShipment.trackingInfo).toEqual("Maersk: 1234")
  })
})