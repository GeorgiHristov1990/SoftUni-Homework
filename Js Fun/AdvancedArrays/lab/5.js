function solve(arr = []) {

    let copyArr = [];

    copyArr = arr.filter((x, i) => i % 2 !== 0);

    console.log(copyArr);


    copyArr = copyArr.map(x => x * 2);

    copyArr.reverse();

    console.log(copyArr.join(' '));

}


function solve2(arr = []) {

    let arrCopy = [];

    for (let i = 0; i < arr.length; i++) {
        
        if (i%2!==0) {
            arrCopy.unshift(arr[i]*2)
        }
    }
    console.log(arrCopy.join(' '));
    
}

solve2([10, 15, 20, 25]);
solve2([3, 0, 10, 4, 7, 3]);