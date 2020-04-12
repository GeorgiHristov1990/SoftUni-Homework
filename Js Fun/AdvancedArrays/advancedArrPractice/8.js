function arrManipulator(arr = [], arr2 = []) {

    let array = arr.slice();
    let tokens;

    for (let i = 0; i < arr2.length; i++) {

        if (arr2.length !== 1) {
            tokens = arr2[i].split(' ');
        } else {
            tokens = arr2[0].split(' ');
        }

        switch (tokens[0]) {
            case `add`:
                array.splice(Number(tokens[1]), 0, Number(tokens[2]));
                break;
            case `addMany`:
                let many = tokens.slice(2).map(Number);
                array.splice(tokens[1], 0, ...many);
                break;
            case `contains`:
                console.log(array.indexOf(Number(tokens[1])));
                break;
            case `remove`:
                array.splice(tokens[1], 1);
                break;
            case `shift`:
                let position = tokens[1];
                while (position>0) {
                    let temp = array[0];
                    for (let i2 = 0; i2 < array.length-1; i2++) {
                        array[i2]=array[i2+1]
                    }
                    array[array.length-1] = temp;
                    position--;
                }
                break;

            case `sumPairs`:
                let emptyArr = [];
                for (let i = 0; i < array.length; i += 2) {

                    if (array.length % 2 !== 0 && array.length - 1 === i) {
                        emptyArr.push(array[i]);
                        break;
                    }
                    // if (array.length % 2 !== 0) {
                    //     array.push(0);
                    // }
                    emptyArr.push(array[i] + array[i + 1]);

                }
                array = emptyArr;
                // array.map((x,i) => )

                // });
                break;

            case `print`:
                console.log(`[ ${array.join(`, `)} ]`);
                
                //console.log(array);
                
                break;

            default:
                break;
        }

    }

}

// arrManipulator([1, 2, 3, 4, 5],['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

arrManipulator([1, 2, 4, 5, 6, 7],
["add 1 8", "contains 1", "contains -3", "print"])
