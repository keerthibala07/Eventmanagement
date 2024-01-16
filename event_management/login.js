// JavaScript (login.js)

document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        // Call your custom validation function
        handleLoginFormSubmission();
    });

    // Add an event listener to each input field for input change
    document.getElementById('email').addEventListener('input', function () {
        updateValidation(this, 'emailError');
    });

    document.getElementById('password').addEventListener('input', function () {
        updateValidation(this, 'passwordError');
    });
});

function handleLoginFormSubmission() {
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');

    // Resetting all error messages and styles
    resetErrorMessage('emailError');
    resetErrorMessage('passwordError');

    // Validation logic for Email
    if (!validateInputField(emailInput, 'red', 'emailError', 'Please enter a valid email') || !isValidEmail(emailInput.value.trim())) {
        return false;
    }

    // Validation logic for Password
    if (!validateInputField(passwordInput, 'red', 'passwordError', 'Please enter your password')) {
        return false;
    }

    // You can proceed with the login logic here
    alert('Login successful!');
    return true;
}

// Function to validate the login form
function validateLoginForm() {
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');

    // Resetting all error messages and styles
    resetErrorMessage('emailError');
    resetErrorMessage('passwordError');

    // Validation logic for Email
    if (!validateInputField(emailInput, 'red', 'emailError', 'Please enter a valid email') || !isValidEmail(emailInput.value.trim())) {
        return false;
    }

    // Validation logic for Password
    if (!validateInputField(passwordInput, 'red', 'passwordError', 'Please enter your password')) {
        return false;
    }

    return true; // Form is valid and can be submitted
}

// Function to update border color and validation message based on input value
function updateValidation(inputElement, errorId) {
    var inputValue = inputElement.value.trim();
    if (inputValue === '') {
        addErrorClass(inputElement, 'red');
        showError(errorId, 'This field is required');
    } else if (inputElement.id === 'email' && !isValidEmail(inputValue)) {
        addErrorClass(inputElement, 'red');
        showError(errorId, 'Invalid email format');
    } else {
        // Remove red border and reset error message when the input value is not empty
        removeErrorClass(inputElement);
        resetErrorMessage(errorId);
    }
}

function isValidEmail(email) {
    // Add your email validation logic here
    // For simplicity, I'm providing a basic example
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateInputField(inputElement, borderColor, errorId, errorMessage) {
    var inputValue = inputElement.value.trim();
    if (inputValue === '') {
        addErrorClass(inputElement, borderColor);
        showError(errorId, errorMessage);
        return false;
    } else {
        removeErrorClass(inputElement);
        return true;
    }
}

function resetErrorMessage(errorId) {
    document.getElementById(errorId).innerHTML = '';
}

function showError(errorId, errorMessage) {
    document.getElementById(errorId).innerHTML = errorMessage;
}

function removeErrorClass(element) {
    element.classList.remove('error');
    element.style.borderColor = ''; // Remove border color
}

function addErrorClass(element, borderColor) {
    element.classList.add('error');
    element.style.borderColor = borderColor;
}

