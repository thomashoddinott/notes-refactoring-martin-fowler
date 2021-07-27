const {voyage, history1, history2} = require('./data')

describe('original', () => {
    const rating = require('./original')
    test('B rating', () => {
        expect(rating(voyage, history1)).toEqual('B')
    });
    test('A rating', () => {
        expect(rating(voyage, history2)).toEqual('A')
    });
});

describe('refactored', () => {
    const {Rating, ExperiencedChinaRating} = require('./refactored')
    test('B rating', () => {
        expect(new Rating(voyage, history1).value).toEqual('B')
    });
    test('A rating', () => {
        expect(new ExperiencedChinaRating(voyage, history2).value).toEqual('A')
    });
});