function solve(arr){
let result ={};
    for (let str of arr) {  // tuka samo nalivame danni
    if(str.includes(" -> ")){
        let [name,item,score]= str.split(' -> ');
        if(!result.hasOwnProperty(name)){ // proverqvame dali go nqma toq 4ovek
            result[name]= {}     // ako go nqma go dobavqme
            result[name][item]= Number(score);
            result[name]["__total__"]=Number(score);   // izmislqmio si svoe property
        }else{                      // ako go ima toq 4ovek
            if(!result[name].hasOwnProperty(item)){  // proverqvame dali ima item  , i ako ima dobavqme kum score
                result[name][item] = Number(score)
                result[name]["__total__"] += Number(score)
                }else{       // ako go ima sravnqvame noviq item pove4e li e ot stariq , go zamenqme kakto i totala
                    if(result[name][item] <score)
                          result[name]["__total__"] -= result[name][item]
                          result[name]["__total__"] += Number(score)
                           result[name][item]= Number(score)
                }
            }
    }else if(str.includes(' vs ')){ // ako komandata e za srajenie
        let [gladiator1,gladiator2]= str.split(' vs ')
        if(result.hasOwnProperty(gladiator1 ) && result.hasOwnProperty(gladiator2)){ // proverqvame ima li gi 2mata gladiatori
            for (let g1Item in result[gladiator1]) { // ako ima vurtim cikal po itamite i gledame dali dvamata imat 1 i susht item
                let g1Score = result[gladiator1][g1Item]
                let g2Score = result[gladiator2][g1Item]
                if(g1Score && g2Score && g1Item !== "__total__"){
                    if(g1Score > g2Score){   // ako ima sushtiq iteam zamenqme na toq s po-golemiq skor  i triem tozi s po malkiq
                        delete result[gladiator2]
                        break;
                    }else if(g1Score < g2Score){
                        delete  result[gladiator1]
                        break
                    }
                }
            }
        }
    }else{
        break;
    }
  }// sortirame klu4ovete v '__total__ 'si pazim totala
    let sortedGladiators = Object.keys(result).sort((g1,g2)=>{
    let diffInScore = result[g2]['__total__'] -result[g1]['__total__']
    if(diffInScore ===0){
        return g1.localeCompare(g2)
    }
    return diffInScore
})
    for (let gl of sortedGladiators) {
        console.log(`${gl}:${result[gl]['__total__']}`) // tuka burkame v gorniq obekt da izvadim totala
        let sortedItems = Object.keys(result[gl]).filter(i=> i !== '__total__').sort((i1,i2)=>{
            let diffInScore = result[gl][i2] -result[gl][i1] // sortirame vutreshnite itami
            if(diffInScore ===0){
                return i1.localeCompare(i2)
            }
            return diffInScore
        })
        for (let item of sortedItems) {
            console.log(`- ${item} <!> ${result[gl][item]}`)
        }
    }
}solve (['Pesho -> BattleCry -> 400',
'Gosho -> PowerPunch -> 300',
'Stamat -> Duck -> 200',
'Stamat -> Tiger -> 250',
'Ace Cesr'])