function solve(arr){
    arr.shift()// da vzema purviq red kato klu4ove
    for (let i = 0; i < arr.length; i++) {
        let values = arr[i].split(/\s*\|\s*/).filter(a=> a!=="")
        // razdelqme po ako ima intervali i pipe | , i nakraq filtrirame vsqko a koeto e razli`no ot prazno da vzeme
        // // tova sa klu4ovete
        arr[i] = {Town:values[0],Latitude:+values[1],Longitude:+values[2]} // s + otpred parsvame kum 4islo 4islata
    //obj["Town"]= values[0] moje i taka vmesto na edin red kakto gore
      //  obj["Latitude"]= values[1]
       // obj["Longitude"]= values[2]
    }
    console.log(JSON.stringify(arr))
}solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);