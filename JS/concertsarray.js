const searchBtn = document.getElementById("searchbtn");
const artistTag = document.getElementById("dropDown1");
const genreTag = document.getElementById("dropDown2");
const locationTag = document.getElementById("dropDown3");
const searchBox = document.getElementById("searchbox");

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
const filterEvents = function (arrayOfConcerts, filter) {
    const filteredConcerts = arrayOfConcerts.filter(function (concert) { // this is callback function (function within a function) that filters everything - 
        // almost like a for loop, but here there is no need to put indeces
        // callbackfunction has one argument and we use the singular (concert instead of concerts because the function will consider one concert at a time)
        // returns the concerts according to the filter criteria - users need to select something or even leave the default options (includes method)
        // we want to access the property of artist of the concert - includes method means that concert.artist property matches the filter.artist
        // includes method determines whether one string may be found within another string

        return concert.artist.includes(filter.artist) && concert.genre.includes(filter.genre) && concert.location.includes(filter.location) && concert.artist.toLowerCase().includes(filter.searchText.toLowerCase())
    })
    // searches through all of the concerts in the array and uses filters
    // this shows the events according to the criteria selected
    // the callback function returns the function itself
    return filteredConcerts
}

// searchBtn.onclick
function filtering() {
    // Read out the search criteria & update our filters object
    // the function recognised which option has been selected by the user for each filter
    // access the filter properties (artist, genre and location) and put them equal to the value in the tag
    filters.artist = artistTag.value
    filters.genre = genreTag.value
    filters.location = locationTag.value
    filters.searchText = searchBox.value

    // we use the filterEvents function to create a filtered array with only
    // the concerts that match the search values
    // the parameters of the filterEvents function are the whole array of concerts (var) and the filters (var)
    const filteredConcerts = filterEvents(concerts, filters)

    // we call the renderHTML() to create the HTML code for every concert
    // in the array
    // here it shows only the concerts that match the filteirng criteria
    renderHTML(filteredConcerts)
}


searchBtn.onclick = function () {
    filtering()
    return addConcertsToWishlist() // allow to add the filtered concert to the wishlist
}


searchBox.addEventListener("input", function (e) {
    const typing = e.target.value.toLowerCase()
    filtering(typing) // pass a specific filter
    return addConcertsToWishlist() // this allow us to add the filtered concert to the wishlist
})

// the parameter could be called anytype - but needs to be specified
// construct the general function and assign it a parameter -  we decide to call it "list"
function renderHTML(list) {
    var html = ""
    // we introduce the var html='' empty to make sure that the function erases the whole list of concerts available everytime the user launches a search
    // and shows only the concerts that successfully matches the search criteria (renderHTML filtered concerts)
    for (let i = 0; i < list.length; i++) {
        html += list[i].renderConcert()
        // we call the class method for the specific concert being selected/choosen
    }
    // this allows to show the specific concert
    // "events" refers to the id in the table in html
    document.getElementById('events').innerHTML = html
}

// prints the concerts that successfully match the user's search
// pass the parameter concert
// here it shows all the concerts available for selection on the website
renderHTML(concerts)

// this refers to the view wishlist button
const viewWishlistBtn = document.getElementById("view-wishlist-btn")
viewWishlistBtn.onclick = function () {
    window.location.href = "wishlist.html"
}
