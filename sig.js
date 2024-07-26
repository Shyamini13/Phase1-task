
function validateForm() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const city = document.getElementById("city").value;

    const nameError = document.getElementById("name-error");
    const addressError = document.getElementById("address-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const cityError = document.getElementById("city-error");

    nameError.textContent = "";
    addressError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    cityError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent = "Please enter a valid name.";
        isValid = false;
    }

    if (address === "") {
        addressError.textContent = "Please enter your address.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (city === "") {
        cityError.textContent = "Please select your city.";
        isValid = false;
    }

    return isValid;
}
