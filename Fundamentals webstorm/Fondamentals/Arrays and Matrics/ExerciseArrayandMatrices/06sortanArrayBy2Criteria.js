function solve(arr){
    function compare(a,b){
        if(a.length < b.length){ // sravnqvame duljinata na dva elementa
            return - 1 // tuka e - 1 poneje vzema lqvoto neshto
        }else if (a.length >b.length){
            return 1; // da vurne dqsno stoqshtoto po malkoto
        }else{ // ako sa ravni da gi sravni po ASKI ili unicode tablicata
            if(a< b){ // tuk gi sravnqvame apha-betakal ot tablicata po purva bukva
                return -1;
            }else if(a >b) {
                return 1;
            }else {
                return 0;
            }
        }
    }
    console.log(arr.sort(compare).join("\n"));//sort hvashta po unicode sort ot cifrovite stoinosti na bukvi i znaci
}solve(["alpha","beta","gamma"])