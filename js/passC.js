function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var errorMessage = document.getElementById("error-message");
    var specCheckMessage = document.getElementById("spec-check");

    // Reset error messages
    errorMessage.textContent = "";
    specCheckMessage.textContent = "";

    // Validate name and email
    if (name === "" || email === "") {
        errorMessage.textContent = "Name and Email are required!";
        return false; // Prevent form submission
    }

    // Validate password match
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return false; // Prevent form submission
    }

    // Check password for uppercase letter and special character
    const hasUpCase = /[A-Z]/.test(password);
    const hasSpChar = /[!@#$%^]/.test(password);
    if (!hasUpCase || !hasSpChar) {
        specCheckMessage.textContent = "Password must contain at least one uppercase letter and one special character.";
        return false; // Prevent form submission
    }

    alert("Form submitted successfully!");
    return true;
}