function foundPerson(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Tom') {
      return 'Tom'
    }
    if (people[i] === 'Dick') {
      return 'Dick'
    }
    if (people[i] === 'Harry') {
      return 'Harry'
    }
  }
  return ''
}

module.exports = foundPerson