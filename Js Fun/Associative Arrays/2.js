function solve(input) {

    let map = new Map();

    for (const pair of input) {
        let [product, quantity] = pair.split(' ');

        if (map.has(product)) {
            let sum = Number(map.get(product));
            map.set(product,sum + Number(quantity))
        } else {
            map.set(product, Number(quantity));
        }
    }
    for (const [prod,qty] of map) {
        console.log(`${prod} -> ${qty}`);
        
    }
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);

