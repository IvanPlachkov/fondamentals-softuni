function solve(inputSentences){
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g // purvo testvame regexa v Regex101.com kakvo stava
    let exec            // regex.exec(str)) - vrushta dokato ima suvpadeniq vrushta masiv ako ne nul
    let dates =[];
    for (let str of inputSentences) {
        while(exec = regex.exec(str)){
            dates.push(`${exec[0]} (Day: ${exec[1]}, Month: ${exec[2]}, Year : ${exec[3]}) `);
                        // exec - purvo se pisje regex . posle exec posle(str)  regex.exec(str)
        } // na execa trqbva da ima grupi i toi na purvo poziciq ti dava purvoto suvpadenie i posle ti dava grupite
        // a grupite sa v redixa razdeleni s obiknovenni skobi()    ili ([0-9]{2}) sledvashta grupa ([A-Z][a-z]{2})
    }
 // ako ima vlojena grupa koqto da hvanem v execa ([0-9](?= pesho){2,2}) tuk naimenuvahme pod grupa pesho
// ako nqma grupi ne e udachno da polzvame exec , po dobre match
    //match = ot celiq string ti vrushta resultatite
    // a exec - proverqva edno po edno , za vseki edin resultat ti vrushta edin po edin rezultat

    console.log(dates.join("\n"));
// vrushta samo dva masiva poneje nqma suvpadenie na vtoriq
}solve(['I am born on 30-Dec-1994.',

    'This is not date: 512-Jan-1996.',

    'My father is born on the 29-Jul-1955.'] )