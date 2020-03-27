function calculator(firstOperand, sign, secondOperand) {

    let b = secondOperand;
    let result = 0;

    switch (sign) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case '%':
            result = firstOperand % secondOperand;
            break;
        default:
            break;
    }
    console.log(result.toFixed(2));

}


calculator(5, '+', 10);
calculator(25.5, '-', 3);
calculator(25.5, '%', 3);
calculator(25.5, '*', 3);