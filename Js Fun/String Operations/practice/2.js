function hashTag(string){
    let text = string;
    let index = 0;
    let results = [];
    
    for (let i = index; i < text.length; i++) {
        

        index !==0 
        ?   index = index=text.indexOf('#',index+1)
        :   index = index=text.indexOf('#',index);

        let wordEnd = text.indexOf(' ',index);
        let currWord = '';
        let isValid = true;

        if (wordEnd === -1) {
            results.push(text.substring(index+1,text.length))
            break;
        }
        for (let i2 = index; i2 < wordEnd-1; i2++) {


            if (wordEnd-index<2) {
                break;
            }
            
            let chCode = text.toUpperCase().charCodeAt(i2+1);
            
            if (chCode >= 65 && chCode <= 90) {
                currWord = currWord.concat(text[i2+1]);
            }
            else{
                isValid=false;
            }
        }
        if (isValid && currWord.length>1) {
            results.push(currWord);
        }
    }
console.log(results.join("\n"));
}


hashTag("Nowadays everyone uses # to tag a #special word in #socialMedia");