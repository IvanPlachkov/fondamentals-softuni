function solve(arr) {
    let rotateCounter = Number(arr.pop());
    rotateCounter %= arr.length;
    for (let i = 0; i < rotateCounter; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
        console.log(arr.join(" "));
    } solve(["1", "2", "3", "4", "2"
    ])
} solve(["Banana", "Orange", "Coconut", "Apple", "15"])