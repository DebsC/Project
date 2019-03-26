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

for (var i = 0; i < users.length; i ++) {
    if (emailSignin == users[i].email && passwordSignin == users[i].password) {
        alert("You are loged in.");
        return true;
    } 
    else {
      alert("The email address or password is not correct, please try again.");
      return false
      } 
    }
}
