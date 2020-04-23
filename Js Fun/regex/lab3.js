function solve(input) {
 
    let pattern = /\b(?<day>\d{2})(.)(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let validDates = [];
    
    while ((validDate = pattern.exec(input)) !==null) {
        // validDates.push(validDate[0]);
        let days = validDate.groups['day'];
        let months = validDate.groups['month'];
        let years = validDate.groups['year'];
        console.log(`Day: ${days}, Months: ${months}, Year: ${years}`);
        
    }

    // console.log(validDates.join(', '));
    

}


solve("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")