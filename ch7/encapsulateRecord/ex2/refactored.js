// with some help from: https://github.com/korkorna/refactoring-2nd/blob/master/src/ch7/item1-2.js

const _ = require('lodash')
const _customerData = require('./data/customerData')

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerId, year, month, amount) {
    this._data[customerId].usages[year][month] = amount;
  }

  usage(customerId, year, month) {
    return this._data[customerId].usages[year][month];
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }
}

let customerData = new CustomerData(_customerData);

function getCustomerData() {
  return customerData;
}

function getRawDataOfCustomer() {
  return customerData._data;
}

function setRawDataOfCustomer(arg) {
  customerData = new CustomerData(arg);
}

function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().rawData[customerID].usages[laterYear][month];
  const earlier = getCustomerData().rawData[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}

module.exports = {
  compareUsage,
  getCustomerData,
};
