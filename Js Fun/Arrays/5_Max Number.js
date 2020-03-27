function maxNum(arr) {
    let isBiggest = true;
    let biggestNums = [];

    for (let i = 0; i < arr.length; i++) {
        
        for (let i2 = i+1; i2 < arr.length; i2++) {
            
            if (!(arr[i] > arr[i2])) {
                isBiggest = false;
                break;
            }
        }
        if (isBiggest) {
            biggestNums.push(arr[i])
        }
        isBiggest = true;
    }
    console.log(biggestNums.join(' '));
    
}

maxNum([1, 4, 3, 2]);
maxNum([14, 24, 3, 19, 15, 17]);
maxNum([41, 41, 34, 20]);
maxNum([27, 19, 42, 2, 13, 45, 48]);