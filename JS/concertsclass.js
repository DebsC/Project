class Concert{ // the class is like an object creation factory
    constructor(artist, genre, location, dateConcert, price) { // keys of a class
        this.artist = artist;
        this.genre = genre;
        this.location = location;
        this.date = dateConcert;
        this.price = price;
        // this.img = img;
        // this.id = id;
        // add the concert id in order to allow payments for later use
    }
    
    // this function (which could be called in any way) allows to show the "table" of concerts and we put the html commands on the js itself
    renderConcert() {
        var img = "https://media4.s-nbcnews.com/j/newscms/2019_07/2746596/190208-ariana-grande-mc-1535_163b7df03fbfa03ba35bc8828f9eb918.fit-760w.JPG"
        return '<tr style="background:white"><td><img src="' + img + '" style="height:250px"></td><td><h1>'+ this.artist +'</h1><p>Location:'+this.location+'</p><p>Price:'+this.price+'</p></td><td><button id='+this.id+'>Buy tickets</button></td></tr>'
    }
}


// add the url source for the image for each concert event so that each one show a different picture
var concerts = [new Concert("Ariana Grande", "Pop", "Paris", new Date(2019, 5, 12), "50"),
                new Concert("A$AP Rocky", "Hip-Hop / Rap", "Stockholm", new Date(2019, 8, 17), "48"),
                new Concert("Billy Lockett", "Pop", "Copenhagen", new Date(2019, 2, 31),"32"),
                new Concert("Blossoms", "Alternative", "Reading", new Date(2019, 10, 25), "52"),
                new Concert("Calcutta", "Alternative", "Milan", new Date(2019, 7, 3), "18"),
                new Concert("Dua Lipa", "Pop", "Berlin", new Date(2019, 6, 22), "47"),
                new Concert("Kasabian", "Rock", "Manchester", new Date(2019, 11, 2), "27"),
                new Concert("Alvaro Soler", "Latin", "Madrid", new Date(2019, 9, 14), "33"),
                new Concert("Dolly Parton", "Country", "Los Angeles", new Date(2019, 4, 11), "29"),
                new Concert("Still Searching", "Jazz", "Zurich", new Date(2019, 2, 11), "13")]

