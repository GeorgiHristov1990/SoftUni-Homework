function factorialDivision(num1, num2) {

    function getFactorial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    let first = getFactorial(num1);
    let second = getFactorial(num2);
    let result = first / second;

    console.log(result.toFixed(2));
}


factorialDivision(5,2);
factorialDivision(6,2);