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

    logMsg += printBanner()

    // calculate outstanding
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }

    recordDueDate(invoice);

    logMsg += printDetails(invoice, outstanding);

    return logMsg
}
function printBanner() {
    let banner = ''
    banner += "***********************\n"
    banner += "**** Customer Owes ****\n"
    banner += "***********************\n"
    return banner
}
function printDetails(invoice, outstanding) {
    let details = ''
    details += `name: ${invoice.customer}\n`
    details += `amount: ${outstanding}\n`
    details += `due: ${invoice.dueDate.toLocaleDateString()}\n`
    return details
}
function recordDueDate(invoice) {
    invoice.dueDate = new Date(TODAY.year, TODAY.month, TODAY.day + 30);
}

module.exports = printOwing