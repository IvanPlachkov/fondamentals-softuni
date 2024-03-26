function  calculate(a,b,op){
    switch(op){
        case "+":return a+b;
        case "-":return a-b;
        case "*":return a*b;
        case "/":return a/b;
    }
}
 
console.log(calculate(2,4,"+"));
console.log(calculate(9,2,"/"));
console.log(calculate(2,1,"-"));
