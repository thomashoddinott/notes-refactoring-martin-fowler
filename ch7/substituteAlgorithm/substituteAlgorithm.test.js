const people = ['Sam', 'Sal', 'Harry']

describe('Original', () => {
  const foundPerson = require('./original')
  test('1.', () => {
    expect(foundPerson(people)).toEqual('Harry') 
  })
})

describe('Refactored', () => {
  const foundPerson = require('./refactored')
  test('1.', () => {
    expect(foundPerson(people)).toEqual('Harry') 
  })
})  