// retrieve the wishlist from the local storage
// if there is nothing in the wishlist, then we set the wishlist as empty array
// instead if there are objects within the array, we want to get the concerts saved in the wishlist on local storage

function retrieveUser() {
    if (localStorage.getItem("loggedInUser") === null) {
        window.location.assign("login.html")
    } else {
        // we want to get the current user from the local storage - like we have done in the userwishlist document
        // the current user is retrieved from local storage by using localstorage get item using the key "loggedInUser"
        currentUser = localStorage.getItem("loggedInUser")
    }
}


function retrieveWishlist() {
    // if there is nothing saved in the local storage under the wishlist array, then we set the wishlist as an empty array
    // otherwise we set the wishlist to the wishlist retrieved from the local storage - first we need to de string the info saved to the local storage
    if (localStorage.getItem("wishlist") == null) {
        wishlist = []
    } else {
        wishlist = JSON.parse(localStorage.getItem("wishlist"))
    }
}