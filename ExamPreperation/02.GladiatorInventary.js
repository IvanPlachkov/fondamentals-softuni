function solve(arr) {
    let inventar = arr.shift().split(' ');
    let allComands = {
        'Buy': function (item) {
            if (!inventar.includes(item)) {
                inventar.push(item)
            }
        },
        'Trash': function (item) {
            let index = inventar.indexOf(item)
            if (index > -1) {
                inventar.splice(index, 1)
            }
        },
        'Repair': function (item) {
            let index = inventar.indexOf(item)
            if (index > -1) {
                let element = inventar.splice(index, 1)
                inventar.push(element[0])
            }
        },
        'Upgrade': function (item) {
            let [realItem, upgrade] = item.split('-')
            let index = inventar.indexOf(realItem)
            if (index > -1) {
                inventar.splice(index + 1, 0, realItem + ':' + upgrade)

            }
        },
        'Fight!': function (item) {
            console.log(inventar.join(' '))
        }
    }
    for (let str of arr) {
        let [command, item] = str.split(' ')
        allComands[command](item)

    }
} solve(['Sword Shield Spear',
    'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade Sword-Steel', 'Fight!'])
