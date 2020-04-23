function solve(input) {

    let re = /([\^\$\@\#\%])\1{5,9}/;
    let tickets = input.split(/,?\s+/);
    tickets = tickets.filter(el => el !== "");

    for (const ticket of tickets) {
        if (ticket.length !== 20) {
            console.log("invalid ticket");
        } else {
            let leftStr = ticket.slice(0,ticket.length/2)
            let rightStr = ticket.slice(ticket.length/2,ticket.lenght)
            
            let leftMatch = leftStr.match(re)[0];
            let rightMatch = rightStr.match(re)[0];
            if (leftMatch === rightMatch) {
                if (leftMatch.length === 10) {
                    console.log(`ticket "${ticket}" - 10${leftMatch[0]}\nJackpot!`);
                } else {
                    console.log(`ticket "${ticket}" - ${leftMatch.length}${leftMatch[0]}`);
                }
            } else {
                console.log(`ticket "${ticket}" - no match`);
                
            }            
        }
    }
}

solve("asd$$$$$$$ooo$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey");

solve("$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey");