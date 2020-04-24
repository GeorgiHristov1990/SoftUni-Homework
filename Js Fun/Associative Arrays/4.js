function solve(text=[]) {
    let wordKeeper = new Map();

    for (const word of text) {

        if (!wordKeeper.has(word)) {
            wordKeeper.set(word,1);
        } else {
            let currVal = wordKeeper.get(word);
            wordKeeper.set(word,++currVal);
        }

    }


    let sortedMap = Array.from(wordKeeper).sort((a,b) => b[1]-a[1]);

    for (const [word,count] of sortedMap) {
        console.log(`${word} -> ${count} times`);
        
    };
    
    
}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]
)