// i'm not sure about this one...

function alertForMiscreant(people) {
    const miscreant = findMiscreant(people)
    if (miscreant !== "") setOffAlarms()
    return miscreant
}

function findMiscreant(people) {
    for (const p of people) {
        if (p === "Don") {
            setOffAlarms();
            return "Don"
        }
        if (p === "John") {
            setOffAlarms()
            return "John"
        }
    }
    return ""
}

function setOffAlarms() {
    //set of alarm...
}

module.exports = alertForMiscreant