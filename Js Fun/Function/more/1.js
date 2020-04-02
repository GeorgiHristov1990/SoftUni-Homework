//Car Wash

function getWashResult(inputArr) {

    let result = 0;

    for (const operation of inputArr) { 

        switch (operation) {
            case `soap`:
                result +=10;
                break;
            case `water`:
                result*=1.2;
                break;
            case `vacuum cleaner`:
                result*=1.25;
                break;
            case `mud`:
                result-=(result*0.1);
                break;

            default:
                break;
        }
    }
    return result;
}


function getPercentWashed(arrInput = []) {

    let cleanQueue = arrInput.slice();

    let completed = getWashResult(cleanQueue);

    console.log(`The car is ${completed.toFixed(2)}% clean.`);   
}

getPercentWashed(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);