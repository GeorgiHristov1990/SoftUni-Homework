function personInfo(firstName,lastName,age) {
    
    let personInfo = {
        "firstName":firstName,
        "lastName":lastName,
        "age": age,
    };

    for (const key in personInfo) {
        console.log(`${key}: ${personInfo[key]}`);   
    }


    

}

personInfo("Peter", 
           "Pan",
           "20");