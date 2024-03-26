let str  = "I like   JS";
let tokens = str.split(" ");// prazen interval
console.log(tokens)// ["I","Like","","","","JS"] // tuka ima 3 prazni slota
tokens = tokens.filter(s=> s!='')
console.log(tokens)// ["I","like","JS"]
console.log(tokens.join("")); //I like JS
 //tuk primer i po RegExp
let s = "I like JS. JS is cool";
console.log(s.replace("JS","C#")) // I like C#. Js is cool; tuk zamenqmame 4ast ot teksta
// tuk repleisva samo purviq JS
console.log(s.replace(/JS/g,"C#"))// I like C#.C# is cool; tuk s regex zamenihme JS s C#
// tuk zamenq vsi4kite "JS" v stringa no zadulgitelno trqbva da ima g - /JS/g  tuk g-to zna4i global