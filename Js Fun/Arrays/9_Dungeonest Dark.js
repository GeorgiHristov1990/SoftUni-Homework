function dungeon(inputStr=[]) {
    let hp = 100;
    let coins = 0;
    let isAlive = true;

    let rooms = inputStr[0].split('|');
    




    for (let i = 0; i < rooms.length; i++) {

        let commands = rooms[i].split(' ');
        let firstCommand = commands[0];
        let secondCommand = Number(commands[1]);

        if (firstCommand !== `chest` && firstCommand !== `potion`) {

            hp -= secondCommand;
            console.log(hp > 0
                ? `You slayed ${firstCommand}.`
                : `You died! Killed by ${firstCommand}`);

        } else if (firstCommand === `chest`) {
            coins += secondCommand;
            console.log(`You found ${secondCommand} coins.`);
            
        } else if (firstCommand === `potion`) {
            if (hp+secondCommand>100) {
                let hpDifference = 100-hp;
                console.log(`You healed for ${hpDifference} hp.`);
            }else{
                console.log(`You healed for ${secondCommand} hp.`)
            }
            hp += secondCommand;
            console.log(hp>100
                ?`Current health: ${hp=100} hp.`
                :`Current health: ${hp} hp.`);
        }
        if (hp<=0) {
            console.log(`Best room: ${i+1}`);
            isAlive=false;
            break;
        }
        
    }
    if (isAlive) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${hp}`);
    }

}
    dungeon([`rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000`]);
    dungeon("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
    console.log();
    
    dungeon("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");