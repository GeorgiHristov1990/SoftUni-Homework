//Number modification
function getSumOfDigits(n) {

    let iniValue = n;
    let sumOfDigits = 0;

    while (iniValue > 0) {

        sumOfDigits += iniValue % 10;
        iniValue = parseInt(iniValue / 10)
    }
    return sumOfDigits;
}

function getDigits(num) {
    
    return num = Math.floor( Math.log10( num ) ) + 1;

}



function modifyNum(num) {

    
    let digits = getDigits(num);
    let average = getSumOfDigits(num) / digits;

    let result = num.toString();

    //let numToAppendTo = num.toString();


    while (average<5) {

        result+=`9`;
        average = getSumOfDigits(Number(result))/getDigits((Number(result)));

    }

    console.log(result)
    

}


modifyNum(12345);
modifyNum(5835);
modifyNum(101);
