function solve(textInput,key) {

    let text = textInput;
    let count = 0;
    let index = 0;

    key = ' '+key+' ';

    while (true) {
        
        if (text.indexOf(key,index)>=0) {
            index = text.indexOf(key,index)+key.length-2;
            count++;
        } else {
            break;
        }

    }

    console.log(count);

}


solve("This is is is  word and it also is a sentance", "is");
// solve("This is a word and it also is a sentance", "is");
