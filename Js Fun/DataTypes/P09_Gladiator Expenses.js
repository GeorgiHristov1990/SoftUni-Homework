function gladiatorExpenses(lostFightsCount,helmPrice,swordPrice,shieldPrice,armorPrice){
    
let totalExpenses=0;

let brokenHelmet = Math.floor(lostFightsCount/2); //toFloor?
let brokenSword = Math.floor(lostFightsCount/3)   //toFloor?
let brokenShield = Math.floor(lostFightsCount/6);
let brokenArmor = Math.floor(brokenShield/2);   //toFloor?

let helmCost = helmPrice*brokenHelmet;
let shieldCost = brokenShield*shieldPrice;
let swordCost = brokenSword*swordPrice;
let armorCost = armorPrice*brokenArmor;


totalExpenses = helmCost+shieldCost+swordCost+armorCost;
console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);

}

gladiatorExpenses(7,2,3,4,5);
gladiatorExpenses(23,12.5,21.5,40,200);