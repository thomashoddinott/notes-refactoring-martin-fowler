//this is actually `split loop` + some more refactorings!

function calculateSomeStuff(people) {
    function totalSalary() {
        return people.reduce((total, p) => total + p.salary, 0)
    }
    function youngestAge() {
        return Math.min(...people.map(p => p.age))
    }

    return { youngestAge: youngestAge(), totalSalary: totalSalary() }
}

module.exports = calculateSomeStuff