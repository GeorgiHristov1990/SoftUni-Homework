function solve(input = []) {


    function getEntries(arr) {
        let players = {};
        
        let splitInput = arr.forEach((player) => {
            let index = player.indexOf(":");
            let name = player.slice(0,index);
            let cards = player.slice(index+2).split(', ');

            players[name]=new Set(cards);
        });

        return players;
    }

   

    let result = getEntries(input);

 console.log(result);
 
    

}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);