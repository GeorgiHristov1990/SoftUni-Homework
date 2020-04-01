function oddAndEvenSum(num=Number) {

    let numLength = num.toString().length;
    let sumEven = 0;
    let sumOdd = 0;
    let numStr = num.toString();
    
    for (let i = 0; i < numLength; i++) {
        if (Number(numStr[i])%2==0 ) {
            sumEven+=Number(numStr[i]);
        } else{
            sumOdd+=Number(numStr[i]);
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
    
}


oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);