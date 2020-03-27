function printTriangle(num) {
    for (let row = 1; row <= num; row++) {

        let rowStr = "";
        for (let col = 1; col <= row; col++) {
            rowStr = rowStr + (row + " ");
        }
        console.log(rowStr);
        

    }
}

printTriangle(6);