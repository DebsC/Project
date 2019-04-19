var removeConcertFromWishlist = document.getElementsByClassName("remove-from-wl")
console.log(removeConcertFromWishlist)
for(var i=0; i<removeConcertFromWishlist.length; i++) {
    var button = removeConcertFromWishlist[i]
    button.addEvenListener("click", function(e) {
        var buttonClicked = e.target
        buttonClicked.parentElement.parentElement.remove()
    })
}