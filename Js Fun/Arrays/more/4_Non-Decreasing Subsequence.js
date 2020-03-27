function nonDecreasingSeq(arr=[]) {
    
    //console.log(arr);
    let dubArr = arr.slice(0);
    //console.log(dubArr);
    
    let currMaxNum = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < dubArr.length; i++) {
        
        if (currMaxNum<=dubArr[i]) {
            currMaxNum=dubArr[i];
        }
        else{
            dubArr[i]=undefined;
        }
    }

    let newArr = dubArr.filter(x => x!==undefined);

    console.log(newArr);

}
nonDecreasingSeq([ 1, 2, 3, 4, 4,4,5]);
// nonDecreasingSeq([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
// nonDecreasingSeq([ 1, 2, 3, 4]);
// nonDecreasingSeq([ 20, 3, 2, 15, 6, 1]);