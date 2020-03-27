function sumDigits(n){
    let sum = 0;
    let number = n;
    while (number>0) {
        
        sum+=number%10;
        number = Math.trunc(number/10);
    }
    console.log(`${sum}`);
}

sumDigits(32);
sumDigits(97561);
sumDigits(543);



