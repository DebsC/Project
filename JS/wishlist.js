let wishlist = []

// Create a function to find a concert based on it's ID
// The function should take both the array and ID as inputs

const findConcertById = (data, id) => {
    const concert = data.find((concert) => {
           return concert.id === id
    })
    return concert
}

/**
 * Saving to wishlist
 */

// Create a function that adds a concert by it's ID to the wishlist

const addToWishlist = (id) => {
    console.log(`${id} has been added to the wishlist`);
    if (!findConcertById(wishlist, id)) {
        wishlist.push({...findConcertById(concerts, id)})
    } else {
        console.log("nothing")
    }
    saveWishlist()
}

// Create a function that loads the wishlist from localStorage

const loadWishlist = function() {
    if (localStorage.getItem("wishlist") === null) {
        wishlist = []
    } else {
        wishlist = JSON.parse(localStorage.getItem("wishlist"))
    }
}

// Create a function that saves your wishlist to localStorage


const saveWishlist = () => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
}

// Create a function that returns the current shopping cart

const getWishlist = () => {
    return wishlist
}


// Make sure to load the wishlist array

loadWishlist()