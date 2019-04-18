class Concert{ // the class is like an object creation factory
    constructor(artist, genre, location, dateConcert, price, img, id) { // keys of a class
        this.artist = artist;
        this.genre = genre;
        this.location = location;
        this.date = dateConcert;
        this.price = price;
        this.img = img;
        this.id = id;
        // add the concert id in order to allow payments for later use
    }
    // adding a method to the constructor
    // this function (which could be called in any way) allows to show the "table" of concerts and we put the html commands on the js itself
    renderConcert() {
        return `<tr style="background:white"><td><img src="${this.img}" height="200px" width="280px"></td><td><h1>${this.artist}</h1><p>Location:${this.location}</p><p>Price:${this.price}</p></td><td><input type="number" class="quantity" min="1" max="6" value="1"></td><td><button data-id="${this.id}" class="add-wl-btn">Add to Wishlist</button></td></tr>`
    }
}


// add the url source for the image for each concert event so that each one show a different picture
var concerts = [new Concert("Ariana Grande", "Pop", "Paris", new Date(2019, 5, 12), "50", "./Images/Ariana_Grande.jpeg", "ag123"),
                new Concert("A$AP Rocky", "Hip-Hop / Rap", "Stockholm", new Date(2019, 8, 17), "48", "./Images/asap-rocky.jpg", "ar123"),
                new Concert("Billy Lockett", "Pop", "Copenhagen", new Date(2019, 2, 31),"32", "./Images/billy-lockett.jpg", "bl123"),
                new Concert("Blossoms", "Alternative", "Reading", new Date(2019, 10, 25), "52", "./Images/blossoms.jpeg", "bb123"),
                new Concert("Calcutta", "Alternative", "Milan", new Date(2019, 7, 3), "18", "./Images/calcutta.jpeg", "cc123"),
                new Concert("Dua Lipa", "Pop", "Berlin", new Date(2019, 6, 22), "47", "./Images/dua-lipa.jpg", "dl123"),
                new Concert("Kasabian", "Rock", "Manchester", new Date(2019, 11, 2), "27", "./Images/kasabian.jpg", "kk123"),
                new Concert("Alvaro Soler", "Latin", "Madrid", new Date(2019, 9, 14), "33", "./Images/alvaro-soler.jpeg", "as123"),
                new Concert("Dolly Parton", "Country", "Los Angeles", new Date(2019, 4, 11), "29", "./Images/dolly-parton.jpeg", "dp123"),
                new Concert("Norah Jones", "Jazz", "Zurich", new Date(2019, 2, 11), "13", "./Images/norah-jones.jpg", "nj123")]
