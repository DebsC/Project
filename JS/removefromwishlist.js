// const removeFromWishlistButton = document.getElementsByClassName("remove-from-wl")
let listWish;

retrieveUser()
retrieveWishlist()
// if (localStorage.getItem("loggedInUser") === null) {
//     window.location.assign("login.html")
// } else {
//     // we want to get the current user from the local storage - like we have done in the userwishlist document
//     // the current user is retrieved from local storage by using localstorage get item using the key "loggedInUser"
//     currentUser = localStorage.getItem("loggedInUser")
// }

// if there is nothing saved in the local storage under the wishlist array, then we set the wishlist as an empty array
// otherwise we set the wishlist to the wishlist retrieved from the local storage - first we need to de string the info saved to the local storage
// if (localStorage.getItem("wishlist") == null) {
//     Wishlist = []
//     //localStorage.setItem("wishlist", JSON.stringify(wishlists))
// } else {
//     wishlist = JSON.parse(localStorage.getItem("wishlist"))
    
// }


function removeItem(event) {
    let IdButtonClicked = event.target.dataset.id
    for (let i = 0; i < wishlist.length; i++) {
        if (wishlist[i].id === IdButtonClicked) {
        wishlist.splice(i, 1)
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
        renderWishlistHTML()
        //e.target.disabled = true
    }
    }
}