// import the Media class:
const Media= require("./Media")

// create your Movie class:
class Movie extends Media {
    constructor(title, year, genre, director, duration, rating,) {
        super(title, year, genre)
        this.director = director,
        this.duration = duration,
        this.rating = rating
  }

    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
     }

    static longestMovie ([arr1,arr2]) {  
        let rating1 = arr1.rating
        let ratinf2 = arr2.rating

        if (rating1 > ratinf2){
            return arr1
        }

        else return arr2
}
}


// don't change below
module.exports = Movie;