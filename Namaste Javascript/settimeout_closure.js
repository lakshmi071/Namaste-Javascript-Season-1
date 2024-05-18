function x() {
    var i=1;
    setTimeout(() => {
        console.log(i);
    }, 3000);
}
x()

//Program 2

function x() {
    var i=1;
    setTimeout(() => {
        console.log(i);
    }, 3000);
    console.log("Namaste JS"); // first prints namaste JS then after 3 secs 1
}
x()