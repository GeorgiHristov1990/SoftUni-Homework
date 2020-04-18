function cutAndReverse(string) {
    
    let firstHalf = string.substring(0,string.length/2);
    let secondHalf = string.substring(string.length/2,string.length)


    firstHalf = firstHalf.split('').reverse().join('');
    secondHalf = secondHalf.split('').reverse().join('');

    console.log(firstHalf);
    console.log(secondHalf);
    
}



cutAndReverse(`tluciffiDsIsihTgnizamAoSsIsihT`);
cutAndReverse(`sihToDtnaCuoYteBIboJsihTtAdooGoSmI`);
// cutAndReverse();