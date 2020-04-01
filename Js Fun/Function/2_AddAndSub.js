function addAndSub(a, b, c) {
    let sum = (a, b) => a + b;
    //let subtract = (ab,c) => ab-c;

    let resultAB = sum(a, b);
    let subtr = (resultAB, c) => resultAB - c;
    return subtr(resultAB, c);

}

console.log(addAndSub(23, 6, 10));