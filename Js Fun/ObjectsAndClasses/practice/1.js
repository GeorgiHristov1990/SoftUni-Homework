function addEmployee(arr = []) {
    let employeObj = {};

    for (const el of arr) {
        let length = el.length;
        employeObj[el]=length;
        
    }

    for (const key in employeObj) {        
        console.log(`Name: ${key} -- Personal Number: ${employeObj[key]}`);
    }
    //console.log(employeObj);
    
}



addEmployee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);
