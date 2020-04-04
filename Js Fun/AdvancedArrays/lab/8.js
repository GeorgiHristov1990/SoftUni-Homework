function modifyArr(arr=[]) {
    
    let array = arr[0].split(' ');

    for (let i = 1; i < arr.length; i++) {
        
        let token = arr[i].split(' ');

        if (token[0] === `Add`) {
            array.push(token[1])
        }
        if (token[0] === `Remove`) {

            array = array.filter( x => x!==token[1]);
   
        }
        if (token[0] === `RemoveAt`) {

            array.splice(Number(token[1]),1)
        }
        if (token[0] === `Insert`) {
            let index = Number(token[2]);
            let value = Number(token[1]);
            array.splice(index,0,value)
        }
        
    }
    console.log(array.join(' '));
    
}

modifyArr(['4 19 2 53 6 43',
           'Add 3',
           'Remove 2',
           'RemoveAt 1',
           'Insert 8 3'])