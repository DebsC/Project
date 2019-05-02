// Bind the input fields and get the value by connecting them with the HTML-id

var SignInBtn = document.getElementById("signin")

// override the variable
var storedUsers = JSON.parse(localStorage.getItem("users")) // we use parse method in order to convert the strings (users registration information) into objects
// this refers to the array of users
console.log(storedUsers)

// if there is nothing saved in the local storage then we set the users array to the stored users one
if (storedUsers != null) {
  users = storedUsers
}

JSON.parse(localStorage.getItem("users"))
console.log(users)

var emailsignUI = document.getElementById("emailsignin")
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
      alert("You successfully logged in.");
      localStorage.setItem("loggedInUser", emailsignUI.value) 
      window.location.href= "events.html";
      return false
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



//function saveTheCurrentUser() {
  //if (localStorage.getItem("loggedUser") != null) {
  // if we find a user in the local storage then we want that user to be logged current user
  // we set the current user as the user stored in the local storage
  //loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
 // localStorage.setItem("loggedUser", JSON.stringify(currentUser)) 

 // }
