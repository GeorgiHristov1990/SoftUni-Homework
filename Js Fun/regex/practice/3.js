function solve(input) {

    let inputs = input.slice();

    let re = /%(?<name>[A-Z][a-z]+)%([^%$\.\|]+)?<(?<product>\w+)>([^%$\.\|]+)?\|(?<count>\d+)([^%$\.\|]+)?\|([^%$\.\|0-9]+)?(?<price>\d+\.?\d+)\$/g;

    let totalIncome = 0;

    while (true) {

        let currLine = inputs.shift()

        if (currLine === "end of shift") {
            break;
        }


        while ((validEntry = re.exec(currLine)) !==null) {


            let name = validEntry.groups['name'];
            let product = validEntry.groups['product'];
            let count = Number(validEntry.groups['count']);
            let price = Number(validEntry.groups['price']);
            let sum = price * count;

            console.log(`${name}: ${product} - ${sum.toFixed(2)}`);
            totalIncome += sum;
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
    

}

// solve([`%InvalidName%<Croissant>|2|10.3$`,
//     "%Peter%<Gum>1.3$",
//     "%Maria%<Cola>|1|2.4",
//     "%Valid%<Valid>valid|10|valid20$",
//     "end of shift"]);

solve(["%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift"
]);


