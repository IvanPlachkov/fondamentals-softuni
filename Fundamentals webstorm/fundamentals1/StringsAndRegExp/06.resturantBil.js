function solve(items){
let product = items.filter((e, i)=> i%2===0).join(', ')
let price = items.filter((e, i)=> i%2 ===1)
    .reduce((a, b)=>Number(a)+Number(b))// tuk moje predi reduce .map(Number) oshte 1 varinat za parsvane kum 4islo
    //reduce((a, b)=>Number(a+b)) = .reduce((a, b)=> + a + +b) kogato se dolepi +pred string se edno kazvame Number(promenliva)
    console.log(`You purchased ${product} for a total sum of ${price}`);
}solve (['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])