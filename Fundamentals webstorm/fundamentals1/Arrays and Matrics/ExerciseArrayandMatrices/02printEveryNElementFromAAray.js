function solve(input){
    let step = Number(input.pop())

    for (let i = 0; i <= input.length-1; i+=step) {
   let result = input[i];
        console.log(result);
    }

}solve(["5","20","31","4","20","2"])
solve(["dsa","asd","test","test","2"])
solve(['1','2','3','4','5','6'])