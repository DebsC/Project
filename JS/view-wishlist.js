// Create a function that renders the individual wishlist item
const renderWishlistItem = (concert) => {
return `<tr style="background:white"><td><img src="${concert.img}" height="200px" width="280px"></td><td><h1>${concert.artist}</h1><p>Location:${concert.location}</p><p>Price:${concert.price}</p></td><td>${concert.quantity}</td><td><button data-id="${concert.id}" class="remove-from-wl">Remove</button></td></tr>`
   }


// Create a function that generates the DOM structure
const generateWishlistDOM = () => {
    const WISHlist = getWishlist()
     let htmlWL = ""

     if (WISHlist.length === 0) {
         return '<h3>No concerts saved in the wishlist</h3>'
     } else {
        WISHlist.forEach((concert) => {
             htmlWL += renderWishlistItem(concert)
         })
     }
     document.getElementById("wishlist-content").innerHTML = htmlWL
 }


