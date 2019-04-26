// hard coded wishlists
// var wishlists = [new Wishlist("annamaria@gmail.com", "bl123", "./Images/billy-lockett.jpg", "Billy Lockett", "Copenhagen"),
//                 new Wishlist("deboraceccato@gmail.com", "kk123", "./Images/kasabian.jpg", "Kasabian", "Manchester"),
//                 new Wishlist("janskaaden@gmail.com", "as123", "./Images/asap-rocky.jpg", "A$AP Rocky", "Stockholm"),
//                 new Wishlist("annamaria@gmail.com", "ar123", "./Images/Ariana_Grande.jpeg", "Ariana Grande", "Paris"),
//                 new Wishlist("deboraceccato@gmail.com", "nj123", "./Images/norah-jones.jpg", "Norah Jones", "Zurich"),
//                 new Wishlist("deboraceccato@gmail.com", "ag123", "./Images/Ariana_Grande.jpeg", "Ariana Grande", "Paris")
//             ]


if (localStorage.getItem("wishlist") == null) {
    console.log("no concert in wishlist")
    wishlist = []
    //localStorage.setItem("wishlist", JSON.stringify(wishlists))
} else {
    wishlist = JSON.parse(localStorage.getItem("wishlist"))
    console.log(wishlist)
}

if (localStorage.getItem("loggedInUser") === null) {
    window.location.assign("login.html")
} else {
    currentUser = localStorage.getItem("loggedInUser")
}

//console.log(currentUser)

//function retrieveUserWishlist() {
// now we get the wishlist from the local storage
//var wishlist = JSON.parse(localStorage.getItem("usersWishlists"))
// loop through the wishlist array for a match between the current user email and the email saved on the wishlist array
// for (let i=0; i < wishlists.length; i++) {
//     if (currentUser == wishlists[i].email) {
//         // set the userswishist equal to the specific user's array of saved concert
//         //userswishlist = wishlist[i].savedConcertId
//         console.log(wishlists[i])
//         renderWishlistHTML(wishlists[i])
//     } else {
//         console.log("wishlist is empty")
//     }
//     console.log("your personal wishlist")
//     //renderWishlistHTML()
//     }


// retrieveUserWishlist()


// var table = document.getElementsByClassName("table")
// var tableBody = table.getElementById("content")


function renderWish(wish) {
    return `<tr style="background:white"><td><img src="${wish.img}" height="200px" width="280px"></td><td><h1>${wish.artist}</h1><p>Location:${wish.location}</p></td><button data-id="${wish.savedConcertId}" class="remove-from-wl">Remove</button></td></tr>`
}


function renderWishlistHTML() {
    var html = ""
    for(let i = 0; i < wishlist.length; i++) {
        if (wishlist[i].owner === currentUser) {
            html += renderWish(wishlist[i])
        }
    }
    //tableBody.innerHTML = html
    document.getElementById("content").innerHTML = html
}

renderWishlistHTML()