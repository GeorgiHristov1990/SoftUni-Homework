function mine(yield) {

    let currentYield = yield;
    let daysOperated = 0;
    let totalYield = 0;

    while (currentYield >= 100) {

        totalYield += currentYield-26;
        daysOperated++;
        currentYield -= 10;
    }
    if (totalYield >= 26 && daysOperated > 0) {
        totalYield -= 26;
    }


        console.log(`${daysOperated}`);
        console.log(`${totalYield}`);
}


mine(111)