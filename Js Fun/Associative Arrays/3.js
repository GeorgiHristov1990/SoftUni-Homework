function solve(input) {

    let students = {};

    for (const el of input) {
        let tokens = el.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(x => Number(x));

        if (!students.hasOwnProperty(name)) {
            students[name] = grades;
        } else {
            let concatArr = students[name].concat(grades)
            students[name] = concatArr;
        }
    }

    function avarage(a,b){
        let aSum = 0;
        for(let i=0;i<a[1].length;i++){
            aSum+=a[1][i];
        }
        let bSum = 0;
        for (let i = 0; i < b[1].length; i++) {
            bSum+=b[1][i];
        }

        let aAvarage = aSum/a[1].length;
        let bAvarage = bSum/b[1].length;

        return aAvarage-bAvarage
    }

    
    
    let test = Object.entries(students);
    let sortTest = test.sort((a,b) => avarage(a,b));

    let test2 = new Map(Object.entries(students));
    let sorted = Array.from(test2).sort((a,b) => avarage(a,b));

    let resultToMap = new Map(Object.entries(sorted));


    for (const [student,grades] of sortTest) {
        console.log(`${student}: ${grades}`);
        
    }
}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);