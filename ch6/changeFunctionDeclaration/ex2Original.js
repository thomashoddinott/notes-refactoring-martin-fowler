// with help from: https://github.com/wickedwukong/martin-fowler-refactoring-2nd/blob/master/src/chp6/ChangeFunctionDeclaration2.js

class Book {
    constructor() {
        this._reservations = [];
    }

    addReservation(customer) {
        this._reservations.push(customer)
    }

    hasReservation(customer) {
        return this._reservations.some(reservedCustomer => reservedCustomer.id === customer.id);
    }
}

module.exports = Book