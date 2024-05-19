// Program 1

function outer() {
  var a = 10;
  function inner() {
    console.log(a); // 10
  }
  return inner;
}
outer()(); // calling inner function as well similar to var call=outer(); call();

// Program 2

function outer() {
  function inner() {
    console.log(a); // 10
  }
  var a = 10;
  return inner;
}
outer()();

// Program 3

function outer() {
  function inner() {
    console.log(a); // 10
  }
  let a = 10;
  return inner;
}
outer()();

// Program 4 - pass parameters

function outer(b) {
  function inner() {
    console.log(a, b); // 10 'hello'
  }
  let a = 10;
  return inner;
}
var close = outer("hello");
close();

// Program 5 - deeply nested functions

function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c); // 10 'hello' 20
    }
    let a = 10;
    return inner;
  }
  return outer;
}
var close = outest()("hello");
close();

// Program 6 - deeply nested functions with let

function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c); // 10 'hello' 20
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
var close = outest()("hello");
close();

// One of the advantage of closure is data hiding and encapsulation
// Program 7

function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count); //1
  };
}
var counter1 = counter();
counter1();
// console.log(count); // ReferenceError: count is not defined

var counter2 = counter(); // creates new copy of counter
counter2();

//Program 7 is scalable, can we use decrement function as well

function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count); //1
  };
  this.decrementCounter = function () {
    count--;
    console.log(count); //0
  };
}

var counter1 = counter(); // TypeError: counter1 is not a function because it is constructor
var counter1 = new Counter();
counter1.incrementCounter();
counter1.decrementCounter();

// Disadvantages of Closure - sometimes closures are not garbage collected, it may lead to memory leaks
// Program 8

function z() {
  var x = 0;
  return function b() {
    // x memory cannot be freed
    console.log(x); //0
  };
}
var y = z();
//...
y();

//Smartly garbage collected
function z() {
  var x = 0,
    b = 10; // since b is not used, b is garbage collected
  return function b() {
    // x memory cannot be freed
    console.log(x); //0
  };
}
var y = z();
//...
y();
