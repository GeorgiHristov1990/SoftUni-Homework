function commonElements(arr, arr2) {

    for (let i = 0; i < arr.length; i++) {

        for (let i2 = 0; i2 < arr2.length; i2++) {

            if (arr[i] === arr2[i2]) {
                console.log(arr[i]);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);