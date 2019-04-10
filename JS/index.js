generateWishlistDOM()

const buttons = document.getElementsByClassName('add-to-wl')
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        addToWishlist(event.target.dataset.id)
    })
}

//document.getElementById('searchbox').addEventListener('input', (e) => {
//    console.log(e.target.value)})