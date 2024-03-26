function solve(text) {
let arr= text.match(/\w+/g); // hvashta vsi4ki dumi i gi suedinihme s `4erta
    console.log(arr.join("|"));

}solve("A Regular Expression needs to have the global flag in order to match all occurrences in the text")