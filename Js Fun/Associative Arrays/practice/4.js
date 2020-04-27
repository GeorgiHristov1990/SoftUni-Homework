function solve(input = []) {

    let guestList = input.slice(0, input.indexOf("PARTY"));

    let vips = [];
    let regulars = [];

    let guests = {};

    // guestList.forEach(el => {
    //     if (isNaN(el[0])) {
    //         regulars.push(el);
    //     } else {
    //         vips.push(el);
    //     }
    // });

    guestList.forEach(el => {
        if (Number.isFinite(Number((el[0])))) {
            guests[el]="VIP"
        } else {
            guests[el]="REGULAR";
        }
    });


    let arrivingGuests = input.slice(input.indexOf("PARTY")+1);
    
    arrivingGuests.forEach(guest => {
        if (guests.hasOwnProperty(guest)) {
            delete guests[guest];
        }
    });


    console.log(Object.keys(guests).length);

    let sorted = Object.keys(guests).sort((a,b)=> b[1].localeCompare(a[1]))

    let sorted2 = Object.keys(guests).sort(function(a,b) {

        if (isFinite(Number(a[0]))) {
            return -1;
        } else if (!isFinite(Number(a[0]))){
            return 1;
        }
        return 0;

    })
    //console.log(sorted2.join('\n'));
    
    return sorted2.length+"\n"+sorted2.join("\n");


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
]
)

// solve(
//     ['7IK9Yo0h',
//         '9NoBUajQ',
//         'Ce8vwPmE',
//         'SVQXQCbc',
//         'tSzE5t0p',
//         'PARTY',
//         '9NoBUajQ',
//         'Ce8vwPmE',
//         'SVQXQCbc'
//     ]
// );