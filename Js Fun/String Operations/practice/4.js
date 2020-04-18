function solve(word,text) {
    

    let textToLower = text.toLowerCase();
    let wordToLower = word.toLowerCase();

    if (textToLower.includes(wordToLower)) {
        console.log(`${word.toLowerCase()}`);
    } else {
        console.log(`${word.toLowerCase()} not found!`);
    }

}

solve('javascript',
'JavaScript is the best programming language');
solve('python',
'JavaScript is the best programming language')

