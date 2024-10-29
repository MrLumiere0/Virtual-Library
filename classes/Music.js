// import the Media class:
const Media= require("./Media")

// create your Music class:
class Music extends Media {
    constructor(title, year, genre, artist, length,) {
        super(title, year, genre)
        this.artist = artist, 
        this.length = length
    }

    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
     }

     static shortestAlbum([arr1,arr2]) {  
        let time1 = arr1.length
        let time2 = arr2.length

        if (time1 < time2){
            return arr1
        }

        else return arr2
     }
}
// don't change below
module.exports = Music
