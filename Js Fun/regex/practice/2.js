function solve(input) {

    let players = input.slice(0, 1)[0].split(', ');
    //let players = input[0].split(', ');
    let commands = input.slice(1);


    let playersObj = {}

    for (const player of players) {
        playersObj[player] = 0;
    }

    while (true) {

        let currLine = commands.shift();
        if (currLine=="end of race") {
            break;
        }
        let letterRe = /[A-Za-z]/g;
        let digitRe = /\d/g;

        let player = '';
        let distance = 0;

        while ((isValid = letterRe.exec(currLine)) !== null) {
            player = player.concat(isValid);
        }

        while ((isValid = digitRe.exec(currLine)) !== null) {

            distance+=Number(isValid)
        }

        if (playersObj.hasOwnProperty(player)) {

            playersObj[player] += distance;
        }
    }

    let standings = [];
    for (const player in playersObj) {
        standings.push([player,playersObj[player]]);
        }
    
        standings.sort((key,value) => value[1]-key[1]);

        console.log(`1st place: ${standings[0][0]}`);
        console.log(`2nd place: ${standings[1][0]}`);
        console.log(`3rd place: ${standings[2][0]}`);
        
        
        let test = Object.entries(playersObj);
        test.sort ((a,b) => a[1] - b[1]);
}

solve(
    ["George, Peter, Bill, Tom",
        "G4e@55or % 6g6!68e!!@",
        "R1 @!3a$y4456@",
        "B5 @i @#123ll",
        "G@e54o$r6ge#",
        "7P % et ^#e5346r",
        "T$o553m & 6",
        "end of race"
    ]);