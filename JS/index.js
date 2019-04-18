generateWishlistDOM()

const buttons = document.getElementsByClassName('add-wl-btn')
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        let quantity = buttons[i].previousElementSibling.value
        addToWishlist(event.target.dataset.id, Number(quantity))
    })
}