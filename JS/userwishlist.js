// hard coded wishlists
var wishlists = [new Wishlist("annamaria@gmail.com", "bl123", "./Images/billy-lockett.jpg", "Billy Lockett", "Copenhagen"),
                new Wishlist("deboraceccato@gmail.com", "kk123", "./Images/kasabian.jpg", "Kasabian", "Manchester"),
                new Wishlist("janskaaden@gmail.com", "as123", "./Images/asap-rocky.jpg", "A$AP Rocky", "Stockholm"),
                new Wishlist("annamaria@gmail.com", "ar123", "./Images/Ariana_Grande.jpeg", "Ariana Grande", "Paris"),
                new Wishlist("deboraceccato@gmail.com", "nj123", "./Images/norah-jones.jpg", "Norah Jones", "Zurich"),
                new Wishlist("deboraceccato@gmail.com", "ag123", "./Images/Ariana_Grande.jpeg", "Ariana Grande", "Paris")
            ]

//var userswishlist = ""

// for(...userswishlist.le
// return tr td userwishlist i td tr

if (localStorage.getItem("usersWishlists") == null) {
    localStorage.setItem("usersWishlists", JSON.stringify(wishlists))
} else {
    wishlists = JSON.parse(localStorage.getItem("usersWishlists"))
}

var currentUser = JSON.parse(localStorage.getItem("loggedUser"))

console.log(currentUser)

function retrieveUserWishlist() {
// now we get the wishlist from the local storage
//var wishlist = JSON.parse(localStorage.getItem("usersWishlists"))
// loop through the wishlist array for a match between the current user email and the email saved on the wishlist array
for (let i=0; i < wishlists.length; i++) {
    if (currentUser == wishlists[i].email) {
        // set the userswishist equal to the specific user's array of saved concert
        //userswishlist = wishlist[i].savedConcertId
        //renderWishlistHTML(wishlists[i])
        console.log(wishlists[i])
    } else {
        console.log("wishlist is empty")
    }
    //console.log("your personal wishlist")
    //renderWishlistHTML()
    }
}

retrieveUserWishlist()

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

/* this should be added as a source in the events.html page
const viewWishlistBtn = document.getElementById("view-wishlist-btn")
viewWishlistBtn.onclick = function() {
  window.location.href = "wishlist.html"
  return retrieveUserWishlistHTML()
} 
var table = document.getElementById("table")
var tableBody = table.getElementById("wishlist-content")

function renderWishlistHTML(list) {
    var html = ""
    for(let i = 0; i < list.length; i++) {
        html += list[i].renderWishlist()
    }
    tableBody.innerHTML = html
}

//renderWishlistHTML(userswishlist)*/