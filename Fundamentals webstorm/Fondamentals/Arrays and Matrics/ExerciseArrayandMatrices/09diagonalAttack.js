function solve(arr){
let matrix = []; // напълнихме матрицата
    for (let i = 0; i < arr.length; i++) {
        matrix.push(arr[i].split(' ').map(Number));
        // pulnim matricata s push , i vzimame ot masiva indeksa ot zapetaq do zapetaq , i davame
        //.split()  i s .map() gi pravim na 4islo s mapa moje da priema i landa funkci no tuk samo za parsavane kum 4islo
    }
    let primaryDiagonal=0;
    let secondaryDiagonal =0;
    for (let row = 0; row < matrix.length;row++) { // обходихме дължината на матрицата
        for (let col = 0; col < matrix[row].length; col++) { //
            if(row === col){
               primaryDiagonal += matrix[row][col] ; //ако колона и ред са равни събирай ги
            }
           if(col === matrix[row].length - row -1){
               secondaryDiagonal += matrix[row][col]; //
           }
        }
    }
    if(primaryDiagonal === secondaryDiagonal){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row !== col && col !== matrix[row].length -row - 1){ // на всеки друг елемент да заместим с сумата на диагоналите
                    matrix[row][col] = primaryDiagonal;
                }
            }
        }
    }
    let result = matrix.map(row=>row.join(' ')).join('\n');
    console.log( result);
}solve(['5 3 12 3 1',
           '11 4 23 2 5', // масиж от стрингове трябва го обработим и да искараме елементите един по един
           '101 12 3 21 10',
           '1 4 5 2 2',
           '5 22 33 11 1'] )