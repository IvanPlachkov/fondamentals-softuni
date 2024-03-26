function processOdd(arr){
    console.log(arr.filter((e,i) => i % 2 === 1).map(a => a * 2).reverse().join(" "));

}processOdd([10,15,20,25])
processOdd([3,0,10,4,7,3])