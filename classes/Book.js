// import the Media class:

const Media= require("./Media")


class Book extends Media {
   
     constructor(title, year, genre, author, numPages, rating){
        super(title, year, genre)
        this.author = author,
        this.numPages = numPages, 
        this.rating = rating
     }
     summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
     }

     static highestRating ([arr1,arr2,arr3]) {  
      let rating1 = arr1.rating
      let rating2 = arr2.rating
      let rating3 = arr3.rating

      if (rating1 > rating2){
         if (rating1 > rating3){
            return arr1
         }
      else return arr3
   }

     else if (rating1 < rating2) {
      if (rating2 > rating3){
      return arr2
   } else return arr3
     }
     
}
}
 


// don't change below
module.exports = Book;
