function solve(str){

let regex = /(-?\d+)\s*\*\s*(-?\d+\.\d+)/g
    str = str.replace(regex,(all,g1,g2)=>Number(g1 * g2)) //tuk moje se zapishe i =>+g1 * +g2 s plus gi vrevrushta v 4isla,
    // zada polzvame taka trqbva da ima grupi  i tuk all e purva grupa i posle purva i vtora
    console.log(str);
}solve("My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2 * 0.5 (deposit). ")