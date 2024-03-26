function helix (number){
    let rows = Number(number);//durji broq redove
    let sequence = `ATCGTTAGGG`; //  posledovatelnost bukvi
 let currentIndex =0; //broq4
    for (let i = 0; i < rows; i++) { //cikala vurti do broq redove
        let currentRow = i %4; // sledi reda na koito sme i prez 4 povtarq edno i sushto
    if(currentIndex === sequence.length) {
        currentIndex=0; // nulirame indeksa zada moje pak da po4ne
    }
            if(currentRow === 0){ // 0lev red i kakvo da izpishe
            console.log("**" + sequence [currentIndex++]+sequence[currentIndex++]+"**");
            // pishem [currentIndex++ ] zada preminava kum sledvashtata buka ot sequence
        }else if(currentRow ===1 || currentRow===3) { // za 1-3 red poneje sa ednakvi
            console.log("*"+sequence[currentIndex++]+"--"+sequence[currentIndex++]+"*");
        }else{
            console.log(sequence[currentIndex++]+"----"+sequence[currentIndex++]);
        }
    }
 }helix(10);