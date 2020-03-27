function getTriangleArea(sideA,sideB,sideC){

    let a = sideA;
    let b = sideB;
    let c = sideC;
    let s = (sideA+sideB+sideC)/2; //semi-perimeter

    area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

    console.log(area);
    
}

getTriangleArea(2,3.5,4);