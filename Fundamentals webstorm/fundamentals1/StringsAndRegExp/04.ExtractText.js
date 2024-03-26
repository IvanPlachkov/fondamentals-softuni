function solve(text){
let result = []; // prazen mashiv v koito shte pushvame

let start = text.indexOf('(')   // ot kude po`chva
let end = text.indexOf(")", start+1)   // svurshva
while(start > -1 && end > -1){
    result.push(text.substring(start+1,end))// vkarvame v masiva
    // samiq start e skobata i zatova da po4ne ot neq natatak +1
    // i tuk shte zacikli ako e samo tova i zatova refreshvame starta i end
start = text.indexOf('(',start +1)
    end = text.indexOf(')',end +1)
}


    console.log(result.join(', '));

}solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')