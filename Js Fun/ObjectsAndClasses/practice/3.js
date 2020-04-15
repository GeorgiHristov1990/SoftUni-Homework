function storageProvision(arrInput = [], arr2Input = []) {

    let storageItems = {};

    for (let i = 0; i < arrInput.length - 1; i++) {

        if (i % 2 == 0) {
            let item = arrInput[i];
            let quantity = arrInput[i + 1]
            storageItems[item] = Number(quantity);
        }
    }
    // console.log(storageItems);

    for (let i = 0; i < arr2Input.length - 1; i += 2) {
        let keyName = arr2Input[i];
        let value = arr2Input[i + 1];

        if (storageItems.hasOwnProperty(keyName)) {
            storageItems[keyName] += Number(value);
        } else {
            storageItems[keyName] = Number(value);
        }
    }
    //console.log(storageItems);

    for (const key in storageItems) {
        console.log(`${key} -> ${storageItems[key]}`);
    }

}


storageProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);