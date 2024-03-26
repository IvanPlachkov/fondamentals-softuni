function modify (number){
    //priemame 4islo i sigo pravim na string
    let numAsString = number.toString();
    //pravim funkciq koqto da vzema srednata stoinost na vsi4ki 4isla
     function getAvg(numAsString){
    let sum=0;
         for (let digit of numAsString) {
             //cikala minava prez vsqka edna cifra i gi prevrushta v 4islo i gi trupame sus sumata
            sum += Number(digit);
         }
         //tuk vrushtame stoinosta na sumata razdelena na duljinata
         return sum / numAsString.length;
     }
     //pravim arrow funkciq
     let addNine=(num) => num + "9";
     //prisvoihme funkciqta getAvg kum promenliva
     let average = getAvg( numAsString)
    while(average <= 5){
       //   kogato izvikvame funkciq i nepromenqme stoinosta , nie pravim edno i sushto neshto vseki put i nishto nestava
        // zatova trqbva da se promenq stoinosta;
       numAsString=  addNine(numAsString);
       average =  getAvg(numAsString);
    }
    console.log(numAsString);
}modify(101);