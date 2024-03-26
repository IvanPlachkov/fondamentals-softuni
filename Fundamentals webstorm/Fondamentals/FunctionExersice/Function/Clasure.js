let clasure = (function (num) {
    let a=1;
    return function (){console.log(a++)}
})()

clasure()
clasure()
clasure()