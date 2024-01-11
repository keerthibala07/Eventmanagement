function validateForm(formId) {
  var form = document.getElementById(formId);

  var nameInput = form.querySelector('input[name="name"]');
  var emailInput = form.querySelector('input[name="email"]');
  var passwordInput = form.querySelector('input[name="password"]');
  var confirmPasswordInput = form.querySelector('input[name="confirmPassword"]');
  var privacyPolicy = form.querySelector('#privacyPolicy');

  // Remove existing error styles
  removeErrorStyles([nameInput, emailInput, passwordInput, confirmPasswordInput]);

  // Name validation
  if (nameInput.value.trim() === "") {
      showError(nameInput, "Please enter your name");
      return false;
  }

  // Email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
      showError(emailInput, "Please enter a valid email address");
      return false;
  }

  // Password validation
  if (passwordInput.value.length < 8) {
      showError(passwordInput, "Password should be at least 8 characters long");
      return false;
  }

  // Confirm Password validation
  if (passwordInput.value !== confirmPasswordInput.value) {
      showError(confirmPasswordInput, "Passwords do not match");
      return false;
  }

  // Checkbox validation
  if (!privacyPolicy.checked) {
      alert("Please agree to the Privacy Policy");
      return false;
  }

  // If all validations pass
  return true;
}

// Function to add error styles to the input fields and display error messages
function showError(inputElement, errorMessage) {
  inputElement.style.border = "2px solid red";
  alert(errorMessage);
}

// Function to remove error styles from all input fields
function removeErrorStyles(inputElements) {
  inputElements.forEach(function (element) {
      element.style.border = "";
  });
}
