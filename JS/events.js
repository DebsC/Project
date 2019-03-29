/* Geolocation
https://www.w3schools.com/html/html5_geolocation.asp 

var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 
}

// Filter through an array of objects of a dropdown menu

// https://www.w3schools.com/howto/howto_js_dropdown.asp 
// https://stackoverflow.com/questions/35936365/what-exactly-is-the-parameter-e-event-and-why-pass-it-to-javascript-functions

When the user clicks on the button, 
toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) { 
  // event is an object and it represents the event being triggered which causes the function to be executed (the parameter can take any name)
  //the event object comes from the js engine
  // event object is passed as an argument
  // it's not necessary to have the event parameter, but if it's included then you can have access to some details about the event that caused the function to be executed
    if (!event.target.matches('.dropbtn')) { 
      // event.target is the element on the webpage which the user clicks on
      var dropdowns = document.getElementsByClassName("dropdown-content"); // in this way you bind an event handler to the button of interest (our element)
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

https://www.geeksforgeeks.org/javascript-addeventlistener-with-examples/
https://gomakethings.com/checking-event-target-selectors-with-event-bubbling-in-vanilla-javascript/
*/
