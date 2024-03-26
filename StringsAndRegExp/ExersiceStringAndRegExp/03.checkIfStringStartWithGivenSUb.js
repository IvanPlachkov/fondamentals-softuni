function solve(text,word){

let index = text.indexOf(word);
    while (index > -1){
        console.log("true");
        break;
    }
    console.log("false");
}solve("The quick brown fox…", "The quick brown fox…");