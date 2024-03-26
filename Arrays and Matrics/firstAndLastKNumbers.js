function solve(arr){
    let targetNum = arr.shift()
    console.log(arr.slice(0,targetNum).join(' .'));
    console.log(arr.slice(arr.length - targetNum).join(", "));


}solve([2,7,8,9]);
solve([3,6,7,8,9])