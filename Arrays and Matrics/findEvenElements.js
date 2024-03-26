function findEvenElements(arr) {
    let result = [];
    for (const index in arr) {
        if (index % 2 === 0) {
            result.push((arr[index]))
        }
    }
    console.log(result.join(" "));
} findEvenElements(["20", "30", "40"]);
findEvenElements(["5", "10"])