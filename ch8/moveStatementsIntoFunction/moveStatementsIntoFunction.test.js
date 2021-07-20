const aPerson = {
    name: "Thomas",
    photo: {
        title: "Holiday",
        location: "Machu Picchu",
        date: new Date('2021-07-20')
    }
};

describe('original', () => {
    const {photoDiv, renderPerson} = require('./original')

    test('photoDiv', () => {
        const expected = `<div>
<p>title: Holiday</p>
<p>location: Machu Picchu</p>
<p>date: Tue Jul 20 2021</p>
</div>`
        expect(photoDiv(aPerson.photo)).toEqual(expected)
    });

    test('renderPerson', () => {
        const expected = `<p>Thomas</p>
(rendered photo)
<p>title: Holiday</p>
<p>location: Machu Picchu</p>
<p>date: Tue Jul 20 2021</p>`
        expect(renderPerson(aPerson)).toEqual(expected);
    });
});


describe('refactored', () => {
    const {photoDiv, renderPerson} = require('./refactored')

    test('photoDiv', () => {
        const expected = `<div>
<p>title: Holiday</p>
<p>location: Machu Picchu</p>
<p>date: Tue Jul 20 2021</p>
</div>`
        expect(photoDiv(aPerson.photo)).toEqual(expected)
    });

    test('renderPerson', () => {
        const expected = `<p>Thomas</p>
(rendered photo)
<p>title: Holiday</p>
<p>location: Machu Picchu</p>
<p>date: Tue Jul 20 2021</p>`
        expect(renderPerson(aPerson)).toEqual(expected);
    });
});