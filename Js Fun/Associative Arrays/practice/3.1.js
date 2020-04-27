function solve(arr = []) {

    function parkInfo(arr) {
        let parking = {};
        arr.forEach(line => {
            let [state, plate] = line.split(', ');
            parking[plate] = state;
        });
        return parking;
    }

    let getObj = parkInfo(arr);
    let results = {};

    Object.keys(getObj).forEach(val => {
        if (getObj[val] === "IN") {
            results[val] = getObj[val];
        }

    });


    let sorted = Object.keys(results).sort((a, b) => a.localeCompare(b))
    if (sorted.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(sorted.join('\n'));
    }



}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);

