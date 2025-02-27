function solve(arr) {
    let result = {};
    for (let str of arr) {
        if (str.includes(" -> ")) {
            let [name, item, score] = str.split(' -> ');
            if (!result.hasOwnProperty(name)) {
                result[name] = {}
                result[name][item] = Number(score);
                result[name]["__total__"] = Number(score);
            } else {
                if (!result[name].hasOwnProperty(item)) {
                    result[name][item] = Number(score)
                    result[name]["__total__"] += Number(score)
                } else {
                    if (result[name][item] < score)
                        result[name]["__total__"] -= result[name][item]
                    result[name]["__total__"] += Number(score)
                    result[name][item] = Number(score)
                }
            }
        } else if (str.includes(' vs ')) {
            let [gladiator1, gladiator2] = str.split(' vs ')
            if (result.hasOwnProperty(gladiator1) && result.hasOwnProperty(gladiator2)) {
                for (let g1Item in result[gladiator1]) {
                    /
                    let g1Score = result[gladiator1][g1Item]
                    let g2Score = result[gladiator2][g1Item]
                    if (g1Score && g2Score && g1Item !== "__total__") {
                        if (g1Score > g2Score) {
                            delete result[gladiator2]
                            break;
                        } else if (g1Score < g2Score) {
                            delete result[gladiator1]
                            break
                        }
                    }
                }
            }
        } else {
            break;
        }
    }
    let sortedGladiators = Object.keys(result).sort((g1, g2) => {
        let diffInScore = result[g2]['__total__'] - result[g1]['__total__']
        if (diffInScore === 0) {
            return g1.localeCompare(g2)
        }
        return diffInScore
    })
    for (let gl of sortedGladiators) {
        console.log(`${gl}:${result[gl]['__total__']}`)
        let sortedItems = Object.keys(result[gl]).filter(i => i !== '__total__').sort((i1, i2) => {
            let diffInScore = result[gl][i2] - result[gl][i1]
            if (diffInScore === 0) {
                return i1.localeCompare(i2)
            }
            return diffInScore
        })
        for (let item of sortedItems) {
            console.log(`- ${item} <!> ${result[gl][item]}`)
        }
    }
} solve(['Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ace Cesr'])