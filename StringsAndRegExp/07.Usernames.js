function solve(arr){
    for (let ind in arr) {
        let [username,rest]= arr[ind].split("@");//pravim masiv destroktorirame
        // razdelq po klomba i purvata 4ast ostava v username drugata v rest
        // todor_43 e username i ind.dir.bg = rest ostava

        arr[ind]= username +"." + rest.split(".").map(a=> a[0]).join("");// razdelnqme po to4ka s split
        // ostava mai dir bg kato otdelni dumi posle sus map(a=> a[0]) vzemame purvata buka na 0 indeks i gi subirame
        // s join
    }
    console.log(arr.join(`, `));

}solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'] )