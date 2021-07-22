describe('original', () => {
  const organization = require('./original')
  test('1.', () => {
      expect(organization.name).toEqual('Acme Gooseberries')
      expect(organization.country).toEqual('GB')
  });
});

describe('refactored', () => {
  const organization = require('./refactored')
  test('1.', () => {
      expect(organization.title).toEqual('Acme Gooseberries')
      expect(organization.country).toEqual('GB')
  });
});