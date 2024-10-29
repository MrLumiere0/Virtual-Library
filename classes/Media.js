// create your Media class:
class Media {

    constructor(title, year, genre ) {
        
        this.title = title,
        this.year = year,
        this.genre = genre
    }
    
    summary(){
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`
    }
    static totalMedia() {
        
    }
}
module.exports = Media