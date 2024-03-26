function solve(input){
   let heroData =[];
    for (let i = 0; i < input.length; i++) {
        let curentheroArgument =input[i].split(/\s*\/\s*/)
        let Name = curentheroArgument[0];
        let level =Number(curentheroArgument[1]);
        let itams = [];
        if(curentheroArgument.length >2){
            curentheroArgument[2].split(', ')
                itams.push(curentheroArgument[2])
        }
        let hero ={name: Name,level:level,itam:itams}
        heroData.push(hero)

    }
    console.log(JSON.stringify(heroData));
}solve(['Isacc / 25 / Apple, GravityGun',

   ' Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antar'])