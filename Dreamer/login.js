// Get the checkbox and password input elements
var checkbox = document.getElementById("show-password");
var password = document.getElementById("password");

// Add an event listener to the checkbox to toggle the password visibility
checkbox.addEventListener("change", function() {
  if (this.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
