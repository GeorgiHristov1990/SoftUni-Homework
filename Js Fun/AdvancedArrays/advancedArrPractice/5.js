function compareBy2criteria(arr) {


    arr.sort((a,b) => a.length - b.length || a.localeCompare(b));
    //console.log(arr);

    for (const iterator of arr) {
        console.log(iterator);
        
    }

}


compareBy2criteria([`test`,`Deny`,`omen`,`Default`])
//compareBy2criteria(["alpha", "beta", "gammmmma",`mama`,`goofy`,`zeta`]);
//compareBy2criteria(["alpha", "beta", "gamma"]);
//compareBy2criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);