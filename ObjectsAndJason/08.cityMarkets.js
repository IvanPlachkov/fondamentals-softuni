function solve(arr){
let map = new Map();
    for (let value of arr) {
        let [town,product,quantity,price]= value.split(/ ->| :/)
        //razbivame vhoda na tezi neshta koito ni trqbvat i
        // Map pazim grad , nov Map koito dyrji na poziciq 1 produkt i oborot

        if(!map.has(town)){//proverrqvame v mapa ima li go grada
            map.set(town,new Map())
        }
        map.get(town).set(product,Number(quantity )* Number(price))
        //s gorniq if si garantirame 4e map.get(town) tolna vinagi ima stoinost
    }
    for (let [key,value] of map) {// kato ima vlojeni mapove trqbva i vlojeni cikli, purviq varti grad i nov Map
        console.log(`Town - ${key}`)
        for (let [k,v] of value) { // nov cikal za produkt
            console.log(`$$$${k} : ${v}`)
        }
    }

}solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'])