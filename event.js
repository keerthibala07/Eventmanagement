

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var privacyPolicy = document.getElementById("privacyPolicy");

  // Function to highlight input fields with red border
  function highlightInvalidField(field) {
    field.style.borderColor = "red";
  }

  // Reset border color for all input fields
  function resetFieldBorders() {
    var inputFields = document.querySelectorAll('.input-group input');
    inputFields.forEach(function (field) {
      field.style.borderColor = "#ccc";
    });
  }

  // Check if the input value is empty and highlight if necessary
  function checkEmptyAndHighlight(field, fieldName) {
    if (field.trim() === "") {
      alert("Please enter a valid " + fieldName);
      highlightInvalidField(field);
      return false;
    }
    return true;
  }

  // Your existing validation logic
  if (!checkEmptyAndHighlight(name, "Name") || !checkEmptyAndHighlight(email, "Email") || 
      !checkEmptyAndHighlight(username, "Username") || !checkEmptyAndHighlight(password, "Password") ||
      !checkEmptyAndHighlight(confirmPassword, "Confirm Password")) {
    return false;
  }


  resetFieldBorders();

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address");
    highlightInvalidField(document.getElementById("email"));
    return false;
  }

  if (!isPasswordValid(password)) {
    alert("Password must be at least 8 characters long and meet the specified constraints.");
    highlightInvalidField(document.getElementById("password"));
    return false;
  }

  if (password !== confirmPassword) {
    alert("Password and Confirm Password do not match");
    highlightInvalidField(document.getElementById("confirmPassword"));
    return false;
  }

  if (!privacyPolicy.checked) {
    alert("Please agree to the privacy policy");
    return false;
  }

  return true;
}

// Your other validation functions...


function isValidEmail(email) {
  // Simple email validation regex
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isPasswordValid(password) {
  // Minimum length of 8 characters
  if (password.length < 8) {
      return false;
  }

  // Should contain at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
      return false;
  }

  // Should contain at least one lowercase letter
  if (!/[a-z]/.test(password)) {
      return false;
  }

  // Should contain at least one digit
  if (!/\d/.test(password)) {
      return false;
  }

  // Should contain at least one special character
  if (!/[$@$!%*?&]/.test(password)) {
      return false;
  }

  return true;
}


function flipCard() {
  var flipCard = document.querySelector('.flip-card');
  flipCard.classList.toggle('flipped');
}

function validateLoginForm() {
  // Your login form validation logic goes here
  return true; // Placeholder, replace with actual validation
}

function validateSignUpForm() {
  // Your sign-up form validation logic goes here
  return true; // Placeholder,
}
