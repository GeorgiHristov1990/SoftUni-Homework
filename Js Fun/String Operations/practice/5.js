function replace(string) {
    
    let text = '';
    
  for (let i = 0; i < string.length-1; i++) {
      
      if (string[i] !== string[i+1]) {
           text = text.concat(string[i])
      }
  }
  text = text.concat(string[string.length-1]);
  console.log(text);
  
}


replace('aaaaabbbbbcdddeeeedssaa');