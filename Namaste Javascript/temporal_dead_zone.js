//let and const are in temporal dead zone
// let cannot be redeclared

//Program 1
// console.log(a);  //ReferenceError: Cannot access 'a' before initialization
// let a=10;

// var b=100;

//Program 2 - function will not execute, even console log is not performed
// let a=10;

// let a=100;//SyntaxError: Identifier 'a' has already been declared

//Program 3

// let a=10;

// var a=100;//SyntaxError: Identifier 'a' has already been declared (at temporal_dead_zone.js:19:5)

// Syntax error - means code doesn't even run

//Program 4

// const a;//SyntaxError: Missing initializer in const declaration (at temporal_dead_zone.js:25:7)

//Program 5

const b=10;
b=100; // TypeError: Assignment to constant variable at temporal_dead_zone.js:30:2

// Avoid temporal dead zone by moving all the declarations to top of the program. Shrink the temporal dead zone to 0.