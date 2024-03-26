function solve(input){
    let result ={}
input.join(' ').split(/[^\w]+/)    .filter(a=> a !== '').forEach(s=>{
    // tuk gi subirame , i posle razdelqme s otricanieto na vsi4ki koito ne sa \w, poneje [^] vzima obratnoto
    // posle filtrirame praznite mesta , imame masiv sus vsi4ki stringove i posle kazvame na tqh forEach da obhodi teksta
    //resultata hasOwnProperty (tursi duma po duma), ako nqma takuv string rezultta mu e raven na 0 , ako go ima go uveli4i s 1
    if(!result.hasOwnProperty(s)){
        result[s] =0
    }
    result[s]++
})
// TUK SPLITA SUS[^] PRAVI OTRICANIE I VSI4KO KOETO NE E \w
    console.log(JSON.stringify(result));
}solve(["Far too slow, you're far too slow. "])