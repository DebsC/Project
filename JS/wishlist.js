/* let wishlist = []
const findConcertById = (arrayOfConcerts, id) => {
    const concert = arrayOfConcerts.find((concert) => {
           return concert.id === id
    })
    return concert
}


const addToWishlist = (id, quant) => {
    console.log(`Tickets for ${id} concert have been added to the wishlist`);
debugger
    if (!findConcertById(wishlist, id)) {
        wishlist.push({...findConcertById(concerts, id), quantity: quant})
    } else {
        findProductById(cart, id).quantity += quant
    }
    saveWishlist()
}

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

loadWishlist() */