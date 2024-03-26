function solve(matrix){
    let normalDiagonal = 0;
    let backDiagonal =0;
    for(let row=0;row < matrix.length;row++){
       normalDiagonal += matrix[row][row];
       backDiagonal += matrix[row][matrix[row].length - 1 - row];// - na length da vzemem poslednoto , i  - row za da moje
        //vzemem navutre s po edno 4islo
        // row  0    1  2        pri normalniq i dvata narastvat zaedno i se vzema to4noto 4islo ,
        //  0  | 3    5  17      no pri obratniq trqbva da vadim ot maksimalnata duljina zada vliza ponavutre
        //  1  |-1    7  14
        //  2  | 1   -8  89


    }
    console.log(normalDiagonal, backDiagonal);
}solve([[20,40],[10,60]]);
console.log()
solve([[3,5,17],[-1,7,14],[1,-8,89]])