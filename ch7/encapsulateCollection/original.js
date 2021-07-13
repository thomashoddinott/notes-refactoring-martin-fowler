class Person {
    constructor(name) {
        this._name = name
        this._courses = []
    }
    get name() { return this._name }
    get courses() { return this._courses }
    set courses(aList) { this._courses = aList }
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