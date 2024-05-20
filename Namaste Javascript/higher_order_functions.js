// Higher order functions are functions which takes an argument as another function and returns a function

function x() {
  console.log("namaste");
}

function y(x) {
  // higher ordr fnction is y and x is callback function
  x();
}

//Program 1

//calculate radius of circle

// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// console.log(calculateArea(radius)); // [28.274333882308138, 3.141592653589793, 12.566370614359172, 50.26548245743669]

// const calculateCircumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };

// console.log(calculateCircumference(radius)); //[18.84955592153876, 6.283185307179586, 12.566370614359172, 25.132741228718345]

// const calculateDiameter = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };

// console.log(calculateDiameter(radius)); //[6, 2, 4, 8]

//DRY(Don't repeat yourself) principle

//Program 2 - better approach to write program 1

const radius = [3, 1, 2, 4];
const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};
const calculate = function (radius, logic) {
  //Array.prototype.calculate - available in all the array in that case log radius.calculate(area)
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(radius.map(area));
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));
