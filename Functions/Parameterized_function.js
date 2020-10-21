function sayHello(name){
    alter(`Hello ${name}!`);//use ` not '
}

function getFullName(firstName, lastName){
    alert(`${firstName} ${lastName}`);
}

function getFullNameAgain(){
    var fName = document.getElementById(firstName);
    var lName = document.getElementById(lastName);
    alert(`${fName} ${lName}`);
}

sayHello('King');
sayHello('Bhawna');
getFullName('Bhawna', 'Gunwani');
getFullName('King', 'Kochhar');
getFullName('John');
getFullName('John', 'James', 'Jake');