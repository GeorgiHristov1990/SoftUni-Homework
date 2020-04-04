function list(arr = []) {

    let copyArr = arr.slice();

    copyArr.sort();
    //console.log(copyArr);

    copyArr.sort(function (a, b) {
        if (a > b) {
            return -1;
        }
        if (b > a) {
            return 1;
        }
        return 0;
    });


    
    //console.log(copyArr);
    let count = 0;
    for (const listItem of copyArr) {
        ++count;
        console.log(`${count}.${listItem}`);
        
    }

}


list(["cat", "bee", "elephant", "ant", "dog"]);
// list(["elephant", "dog", "cat", "bee", "ant"]);
// list(["Potatoes", "Tomatoes", "Onions", "Apples"]);
// list(["Potatoes", "Potata", "Onions", "Apples",`Appa`]);

// list([1,5,3,0,9,4]);