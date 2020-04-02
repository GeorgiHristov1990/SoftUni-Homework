//not solved

function name(length) {


    //let strands = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G']
    let strands = ['AT', 'CG', 'TT', 'AG', 'GG']
    let resetStrand = 0;

    let direction = true;

    for (let i = 0, i2 = 2, i3 = 0, i4 = 1; i < length; i++, i2--, i3++) {


        // if ((i + 1) % 3 === 0) {
        //     direction = false;
        // }

        let strand = strands[resetStrand].split('');

        let leftStrand = strand[0];
        let rightStrand = strand[1];

        let middle = `-`;
        let sides = `*`;

        if (direction) {
            if (i % 2 === 0) {
                console.log(`${sides.repeat(i2)}${leftStrand}${middle.repeat(i3)}${middle.repeat(i3)}${rightStrand}${sides.repeat(i2)}`);
            } else if (i % 2 !== 0) {
                console.log(`${sides.repeat(i2)}${leftStrand}${middle.repeat(i3)}${middle.repeat(i3)}${rightStrand}${sides.repeat(i2)}`);
            }
            if (i2 === 0) {
                i2 = 3;
            }
            if (i3 === 2) {
                i3 = -1;
            }


        } else {
            if (i % 2 === 0) {
                console.log(`${sides.repeat(i3+1)}${leftStrand}${middle.repeat(i2-1)}${middle.repeat(i2-1)}${rightStrand}${sides.repeat(i3+1)}`);
            } else if (i % 2 !== 0) {
                console.log(`${sides.repeat(i3+1)}${leftStrand}${middle.repeat(i2-1)}${middle.repeat(i2-1)}${rightStrand}${sides.repeat(i3+1)}`);
            }
            
            if (i3+1===2) {
                direction=true;
            }

        }
        

        if ((i + 1) % 3 === 0) {
            direction = false;
            i3--;
            i2++;
        }

        resetStrand++;

        if (resetStrand === 5) {
            resetStrand = 0;
        }

    }
}

name(9);
//name(8);