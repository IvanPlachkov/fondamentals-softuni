function solve(lostFights,helmPrice,swordPrice,shildPrice,amourPrice){
let total =0;
    for (let i = 1; i < lostFights; i++) {
        if (i % 2 === 0) {
            total += helmPrice;
        }
        if (i % 3 === 0) {
            total += swordPrice
        }
        if (i % 6 === 0) {
            total += shildPrice
        }
        if (i % 12 === 0) {
            total += amourPrice
        }
    }
        console.log(`Gladiator expense: ${total.toFixed(2)} aures`)
}solve(7,2,3,4,5)