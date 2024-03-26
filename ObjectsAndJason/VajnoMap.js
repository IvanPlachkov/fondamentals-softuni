let a ={}
let map = new Map()
console.log(map);
map.set(a, 5);
console.log(map);
console.log(map.get(a));

console.log('-----------')
let score = new Map()
score.set("peter",130)//zadavame parametri
score.set('Maria',20)
for (let [k,v] of score) { // tuka zavurta pot dannite otgore
    console.log(k + '->' + v)
}
console.log('-----------')

let phoneBook = new Map()
phoneBook.set("Jongh Smith","+1-5558934")
phoneBook.set("maria dimitrova","+359 899 555 222")
phoneBook.set("Petq dimi","+359 899 635 322")
console.log(phoneBook.size);// ima dva elemnta grupi

phoneBook.delete('Jongh Smith')
console.log(phoneBook.size);// istrihme purviq Jongh i iostana 1

for (let [k,v] of phoneBook) {//vurtin cigal i ni izkarva  v k imenata v 'v' telefonite nomera
    console.log((`${k}--> ${v}`));

}
