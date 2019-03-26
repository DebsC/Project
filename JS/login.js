// Bind the input fields and get the value by connecting them with the HTML-id

var SignInBtn = document.getElementById("signin")

SignInBtn.onclick = function() {
console.log("clicked")

var emailSignin = document.getElementById("emailsignin").value;
var passwordSignin = document.getElementById("pswsignin").value;

if (emailSignin.length < 1 || passwordSignin.length < 1) {
    alert("You should input something");
    return false;
}

var trials = 3

for (var i = 0; i < users.length; i ++) {

  if (emailSignin == users[i].email && passwordSignin == users[i].password) {
      localStorage.setItem("users", JSON.stringify("users"))
      alert("You successfully logged in.");
      return true;
    } 
    else if(trials == 0) {
      alert("No login attempts available.")
      email.disabled = true;
      password.disabled = true;
      SignInBtn.disabled = true;
    }
    else {
      trials--;
      alert("Login failed. Now you have" + trials + " attemps available.");
      return false
         } 
    }
}
