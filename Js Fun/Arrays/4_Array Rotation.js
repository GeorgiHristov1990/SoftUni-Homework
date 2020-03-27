function arrRotation(arrayInput, rotationsInput) {

    let rotations = rotationsInput;
    let array = arrayInput.slice();
    let arrayCopy = array.copy

    while (rotations !== 0) {
        let firstIndexValue = array[0];
        for (let i = 0; i < array.length; i++) {
            if (i == array.length - 1) {
                array[i] = firstIndexValue;
                break;
            }

            array[i] = array[i + 1];

        }
        rotations--;
    }

    console.log(array.join(' '));


}


arrRotation([51, 47, 32, 61, 21], 2);
arrRotation([32, 21, 61, 1], 4);
arrRotation([2, 4, 15, 31], 5);