console.log("registration.js loaded")

const firstNameUI = document.getElementById("first-name")
const lastNameUI = document.getElementById("last-name")
const emailUI = document.getElementById("email")
const checkboxUI = document.getElementById("terms")
const submitBtnUI = document.getElementById("submit")
const passwordUI = document.getElementById("psw")


//Trigger the click button

submitBtnUI.onclick = function (){
   console.log('clicked')
   console.log(users)
    
var firstName = firstNameUI.value
var lastName = lastNameUI.value
var email = emailUI.value
var password = passwordUI.value
var regEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
var regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
// the password string must contain at least 1 lowercase, 1 uppercase, 1 numeric character, 1 special characters, at least 8 characters long

// if the user doesn't input anything but clicks on the complete registration button, we let him know that he has to input something
// if (firstName.length == "" || lastName.length == "" || email.length == "" || password.length == "") {
  //  alert("You need to complete the form with all of the required information.")
  //  return false
//}

    if(checkboxUI.checked == false) {
        // if the terms box is checked then the user can continue with the registration, otherwise the alert messge will appear - can appear at any time even after entering name and surname etc correct, he cannot finalise the registration without that box being checked
        alert("You need to accept the terms and conditions.")
        return false
    }

    if (firstName.length < 2 || firstName.length == ""){
            alert("Please provide your first name.");
            return false
        } 
    
    if (firstName[0] !== firstName[0].toUpperCase()) {
            alert("The first letter must be a capital letter.");
            return false
        }
    
    if (lastName.length < 2 || lastName.length == "") {
        // if the user enters a name equal to 1 letter or simply clock on complete registration button
        alert("Please enter your last name.")
            return false
        }
    
    if (lastName[0] !== lastName[0].toUpperCase()) {
        // this if statement check whetehr or not the first letter of the name is an uppercase, if it doesn't, then the user cannot continue to input a password
            alert("The first letter must be a capital letter.");
            return false
        }
       
    if (regEmail.test(email)) {
        // check if the email address contains an @ character and makes sure there are characters beofre and after such sign
        console.log("The user has entered a valid email address");
        }  
       
        else {
            alert("You have entered an invalid email address, please enter a valid email.")
        }
   
        // check if the password entered by the user follows all of the preset criteria
    if (regPassword.test(password)) {
        
        // if the passowrd satisfies all criteria, then the user is saved to the users array on the local machine
        users.push(new User(firstName, lastName, email, password))
        console.log("The user has selected a strong password.")
        alert("You are successfully registered to our website, you can now sign in =)")
        window.location.href = "login.html" // the user gets redirected to the signin page - we cannot use window.location.assign('') because our new page is not an url, but just an html document
    } 
    
    else {
        // if the passowrd doesn't satisfy the criteria, then he must choose a new password in order to sign up - display a message tellign the user the password requirements
        alert("The password must be at least 8 characters long and it must contain at least one uppercase, one lowercase, one number and one special characters among the following: @, #, *, ...")
        return false
    }
}

console.log(users)