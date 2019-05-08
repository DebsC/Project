// let listWish;

retrieveUser()
retrieveWishlist()


function removeItem(event) {
    let IdButtonClicked = event.target.dataset.id
    for (let i = 0; i < wishlist.length; i++) {
        if (wishlist[i].id === IdButtonClicked) {
        wishlist.splice(i, 1)
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
        renderWishlistHTML()
    }
    }
}