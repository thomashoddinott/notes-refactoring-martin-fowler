function disabilityAmount(anEmployee) {
    if (anEmployee.seniority < 2) return 0
    if (anEmployee.monthsDisabled > 12) return 0
    if (anEmployee.isPartTime) return 0
    return 500
}

module.exports = disabilityAmount