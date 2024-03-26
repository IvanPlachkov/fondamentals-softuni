function converToUpperCase(str){
    console.log(str.split(/\W+/).filter(w => w !== '').map(w => w.toUpperCase()).join(', '));
   
}
converToUpperCase(`Hi how b    are you`);
converToUpperCase('Hello')