function getChars(charOne = '', charTwo = '') {

    let startCharCode = charOne.charCodeAt();
    let endCharCode = charTwo.charCodeAt();

    if (startCharCode > endCharCode) {
        let temp = startCharCode;
        startCharCode = endCharCode;
        endCharCode = temp;
    }

    let resultArr = [];

    for (let i = 1; i < endCharCode - startCharCode; i++) {
        resultArr.push(String.fromCharCode(startCharCode + i))
    }

    console.log(resultArr.join(' '));
}

// getChars('a', 'a');
// getChars('a', 'd');
// console.log();
//getChars('#', ':');
console.log();
getChars('C', '#');

