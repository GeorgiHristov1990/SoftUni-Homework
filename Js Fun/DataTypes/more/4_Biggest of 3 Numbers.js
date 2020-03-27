function getBiggestNum(num,num2,num3) {
    let biggestNum = Math.max(num,Math.max(num2));
console.log(biggestNum);

}

getNum(-2,7,3);
getNum(130,5,99);
getNum(43,43.2,43.1);

function getNum(num,num2,num3) {
    let biggestNum=0;
    if (num>num2) {
        biggestNum=num;
    }
    else{
        biggestNum=num2
    }
    if (num3>biggestNum) {
        biggestNum=num3;
    }
console.log(biggestNum);

}