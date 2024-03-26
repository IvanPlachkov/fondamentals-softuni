function solve(input){
//let regex= /^([A-Z][a-z]*)\s*-\s*([1-9][0-9]*)\s*-\s*([a-zA-Z0-9]+)/
      // let regex = /^([A-Z][a-zA-Z]+) - ([1-9][0-9]*) - ([A-Za-z0-9- ]+)$/
    let regex =/^(\w+)\s+-\s+(\d+)\s+-\s+(\w+)/
    for (let str of input) {
    let exec = regex.exec(str)
        if(exec) {
            console.log(`Name ${exec[1]}\n` +
                `Position: ${exec[3]}\n` +
                `Salary ${exec[2]}\n`);
        }
    }


}solve(['Isacc - 1000 - CEO',

    'Ivan - 500 - Employee',

    'Peter - 500 - Employee'])