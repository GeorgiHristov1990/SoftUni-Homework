function lowerToUpper(character) {
    let inputChar = character;
    let charToCompare = character.toUpperCase();
    if (inputChar===charToCompare) {
        console.log("upper-case");
    }
    else{
        console.log("lower-case");
        
    }
}

lowerToUpper('L');
lowerToUpper('f');