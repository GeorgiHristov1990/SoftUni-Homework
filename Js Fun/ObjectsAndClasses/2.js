function city(name,area,population,country,postCode) {
    

    let cityObj = {
        "name":name,
        "area":area,
        "population":population,
        "country":country,
        "postCode":postCode,
    };

    for (const key in cityObj) {
            console.log(`${key} -> ${cityObj[key]}`);   
        }
}

city("Sofia"," 492", "1238438", "Bulgaria", "1000");