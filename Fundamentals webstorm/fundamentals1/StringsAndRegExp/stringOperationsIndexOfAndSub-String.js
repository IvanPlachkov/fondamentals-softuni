let str = "i am JavaScropt developer";
console.log(str.indexOf("Java")); //5 tursi java i kazva na koi index se namira
console.log(str.indexOf("Java",5));// tuk tursi ot 5ti index natatak
console.log(str.indexOf("java")) // -1 poneje neotkriva s glavna bukva takava duma

let str = "I am JavaScript developer";
let sub = str.substr(5);// substr( start , length) tuk ot koi index po4va moje i vtori koito e opcionalen
// no ako nqma vzema dokraq na striga. Tuk ot index 5 moje da vzemem duljina nqkolko stringa.; s tova moje se tursi otzad napred
// s - stoinost
//  a = "abcd"
//  console.log(a.substr(-3) // tova e ravno na "bdc" s minus vzima broi otzad napred kolko da vzeme
// ako se napishe console.log(a.substr(2,1) tuk vzima ot vtori index samo 1 element , vtorata cifra e kolko elementa da vzeme
console.log(sub) // JavaScript developer

let str3 =  "I am JavaScript developer";
let sub = str.substring(5,9)// starIndex , EndIndex tuk ot 5ti vzima do 9ti index
console.log(sub) // Java