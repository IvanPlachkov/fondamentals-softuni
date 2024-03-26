function solve (text,forbiddenWord){
    for (let word of forbiddenWord) {   // vsqka edna duma ot zabranenite
        let subs = '-'.repeat((word.length)) // zamestitel s tazi duljina tireta kolkoto e dumata
        while (text.indexOf(word) > -1) {      //vutim dokato ima dumata kogato q nqma stava -1
            text = text.replace(word, subs)// zamenqme dumata sus zamestitelq sub
        }
    }
    console.log(text);
}solve('roses are red, violets are blue', [', violets are', 'red'] )