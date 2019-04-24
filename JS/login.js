// Bind the input fields and get the value by connecting them with the HTML-id

var SignInBtn = document.getElementById("signin")

/* var storedUsers = JSON.parse(localStorage.getItem("users")) // we use parse method in order to convert the strings (users registration information) into objects
// this refers to the array of users
console.log(storedUsers) */

const emailsignUI = document.getElementById("emailsignin")
const passwordsignUI = document.getElementById("pswsignin")

var trials = 3

SignInBtn.onclick = function() {
console.log("clicked")
var emailSignin = emailsignUI.value;
var passwordSignin = passwordsignUI.value;

if (emailSignin.length < 1 || passwordSignin.length < 1) {
    alert("You should input something");
    return false;
}

for (var i = 0; i < users.length; i ++) {
  if (emailSignin == users[i].email && passwordSignin == users[i].password) {
      window.location.href= "events.html";
      alert("You successfully logged in.");
      return true;
    } 
}

if(trials == 0) {
  alert("No login attempts available.")
  document.getElementById("emailsignin").disabled = true;
  document.getElementById("pswsignin").disabled = true;
  SignInBtn.disabled = true;
  return false
} else {
  trials--;
  alert("Login failed. Now you have " + trials + " attemps available.");
  return false
    } 
}

// set current user
// create a current user variable
// push the current user from the local storage



var currentUser = ""

//use JSON.stringify
localStorage.setItem("loggedUser", emailsignUI.value)

function whatsTheCurrentUser() {
  if (localStorage.getItem("loggedUser", emailsignUI.value) != null) {
  // if we find a user in the local storage then we want that user to be logged current user
  // we set the current user as the user stored in the local storage
  currentUser = localStorage.getItem("loggedUser")
  }
}

