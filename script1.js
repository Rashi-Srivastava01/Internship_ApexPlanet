const form = document.getElementById("contactForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;
    if (nameField.value.trim() === "") {
        nameError.textContent = "Please enter your name";
        isValid = false;
    }
    if (emailField.value.trim() === "") {
        emailError.textContent = "Please enter your email";
        isValid = false;
    }

    if (messageField.value.trim() === "") {
        messageError.textContent = "Please enter your message";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});
