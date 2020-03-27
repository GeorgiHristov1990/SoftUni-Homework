function PrintNumbers(number, precision) {
    let result = parseFloat(number);
    if (precision <= 15) {
        result = result.toFixed(precision);
    }
    else {
        result = result.toFixed(15);
    }
    let parseToStr = result.toString();
    let finalResult = parseFloat(parseToStr);
    console.log(finalResult);
    
}
