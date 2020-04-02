//not 100%
function cutCrystal(thickness, crystalInput) {

    let crystal = crystalInput;
    let operations = 0;
    while (thickness < crystal) {
        if (crystal / 4 >= thickness) {
            crystal /= 4;
            operations++;
        } else {
            crystal=Math.floor(crystal);
            break;
        }
    }
    let results = [];
    results[0] = crystal;
    results[1] = operations;
    return results;
}

function lapCrystal(thickness, crystalInput) {

    let crystal = crystalInput;
    let operations = 0;

    while (thickness < crystal) {

        let check = crystal - (crystal * 20 / 100);
        if (crystal * 0.8 >= thickness) {
            crystal *= 0.8;
            operations++;
        } else {
            crystal=Math.floor(crystal);
            break;
        }
    }
    let results = [];
    results[0] = crystal;
    results[1] = operations;
    return results;
}

function grindCrystal(thickness, crystalInput) {
    let crystal = crystalInput;
    let operations = 0;

    while (thickness < crystal) {

        if (crystal - 20 >= thickness) {
            crystal -= 20;
            operations++;
        } else {
            crystal= Math.floor(crystal);
            break;
        }
    }
    let results = [];
    results[0] = crystal;
    results[1] = operations;
    return results;
}

function etchCrystal(thickness, crystalInput) {
    let crystal = crystalInput;
    let operations = 0;

    while (thickness < crystal) {

        if (crystal - 2 >= thickness) {
            crystal -= 2;
            operations++;
        } else {
            if (crystal!==thickness) {
                crystal-=2;
                operations++;
            }
            crystal= Math.floor(crystal);
            break;
        }
    }
    let results = [];
    results[0] = crystal;
    results[1] = operations;
    return results;
}


function main(input = []) {

    let desiredThickness = input[0];

    for (let i = 1; i < input.length; i++) {

        let currCrystal = input[i];

        console.log(`Processing chunk ${currCrystal} microns`);

        let results = cutCrystal(desiredThickness, currCrystal);

        console.log(`Cut x${results[1]}`);

        if (desiredThickness !== results[0]) {
            console.log(`Transporting and washing`);
        } else {
            console.log(`Transporting and washing`);
            console.log(`Finished crystal ${results[0]} microns`);
            continue;
        }


        results = lapCrystal(desiredThickness, results[0]);

        console.log(`Lap x${results[1]}`);

        if (desiredThickness !== results[0]) {
            console.log(`Transporting and washing`);
        } else {
            console.log(`Transporting and washing`);
            console.log(`Finished crystal ${results[0]} microns`);
            continue;
        }


        results = grindCrystal(desiredThickness, results[0]);

        console.log(`Grind x${results[1]}`);

        if (desiredThickness !== results[0]) {
            console.log(`Transporting and washing`);
        } else {
            console.log(`Transporting and washing`);
            console.log(`Finished crystal ${results[0]} microns`);
            continue;
        }


        results = etchCrystal(desiredThickness, results[0]);

        console.log(`Etch x${results[1]}`);

        if (desiredThickness !== results[0]) {
            console.log(`Transporting and washing`);
            console.log(`X-ray x1\nFinished crystal ${results[0]+1} microns`);

        } else {
            console.log(`Transporting and washing`);
            console.log(`Finished crystal ${results[0]} microns`);
            continue;
        }


        // console.log(desiredThickness !== results[0]
        //     ? `X-ray x1\nFinished crystal ${results[0]+1} microns`
        //     : `Finished crystal ${results[0]} microns`);
    }
}

//main([1375, 50000]);
//main([1000, 4000, 8100]);
//main([1000, 8100, 8100]);
main([1000, 4000, 5000,6100,7250,2509]);