function solve(arr = [], rotations) {
    

    let dubArr = arr.slice(arr);
    let optimiseRotations = rotations % arr.length;
     
    if (rotations > arr.length) {
        for (let i = 0; i < optimiseRotations; i++) {
            let firstEl = arr.shift()
            arr.push(firstEl)
        }
    } else {
        for (let i = 0; i < rotations; i++) {
            let firstEl = arr.shift()
            arr.push(firstEl)
        }
    }
    console.log(arr.join(' '));
    console.log(`Fast way`);
        
    for (let i = 0; i < rotations; i++) {
        let firstEl = dubArr.shift()
        dubArr.push(firstEl)
    }
    
    console.log(dubArr.join(' '));
    console.log(`Slow way`);
    


}
solve([51, 47, 32, 61, 21], 500000001);
//solve([51, 47, 32, 61, 21], 500000000);
// solve([32, 21, 61, 1], 4);
// solve([2, 4, 15, 31], 5);