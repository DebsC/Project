let wishlist;
let listItem;
let currentUser;

if (localStorage.getItem("loggedInUser") === null) {
    window.location.assign("login.html")
} else {
    currentUser = localStorage.getItem("loggedInUser")
}


if (localStorage.getItem("wishlist") == null) {
    wishlist = []
    //localStorage.setItem("wishlist", JSON.stringify(wishlists))
} else {
    wishlist = JSON.parse(localStorage.getItem("wishlist"))
}

const addConcertButtons = document.getElementsByClassName('add-wl-btn')
console.log(addConcertButtons);
for (let i = 0; i < addConcertButtons.length; i++) {
    addConcertButtons[i].addEventListener("click", (e) => {
        let id = e.target.dataset.id
        let quantity = Number(addConcertButtons[i].previousElementSibling.value)
        //addToWishlist(e.target.dataset.id, Number(quantity))

        console.log("clicked")
        console.log(wishlist)
        for (let i = 0; i < concerts.length; i++) {
            if(concerts[i].id === id) {
                listItem = {...concerts[i], quantity: 0, owner: currentUser} // ... are called the REST parameter. It create a "copy" of the object with the identical properties
                //e.target.disabled = true
            }
        }

        let exists = false;
        let index;
        for (let i = 0; i < wishlist.length; i++) {
            if (wishlist[i].id === id) {
                exists = true
                index = i
            }
        }
        
        if(exists){
            wishlist[index].quantity += quantity
        } else {
            listItem.quantity = quantity
            wishlist.push(listItem)
        }

        localStorage.setItem('wishlist', JSON.stringify(wishlist))



    })
}

