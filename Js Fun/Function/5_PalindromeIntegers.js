function isPalindrome(numbers = []) {

    for (const num of numbers) {

        let isPalindrome = true;
        let numLength = num.toString().length;

        for (let i = 0; i < numLength / 2; i++) {
            let numStr= num.toString();
            if (numStr[i] !== numStr[numLength - 1 - i]) {
                isPalindrome = false;
                break;
            }
        }
        console.log(isPalindrome);
    }
}

isPalindrome([123,323,421,121]);