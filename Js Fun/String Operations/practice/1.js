function solve(words,textInput) {
    
    let text = textInput;
    let wordsArr = words.split(', ');
    


    while (wordsArr.length>0) {
        
        let currWord = wordsArr.shift();
        let count = 0;

        for (let i = 0; i < text.length; i++) {
            
            if (text[i]==='*') {
                
                count++;

                if (count===currWord.length){
                    text = text.replace('*'.repeat(count),currWord);
                    break; 
                }
            } else {
                count = 0;
            }
        }
    }
    console.log(text);
    
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
);
solve('great',
'softuni is ***** place for learning new programming languages');