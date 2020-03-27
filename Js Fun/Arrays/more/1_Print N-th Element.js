function printNthEl(arrInput = []) {

    let step = Number(arrInput[arrInput.length - 1]);

    let newArr = [];

    for (let i = 0; i < arrInput.length-1; i++) {

        if (i % step == 0) {
            newArr.push(arrInput[i]);
        }
    }
    console.log(newArr.join(' '));

}

printNthEl(['5', '20', '31', '4', '20', '2']);
printNthEl(['dsa', 'asd', 'test', 'test', '2']);
printNthEl(['1', '2', '3', '4', '5', '6']);