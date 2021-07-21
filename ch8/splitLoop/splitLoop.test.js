const people = [{ age: 19, salary: 1e6 }, { age: 50, salary: 12000 }, { age: 77, salary: 0 }]

describe('original', () => {
    const calculateSomeStuff = require('./original')
    test('1.', () => {
        expect(calculateSomeStuff(people)).toEqual({ "totalSalary": 1012000, "youngestAge": 19 })
    });
});

describe('refactored', () => {
    const calculateSomeStuff = require('./refactored')
    test('1.', () => {
        expect(calculateSomeStuff(people)).toEqual({ "totalSalary": 1012000, "youngestAge": 19 })
    });
});