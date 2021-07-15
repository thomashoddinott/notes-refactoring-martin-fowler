describe('Original', () => {
  const { Person, Department } = require('./original')
  test('1.', () => {
    const aDepartment = new Department(123, 'Barbara')
    const aPerson = new Person('Bill', aDepartment)

    expect(aPerson.name).toEqual('Bill')
    expect(aPerson.department.chargeCode).toEqual(123)
    expect(aPerson.department.manager).toEqual('Barbara')
  })
})

describe('Refactored', () => {
  const { Person, Department } = require('./refactored')
  test('1.', () => {
    const aDepartment = new Department(123, 'Barbara')
    const aPerson = new Person('Bill', aDepartment)

    expect(aPerson.name).toEqual('Bill')
    expect(aPerson.chargeCode).toEqual(123)
    expect(aPerson.manager).toEqual('Barbara')
  })
})