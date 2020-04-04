function solve(arr=[]) {
    
    let k = arr[0];

    let firstMembers = arr.slice(1,k+1);
    let lastMembers = arr.slice(arr.length-k);
    
    console.log(firstMembers.join(' '));
    console.log(lastMembers.join(' '));
    
    
}

solve([3,6, 7, 8, 9]);
solve([2, 7, 8, 9]);