class Concerts{ // the class is like an object creation factory
    constructor(concert, artist, genre, location, dateConcert) { // keys of a class
        this.concert = concert;
        this.artist = artist;
        this.genre = genre;
        this.location = location;
        this.date = dateConcert;
    }
}

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
    date:"17 October 2019",
}, {
    concert: "#billylockettEUtour",
    artist: "Billy Lockett",
    genre: "Pop",
    location:"Copenhagen",
    date:"31 March 2019",
}, {
    concert: "Reading Festival",
    artist: "Blossoms",
    genre: "Alternative",
    location:"Reading",
    date:"25 November 2019",
}, {
    concert: "Sweetener European Tour",
    artist: "Calcutta",
    genre: "Alternative",
    location:"Milan",
    date:"03 August 2019",
}]