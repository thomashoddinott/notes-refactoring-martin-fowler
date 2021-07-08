const getOrganization = require('./refactored')

// no point showing 'original' (un-refactored) example here

describe('encapsulate record ex1', () => {
  test('get', () => {
      expect(getOrganization().name).toBe('Acme Gooseberries');
      expect(getOrganization().country).toBe('GB');
  });
  test('set', () => {
      let organization = getOrganization();
      organization.name = 'Acme Blackberries';
      organization.country = 'FR';
      expect(organization.name).toBe('Acme Blackberries');
      expect(organization.country).toBe('FR');
  });
});