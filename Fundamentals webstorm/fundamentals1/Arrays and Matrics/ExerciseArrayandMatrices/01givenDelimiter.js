function solve(input){
let delimiter = input.pop();
   // input.pop();
   // let result = "";
   //  for (let i = 0; i < input.length; i++) {
   //      if(i ===0){
   //          result+= input[i];
   //      }else{
   //          result+= delimiter + input[i]
   //      }
   //
   //  }
   //  console.log(result);
let result = input.join(delimiter)
    console.log(result);
}solve(["one","two","three","four","five","-"])
