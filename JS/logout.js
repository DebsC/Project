const logOut = document.getElementById("lg")

logOut.onclick = function () {
    localStorage.removeItem("loggedInUser")
    window.location = "login.html"
}
