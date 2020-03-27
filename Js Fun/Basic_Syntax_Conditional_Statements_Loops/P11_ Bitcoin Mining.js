function input(arrInput) {

    const bitcoinPrice = 11949.16;
    const gramGoldPrice = 67.51;

    let shifts = arrInput;

    let firstDayPurchase;

    let totalBitcoinPurchesed = 0;
    let moneyAvailable = 0;

    let isFirstPurchaseMade = false;

    for (let index = 1; index <= shifts.length; index++) {

        let dailyGold = shifts[index - 1];

        if (index % 3 == 0) {
            dailyGold *= 0.70;
        }


        moneyAvailable = moneyAvailable + (dailyGold * gramGoldPrice);

        if (!isFirstPurchaseMade && moneyAvailable >= bitcoinPrice) {
            firstDayPurchase = index;
            isFirstPurchaseMade = true;
        }
        if (moneyAvailable >= bitcoinPrice) {

            totalBitcoinPurchesed+= parseInt(moneyAvailable/bitcoinPrice);
            moneyAvailable -= parseInt(moneyAvailable/bitcoinPrice)*bitcoinPrice;

            // while (moneyAvailable >= bitcoinPrice) {

            //     moneyAvailable -= bitcoinPrice;
            //     totalBitcoinPurchesed++;
            // }
        }
    }
    console.log(`Bought bitcoins: ${totalBitcoinPurchesed}`);
    if (totalBitcoinPurchesed !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayPurchase}`)
    }
    console.log(`Left money: ${moneyAvailable.toFixed(2)} lv.`);

}

// input([100, 200, 300]);
// console.log();
// input([50, 100]);
// console.log();
input([3124.15, 504.212, 2511.124]);