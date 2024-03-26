function printStars(){
    let size =4;
    for (let i = 1; i < size; i++) {
        console.log("*".repeat(i))

    }
    for (let j = size; j > 1; j--) {
        console.log("*".repeat(j))

    }
}printStars()