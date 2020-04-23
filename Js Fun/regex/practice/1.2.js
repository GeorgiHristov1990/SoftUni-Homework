function solve(arr = []) {

    // let pattern = />>(?<furniture>\w+)<<(?<price>\d+\.?\d+)\!(?<quantity>\d+)/g;
    let pattern = />>([A-Za-z]+)<<(\d+\.?\d+)!(\d+)/g;
    let sum = 0;

    while (true) {

        let command = arr.shift();

        if (command === "Purchase") {
            console.log(`Total money spend: ${sum}`);
            break;
        }

        if (sum === 0) {
            console.log(`Bought furniture: `);
        }

        let isValid = pattern.exec(command);
        // while ((isValid = pattern.exec(command)) !== null) {
        while (isValid !== null) {
            //let isValid = pattern.exec(command);
            if (true) {
                // let furniture = isValid.groups["furniture"];
                // let price = isValid.groups["price"];
                // let quantity = isValid.groups["quantity"];
                
                let furniture = isValid[1];
                let price = isValid[2];
                let quantity = isValid[3];
                
                sum += (Number(price) * Number(quantity));

                
                console.log(`${furniture}`);
                isValid = pattern.exec(command);
                
            }

        }
    }
}


// solve([">>Sofa<<312.23!3",
//        ">>TV<<300!5",
//        ">Invalid<<!5",
//        'Purchase'
// ]);

solve([">>Sofa<<312.23!3>>TV<<300!5,>Invalid<<!5,'Purchase'",
    'Purchase'
]);