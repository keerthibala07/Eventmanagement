// JavaScript (index.js)
function handleFormSubmission(source) {
    localStorage.setItem('sourcePage', source);
    var formIsValid = validateForm();

    if (formIsValid) {
        redirectToPage(source);
    }
}
function validateForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    var privacyPolicyCheckbox = document.getElementById('privacyPolicy');

    // Resetting all error messages and styles
    resetErrorMessage('name');
    resetErrorMessage('email');
    resetErrorMessage('password');
    resetErrorMessage('confirmPassword');
    resetErrorMessage('privacyPolicy');

    // Validation logic for Name
    if (!validateInputField(nameInput, 'red', 'nameError', 'Please enter your name')) {
        return false;
    }

    // Validation logic for Email
    if (!validateInputField(emailInput, 'red', 'emailError', 'Please enter a valid email') || !isValidEmail(emailInput.value.trim())) {
        return false;
    }

   

    // Validation logic for Password
    if (!validateInputField(passwordInput, 'red', 'passwordError', 'Please enter a password')) {
        return false;
    }

    // Validation logic for Confirm Password
    if (!validateInputField(confirmPasswordInput, 'red', 'confirmPasswordError', 'Passwords do not match') || confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
        return false;
    }

    // Validation logic for Privacy Policy Checkbox
    if (!privacyPolicyCheckbox.checked) {
        showError('privacyPolicyError', 'Please agree to the privacy policy');
        return false;
    }

    return true; // Form is valid and can be submitted
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

function isValidEmail(email) {
    // Add your email validation logic here
    // For simplicity, I'm providing a basic example
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function resetErrorMessage(errorId) {
    document.getElementById(errorId).innerHTML = '';
}

function showError(errorId, errorMessage) {
    document.getElementById(errorId).innerHTML = errorMessage;
}

function removeErrorClass(element) {
    element.classList.remove('error');
}

function addErrorClass(element, borderColor) {
    element.classList.add('error');
    element.style.borderColor = borderColor;
}

// Prevent the default form submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    handleFormSubmission('signup');
});

// Add an event listener to each input field for input change
document.getElementById('name').addEventListener('input', function () {
    updateValidation(this, 'nameError');
});

document.getElementById('email').addEventListener('input', function () {
    updateValidation(this, 'emailError');
});


document.getElementById('password').addEventListener('input', function () {
    updateValidation(this, 'passwordError');
});

document.getElementById('confirmPassword').addEventListener('input', function () {
    updateValidation(this, 'confirmPasswordError');
});

document.getElementById('privacyPolicy').addEventListener('change', function () {
    updateValidation(this, 'privacyPolicyError');
});

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
    if (!validateInputField(passwordInput, 'red', 'passwordError', 'Please enter a password')) {
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
    } else {
        removeErrorClass(inputElement);
        resetErrorMessage(errorId);
    }
    if (inputElement.id === 'confirmPassword') {
        var passwordInput = document.getElementById('password').value.trim();
        if (inputValue !== passwordInput) {
            addErrorClass(inputElement, 'red');
            showError(errorId, 'Passwords do not match');
        } else {
            removeErrorClass(inputElement);
            resetErrorMessage(errorId);
        }
    } 
    if (inputElement.id === 'email') {
        if (!isValidEmail(inputValue)) {
            addErrorClass(inputElement, 'red');
            showError(errorId, 'Invalid email format');
        } else {
            removeErrorClass(inputElement);
            resetErrorMessage(errorId);
        }
    }
}
