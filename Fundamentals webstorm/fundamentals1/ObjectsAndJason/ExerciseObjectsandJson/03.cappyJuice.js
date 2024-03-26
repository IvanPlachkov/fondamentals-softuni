function solve(data) {
    let juices = new Map();

    for (let entry of data) {
        let [juice, quantity] = entry.split(" => ");
        quantity = Number(quantity);

        if (!juices.has(juice)) {
            juices.set(juice, 0);
        }
        let currentQuantity = juices.get(juice);
        let totalQuantity = currentQuantity + quantity;

        if (totalQuantity >= 1000) {
            let bottles = Math.floor(totalQuantity / 1000);
            console.log(`${juice} => ${bottles}`);
        }
        juices.set(juice, totalQuantity % 1000);
    }
}
//Here's how you can use this function to get the desired output:
solve ([
    "Orange => 2000",
    "Peach => 1432",
    "Banana => 450",
    "Peach => 600",
    "Strawberry => 549"
]);
//The processJuiceData function takes an array of strings (data) as input.
// It uses a Map to store the juice names as keys and their current quantity as values.
// For each entry, it splits the juice name and quantity using the delimiter " => ".
// The quantity is converted to a number using Number().
//
  //  If the juice is not yet in the juices map, it adds it with an initial quantity of 0.
//  Then it calculates the total quantity by summing the current quantity and the received quantity.
//  If the total quantity is equal to or greater than 1000,
//  it calculates the number of bottles and prints the juice name and the number of bottles.
//
   // Finally, it updates the quantity in the juices map by taking the remainder when dividing the total quantity by 1000,
// which represents the leftover quantity that didn't form a complete bottle.

//Note: The function doesn't return any value; it directly prints the produced bottles using console.log().
