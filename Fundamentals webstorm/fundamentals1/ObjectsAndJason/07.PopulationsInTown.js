function solve(arr){
let map = new Map();
    for (let str of arr) {
        let [town,population] = str.split(/\s*<->\s*/)
        if(!map.has(town)){
            map.set(town,0) // tuka moje i town,population no da ne pravim else s 0
        }
        map.set(town,map.get(town)+ +population)
    }
    for (let [key,value] of map) {
        console.log(`${key} : ${value}`)
    }


}solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])