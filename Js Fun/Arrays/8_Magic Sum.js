function magicSum(arr = [],num = 0) {

    let magicNum = num;

    for (let i = 0; i<arr.length; i++){

        for (let i2 = i+1; i2 < arr.length; i2++) {
            if (arr[i]+arr[i2]===magicNum) {
                console.log(`${arr[i]} ${arr[i2] }`);
                break;
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23],8);
console.log();
magicSum([14, 20, 60, 13, 7, 19, 8],27);
console.log();
magicSum([1, 2, 3, 4, 5, 6],6);