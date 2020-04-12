function houseParty(arr = []) {

    let guests = [];

    for (let i = 0; i < arr.length; i++) {

        let splitInput = arr[i].split(' ');

        if (!splitInput.includes(`not`)) {

            if (!guests.includes(splitInput[0])) {
                guests.push(splitInput[0]);
            } else {
                console.log(`${splitInput[0]} is already in the list!`);
            }
        } else {
            if (splitInput.includes(`not`)) {
                if (guests.includes(splitInput[0])) {
                    let indexOfGuest = guests.indexOf(splitInput[0]);
                    guests.splice(indexOfGuest,1)
                } else {
                    console.log(`${splitInput[0]} is not in the list!`);
                }
            }
        }
    }

    for (const guest of guests) {
        console.log(guest);
        
    }

}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);