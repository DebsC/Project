let wishlist = []

const findConcertById = (data, id) => {
    const concert = data.find((concert) => {
           return concert.id === id
    })
    return concert
}

const addToWishlist = (id) => {
    console.log(`${id} has been added to the wishlist`);
    if (!findConcertById(wishlist, id)) {
        wishlist.push({...findConcertById(concerts, id)})
    } else {
        console.log("nothing")
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

const saveWishlist = () => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
}

const getWishlist = () => {
    return wishlist
}

loadWishlist()