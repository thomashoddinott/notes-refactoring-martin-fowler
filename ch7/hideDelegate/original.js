class Person {
  constructor(name, aDepartment) {
    this._name = name
    this._department = aDepartment
  }
  get name() { return this._name }
  get department() { return this._department }
  set department(arg) { this._department = arg }
}

class Department {
  constructor(aChargeCode, aManager) {
    this._chargeCode = aChargeCode
    this._manager = aManager
  }
  get chargeCode() { return this._chargeCode }
  set chargeCode(arg) { this._chargeCode = arg }
  get manager() { return this._manager }
  set manager(arg) { this._manager = arg }
}

module.exports = {
  Person: Person,
  Department: Department
}