function payAmount(employee) {
    let result;
    if (employee.isSeparated) {
        result = { amount: 0, reasonCode: "SEP" };
    }
    else {
        if (employee.isRetired) {
            result = { amount: 0, reasonCode: "RET" };
        }
        else {
            // logic to compute amount
            // ...
            result = 2000
        }
    }
    return result;
}

module.exports = payAmount