function solve(arr = []) {

    let pattern = />>(?<furniture>\w+)<<(?<price>\d+\.?\d+)\!(?<quantity>\d+)/;
    //let pattern = />>([A-Za-z]+)<<(\d+\.?\d+)!(\d+)/;
    let sum = 0;

    while (true) {

        let command = arr.shift();
            if (sum === 0) {
                console.log(`Bought furniture: `);
            }
        
        if (command === "Purchase" || arr.length===0) {
            console.log(`Total money spend: ${sum.toFixed(2)}`);
            break;
        }


        let match = command.match(pattern);
        //console.log(match);

        if (match !== null) {
            let furniture = match.groups['furniture'];
            let price = match.groups['price'];
            let quantity = match.groups['quantity'];

            console.log(`${furniture}`);
            sum+=Number(price)*Number(quantity);

        }



    }
}

solve();

solve([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    'Purchase'
]);
