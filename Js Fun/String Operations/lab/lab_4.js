function solve(textInput,word) {
    

    let text = textInput;
    let countOfstars = word.length;
    let symbol = '*';
    let cenz = symbol.repeat(countOfstars)

    

    while (text.indexOf(word) >= 0) {
        
        text = text.replace(word,cenz)        

    }

    console.log(text);
    
}

solve("A small sentance with some words","small")