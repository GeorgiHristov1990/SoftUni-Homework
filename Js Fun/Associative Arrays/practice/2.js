function solve(string) {
    
    let words = string.toLowerCase().split(' ');

    let wordContainer = {};

    words.forEach(word => { 
        if (!wordContainer.hasOwnProperty(word)) {
            wordContainer[word]=0;
        }
        wordContainer[word]+=1;
    });

    //console.log(wordContainer);
    let result = [];

    Object.entries(wordContainer).forEach( el => { 
        if (el[1]%2!==0) {
            result.push(el[0])
        }
    });

    console.log(result.join(' '));
    
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')