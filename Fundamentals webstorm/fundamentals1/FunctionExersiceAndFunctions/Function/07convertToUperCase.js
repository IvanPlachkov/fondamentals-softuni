function converToUpperCase(str){
    console.log(str.split(/\W+/).filter(w => w !== '').map(w => w.toUpperCase()).join(', '));
    //vrushta masiv(Hi how b   .filter -Iskam da mi go filtrirash(filtura premahva praznite i ostavq samo pulni) W e ime na promenliva
    //.map(pesho) -  na masiva shte mine prez vsqka edna stoinost i kazva 4e iskam da napravq neshto s neq
//.join(', ') - iska da sa razdeleni s zapetaq ,
// kato imame masiv kato mu kajem . join subira gi v edin string razdeleni sys zapetaq i interval ", "
//
}
converToUpperCase(`Hi how b    are you`);
converToUpperCase('Hello')