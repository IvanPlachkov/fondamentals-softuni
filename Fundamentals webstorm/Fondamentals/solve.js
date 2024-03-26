function solve(arr){
let numAsString = arr.toString()
function getAVG(numAsString) {
    let sum = 0;
    for (let digit of numAsString) {
        sum += Number(digit);
    }
    return sum/numAsString.length
}
let addNIne = (num)=> num + '9'
    let avareage = getAVG(numAsString)
    while(avareage <= 5){
    numAsString = addNIne(numAsString)
        avareage = getAVG(numAsString)
    }
    console.log(numAsString);
}solve([101]);





