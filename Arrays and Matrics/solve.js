function solve(matrix){
    let counter = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let cow = 0; cow < matrix[row].length; cow++) {
           if(matrix[row][cow]===matrix[row][cow+1]) {
               counter++;
           }
            if(matrix[row+1]&& matrix[row][cow]===matrix[row+1][cow]) {
                counter++;
            }
            //for (let row = 0; row < matrix.length; row++) {
            //         for (let colum = 0; colum < matrix[row].length; colum++) {
            //             if(matrix[row][colum] === matrix[row][colum+1]){
            //                 counter ++;
            //             }
            //             if(matrix[row +1] && matrix[row][colum] === matrix[row+1][colum]){
            //                 counter ++;
        }

    }
}solve([
    ["2","3","4","7","0"],
    ["4","0","5","3","4"],
    ["2","3","5","4","2"],
    ["9","8","7","5","4"]
])
solve([
    ["test","yes","yo","ho"],
    ["well","done","yo","6"],
    ["not","done","yo","5"],
])
