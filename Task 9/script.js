/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */


class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = Number(budget);
    }
    wasExpensive() {
        const { title, director, budget } = this;
        if(budget > 100000000) {
            console.log(true)
        }
        else {
            console.log(false)
        }
    } 
}

const movie1 = new Movie('The Dark Knight', 'Nolan', 1800000000);
const movie2 = new Movie('Titanic', 'Cameron', 1);
console.log(movie1.wasExpensive(), movie2.wasExpensive())


// function Movie(title, director, budget) {
//     this.title = title;
//     this.director = director;
//     this.budget = Number(budget);

// }
// const movie1 = new Movie('The Dark Knight', 'Nolan', 2008);

// Movie.prototype.wasExpensive() = function () {
//     const {budget} = this;
//     if (budget > 100000000) {
//         console.log(`Filmo ${title} biudzetas yra ${budget}`)
//     } else {
//         console.log(0)
//     }
// }




// class Movie {
//     constructor(title, director, budget) {
//         this.title = title;
//         this.director = director;
//         this.budget = Number(budget);
//     }
//     wasExpensive() {
//         const { title, director, budget } = this;
//         // return `"${title}" was directed by ${director} and released ${year}.`
//         if(budget > 100000000) {
//             console.log(`Sis filmas: ${title}, buvo sukurtas ${director} turejes biudzeta ${budget}`)
//         }
//         else{
//             console.log(false)
//         }
//     }
// }

// const movie1 = new Movie('The Dark Knight', 'Nolan', 1800000000);
// console.log(movie1)







// function Movie (title, director, budget) {
//     const movie = {};
//     movie.title = title;
//     movie.director = director;
//     movie.budget = Number(budget);
//     movie.wasExpensive = function () {
//         const {title, director, budget} = this;
//         // return `Movie name: ${title}, director of the movie is: ${director}, and the budget was ${budget} Eur`
//         return
//     }
//     return movie;
// }

// const movie1 = new Movie('Titanic', 'Cameron', 200000000);
// console.log(movie1);





