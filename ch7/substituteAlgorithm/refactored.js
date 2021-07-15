function foundPerson(people) {
  const candidates = ['Tom', 'Dick', 'Harry']
  return people.find(p => candidates.includes(p)) || ''
}

module.exports = foundPerson