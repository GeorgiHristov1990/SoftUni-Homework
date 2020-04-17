function removeSolve(word,text) {
    
    let result = text;

    while (result.includes(word)) {
        result.replace(word,"");
        
    }

    console.log(result);
}


removeSolve("ice","kicegiciceeb")