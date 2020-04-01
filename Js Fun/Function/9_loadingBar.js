function loadingBar(completed) {

    let result = '';
    for (let i = 1; i <= 10; i++) {

        if (i*10<=completed) {
            result+='%';
        } else{
            result+='.';
        }
    }


console.log(completed!==100
    ?`${completed}% [${result}]\nStill loading...`
    :`100% Complete!\n[${result}]`);   
console.log();

}


// loadingBar(30);
// loadingBar(50);
// loadingBar(100);
loadingBar(55);