function printMatrix(num){

    for (let i = 1; i <= num; i++) {
        
        let row = '';
        for (let i2 = 1; i2 <= num; i2++) {
            
            row+=`${num} `
        }
        console.log(row);
    }

}
function printMatrix2(num){

    for (let i = 1; i <= num; i++) {

            console.log(`${num} `.repeat(num));
        
        }
}





printMatrix2(3);
printMatrix2(7);
printMatrix2(2);