function train(arr = []) {

    let wagons = arr[0]
        .split(' ')
        .map(Number);

    let maxCapacity = Number(arr[1]);



   
    console.log(typeof (maxCapacity));

    for (let i = 2; i < arr.length; i++) {

        
        let token = arr[i].split(' ');
        
        if (token[0] === "Add") {
            wagons.push((Number)(token[1]))
            //console.log(typeof (wagons[wagons.length-1]));
        } else  {
            for (let i = 0; i < wagons.length; i++) {
                
                let passengersToAdd = Number(token[0]);
                //console.log(typeof(wagons[i]));
                
                if ((wagons[i]+passengersToAdd)<=maxCapacity) {
                    wagons[i]+=passengersToAdd;
                    break;
                }
            }
        }
    }
           console.log(wagons.join(' '));
                
    

}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
