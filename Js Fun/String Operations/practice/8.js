function hardWords(arr = []) {

    let text = arr[0];

    let arrWords = arr[1];


    let words = text.split(' ');

    for (let i = 0; i < words.length; i++) {

        if (words[i].startsWith('_')) {

            let wordChar = words[i][words[i].length - 1];
            let currWord = words[i];

            if (wordChar === ',' || wordChar === '.') {

                let symbol = words[i][words[i].length-1];

                for (const word of arrWords) {
                    if (word.length === currWord.length - 1) {
                        currWord = word;
                        break;
                    }
                }

                //words[i] = words[i].replace('_'.repeat(words[i].length), currWord);
                words[i] = currWord.concat(symbol);

            } else {

                for (const word of arrWords) {
                    if (word.length === currWord.length) {
                        currWord = word;
                        break;
                    }
                }

                words[i] = currWord;
            }

        }
    }

    // console.log(words);
    console.log(words.join(' '));

    // console.log(arrWords);


}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])

