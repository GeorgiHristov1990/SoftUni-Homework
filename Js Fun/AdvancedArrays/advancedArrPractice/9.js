function gladiaotrInventory(arr = []) {

    function doesExist(item = string, arr = []) {
        if (arr.includes(item)) {
            return true;
        }
        return false;
    }


    let inventory = arr[0].split(' ');

    for (let i = 1; i < arr.length; i++) {

        let commandTokens = arr[i].split(' ');

        if (commandTokens[0] === `Buy`) {
            if (!doesExist(commandTokens[1], inventory)) {
                inventory.push(commandTokens[1]);
            }
        }
        else if (commandTokens[0] === `Trash`) {
            if (doesExist(commandTokens[1], inventory)) {
                let index = inventory.indexOf(commandTokens[1]);
                inventory.splice(index, 1);
            }
        }
        else if (commandTokens[0] === `Repair`) {
            if (doesExist(commandTokens[1], inventory)) {
                let index = inventory.indexOf(commandTokens[1]);
                let toRepair = inventory.splice(index, 1);
                inventory.push(toRepair.toString());
            }
        }
        else if (commandTokens[0] === `Upgrade`) {
            let upgradeParams = commandTokens[1].split('-');
            let item = upgradeParams[0];
            let upgrade = upgradeParams[1];
            if (doesExist(item, inventory)) {
                let index = inventory.indexOf(item);
                let stringUpgrade = inventory[index] + `:${upgrade}`;
                inventory.splice(index+1,0,stringUpgrade)
            }
        }
    }

    console.log(inventory.join(' '));
    
}


gladiaotrInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);