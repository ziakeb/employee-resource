const uuid = require('uuid');

class Employee {
    constructor(firstName, lastName, hireDate, role, favJoke, favQuote){
        this._id = uuid.v1();
        this.firstName = firstName || 'Hanah'
        this.lastName = lastName || 'John'
        this.hireDate = hireDate || '2020-04-12'
        this.role = role || 'ceo'
        this.favJoke = favJoke || 'Joke'
        this.favQuote = favQuote || 'Quote'
    }
}

module.exports = Employee;