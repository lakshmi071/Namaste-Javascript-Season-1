//Program 1

// function x() {
//     var a=7;
//     function y() {
//         console.log(a); //7
//     }
//     y();
// }
// x(); 

//Program 2

// function x() {
//     var a=7;
//     function y() {
//         console.log(a); 
//     }
//     return y;
// }
// var z=x(); 
// console.log(z); //ƒ y() {console.log(a); }
// // ......
// z(); //7

//Program 3

// function x() {
//     var a=7;
//     function y() {
//         console.log(a); 
//     }
//     a=100;
//     return y;
// }
// var z=x(); 
// console.log(z); //ƒ y() {console.log(a); }
// // ......
// z(); //100 - reference to its lexical environment

//Program 4

function z() {
    var b=700;
    function x() {
        var a=7;
        function y() {
            console.log(a,b); //7,700
        }
       y()
    }
    x();
}
z();

// Uses of Closures
// Module design pattern
// currying
// functions like once
// memoize
// maintaining state in async world
// setTimeouts
// Iterators
// and many more