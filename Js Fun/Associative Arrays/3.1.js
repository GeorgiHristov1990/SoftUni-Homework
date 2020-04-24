function solve(input) {

    let students = new Map();

    for (const el of input) {
        let tokens = el.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(x => Number(x));

        if (!students.has(name)) {
            students.set(name, Array.from(grades));
        } else {
            let concatArr = students.get(name).concat(grades)
            students.set(name, concatArr)
        }
    }

    function avarage(a, b) {
        let aSum = 0;
        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }
        let bSum = 0;
        for (let i = 0; i < b[1].length; i++) {
            bSum += b[1][i];
        }

        let aAvarage = aSum / a[1].length;
        let bAvarage = bSum / b[1].length;

        return aAvarage - bAvarage
    }

    let sorted = Array.from(students).sort((a, b) => avarage(a, b));




    for (const [student, grades] of sorted) {


        console.log(`${student}: ${grades.join(', ')}`);

    }
}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);