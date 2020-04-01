function getSmallestNum(num, num2, num3) {
    //return Math.min(num,Math.min(num2,num3));
    let smallest = 0;
    if (num < num2) {
        smallest = num;
    } else {
        smallest = num2;
    }
    if(smallest<num3){
        return smallest;
    }
    return num3;

}
//console.log(getSmallestNum(1,2,3));
console.log(getSmallestNum(0, -129, 1000));
