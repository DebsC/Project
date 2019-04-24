class Wishlist {
    constructor(email, savedConcertId, img, artist, location) {
        this.email = email;
        this.savedConcertId = savedConcertId;
        this.img = img;
        this.artist = artist;
        this.location = location;
    }
    renderWishlist() {
        return `<tr style="background:white"><td><img src="${this.img}" height="200px" width="280px"></td><td><h1>${this.artist}</h1><p>Location:${this.location}</p></td><button data-id="${this.savedConcertId}" class="remove-from-wl">Remove</button></td></tr>`
    }
}

// hard coded wishlists
var wishlists = [new Wishlist("annamaria@gmail.com", ["bl123", "ag123"], ["./Images/billy-lockett.jpg", "./Images/Ariana_Grande.jpeg"], ["Billy Lockett", "Ariana Grande"], ["Copenhagen", "Paris"]),
                new Wishlist("deboraceccato@gmail.com", ["kk123", "nj123", "ag123"], ["./Images/kasabian.jpg", "./Images/norah-jones.jpg", "./Images/Ariana_Grande.jpeg"], ["Kasabian", "Norah Jones", "Ariana Grande"], ["Manchester", "Zurich", "Paris"]),
                new Wishlist("janskaaden@gmail.com", ["ar123"], ["./Images/asap-rocky.jpg"], ["A$AP Rocky"], ["Stockholm"])]


console.log(currentUser)


localStorage.setItem("usersWishlists", JSON.stringify(wishlists));

function retrieveUserWishlist() {
// now we get the wishlist from the local storage
wishlist = JSON.parse(localStorage.getItem("usersWishlists"))
// loop through the wishlist array for a match between the current user email and the email saved on the wishlist array
for (i=0; i < wishlist.length; i++) {
    if (currentUser == wishlist[i].email) {
        // set the userswishist equal to the specific user's array of saved concert
        userswishlist = wishlist[i].savedConcertId
    }
    console.log("your personal wishlist")
    renderWishlistHTML()
    }
}

/* const findCurrentUser = (arrayOfUsers, number) => {
    const myUser = arrayOfUsers.filter(function(StoredUser) {
    const StoredUser.id == id
})
return myUser}

for (var i = 0; i < storedUsers.length; i ++) {
    if (storedUsers[i].id == currentUser.id) {
        window.location.href= "wishlist.html";
        alert("your personla wishlist");
        return true}}
*/

/*
for (i=0; i < wishlists.length; i++) {
    if (wishlists[i].email.includes(storedUsers.email) && wishlists[i].savedConcertId.includes(concerts.id)) {
      alert(`Hi ${storedUser.firstName}`)
    } else {
        alert("nothing")
    }
}

const filterStoredWishlists = function(arrayOfWishlists, concert) {
     const storedWishlists = arrayOfWishlists.filter(function(wishlist) {
        return wishlist.savedConcertId.includes(concert.id)
    })
    return storedWishlists
}

function searchingWishlist() {
    const filteredWishlists = filterStoredWishlists(wishlists, concerts)
    renderWishlistHTML(filteredWishlists)
} */

// this should be added as a source in the events.html page
const viewWishlistBtn = document.getElementById("view-wishlist-btn")
viewWishlistBtn.onclick = function() {
  window.location.href = "wishlist.html"
  return retrieveUserWishlistHTML()
}

function renderWishlistHTML(table) {
    var html = ""
    for(let i = 0; i < table.length; i++) {
        html += table[i].renderWishlist()
    }
    var table = document.getElementById("table")
    var row = table.getElementById("wishlist-content")
    row.innerHTML = html
}

renderWishlistHTML()