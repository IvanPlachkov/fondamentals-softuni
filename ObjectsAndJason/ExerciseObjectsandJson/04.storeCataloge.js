function solve(data) {
    let catalogue = new Map();

    for (let entry of data) {
        let [name, price] = entry.split(" : ");
        price = Number(price);

        let initial = name[0].toUpperCase();

        if (!catalogue.has(initial)) {
            catalogue.set(initial, []);
        }

        catalogue.get(initial).push({ name, price });
    }

    let sortedKeys = Array.from(catalogue.keys()).sort();

    for (let key of sortedKeys) {
        console.log(key);

        let products = catalogue.get(key).sort((a, b) => a.name.localeCompare(b.name));

        for (let product of products) {
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}solve (["Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"])
//The createSortedCatalogue function takes an array of strings (data) as input.
// It uses a Map to store the initial letter as the key and an array of products starting with that letter as the value.
//
// For each entry in the input, it splits the name and price using the delimiter " : ".
// The price is converted to a number using Number().
// It determines the initial letter of the product's name by accessing the first character and capitalizing it.
//
// If the initial letter is not yet in the catalogue map, it adds it with an empty array.
// Then it pushes an object containing the name and price to the corresponding array in the catalogue map.
//
// It creates a sorted array of the keys (initial letters) using Array.from() and sort().
// It iterates over the sorted keys and prints each key (initial letter) using console.log().
// It retrieves the array of products for the current
// key from the catalogue map and sorts it alphabetically using the sort() method
// and localeCompare() for case-insensitive comparison.
//
// Finally, it iterates over the sorted products array and prints each product's name and price with two spaces before the name.
//
// Note: The function doesn't return any value; it directly prints the sorted catalogue using console.log().