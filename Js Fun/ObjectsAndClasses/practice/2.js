function town(arrArgs = []) {

    let townsObj = {};
    let resultArr = [];

    for (const el of arrArgs) {

        let [town, latitude, longitude] = el.split(` | `);

        townsObj[`town`] = town;
        townsObj[`latitude`] = Number(latitude).toFixed(2);
        townsObj[`longitude`] = Number(longitude).toFixed(2);
        
        
        resultArr.push(Object.assign({},townsObj));
        //resultArr.push(townsObj);
    }

    for (const iterator of resultArr) {
        
        console.log(iterator);


    }
    
}


town(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);