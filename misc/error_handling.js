/*try{
    addition(100, 200);
} catch (ex) {
    console.log('There has been some error.');
} finally {
    console.log("Finally block has been called");
}
*/
/*
function addition(num1, num2) {
    console.log('Result: ' + num1 + num2);
}
*/

//------------------------------/
var age = 1;
try{
    if (age >= 18) {
        console.log("You are valid to vote.");
    } else {
        throw {
            code: 1001,
            message: "You are not valid to vote."
        }
    }
} catch (ex) {
    console.log('There has been some error.');
    console.log(ex.code + ": " + ex.message)
} finally {
    console.log("Finally block has been called");
}