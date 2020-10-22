/*
var person = {};

var person = {
    firstName: 'King',
    lastName: 'smith'
}
console.log(person);

var person = {
    firstName: 'King',
    lastName: 'smith',
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person);
*/

var person = {
    firstName: 'King',
    lastName: 'smith',
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);