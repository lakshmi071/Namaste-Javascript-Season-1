// Program 1

// function a() {
//   console.log("a"); //a
// }
// a();
// console.log("end"); //end

//Program 2

console.log("start"); //start then end then callback
setTimeout(() => {
  console.log("callback");
}, 5000);
console.log("end");

//web api's - setTimeout, DOM API's,fetch(),console
