function solve(arr){
let rotateCounter = Number(arr.pop());// vzemame poslednoto 4islo za broq4 i go prevrushtame kum 4islo
rotateCounter %= arr.length; // razdelqme brqcha modulno na duljinata na masiva
    for (let i = 0; i < rotateCounter; i++) {
    let lastElement = arr.pop();
    arr.unshift(lastElement); // vzemame posledniq element lastElement i go slagame nai otpred;
    }
    console.log(arr.join(" "));
}solve(["1","2","3","4","2"
    ])
solve(["Banana", "Orange", "Coconut", "Apple", "15" ])