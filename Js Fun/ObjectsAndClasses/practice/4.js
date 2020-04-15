function movies(inputParams = []) {
    let inputArr = inputParams.slice();
    let movieList = [];

    for (let el of inputArr) {

        let firstParam = el.split(' ').shift();
        // console.log(el);


        if (firstParam === `addMovie`) {
            let movieName = el.split(' ').slice(1).join(' ');
            let movieObj = { "name": movieName };
            movieList.push(movieObj);

        } else if (el.split(' ').includes(`directedBy`)) {
            let index = el.split(' ').indexOf(`directedBy`)
            let movieName = el.split(' ').slice(0,index).join(' ');
            let director = el.split(' ').slice(index + 1).join(' ');
            // let directorObj = { "director": director };
            if (movieList.find(x => x.name === movieName) !== undefined) {
                //console.log(resultArr[1].name===1); 

                let indexOfMovie = movieList.findIndex(x => x.name === movieName);
                movieList[indexOfMovie]["director"] = director;

            } else {
                movieList.push({ "name": movieName, "director": director })
            }

        } else if (el.split(' ').includes(`onDate`)) {
            let index = el.split(' ').indexOf(`onDate`);
            let movieName = el.split(' ').slice(0, index).join(' ');
            let date = el.split(' ').slice(index+1);

            let movieIndex = movieList.findIndex(x => x.name === movieName);

            if (movieIndex !== -1) {
                movieList[movieIndex]["date"] = `${date}`;
            } else {
                movieList.push({name:`${movieName}`,date:`${date}`})
            }
        }
    }
    for (const el of movieList) {

        let [name,date,director] = [`name`,`date`,`director`];
        if (el.hasOwnProperty(name) && 
            el.hasOwnProperty(date) &&
            el.hasOwnProperty(director)  ) {
           // console.log(el);
        }

        // console.log(Object.keys(el));
        // console.log(Object.values(el));
        

        let count = Object.entries(el).length;
        if (count === 3 ){
            let text = JSON.stringify(el);
            console.log(text);
            
        }
    }
}


movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);