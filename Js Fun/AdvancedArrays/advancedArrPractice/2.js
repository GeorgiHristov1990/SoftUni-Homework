function distinctArr(arrInput=[]) {
    
    let arr = arrInput.slice();

    for (let i = 0; i < arr.length; i++) {
        
        for (let i2 = i+1; i2 < arr.length; i2++) {
            if (arr[i]===arr[i2]) {
                arr.splice(i2,1)
                i--;
            }
        }
        
    }
    console.log(arr.join(' '));
}

function solve2(arr=[]){

    let arrInput = arr.slice();

    console.log(arrInput);
    
    let qniqueValues = new Set(arrInput);

    console.log(qniqueValues);

    let backToArr = [...qniqueValues]

    console.log(backToArr);
    
}

function solve3(arr=[]) {
    
    arr = arr.filter((item,index) => {
        console.log(
            // a. Item
            item,
            // b. Index
            index,
            // c. indexOf
            arr.indexOf(item),
            // d. Condition
            arr.indexOf(item) === index,
        );
        return arr.indexOf(item) == index
    });
    console.log(arr);
}



solve2([7, 8, 9, 7, 2, 3, 4, 1, 2]);
//distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);
// distinctArr([1, 2, 3, 4]);
// distinctArr([20, 8, 12, 13, 4, 4, 8, 5]);