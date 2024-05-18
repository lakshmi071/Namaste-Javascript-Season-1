// Program #1
// function a(){
// console.log(b); //10
// }

// var b=10;
// a();

// Program #2
// function a(){
//     c();
//     function c() {
//         console.log(b); //10  
//     }
// }
    
// var b=10;
// a();

// Program #3
function a(){
    var b=10;
    c();
    function c() {
        console.log(b); //10  
    }
}
    
a();

// Program #4
// function a(){
//     var b=10;
//     c();
//     function c() {
       
//     }
// }
    
// a();
// console.log(b); //ReferenceError: b is not defined