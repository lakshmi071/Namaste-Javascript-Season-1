// console.log("start"); //start then end then callback
// setTimeout(() => {
//   console.log("callback");
// }, 5000);
// console.log("end");

// //settimeout is not executed after 5 secs , it depends on call stack

// //million line of code

// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }

// console.log("while expires"); //start then end then while expires then callback - concurrency model

//settimeout - 0
console.log("start"); //start then end then callback
setTimeout(() => {
  console.log("callback");
}, 0);
console.log("end");
