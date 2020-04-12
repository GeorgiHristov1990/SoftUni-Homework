function sort(arr = []) {



    let ascending = arr.slice();
    let descending = arr.slice();

    ascending = ascending.sort((a, b) => a - b);
    console.log(ascending);

    descending = descending.sort((a, b) => b - a);
    console.log(descending);

    let resultArr = [];

    for (let i = 0; i < arr.length / 2; i++) {

        resultArr.push(descending[i]);
        resultArr.push(ascending[i]);

    }
    if (arr.length % 2 !== 0) {
        resultArr.pop()
    }

    console.log(resultArr.join(' '));

}

//sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sort([1, 2, 3, 4, 5]);