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

    resetErrorMessage('name');
    resetErrorMessage('email');
    resetErrorMessage('password');
    resetErrorMessage('confirmPassword');
    resetErrorMessage('privacyPolicy');

    if (!validateInputField(nameInput, 'red', 'nameError', 'Please enter your name')) {
        return false;
    }

    if (!validateInputField(emailInput, 'red', 'emailError', 'Please enter a valid email') || !isValidEmail(emailInput.value.trim())) {
        return false;
    }

    if (!validateInputField(passwordInput, 'red', 'passwordError', 'Please enter a password')) {
        return false;
    }

    if (!validateInputField(confirmPasswordInput, 'red', 'confirmPasswordError', 'Passwords do not match') || confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
        return false;
    }

    if (!privacyPolicyCheckbox.checked) {
        showError('privacyPolicyError', 'Please agree to the privacy policy');
        return false;
    }

    return true;
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
    element.style.borderColor = ''; // Remove border color
}

function addErrorClass(element, borderColor) {
    element.classList.add('error');
    element.style.borderColor = borderColor;
}

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    handleFormSubmission('signup');
});

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

    resetErrorMessage('emailError');
    resetErrorMessage('passwordError');

    if (!validateInputField(emailInput, 'red', 'emailError', 'Please enter a valid email') || !isValidEmail(emailInput.value.trim())) {
        return false;
    }

    if (!validateInputField(passwordInput, 'red', 'passwordError', 'Please enter a password')) {
        return false;
    }

    return true;
}

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
