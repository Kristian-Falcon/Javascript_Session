/**
 * Array Function is the concept of ES6
 * An alternative way to write a short syntax compared to the function or function exprssions
 

 add = function addition(a, b) {
     return a + b;
 }

console.log(add(100, 200));
*/

var sayHello = () => console.log('Hello Everyone!');
sayHello();

console.log('------------------------------')

var sayHelloWithMessage = () => {
    console.log('Hello Everyone')
    console.log('Lets learn interesting facts aboutJS!')
}
sayHelloWithMessage();

console.log('------------------------------')

console.log(typeof add);

console.log('------------------------------')

let numbers = [4, 2, 6];
numbers.sort((a, b) => b-a);
console.log(numbers);