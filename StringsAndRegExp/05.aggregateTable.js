function solve(lines){
let resutl = [];
let sum =0;
    for (let i = 0; i < lines.length; i++) {
      let token = lines[i].split("|");
      resutl.push(token[1].trim())
        sum+= Number(token[2].trim())
    }
    console.log(resutl.join(", "))
    console.log(sum);

}solve(['| Sofia | 300',
        '| Veliko Tarnovo | 500',
        '| Yambol | 275'])