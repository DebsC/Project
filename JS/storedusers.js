var storedUsers = JSON.parse(localStorage.getItem("users")) // we use parse method in order to convert the strings (users registration information) into objects
// this refers to the array of users
console.log(storedUsers)
