// function isYearLeap(year) {
//     let isLeap = false;
//     if (year % 4 == 0) {
//         if (year % 400 == 0 && year % 100 == 0) {
//             isLeap = true;
//         }
//         else if (year < 400) {
//             isLeap = true;
//         }
//         else {
//             isLeap = false;
//         }
//     }

//     if (isLeap) {
//         console.log("yes");

//     }
//     else {
//         console.log("no");
//     }
// }


function isYearLeap(year) {
    let isLeap = false;

    if (year % 4 == 0) {
        isLeap = true;

        if (year % 100 == 0) {
            if (year % 400 == 0) {
            }
            else {
                isLeap = false;
            }
        }
    }


    if (isLeap) {
        console.log("yes");

    }
    else {

        console.log("no");
    }

}

isYearLeap(1952);
isYearLeap(2016);
isYearLeap(40);
isYearLeap(190);
isYearLeap(2500);
isYearLeap(2400);
isYearLeap(2200);
isYearLeap(2100);
isYearLeap(2080);
isYearLeap(2020);

