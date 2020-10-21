//Default parameters
function getFullName(firstName, lastName = 'Smith'){
    console.log(`${firstName} ${lastName}`);
}

getFullName();
getFullName('King');
getFullName('King', 'Kochhar');

console.log('--------------------');

//Rest Parameter

function add(...numbers) {
    var total = 0;
    for(var a of numbers){
        total = total+a;
    }
    console.log(total);
}

add(10, 20, 30, 40, 50);
add(10, 20);