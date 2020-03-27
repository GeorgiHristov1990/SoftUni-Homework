function solve(arr=[]) {
    
    let iniVal = 1;
    let arrResult = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i]==="add") {
            arrResult.push(iniVal);
            iniVal++;
        } else if (arr[i]==="remove"){
            arrResult.pop();
            iniVal++;
        }
    }
    console.log(arrResult.length!==0
        ?`${arrResult.join(' ')}`
        :`Empty`);
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);