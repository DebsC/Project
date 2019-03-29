class Concerts{ // the class is like an object creation factory
    constructor(title, artist, genre, location, dateConcert, price) { // keys of a class
        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.location = location;
        this.date = dateConcert;
        this.price = price
    }
}

var concerts = []
concerts.push = new Concert(title, artist, genre, location, dateConcert, price)

new Concert("Ariana Grande", "Pop", "Paris", new Date(2019, 5, 12), "50")
new Concert("A$AP Rocky", "Hip-Hop / Rap", "Stockholm", new Date(2019, 8, 17), "48")
new Concert("Billy Lockett", "Pop", "Copenhagen", new Date(2019, 2, 31),"32")
new Concert("Blossoms", "Alternative", "Reading", new Date(2019, 10, 25), "52")
new Concert("Calcutta", "Alternative", "Milan", new Date(2019, 7, 3), "18")
new Concert("Dua Lipa", "Pop", "Berlin", new Date(2019, 6, 22), "47")
new Concert("Kasabian", "Rock", "Manchester", new Date(2019, 11, 2), "27")
new Concert("")