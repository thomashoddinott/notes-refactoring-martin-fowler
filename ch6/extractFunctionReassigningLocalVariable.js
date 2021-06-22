// todo: refactor into class like in the book
const TODAY = {
    year: 2021,
    month: 6,
    day: 21
}

// Different from original - see p109
function printOwing(invoice) {
    let logMsg = ''

    logMsg += printBanner()
    const outstanding = calculateOutstanding(invoice)
    recordDueDate(invoice);
    logMsg += printDetails(invoice, outstanding);

    return logMsg
}
function calculateOutstanding(invoice) {
    let result = 0;
    for (const o of invoice.orders) {
        result += o.amount;
    }
    return result
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