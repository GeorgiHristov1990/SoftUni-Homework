function equalSums(arr) {


    let index;
    let sumLeft = 0;
    let sumRight = 0;
    let isLengthOne = false;

    if (arr.length !== 1) {
        for (let i = 1; i < arr.length - 1; i++) {

            for (let i2 = 0; i2 < i; i2++) {
                sumLeft += arr[i2];

            }
            for (let i3 = i + 1; i3 < arr.length; i3++) {
                sumRight += arr[i3];
            }

            if (sumLeft === sumRight) {
                index = i;
                break;
            }
            sumLeft = 0;
            sumRight = 0;
        }
    }
    else {
        isLengthOne = true;

    }

    console.log(isLengthOne
        ? `0`
        : index !== undefined
            ? `${index}`
            : `no`);
}


equalSums([11]);
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);