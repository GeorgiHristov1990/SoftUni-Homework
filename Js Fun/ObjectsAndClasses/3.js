function convertToObj(jsonStr) {

    let parsed = JSON.parse(jsonStr);

    for (const iterator in parsed) {
        console.log(`${iterator}: ${parsed[iterator]}`);
    }
    

}


convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');