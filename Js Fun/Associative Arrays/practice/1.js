function solve(input) {

    let wantedWords = input.shift().split(' ');

    let mapList = new Map();
    
    wantedWords.forEach((word) => {mapList.set(word,0)
        
    });

    for (const word of input) {
        if (wantedWords.includes(word)) {
            if (mapList.has(word)) {
                let currCount = mapList.get(word);
                mapList.set(word, ++currCount)
            } else {
                mapList.set(word, 1)
            }
        }
    }
    
    let sorted = Array.from(mapList).sort((a,b) => b[1]-a[1]);

    mapList = new Map(sorted);

    mapList.forEach((val,key) => {console.log(`${key} - ${val}`);});
    

    
}


solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);