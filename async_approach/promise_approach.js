/**
 * Promise: helps in writing async code.
 * It also helps us avoid callback hell
 * First: create promise, then handle them
 * Promise in javascript can be either resolved ore rejected.  
 */

const { resolve } = require("path");

 var promise = new Promise(function (resolved, reject){
     var isTrue = true;
     if(isTrue){
         resolve("Your status is active")
     } else {
         reject("Your statis is inactive")
     }
 });

 /*
 promise.then(function (data){
     console.log('then invoked')
     console.log(data);
 }).catch(function (error){
     console.log('catched invoked');
     console.log(error);
 });
*/

 promise.then((data) => console.log(data))
    .catch((error) => console.log(error));
