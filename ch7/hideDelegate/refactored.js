class Person {
  constructor(name, aDepartment) {
    this._name = name
    this._department = aDepartment
  }
  get name() { return this._name }
  get manager() { return this._department.manager }
  get chargeCode() { return this._department.chargeCode }
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