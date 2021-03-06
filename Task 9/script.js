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
        const {budget} = this;
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

