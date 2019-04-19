// generateWishlistDOM()

const addConcertButtons = document.getElementsByClassName('add-wl-btn')
console.log(addConcertButtons);
for (let i = 0; i < addConcertButtons.length; i++) {
    addConcertButtons[i].addEventListener("click", (e) => {
        let quantity = addConcertButtons[i].previousElementSibling.value
        addToWishlist(e.target.dataset.id, Number(quantity))
    })
}

