// retrieve the wishlist from the local storage
// if there is nothing in the wishlist, then we set the wishlist as empty array
// instead if there are objects within the array, we want to get the concerts saved in the wishlist on local storage

if (localStorage.getItem("wishlist") == null) {
    console.log("no concert in wishlist")
    wishlist = []
    //localStorage.setItem("wishlist", JSON.stringify(wishlists))
} else {
    wishlist = JSON.parse(localStorage.getItem("wishlist"))
    console.log(wishlist)
}

// retrieving current user that is logged in -- if it's not logged in then the user is redirected to the login page
if (localStorage.getItem("loggedInUser") === null) {
    window.location.assign("login.html")
} else {
    currentUser = localStorage.getItem("loggedInUser")
}



// rendering function to actually see the wishlist in the html page
// this is the function containing the html code for the table
// wish is a parameter
function renderWish(wish) {
    return `<tr style="background:white"><td><img src="${wish.img}" height="200px" width="280px"></td><td><h1>${wish.artist}</h1><p>Location:${wish.location}</p></td><td><button data-id="${wish.id}" class="remove-from-wl">Remove</button></td></tr>`
}

// create a rendering funciton
function renderWishlistHTML() {
    // html is empty so that we refresh the page continously
    var html = ""
    for(let i = 0; i < wishlist.length; i++) {
        // we need to check if the owner of the wishlist is equal to the currently logged in user using the owner property - check "listItem"
        // the wishlist has the owner property now because we created a lisrItem with this property, which then is being pushed to the wishlist array, 
        // therefore all objects contained in the wishlist can be referred using this owner property
        if (wishlist[i].owner === currentUser) {
            // shows the table of the individual concert being added to the wishlist without erasing the ones that have been previously being added
            html += renderWish(wishlist[i])
            // add the concert one at a time - we pass the argument wishlist[i]
        }
    }
    // access to the table id
    document.getElementById("content").innerHTML = html
}

// we need to call the function
renderWishlistHTML()