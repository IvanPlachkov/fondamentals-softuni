function  solve(targetWord,text){
let counter = 0;
let index = text.indexOf(targetWord) ;
// namira v teksa indeksa na targetiranata duma ako q ima e +1 ako ne -1
    while(index > -1){ // ako nqma suvpadenie vrushta - 1
    counter++;
    index = text.indexOf(targetWord,index +1)
        //sreshta tragetWord no iskame da produlji ot targettword  indeksa na dumata +1
    }

    console.log(counter);


}solve('the', 'the quick brown fox jumps over the lay dog.' );
solve('ma', "Marine mammal training is the training and caring for marine life   such as, dolphins, killer whales, sea lions, walruses, and other marine\n" +
"    mammals. It is also a duty of the trainer to do mental and physical\n" +
"    exercises to keep the animal healthy and happy. " )