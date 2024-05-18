// Program 1

var x=7;

function getName(){
    console.log("Namaste Javascript");
}

getName(); // Namaste Javascript
console.log(x); // 7

// Program 2 - accessing x before initialization

getName(); // Namaste Javascript
console.log(x); // undefined

var x=7;

function getName(){
    console.log("Namaste Javascript");
}

// Program 3 - Removing x

getName(); // Namaste Javascript
console.log(x); // Reference error : x is not defined

function getName(){
    console.log("Namaste Javascript");
}

// Program 4 - accessing just getName

getName(); // Namaste Javascript
console.log(x); // undefined
console.log(getName);//ƒ getName(){console.log("Namaste Javascript");}

var x=7;

function getName(){
    console.log("Namaste Javascript");
}

// Program 5 - Arrow functions

getName(); // index.js:46 Uncaught TypeError: getName is not a function - because it behaves like a variable
console.log(x); // 
console.log(getName);//

var x=7;

var getName=()=>{
    console.log("Namaste Javascript");
}