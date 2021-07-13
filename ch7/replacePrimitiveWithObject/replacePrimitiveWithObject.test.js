const highPriorityCount = require('./refactored')

describe('rushPriorityCount', () => {
    test('has 1 order', () => {
        expect(highPriorityCount).toEqual(1);
    });
});