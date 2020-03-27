function addOrSubtr(inputArr) {

    let modifiedArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] % 2 == 0) {
            modifiedArr[i] = inputArr[i]+i;
        } else {
            modifiedArr[i] = inputArr[i]-i;
        }
    }
    console.log(modifiedArr);
    let sumOldArr = getSum(inputArr);
    let sumNewArr = getSum(modifiedArr);

    console.log(sumOldArr);
    console.log(sumNewArr);
    
}

function getSum(arrInput) {

    let sum = 0;

    for (const el of arrInput) {
        sum += el;
    }
    return sum;
}

addOrSubtr([5, 15, 23, 56, 35]);
addOrSubtr([-5, 11, 3, 0, 2]);