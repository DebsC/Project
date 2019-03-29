/* class Concerts{ // the class is like an object creation factory
    constructor(concert, artist, genre, location, dateConcert) { // keys of a class
        this.concert = concert;
        this.artist = artist;
        this.genre = genre;
        this.location = location;
        this.date = dateConcert;
    }
} */

var Concerts = [{
    concert: "Sweetener European Tour",
    artist: "Ariana Grande",
    genre: "Pop",
    location:"Paris",
    date: new Date(2019, 5, 12),
}, {
    concert: "Injured Generation Tour",
    artist: "A$AP Rocky",
    genre: "Hip-Hop / Rap",
    location:"Stockholm",
    date: new Date(2019, 8, 17),
}, {
    concert: "#billylockettEUtour",
    artist: "Billy Lockett",
    genre: "Pop",
    location:"Copenhagen",
    date: new Date(2019, 2, 31),
}, {
    concert: "Reading Festival",
    artist: "Blossoms",
    genre: "Alternative",
    location:"Reading",
    date: new Date(2019, 10, 25),
}, {
    concert: "Sweetener European Tour",
    artist: "Calcutta",
    genre: "Alternative",
    location:"Milan",
    date: new Date(2019, 7, 3),
}]