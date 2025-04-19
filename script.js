
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submitButton");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validateForm() {
    let isValid = true;

    // Validate Name
    if (nameInput.value.trim() === "") {
        nameError.classList.remove("hidden");
        isValid = false;
    } else {
        nameError.classList.add("hidden");
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.classList.remove("hidden");
        isValid = false;
    } else {
        emailError.classList.add("hidden");
    }

    // Validate Password
    if (passwordInput.value.trim().length < 6) {
        passwordError.classList.remove("hidden");
        isValid = false;
    } else {
        passwordError.classList.add("hidden");
    }

    // Enable or disable the submit button
    submitButton.disabled = !isValid;
}

// Add event listeners for real-time validation
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

// Prevent form submission if validation fails
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    validateForm();
    if (submitButton.disabled) {
        event.preventDefault();
    }
});