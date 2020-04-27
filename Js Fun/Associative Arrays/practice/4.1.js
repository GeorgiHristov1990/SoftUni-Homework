function solve(input = []) {

    let partyIndex = input.indexOf("PARTY");
    let guestList = input.slice(0, partyIndex);
    let comingGuests = input.slice(partyIndex + 1);


    let guestsObj = {
        vips: [],
        regulars: [],
    };

    guestList.forEach(guest => {
        if (!isNaN(guest[0])) {
            guestsObj.vips.push(guest)
        } else {
            guestsObj.regulars.push(guest);
        }
    });


    comingGuests.forEach(guest => {

        if (guestsObj.vips.includes(guest)) {
            let index = guestsObj.vips.indexOf(guest);
            guestsObj.vips.splice(index, 1);
        } else if (guestsObj.regulars.includes(guest)) {
            let index = guestsObj.regulars.indexOf(guest);
            guestsObj.regulars.splice(index, 1);
        }
    });

    
    let resultArr = guestsObj.vips.concat(guestsObj.regulars);
    
    return resultArr.length+"\n"+resultArr.join("\n");

}

solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])