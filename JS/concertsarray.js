/* class Concerts{ // the class is like an object creation factory
    constructor(concert, artist, genre, location, dateConcert) { // keys of a class
        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.location = location;
        this.date = dateConcert;
    }
}

var concerts = [{
    title: "Sweetener European Tour",
    artist: "Ariana Grande",
    genre: "Pop",
    location:"Paris",
    date: new Date(2019, 5, 12),
    price: "", 
}, {
    title: "Injured Generation Tour",
    artist: "A$AP Rocky",
    genre: "Hip-Hop / Rap",
    location:"Stockholm",
    date: new Date(2019, 8, 17),
}, {
    title: "#billylockettEUtour",
    artist: "Billy Lockett",
    genre: "Pop",
    location:"Copenhagen",
    date: new Date(2019, 2, 31),
}, {
    title: "Reading Festival",
    artist: "Blossoms",
    genre: "Alternative",
    location:"Reading",
    date: new Date(2019, 10, 25),
}, {
    title: "Sweetener European Tour",
    artist: "Calcutta",
    genre: "Alternative",
    location:"Milan",
    date: new Date(2019, 7, 3),
}]


const searchBtn = document.getElementById("searchbtn");
const artistTag = document.getElementById("dropDown1");
const genreTag = document.getElementById("dropDown2");
const locationTag = document.getElementById("dropDown3");

// create a variable filters that allows us to filter the events according to artist, genre, location and date - use empty strings as default value 
var filters = {
    artist: '',
    genre: '',
    location: '',
    date: ''
}


const filterEvents = function(arrayOfConcerts, filter) {

    const filteredConcerts = arrayOfConcerts.filter(function(concert) {
        
        return concert.artist.includes(filter.artist) && concert.genre.includes(filter.genre) && concert.location.includes(filter.location)
    })

    return filteredConcerts
}



searchBtn.onclick = function () {
    console.log(artistTag.value + genreTag.value + locationTag.value)
    filters.artist = artistTag.value
    filters.genre = genreTag.value
    filters.location = locationTag.value


    const listOfConcerts = filterEvents(concerts, filters)

    console.log(listOfConcerts)

   //var tag1 = artistTag1[i].value;
   //var tag2 = genreTag2[i].value;
   //var tag3 = document.getElementsByTagName("option")[i].value; 
}
*/
