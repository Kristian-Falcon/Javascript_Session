/*There was stuff above this, check it out later*/

/*function Person(fName, lName) {
    this.firstName = fName || 'Unknown',
    this.lastName = lName || 'Unknown',
    this.getFullName = () => {
        return `${this.firstName} ${this.lastName}`
    }
}

var p1 = new Person('King', 'Kochhar');
console.log(p1.getFullName());
console.log(p1.firstName);
console.log(p1.lastName);
var p2 = new Person('Bhawna', 'Gunwani');
console.log(p2.getFullName());
var p3 = new Person('Avin', 'Grewal');
console.log(p3.getFullName());
var p4 = new Person();
console.log(p4.getFullName());*/

/*----------------*/
function Person(fName, lName) {
    this.firstName = fName || 'Unknown',
    this.lastName = lName || 'Unknown',
    Object.defineProperties(this, {
        "FirstName":{
            get: function () { return this.FirstName},
            set: function(value) { this.firstName = value}
        }
    })
}

var p1 = new Person();
console.log(p1.firstName);
p1.firstName = "Bhawna";
console.log(p1.firstName);
p1.lastName = 'Smith';
console.log(p1.lastName);
