function name(pplQuantity, pplType, dayOfWeek) {
    let result = 0;
    switch (dayOfWeek) {
        case "Friday":
            result = pricesFriday(pplType, pplQuantity);
            break;
        case "Saturday":
            result = pricesSaturday(pplType, pplQuantity);
            break;
        case "Sunday":
            result = pricesSunday(pplType, pplQuantity)
            break;
        default:
            break;
    }
    console.log(`Total price: ${result.toFixed(2)}`);

}

//name(30, "Students", "Sunday");
name(40,"Regular","Saturday");

function pricesFriday(people, quantity) {
    let result = 0;
    if (people === "Students") {
        if (quantity >= 30) {
            result = (8.45 * quantity) +
                (8.45 * quantity * 15 / 100);
        }
        else {
            result = 8.45 * quantity;
        }
    }
    else if (people === "Business") {
        if (quantity >= 100) {
            result = (quantity - 10) * 10.9;
        }
        else {
            result = 10.90 * quantity;
        }
    }
    else if (people === "Regular") {
        if (quantity >= 10 && quantity <= 20) {
            result = (15 * quantity) +
                (15 * quantity * 5 / 100);
        }
        else {
            result = 15 * quantity;
        }
    }
    return result;
}
function pricesSaturday(people, quantity) {
    let result = 0;
    if (people === "Students") {
        if (quantity >= 30) {
            result = (9.8 * quantity) +
                (9.8 * quantity * 15 / 100);
        }
        else {
            result = 9.8 * quantity;
        }
    }
    else if (people === "Business") {
        if (quantity >= 100) {
            result = (quantity - 10) * 15.6;
        }
        else {
            result = 15.60 * quantity;
        }
    }
    else if (people === "Regular") {
        if (quantity >= 10 && quantity <= 20) {
            result = (20 * quantity) +
                (20 * quantity * 5 / 100);
        }
        else {
            result = 20 * quantity;
        }
    }
    return result;
}
function pricesSunday(people, quantity) {
    let result = 0;
    if (people === "Students") {

        if (quantity >= 30) {
            result = (10.46 * quantity) -
                (10.46 * quantity * 15 / 100);
        }
        else {
            result = 10.46 * quantity;
        }
    }
    else if (people === "Business") {
        if (quantity >= 100) {
            result = (quantity - 10) * 20
        }
        else {
            result = 20 * quantity;
        }
    }
    else if (people === "Regular") {
        if (quantity >= 10 && quantity <= 20) {
            result = (22.5 * quantity) +
                (22.5 * quantity * 5 / 100);
        }
        else {
            result = 22.5 * quantity;
        }
    }
    return result;
}

