describe('encapsulate collection - original', () => {
    const { Person, Course, readCourseNames } = require('./original')

    let aPerson
    beforeEach(() => {
        aPerson = new Person('Thomas')
    })

    test('using the setter', () => {
        aPerson.courses = readCourseNames('advanced').map(name => new Course(name, true))
        const numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length
        expect(numAdvancedCourses).toEqual(3);
    });
    test('violating encapsulation', () => {
        aPerson.courses.push(new Course('Another Advanced Course', true))
        const lastCourse = aPerson.courses.pop().name
        expect(lastCourse).toBe('Another Advanced Course');
    })
});

describe('encapsulate collection - refactored', () => {
    const { Person, Course, readCourseNames } = require('./refactored')

    let aPerson
    beforeEach(() => {
        aPerson = new Person('Thomas')
    })

    test('using addCourse', () => {
        for (const name of readCourseNames('basic')) {
            aPerson.addCourse(new Course(name, false))
        }
        expect(aPerson.courses.length).toEqual(3)
        const numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length
        expect(numAdvancedCourses).toEqual(0)
    });
    test('using removeCourse', () => {
        const courseToBeRemoved = new Course("Physics", false);
        aPerson.addCourse(courseToBeRemoved);
        const anotherCourse = new Course("Chemistry", true)
        aPerson.addCourse(anotherCourse);

        aPerson.removeCourse(courseToBeRemoved);
        expect(aPerson.courses).toEqual([anotherCourse]);
    })
    // and loads of other test cases ... 
});

