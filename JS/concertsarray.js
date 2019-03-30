const searchBtn = document.getElementById("searchbtn");
const artistTag = document.getElementById("dropDown1");
const genreTag = document.getElementById("dropDown2");
const locationTag = document.getElementById("dropDown3");

// create a variable filters that allows us to filter the events according to artist, genre, location and date - use empty strings as default value 
// object with different properties (same as the ones specified in the class of concerts)
var filters = {
    artist: '',
    genre: '',
    location: '',
    date: '',
    searchText: ''
}

// creating a filtered array based on the user selection
// this is a function with two parameters (array of concerts and filters)
const filterEvents = function(arrayOfConcerts, filter) {
    const filteredConcerts = arrayOfConcerts.filter(function(concert) { // this is callback function (function within a function) that filters everything - 
        // almost like a for loop, but here there is no need to put indeces
        // callbackfunction has one argument and we use the singular (concert instead of concerts because the function will consider one concert at a time)
        // returns the concerts according to the filter criteria - users need to select something or even leave the default options (includes method)
        // we want to access the property of artist of the concert - includes method means that concert.artist property matches the filter.artist
        // includes method determines whether one string may be found within another string
        return concert.artist.includes(filter.artist) && concert.genre.includes(filter.genre) && concert.location.includes(filter.location)
    })
    // searches through all of the concerts in the array and uses filters
    // this shows the events according to the criteria selected
    // the callback function returns the function itself
     return filteredConcerts
}

// searchBtn.onclick
artistTag.onchange = function () {
    // Read out the search criteria & update our filters object
    // the function recognised which option has been selected by the user for each filter
    
    // access the filter properties (artist, genre and location) and put them equal to the value in the tag
    filters.artist = artistTag.value
    filters.genre = genreTag.value
    filters.location = locationTag.value

    // we use the filterEvents function to create a filtered array with only
    // the concerts that match the search values
    // the parameters of the filterEvents function are the whole array of concerts (var) and the filters (var)
    const filteredConcerts = filterEvents(concerts, filters)

    // we call the renderHTML() to create the HTML code for every concert
    // in the array
    renderHTML(filteredConcerts)
}


// the parameter could be called anytype - but needs to be specified
function renderHTML(list) {
    var html = ''
// we introduce the var html='' empty to make sure that the function erases the whole list of concerts available everytime the user launches a search
// and shows only the concerts that successfully matches the search criteria
    for(let i = 0; i < list.length; i++) {
        html += list[i].renderConcert()
    }
    // this allows to show the specific concert
    // "events" refers to the id in the table in html
    document.getElementById('events').innerHTML = html
}

// prints the concert/s that successfully match the user's search
renderHTML(concerts)

// this shows the final results of the search - the search can restart many times - try to link to the buy tickets button
// search on stack overflow for some help