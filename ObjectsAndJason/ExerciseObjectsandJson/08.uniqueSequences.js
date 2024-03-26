function solve(inputArray){
let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        let currentRow = JSON.parse(inputArray[i])
            //durji reda trqbva da go obrabotim i parsnem i da vzemem ot vhoda koito idva
            //vseki edin ot indeksite, i s dolnite neshta pravim vseki element 4islo
            .map(Number)// parsvame kum 4islo
            .sort((a,b)=>b - a); // sortirame ot naj golqmoto kum naj malkoto
    let currentSum= currentRow.reduce((a,b)=> a+b); // subirame 4islata ot edin pod masiv
    if(!result.find(array => array.reduce((a,b)=>a+b )=== currentSum)){
        // subirame otnovo , i tezi stoinosti trqbv da sa ravni na curents sum , i ako ima povtarqshtite sumi s find i
        //izkara purvata sreshnata suma
        result.push(currentRow);
    }
    }
result.sort((a,b)=>a.length - b.length).forEach(arr=> console.log(`[${arr.join(`, `)}]`))
//s sort() obhojdame po duljina , i sus forEach obhojdame

}solve(['[-3, -2, -1, 0, 1, 2, 3, 4]',
                 '[10, 1, -17, 0, 2, 13]',
                 '[4, -3, 3, -2, 2, -1, 1, 0]'])