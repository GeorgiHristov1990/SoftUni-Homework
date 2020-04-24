function solve(arr = []) {
    let neighbourhoods = arr.shift().split(", ");

    let mapList = new Map();

    for (const line of neighbourhoods) {
        mapList.set(line, new Array());
    }

    for (const line of arr) {
        let [street, person] = line.split(" - ");


        if (neighbourhoods.includes(street)) {
            if (mapList.has(street)) {
                let persons = mapList.get(street);
                persons.push(person);
                mapList.set(street, persons)
            }
            else {
                mapList.set(street, new Array(person));
            }
        }
    }

    let sorted = Array.from(mapList).sort((a, b) => b[1].length - a[1].length);

    let result = new Map(sorted);



    for (const [street, persons] of sorted) {
        console.log(`${street}: ${persons.length}`);

        persons.forEach(el => {console.log(`--${el}`);
        });
        // for (const person of persons) {
        //     console.log(`--${person}`);
        // }
    }


}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);