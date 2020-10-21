/**
 * Closure means an inner function
 * Closure function always access to the cars and parameters of outer function
 */

 function outerFunction(){
     var count = 1;
     function innerFunction() {
         console.log(count);
     }
     return innerFunction;
 }
 var innerFunctionResult = outerFunction();
innerFunctionResult();

function Counter(){
    var counter = 0;
    function increaseCounter() {
        return counter += 1;
    }
    return increaseCounter;
}
var counter = Counter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());