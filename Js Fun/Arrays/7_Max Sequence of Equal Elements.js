function maxSeqOfEqualNum(arrInput = []) {

    let test = ' ';
    let maxCount = 1;
    let count = 1;

    let longestNum = arrInput[0];
    let maxLongest = arrInput[0];

    for (let i = 0; i < arrInput.length - 1; i++) {

        if (arrInput[i] === arrInput[i + 1]) {
            longestNum = arrInput[i];
            count++;
            if (count > maxCount) {
                maxLongest = arrInput[i];
                maxCount++;
            }
        } else {
            count = 1;
        }
    }
    let numToStr = maxLongest+' ';
    
    console.log(numToStr.toString().repeat(maxCount));
    
}

maxSeqOfEqualNum([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSeqOfEqualNum([1, 1, 1, 2, 3, 1, 3, 3]);
maxSeqOfEqualNum([4, 4, 4, 4]);
maxSeqOfEqualNum([0, 1, 1, 5, 2, 2, 6, 3, 3]);