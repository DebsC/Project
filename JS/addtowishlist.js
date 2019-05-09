let wishlist;
let listItem; // this is a line item
let currentUser;

retrieveUser()
retrieveWishlist()

// buttons used to add concerts to the wishlist
// need to access the add buttons throught the class
const addConcertButtons = document.getElementsByClassName('add-wl-btn')
console.log(addConcertButtons);

// create a loop to go throuhg the list of buttons displayed on the html page
function addConcertsToWishlist() {
    for (let i = 0; i < addConcertButtons.length; i++) {
        //add an event listener that triggers when the user clicks on the button
        addConcertButtons[i].addEventListener("click", (event) => {
            // create an object id that identifies when the specific button being clicked (that's why we use target.dataset.id)
            let IdButtonClicked = event.target.dataset.id
            // create a quantity object that will be later used to identify the button being clicked - previous element sibling - the following element is the add to wishlist button
            let quantity = Number(addConcertButtons[i].previousElementSibling.value) // add number in the front because we want to concert the integer into a number and not keep it

            console.log("clicked")
            console.log(wishlist)
            // create a loop through the list of concerts
            for (let i = 0; i < concerts.length; i++) {
                // if statement -> if the specific concert's id exactly matches the id of the button being clicked by the user
                if (concerts[i].id === IdButtonClicked) {

                    listItem = { ...concerts[i], quantity: 0, owner: currentUser } // ... are called the REST parameter. It create a "copy" of the object with the identical properties
                    // we add two properties to the copy of the concert by index: quantity and the owner 
                    //(here we set the owner to coincide witht the currentUser - that's why at the top of the page we get the loggedInUser from local storage)
                    // e.target.disabled = true
                }
            }

            // check if the concert the user is trying to add to the wishlist is already present in the wishlist, we say that it's not so we set exists = false
            let exists = false;
            let index; // we don't assign it a value

            // we create a for loop that checks through the wishlist if the the concert is already present or not
            // under the condition that the wishlist id is equal to the id of the add button being clicked, 
            // then we say that the concert exists, in the sense that is present within the wishlist
            // we set an index object equal to the index of the wishlist
            for (let i = 0; i < wishlist.length; i++) {
                // if the wishlist id of the concert present in the wishlist matches the id of the add button being clicked
               // the wishlist is a list contaning listItem, each one possess an id and and owner (and other properties),
               // so when we call wishlist[i].id we can call the id property because the line item possess an id property (same reasoning for the owner property) 
                if (wishlist[i].id === IdButtonClicked && wishlist[i].owner === currentUser) {
                    // wishlist[i].id because we know that the wishes being add to the wishlist will have an id
                    exists = true // the concert is present
                    index = i // refers alwasy to some i - index - overwrite i
                    // "index" of the specific ith concert being selected
                }
            }
            // here, if the concert already exists, then for that targeted concert, we have to increment the quantity by the number of tickets being added
            if (exists) {
                // we use the quantity property that was defined in the listItem - in the copy of the concerts we created before
                // wishlist[index] refers to the array of concerts present in the wishlist itself, so we can no longer use i as index, but our newly defined index 
                wishlist[index].quantity += quantity
            } else {
                // or if if was not present in the wishlist we add the copy of the concert with the number of tickets equal to those selected on the dom
                listItem.quantity = quantity
                // we add the item to the wishlist
                wishlist.push(listItem)
            }

            // we save the concert to the local storage
            localStorage.setItem('wishlist', JSON.stringify(wishlist))
        })
    }
}

addConcertsToWishlist()

// Flaw = now all concerts from all the users are being added to the same big wishlist and the every time a different user is logged in,
// the program loops through all of the saved concerts and checks which ones match the currently logged user
