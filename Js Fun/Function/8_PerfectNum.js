function isPerfectNum(num){

    let sum = 0;
    for (let i = 1; i <= num; i++) {
        
        if (num%i==0) {
            sum+=i;
        }
    }

    console.log(sum/2===num
        ?`We have a perfect number!`
        :`It's not so perfect.`);
    
}


isPerfectNum(6);
isPerfectNum(28);
isPerfectNum(1236498);