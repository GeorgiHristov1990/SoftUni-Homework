function printChessboard(num) {

    console.log(`<div class="chessboard">`);

    let blackStr = `    <span class="black"></span>`;
    let whiteStr = `    <span class="white"></span>`;
    let alternatePos = true;

    for (let i = 0; i < num; i++) {
        console.log(`  <div>`);

        for (let y = 0; y < num; y++) {
            let isEvenBlack = i % 2 == 0;
            if (isEvenBlack) {
                if (isEvenBlack && y % 2 == 0) {
                    console.log(blackStr);
                }
                else {
                    console.log(whiteStr);

                }
            }
            else{
                if (y % 2 !== 0) {
                    console.log(blackStr);
                }
                else {
                    console.log(whiteStr);

                }
            }
            

        }
        console.log(`  </div>`);
    }

    console.log(`</div>`);

}

printChessboard(3);
printChessboard(10);