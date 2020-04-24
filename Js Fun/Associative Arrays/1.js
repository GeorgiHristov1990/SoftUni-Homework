function solve(input) {

    let phoneBook = {};

    for (const el of input) {
        let [name, number] = el.split(' ');

        phoneBook[name] = number;

    }
    // console.log(phoneBook);

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);

    }
}


solve(['Tim 0834212554',
    'Peterparams 0877547887',
    'Bill 0896543112',
    'Tim 1'])