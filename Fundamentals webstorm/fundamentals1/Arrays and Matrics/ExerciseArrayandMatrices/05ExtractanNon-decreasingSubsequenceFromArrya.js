function solve(arr){

function compare(a,b) {

    if (a < b) {
        return -1;
    } else if (a > b) {
        return +1;
    }else {
        return 0;
    }
}
    console.log(arr.sort(compare).join("\n"))
}solve(["1","3","8","4","10","12","3","2","24"])