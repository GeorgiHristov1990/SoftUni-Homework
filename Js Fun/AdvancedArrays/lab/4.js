function solve(...num) {

    let n = num[0];
    let k = num[1];

    
    let seq = [1];

    for (let current = 1; current < n; current++) {
        
        let start = Math.max(0,current-k);
        let end = current - 1;

        let sum=0;
        for (let i2 = start; i2 <= end; i2++) {
            sum+=seq[i2];
        }
        seq[current]=sum;
    }
    console.log(seq);

    
}


solve(6,3);
solve(8,2);