let wishlist;
let listItem; // this is a line item
let currentUser;

// create a loop that checks for the currently looged user
// if no user is logged in, then we redirect the user to the login html page
if (localStorage.getItem("loggedInUser") === null) {
    window.location.assign("login.html")
} else {
    // we want to get the current user from the local storage - like we have done in the userwishlist document
    // the current user is retrieved from local storage by using localstorage get item using the key "loggedInUser"
    currentUser = localStorage.getItem("loggedInUser")
}

// if there is nothing saved in the local storage under the wishlist array, then we set the wishlist as an empty array
// otherwise we set the wishlist to the wishlist retrieved from the local storage - first we need to de string the info saved to the local storage
if (localStorage.getItem("wishlist") == null) {
    wishlist = []
    //localStorage.setItem("wishlist", JSON.stringify(wishlists))
} else {
    wishlist = JSON.parse(localStorage.getItem("wishlist"))
}

// buttons used to add concerts to the wishlist
// need to access the add buttons throught the class
const addConcertButtons = document.getElementsByClassName('add-wl-btn')
console.log(addConcertButtons);

// create a loop to go throuhg the list of buttons displayed on the html page
for (let i = 0; i < addConcertButtons.length; i++) {
    //add an event listener that triggers when the user clicks on the button
    addConcertButtons[i].addEventListener("click", (e) => {
        // create an object id that identifies when the specific button being clicked (that's why we use target.dataset.id)
        let id = e.target.dataset.id
        // create a quantity object that will be later used to identify the button being clicked - previous element sibling - the following element is the add to wishlist button
        let quantity = Number(addConcertButtons[i].previousElementSibling.value) // add number in the front because we want to concert the integer into a number and not keep it

        console.log("clicked")
        console.log(wishlist)
        // create a loop through the list of concerts
        for (let i = 0; i < concerts.length; i++) {
            // if statement -> if the specific concert's id exactly matches the id of the button being clicked by the user
            if(concerts[i].id === id) {

                listItem = {...concerts[i], quantity: 0, owner: currentUser} // ... are called the REST parameter. It create a "copy" of the object with the identical properties
                // we add two properties to the copy of the concert by index: quantity and the owner 
                //(here we set the owner to coincide witht the currentUser - that's why at the top of the page we get the loggedInUser from local storage)
                //e.target.disabled = true
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
            if (wishlist[i].id === id) {
                exists = true // the concert is present
                index = i // refers alwasy to some i - index
            }
        }
        
        // here, if the concert already exists, then for that targeted concert, we have to increment the quantity by the number of tickets being added
        if(exists){
            // we use the quantity property that was defined in the listItem - in the copy of the concerts we created before
            // wishlist[index] refers to the array of concerts present in the wishlist itself, so we can no longer use i as index, but our newly defined index 
            wishlist[index].quantity += quantity
        } else {
            // or if if was not present in the wishlist
            listItem.quantity = quantity 
            // we add the item to the wishlist
            wishlist.push(listItem)
        }
        // we save the concert to the local storage
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
    })
}

// Flaw = now all concerts from all the users are being added to the same big wishlist and the every time a different user is logged in, 
// the program loops through all of the saved concerts and checks which ones match the currently logged user

