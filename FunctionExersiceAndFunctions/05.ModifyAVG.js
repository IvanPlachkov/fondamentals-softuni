function modify(number) {

    let numAsString = number.toString();

    function getAvg(numAsString) {
        let sum = 0;
        for (let digit of numAsString) {

            sum += Number(digit);
        }

        return sum / numAsString.length;
    }

    let addNine = (num) => num + "9";

    let average = getAvg(numAsString)
    while (average <= 5) {
f
        numAsString = addNine(numAsString);
        average = getAvg(numAsString);
    }
    console.log(numAsString);
} modify(101);