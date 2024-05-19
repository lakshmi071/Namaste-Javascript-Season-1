// a();
// b();

// //function statatement aka function declaration
// function a() {
//   console.log("a is called"); // a is called
// }

// //function expression
// var b = function () {
//   console.log("b is called"); // TypeError: b is not a function, because it is treated like any other variables during hoisting
// };

// difference between function statement and function expression is hoisting

//Anonymous functions - functions without name, it is used when functions are used as values
// function () {
//     // SyntaxError: Function statements require a function name
// }

//Named function expression
// var b = function xyz() {
//   console.log("b is called"); // b is called
// };
// b();
// // xyz(); // ReferenceError: xyz is not defined

// //Difference between Parameters and Arguments
// function a(parameters) {
//   //......
// }
// a(arguuments); // arguments are values passed when invoking a function

//First class functions - passing another function as arguments
//functions are first class citizens
var b = function xyz() {
  console.log("b is called"); // b is called
};
function abc() {}
b(abc());

//arrow functions - introduced in ES6
