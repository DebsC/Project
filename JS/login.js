// Bind the input fields and get the value by connecting them with the HTML-id

var SignInBtn = document.getElementById("signin")

var storedUsers = JSON.parse(localStorage.getItem("users"))
console.log(storedUsers)

var trials = 3

SignInBtn.onclick = function() {
console.log("clicked")

var emailSignin = document.getElementById("emailsignin").value;
var passwordSignin = document.getElementById("pswsignin").value;

if (emailSignin.length < 1 || passwordSignin.length < 1) {
    alert("You should input something");
    return false;
}

for (var i = 0; i < storedUsers.length; i ++) {
  if (emailSignin == storedUsers[i].email && passwordSignin == storedUsers[i].password) {
      // localStorage.setItem("users", JSON.stringify("users"))
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
