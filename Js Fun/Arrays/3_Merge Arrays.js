function mergeArr(arr, arr2) {

    let mergedArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 == 0) {
            mergedArr[i]=Number(arr[i])+Number(arr2[i]);
        } else {
            mergedArr[i]= arr[i]+arr2[i];
        }
    }
    console.log(mergedArr.join(` - `));
    
}

mergeArr(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);
mergeArr(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);