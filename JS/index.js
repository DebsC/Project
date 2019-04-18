// generateWishlistDOM()

const buttons = document.getElementsByClassName('add-wl-btn')
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        let quantity = buttons[i].previousElementSibling.value
        addToWishlist(e.target.dataset.id, Number(quantity))
    })
}