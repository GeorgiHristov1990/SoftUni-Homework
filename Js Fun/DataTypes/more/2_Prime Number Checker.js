function isPrime(num) {

    let isPrime = true;

    for (let i = 2; i < num; i++) {

        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime);

}

isPrime(7);
isPrime(8);
isPrime(81);