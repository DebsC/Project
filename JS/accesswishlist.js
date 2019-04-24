// not hard coded cose to create, save, load, etc user's wishlist
const findConcertById = (arrayOfConcerts, id) => {
    const concert = arrayOfConcerts.filter(function(concert) {
    return concert.id == id
})
   return concert
}

const addToWishlist = (id, quant) => {
    console.log(`${id} concert has been added to your wishlist`);
    if (!findConcertById(wishlist, id)) {
        wishlist.push({...findConcertById(concerts, id), quantity: quant})
    } else {
        findConcertById(wishlist, id).quantity += quant
    }
    saveWishlist()
}


const loadWishlist = function() {
    //for (i=0; i < wishlists.length; i++) {
        if (localStorage.getItem("usersWishlists") === null) {
        userWishlist = []
    } else {
        userWishlist = JSON.parse(localStorage.getItem("usersWishlists"))}
    }


//Create a function that saves your wishlist to localStorage
const saveWishlist = () => {
    // for (var i=0; i < wishlists.length; i++) {
    localStorage.setItem("usersWwishlist", JSON.stringify(wishlists)) 
}

// Create a function that returns the current shopping cart
const getWishlist = () => {
    return wishlist
}

// Make sure to load the wishlist array
loadWishlist()