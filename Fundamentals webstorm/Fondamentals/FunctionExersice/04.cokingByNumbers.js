function cokingByNumber(arr){
    //destroktorirane na masiv

    let[number,op1,op2,op3,op4,op5]= // tuk markirame koq 4ast ot masiva za koi op otgovarq
        // purviq element go pravim 4islo s Number(arr[0])
        [Number(arr[0]),arr[1],arr[2],arr[3],arr[4],arr[5]];
    //pravim promenliva ot 4isloto koeto polu4avame ot masiva

    let numberForOperations = number; // tova e 4isloto
    //susdavame arrow functions
    let chop = (num) => num/2;
    let dice = (num) => Math.sqrt(num);
    let spice = (num) => num+1;
    let bake = (num) => num *3;
    let fillet = (num) => num * 0.8;
 //pravim  OF cikal koito preminava prez vsi4kite op
    for (const op of [op1,op2,op3,op4,op5]) {
        // pravim switch v koito se izpulnqvat arrov funkciite
        switch(op){
            // tuk izvikvame arrow funkciqta koqto raboti s startovoto chislo funkciq chop(numberForOperator - 4islo)
            // trqbva da prezapishem stojnosta na 4isloto i zatova se pishe numberForoperator =
            case "chop":numberForOperations= chop(numberForOperations)
                console.log(numberForOperations);
            break;
            case "dice":numberForOperations= dice(numberForOperations);
                console.log(numberForOperations);
                break;
            case "spice":numberForOperations= spice(numberForOperations);
                console.log(numberForOperations);
            break;
            case "bake" :numberForOperations= bake(numberForOperations);
                console.log(numberForOperations);
                break;
            case"fillet":numberForOperations= fillet(numberForOperations);
                console.log(numberForOperations);
                break;

        }
    }
}cokingByNumber([32,"chop","chop","chop","chop","chop",])