function trivialExample(someObj) {
    let result
    if (someObj.aNumber >= 5) {
        result = 'Your number is greater than (or equal) to 5.'
    } else {
        result = 'Your number is less than 5.'
    }
    someObj.info = result
    return someObj
}

module.exports = trivialExample