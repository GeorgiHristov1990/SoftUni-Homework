function solve(arr = []) {

    // let pattern = />>(?<furniture>\w+)<<(?<price>\d+\.?\d+)\!(?<quantity>\d+)/g;
    let pattern = />>([A-Za-z]+)<<(\d+\.?\d+)!(\d+)/g;
    let sum = 0;

    let index = arr.indexOf("Purchase");
    let items = arr.slice(0, index).join(',');


    if (sum === 0) {
        console.log('Bought furniture: ');
    }
    
    while ((isValid = pattern.exec(items)) !== null) {


        // let isValid = pattern.exec(items);

        let furniture = isValid[1];
        let price = isValid[2];
        let quantity = isValid[3];

        
        sum += (Number(price) * Number(quantity));

        console.log(`${furniture}`);
        isValid = '';
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}


// solve([">>Sofa<<312.23!3",
//        ">>TV<<300!5",
//        ">Invalid<<!5",
//        'Purchase'
// ]);


solve();