class Organization {
  constructor(data) {
    this._title = data.title
    this._country = data.country
  }
  get title() { return this._title }
  set title(aString) { this._title = aString }
  get country() { return this._country }
  set country(aCountryCode) { this._country = aCountryCode }
}

module.exports = new Organization({ title: "Acme Gooseberries", country: "GB" })