const csv = `office, country, telephone
Chicago, USA, +1 312 373 1000
Beijing, China, +86 4008 900 505
Bangalore, India, +91 80 4064 9570
Porto Alegre, Brazil, +55 51 3079 3550
Chennai, India, +91 44 660 44766`

const expected = [{"city": "Bangalore", "phone": "+91 80 4064 9570"}, {"city": "Chennai", "phone": "+91 44 660 44766"}]

describe('original', () => {
    const acquireData = require('./original')
    test('1.', () => {
        expect(acquireData(csv)).toEqual(expected)
    });
});

describe('refactored', () => {
    const acquireData = require('./refactored')
    test('1.', () => {
        expect(acquireData(csv)).toEqual(expected)
    });
});