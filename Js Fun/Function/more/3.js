function getDistance(point1,point2) {
        
    let result = point1*point1+point2*point2;
    result = Math.sqrt(result);

    return result;
}

function pointValidation(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    
    let firstPointDistance = getDistance(x1,y1);
    let secondPointDistance = getDistance(x2,y2);
    let diffrenceDistance = Math.abs(firstPointDistance-secondPointDistance);

    console.log(firstPointDistance===Math.floor(firstPointDistance)
                ?`{${x1}, ${y1}} to {0, 0} is valid`
                :`{${x1}, ${y1}} to {0, 0} is invalid`);
    console.log(secondPointDistance===Math.floor(secondPointDistance)
                ?`{${x2}, ${y2}} to {0, 0} is valid`
                :`{${x2}, ${y2}} to {0, 0} is invalid`);
    console.log(diffrenceDistance===Math.floor(secondPointDistance)
                ?`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
                :`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    
}


pointValidation([3, 0, 0, 4]);
pointValidation([2, 1, 1, 1]);