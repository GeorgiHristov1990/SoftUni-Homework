function inventory(input = []) {

    let inputArr = input.slice();
    let heroes = [];

    while (inputArr.length > 0) {

        let line = inputArr.shift();
        let tokens = line.split(' / ');


        let hero = { name: tokens[0], level: Number(tokens[1]), items: tokens[2].split(', ') };

        // let name = tokens.shift();
        // let level = Number(tokens.shift());
        // let items = tokens.shift().split(', ');

        // let hero = { name: name, level: level, items: items };

        heroes.push(hero);
    }


    function compare(a, b) {
        if (a.level < b.level) {
            return -1;
        }
        if (a.level < b.level) {
            return 1;
        }
        return 0;
    }

    function compare2(a,b) {
        if (a.items < b.items) {
            return -1;
        }
        if (a.items < b.items) {
            return 1;
        }
        return 0;
    }

    heroes.sort(compare);
    //heroes.sort((a,b) => a.items.localeCompare(b.items))
    //heroes.sort(compare2);

    

    //heroes.sort((a,b) => a.level - b.level || a.items - b.items)

    // heroes.sort(function (a, b) {
    //     let n = a.level - b.level;
    //     if (n !== 0) {
    //         return n;
    //     }
    
    //     return b.items - a.items;
    // });

 
    
    for (const hero of heroes) {
        
        hero.items.sort((a,b) => a.localeCompare(b));
        console.log(`Hero: ${hero.name}`);
        console.log(`Level => ${hero.level}`);
        console.log(`Items ${hero.items.join(", ")}`);

    }
}


inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);