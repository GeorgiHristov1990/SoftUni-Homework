function getSum(start,end){
    let sum = 0;
    let string = "";
    for (let index = start; index <= end; index++) {
       sum+=index;
       string+=index+ " ";
    }
    console.log(string);
    
    console.log("Sum: " + sum);
    
}

getSum(55,60);