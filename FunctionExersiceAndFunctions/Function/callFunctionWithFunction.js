function repeatIt(count, func) {
    for (let i = 1; i <= count; i++)
        func(i);
}
let starsFunc = function (i) {
    console.log("**".repeat(i));
}
repeatIt(3, starsFunc);

// function sayHello(func){
//     console.log("hello");
//
//
//
//     func()
// }
// let f = function() {console.log('After hello')}
// sayHello(f)