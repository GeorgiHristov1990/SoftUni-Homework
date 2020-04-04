function solve(arr=[]) {
    
    let nums = arr.slice();
    let result = [];
    
    for (let i = 0; i < 2; i++) {
        
        
        let smallest = Number.MAX_SAFE_INTEGER;
        let pos;
        for (let i2 = 0; i2 < nums.length; i2++) {
            
            if (smallest>nums[i2]) {
                smallest = nums[i2]
                pos = i2;
            }
        }

        result.push(nums[pos])
        nums[pos]=undefined;
        
    }
    console.log(result.join(' '));
    
}


function solve2(arr=[]) {
    
    let nums = arr.slice();
    nums.sort((a,b)=> a - b);
    console.log(nums);

    let result = [];

    // for (let i = 0; i < 2; i++) {
    //     result.push(nums.shift());
    // }


    result = nums.slice(0,2);

    console.log(result.join(' '));
    
    
}

solve2([30, 15, 50, 5]);
solve2([3, 0, 10, 4, 7, 3]);