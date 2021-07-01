describe('encapsulate variable - original', () => {
    test('get', () => {
        let defaultOwnerOriginal = require('./original')

        let spaceship = {};
        spaceship.owner = defaultOwnerOriginal;

        expect(`${spaceship.owner.firstName} ${spaceship.owner.lastName}`).toBe("Joe Bloggs");
    });
    test('set', () => {
        let defaultOwnerOriginal = require('./original')
        defaultOwnerOriginal = { ...defaultOwnerOriginal, firstName: "Jane" };

        let spaceship = {};
        spaceship.owner = defaultOwnerOriginal;

        expect(`${spaceship.owner.firstName} ${spaceship.owner.lastName}`).toBe("Jane Bloggs");
    });
});


describe('encapsulate variable - refactored', () => {
    test('get', () => {
        const { getDefaultOwner, setDefaultOwner } = require('./refactored')

        let spaceship = {};
        spaceship.owner = getDefaultOwner();

        expect(`${spaceship.owner.firstName} ${spaceship.owner.lastName}`).toBe("Joe Bloggs");
    });
    test('set', () => {
        const { getDefaultOwner, setDefaultOwner } = require('./refactored')

        setDefaultOwner({ firstName: "Jane", lastName: "Bloggs" })

        let spaceship = {};
        spaceship.owner = getDefaultOwner();

        expect(`${spaceship.owner.firstName} ${spaceship.owner.lastName}`).toBe("Jane Bloggs");
    });
});