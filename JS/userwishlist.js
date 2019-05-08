retrieveWishlist()
retrieveUser()


// rendering function to actually see the wishlist in the html page
// this is the function containing the html code for the table
// wish is a parameter

/**
 * @description Generate HTML for each individual wish
 * @param {Wish} wish - Wish Object that holds the wish informat
 * @returns {String} - HTML code    
 */

function renderWish(wish) {
    return `<tr style="background:white"><td><img src="${wish.img}" height="200px" width="280px"></td><td><h1>${wish.artist}</h1><p>Location:${wish.location}</p><p>Quantity:${wish.quantity}</p></td><td><button data-id="${wish.id}" class="remove-from-wl">Remove</button></td></tr>`
}

// create a rendering function

/**
 * @description Renders the HTML structure for our wishlist
 */
function renderWishlistHTML() {
    // html is empty so that we refresh the page continously
    var html = ""
    for (let i = 0; i < wishlist.length; i++) {
        // we need to check if the owner of the wishlist is equal to the currently logged in user using the owner property - check "listItem"
        // the wishlist has the owner property now because we created a lisrItem with this property, which then is being pushed to the wishlist array, 
        // therefore all objects contained in the wishlist can be referred using this owner property
        if (wishlist[i].owner === currentUser) {
            // shows the table of the individual concert being added to the wishlist without erasing the ones that have been previously being added
            html += renderWish(wishlist[i])
            // add the concert one at a time - we pass the argument wishlist[i]
        }
    }
    // access to the table id - if this code snippet is not included within the rendering function then js will create a copy of the wishlist and we won't be able to trigger the remove button and make a specific concert dissappear immediatly
    document.getElementById("content").innerHTML = html

    const removeFromWishlistButton = document.getElementsByClassName("remove-from-wl")
    for (var i = 0; i < removeFromWishlistButton.length; i++) {
        removeFromWishlistButton[i].addEventListener("click", removeItem)
    }
}

// we need to call the function
renderWishlistHTML()

// this refers to the go back to concert list button
const goBackButton = document.getElementById("back-btn")
goBackButton.onclick = function () {
    window.location.href = "events.html"
}