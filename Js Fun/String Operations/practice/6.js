function pascalSplitter(string) {
    
    let results = [];
    let currWord = ''.concat(string[0]);
    
    for (let i = 1; i < string.length; i++) {
      
      if (string.charCodeAt(i) >= 96 && string.charCodeAt(i) <= 122) {
          currWord = currWord.concat(string[i]);
          if (i===string.length-1) {
              results.push(currWord);
          }
      } else {
        results.push(currWord)
        currWord = string[i];
        if (i===string.length-1) {
            results.push(currWord);
        }
      }
    }
    console.log(results.join(', '));
}

pascalSplitter('ThisIsSoAnnoyingToDoI')
pascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalSplitter('HoldTheDoor');
pascalSplitter('ThisIsSoAnnoyingToDo')