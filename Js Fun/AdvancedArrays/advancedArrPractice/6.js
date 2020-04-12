function bombNums(arr = [], arr2 = []) {

    let bomb = arr2[0];
    let power = arr2[1];

    let numSeq = arr.slice();

    while (numSeq.includes(bomb)) {

        let indexOf = numSeq.indexOf(bomb);
        let firstHalf = numSeq.slice(0, indexOf - power);
        let secondHalf = numSeq.slice(indexOf + 1 + power)
        numSeq = firstHalf.concat(secondHalf);


    }

    numSeq = numSeq.reduce((a,b) => a+b);

console.log(numSeq);


}


bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
         [2, 1]);
bombNums([1, 7, 7, 1, 2, 3],
          [7, 1]);


// bombNums([1, 2, 2, 4, 2, 2, 2, 9],
//          [4, 2])
// bombNums([1, 4, 4, 2, 8, 9, 1],
//          [9, 3]);
