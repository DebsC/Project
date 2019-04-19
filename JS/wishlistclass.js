class Wishlist {
    constructor(email, savedConcertId) {
        this.email = email;
        this.savedConcertId = savedConcertId;
    }
    renderWishlist = (concert) => {
        return `<tr style="background:white"><td><img src="${concert.img}" height="200px" width="280px"></td><td><h1>${concert.artist}</h1><p>Location:${concert.location}</p><p>Price:${concert.price}</p></td><td${concert.quantity}><button data-id="${concert.id}" class="remove-from-wl">Remove</button></td></tr>`
    }
}


var wishlists = [new Wishlist("annamaria@gmail.com", ["bl123", "ag123"]),
                new Wishlist("deboraceccato@gmail.com", ["kk123", "nj123", "ag123"]),
                new Wishlist("janskaaden@gmail.com", "ar123")]


console.log(storedUsers)

localStorage.setItem("userwishlists", JSON.stringify(wishlists));


/* const findCurrentUser = (arrayOfUsers, number) => {
    const myUser = arrayOfUsers.filter(function(StoredUser) {
    const StoredUser.id == id
})
return myUser}

for (var i = 0; i < storedUsers.length; i ++) {
    if (storedUsers[i].id == currentUser.id) {
        window.location.href= "wishlist.html";
        alert("your personla wishlist");
        return true}}
*/


for (i=0; i < wishlists.length; i++) {
    if (wishlists[i].email.includes(storedUsers.email) && wishlists[i].savedConcertId.includes(concerts.id)) {
      alert(`Hi ${storedUser.firstName}`)
    } else {
        alert("nothing")
    }
}

const filterStoredWishlists = function(arrayOfWishlists, concert) {
     const storedWishlists = arrayOfWishlists.filter(function(wishlist) {
        return wishlist.savedConcertId.includes(concert.id)
    })
    return storedWishlists
}

function searchingWishlist() {
    const filteredWishlists = filterStoredWishlists(wishlists, concerts)
    renderWishlistHTML(filteredWishlists)
}

// const viewWishlistBtn = document.getElementById("view-wishlist-btn")
// viewWishlistBtn.onclick = function() {
//    return searchingWishlist()}

function renderWishlistHTML(table) {
    var html = ""
    for(let i = 0; i < table.length; i++) {
        html += table[i].renderWishlist()
    }
    document.getElementById('wishlist-content').innerHTML = html
}

renderWishlistHTML(wishlists)