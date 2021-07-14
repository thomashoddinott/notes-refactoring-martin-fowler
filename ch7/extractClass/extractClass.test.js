describe('original', () => {
    const Person = require('./original')
    test('1.', () => {
        const aPerson = new Person('Thomas', '17', '0123456789')
        
        expect(aPerson.name).toBe('Thomas')
        expect(aPerson.officeAreaCode).toBe('17')
        expect(aPerson.officeNumber).toBe('0123456789')
        expect(aPerson.telephoneNumber).toBe('(17) 0123456789')
    });
});

describe('refactored', () => {
    const Person = require('./refactored')
    test('1.', () => {
        const aPerson = new Person('Thomas', '17', '0123456789')
        
        expect(aPerson.name).toBe('Thomas')
        expect(aPerson.officeAreaCode).toBe('17')
        expect(aPerson.officeNumber).toBe('0123456789')
        expect(aPerson.telephoneNumber).toBe('(17) 0123456789')
    });
});