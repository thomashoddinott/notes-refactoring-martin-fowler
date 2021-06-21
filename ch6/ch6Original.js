// todo: refactor into class like in the book
const TODAY = {
    year: 2021,
    month: 6,
    day: 21
}

// Different from original - see p109
function printOwing(invoice) {
    let logMsg = ''
    let outstanding = 0;

    logMsg += "***********************\n"
    logMsg += "**** Customer Owes ****\n"
    logMsg += "***********************\n"

    // calculate outstanding
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }

    // record due date 
    invoice.dueDate = new Date(TODAY.year, TODAY.month, TODAY.day + 30);

    //print details
    logMsg += `name: ${invoice.customer}\n`
    logMsg += `amount: ${outstanding}\n`
    logMsg += `due: ${invoice.dueDate.toLocaleDateString()}\n`

    return logMsg
}

module.exports = printOwing