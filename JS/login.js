// Bind the input fields and get the value by connecting them with the HTML-id

var SignInBtn = document.getElementById("signin")

var storedUsers = JSON.parse(localStorage.getItem("users")) // we use parse method in order to convert the strings (users registration information) into objects
// this refers to the array of users

//Check if it's empty, you will want to overwrite the users
if (storedUsers != null) {
  users = storedUsers
}


var emailsignUI = document.getElementById("emailsignin")
const passwordsignUI = document.getElementById("pswsignin")

var trials = 3

SignInBtn.onclick = function () {
  console.log("clicked")
  var emailSignin = emailsignUI.value;
  var passwordSignin = passwordsignUI.value;

  if (emailSignin.length < 1 || passwordSignin.length < 1) {
    alert("You should input something");
    return false;
  }

  for (var i = 0; i < users.length; i++) {
    JSON.parse(localStorage.getItem("users"))
    if (emailSignin == users[i].email && passwordSignin == users[i].password) {
      alert("You successfully logged in.");
      localStorage.setItem("loggedInUser", emailsignUI.value)
      window.location.href = "events.html";
      return false
    }

  }

  if (trials == 0) {
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