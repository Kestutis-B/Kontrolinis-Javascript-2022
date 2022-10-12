/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie{
    constructor(title, director, budget){
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive(){
        if(this.budget > 1000000){
            return true;
        }else{
            return false;
        }
    }
}

const testMovie = new Movie('Geras filmas', 'Jonas Rezisierius', 1234560);
const testMovie2 = new Movie('Blogas filmas', 'Petras Rezisierius', 10500)

console.log(testMovie);
console.log(testMovie.wasExpensive());
console.log(testMovie2);
console.log(testMovie2.wasExpensive());