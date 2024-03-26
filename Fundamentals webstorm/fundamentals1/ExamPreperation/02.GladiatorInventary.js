function solve(arr){
let inventar = arr.shift().split(' ');
let allComands = {
    'Buy': function (item){    // създаваме команди харкорнати
    if(!inventar.includes(item)){
        inventar.push(item)
    }
    },
    'Trash':function (item){
        let index = inventar.indexOf(item)
        if(index >-1){
            inventar.splice(index,1)
        }
    },
    'Repair': function (item){
        let index = inventar.indexOf(item)
        if(index > -1){
            let element = inventar.splice(index,1) // sus splice moje da zamenqme elementi ili da triem . splice(4,1,'newName')
            //                                                                         ot 4 indeks iztri 1 element i zameni sus newName
       inventar.push(element[0])
        }
    },
    'Upgrade': function (item){
    let [realItem,upgrade] = item.split('-')
        let index = inventar.indexOf(realItem)
        if(index > -1){
      inventar.splice(index +1,0,realItem+ ':' + upgrade)
            // sus splice osven triene moje replace before/ afterpodavash indeksa kazvash da iztrie 0 elementa , i zamenqsh s realitem slepq s ':' upgrade
        }
    },
    'Fight!': function (item){
        console.log(inventar.join(' '))
    }
}
    for (let str of arr) {
        let [command,item]= str.split(' ')
    allComands[command](item)         // и тука ги ги извикваме да ги изпълнява

    }
}solve(['Sword Shield Spear',
    'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade Sword-Steel', 'Fight!'])
