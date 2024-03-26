function solve(a,b,op){
   let calc = function (a,b,op){return op(a,b)}
   let add = function (a,b){return a+b}
    let subtrack = function (a,b){return a-b}
    let divide = function (a,b){return a/b}
    console.log(calc);
}solve(5,4,"/")
