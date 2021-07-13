class Person {
    constructor(name) {
        this._name = name
        this._courses = []
    }
    get name() { return this._name }
    get courses() { return this._courses.slice() }
    set courses(aList) { this._courses = aList.slice() }

    addCourse(aCourse) {
        this._courses.push(aCourse)
    }
    removeCourse(aCourse, fnIfAbsent = () => { throw new RangeError() }) {
        const index = this._courses.indexOf(aCourse)
        if (index === -1) {
            fnIfAbsent()
        } else {
            this._courses.splice(index, 1)
        }
    }
}

class Course {
    constructor(name, isAdvanced) {
        this._name = name
        this._isAdvanced = isAdvanced
    }
    get name() { return this._name }
    get isAdvanced() { return this._isAdvanced }
}

function readCourseNames(difficulty) {
    switch (difficulty) {
        case 'basic':
            return ['Psych 101', 'Refactoring for Dummies', 'Ancient Greece']
        case 'advanced':
            return ['Psych 402', 'Refactoring for Experts', 'Socrates']
    }
}

module.exports = {
    Person: Person,
    Course: Course,
    readCourseNames: readCourseNames
}