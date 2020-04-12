function number(arr = [], arr2 = []) {

    let elToTake = arr2[0];
    let eltoDel = arr2[1];
    let elToSeach = arr2[2];


    let result = arr.slice(0, elToTake);

    result.splice(0,eltoDel);

    let count = 0;

    for (let i = 0; i < result.length; i++) {
        if (elToSeach === result[i]) {
            count++;
        }
    }

    console.log(`Number ${elToSeach} occurs ${count} times.`);

}

number([5, 2, 3, 4, 1, 6],
       [5, 2, 3]);