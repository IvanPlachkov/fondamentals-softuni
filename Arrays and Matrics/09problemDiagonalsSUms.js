function solve(matrix) {
    let normalDiagonal = 0;
    let backDiagonal = 0;
    for (let row = 0; row < matrix.length; row++) {
        normalDiagonal += matrix[row][row];
        backDiagonal += matrix[row][matrix[row].length - 1 - row];

    }
    console.log(normalDiagonal, backDiagonal);
} solve([[20, 40], [10, 60]]);
console.log()
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]])