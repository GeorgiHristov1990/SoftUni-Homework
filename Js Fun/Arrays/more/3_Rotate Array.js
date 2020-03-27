function rotateArr(arr = []){

    let rotations = arr[arr.length-1];
    let dubArray = arr.slice(0,arr.length-1);
    
    for (let i = 0; i < rotations; i++) {
        let element = dubArray.pop();
        dubArray.unshift(element)    
    }
    console.log(dubArray.join(' '));
     
}


rotateArr([1,2,3,4,2]);