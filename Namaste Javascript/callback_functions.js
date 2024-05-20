// callback functions - function passed as argument to another function

// setTimeout(() => {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x"); //x
//   y(); //y then after 5secs it logs timer
// }
// x(function y() {
//   console.log("y");
// });

//call stack aka main thread

//Event Listeners with callback functions
// document.getElementById("clickMe").addEventListener("click", function xyz() {
//   console.log("button is clicked"); //button is clicked
// });

//count number of times the button is clicked
// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function xyz() {
//   console.log("button is clicked", count++); //button is clicked 1
// });

//Event listeners with closures
function attachlistener() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("button is clicked", ++count); //button is clicked 1
  });
}
attachlistener();
