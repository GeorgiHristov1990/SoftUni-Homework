function makeDictionary(input = []) {

    let inputCopy = input.slice();

    let dictionary = {};

    while (inputCopy.length > 0) {

        let row = inputCopy.shift();
        let parsedInput = JSON.parse(row);

        Object.assign(dictionary, parsedInput);
    }

    let result = []
    result.push(dictionary);
    
    let sortedDictionary = {};


    //console.log(Object.keys(dictionary));
    
    for (const key of Object.keys(dictionary).sort((a,b) => a.localeCompare(b))) {
        
        sortedDictionary[key]=[dictionary[key]]
        
    }


    for (const key in sortedDictionary) {

        console.log(`Term: ${key} => Definition: ${sortedDictionary[key]}`);

    }





}

makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);