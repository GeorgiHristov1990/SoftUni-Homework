function solve(arr = []) {
    let parking = [];


    arr.forEach(element => {
        let [dir, plate] = element.split(', ')
        if (dir === "IN") {
            parking.push(plate);
        } else if ("OUT") {
            let index = parking.indexOf(plate);
            parking.splice(index, 1)
        }
    });

    parking.sort((a, b) => a.localeCompare(b))

    if (parking.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(parking.join('\n'));
    }
    //     console.log(parking.length !== 0
    //         ? console.log(parking.join('\n'))
    //         : console.log(`Parking Lot is Empty`));
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);
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