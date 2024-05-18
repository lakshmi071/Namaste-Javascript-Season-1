//{}- block scope/Compound statement - grouping multiple statements into single statement

// if(true) //Uncaught SyntaxError: Unexpected end of input (at block_scope_&_shadowing.js:3:9) because it expects one statement

//Program 1
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);//10
//     console.log(b);//20
//     console.log(c);//30
// }

// // Only var can be accessed outside function
// //let and const are block scoped and var are in global scope

// console.log(a);//10
// console.log(b); //block_scope_&_shadowing.js:14 Uncaught ReferenceError: b is not defined
// console.log(c);

//Program 2

// var a=100;
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);//10
//     console.log(b);//20
//     console.log(c);//30
// }

// console.log(a);//10 because a within function modifies the a outside function
// that is happening because both are pointing to same memory location

//Program 2

// let b=100;
// const c=100;
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);//10
//     console.log(b);//20
//     console.log(c);//30
// }

// console.log(b);//100 because they are pointing to different memory location
// console.log(c);//100 works same as let

//shadowing works same in functions

//Program 3

// var c=100;
// function x(){
//     var c=30;
//     console.log(c); //30
//     c=20;
// }
// x();
// console.log(c);//100

//Program 4 - Illegal shadowing

// let a=19;
// {
    // a should not cross its scope
//     var a=10; //SyntaxError: Identifier 'a' has already been declared (at block_scope_&_shadowing.js:70:9)
// }

//program 5 - accepted because both are in different block scope

let a=10
{
    let a=20;
}