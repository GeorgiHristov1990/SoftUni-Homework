function checkLogin(input) {


    let validName = input.shift();
    let nameReversed = reverseStr(validName);

    for (let i = 0; i < input.length; i++) {
        if (input[i] === nameReversed) {
            getLogInfo(validName);
            break;
        }
        else if (input[i] !== nameReversed && i > 2) {
            console.log("User " + validName + " blocked!");
        }
        else {
            console.log("Incorrect password. Try again.");
        }
    }
}

function getLogInfo(name) {
    console.log("User " + name + " logged in.");
}
function reverseStr(str) {

    let splitArr = str.split("");
    let reverseArr = splitArr.reverse();
    let joinedArr = reverseArr.join("");
    return joinedArr;
}

checkLogin(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
checkLogin(['momo', 'omom']);
checkLogin(['Acer', 'login', 'go', 'let me in', 'recA']);
