function isLengthValid(passInput) {
    return passInput >= 6 && passInput <= 10
}

function twoDigistOrMore(input) {
    let digitCount = 0;
    for (let i = 0; i < input.length; i++) {

        let charCheck = input[i];
        if (Number(charCheck)) {
            digitCount++;
        }
    }
    return digitCount >= 2;
}

function isInRange(ch, start, end) {
    return ch.charCodeAt() >= start.charCodeAt() && ch.charCodeAt() <= end.charCodeAt()
}

function onlyLettersAndDigits(input) {

    let isValid = true;

    for (const ch of input) {
        if (!(isInRange(ch, `A`, `Z`) || isInRange(ch, `a`, `z`) || isInRange(ch, `0`, `9`))) {

            isValid = false;
        }

    }
    return isValid;
}

function twoDigitsOrMore2(input) {
    let digits = 0;
    for (const ch of input) {
        if (isInRange(ch, `0`, `9`))
            digits++;
    }
    return digits >= 2 ? true : false;
}

function isPassValid(pass = String) {

    let isPassLengthValid = isLengthValid(pass.length);
    let hasOnlyDigitsAndLetters = onlyLettersAndDigits(pass);
    let containsTwoOrMoreDigits = twoDigitsOrMore2(pass);



    if (!isPassLengthValid) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (!hasOnlyDigitsAndLetters) {
        console.log(`Password must consist only of letters and digits`);

    }
    if (!containsTwoOrMoreDigits) {
        console.log(`Password must have at least 2 digits`);

    }

    if (isLengthValid && containsTwoOrMoreDigits && hasOnlyDigitsAndLetters) {
        console.log(`Password is valid`);

    }
}

isPassValid('logIn');
console.log();
isPassValid('12345678a');
console.log();
isPassValid('MyPass123');
console.log();
isPassValid('Pa$s$s');