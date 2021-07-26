function payAmount(employee) {
    if (employee.isSeparated) return { amount: 0, reasonCode: 'SEP' }
    if (employee.isRetired) return { amount: 0, reasonCode: 'RET' }
    // logic to compute amount
    // ...
    return 2000

}

module.exports = payAmount