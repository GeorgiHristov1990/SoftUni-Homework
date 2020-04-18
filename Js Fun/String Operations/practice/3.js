function solve(string) {
    
    let dirs = string.split('\\')
   

    let lastDir = dirs[dirs.length-1];

    let lastIndex = lastDir.lastIndexOf('.');
    let fileName = lastDir.substring(0,lastIndex);
    let fileExtension = lastDir.substring(lastIndex+1,lastDir.length)


    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
       
}


solve("C:\\Internal\\training-internal\\Template.pptx")
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')