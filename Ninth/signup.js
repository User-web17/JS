const form = document.getElementById("signupForm");

const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

function setCookie(name, value, hours) {
    const date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);

    document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {

    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {

        cookie = cookie.trim();

        if (cookie.startsWith(name + "=")) {

            return decodeURIComponent(cookie.substring(name.length + 1));

        }
    }

    return null;
}

if (getCookie("email") && getCookie("password")) {

    window.location.href = "profile.html";

}

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    email.classList.remove("error-input");
    password.classList.remove("error-input");
    confirmPassword.classList.remove("error-input");

    let valid = true;

    const emailPattern = /^[A-Za-z0-9._-]{3,}@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/;

    if (email.value.trim() === "") {

        emailError.textContent = "Email is required.";

        email.classList.add("error-input");

        valid = false;

    }
    else if (!emailPattern.test(email.value)) {

        emailError.textContent = "Invalid email.";

        email.classList.add("error-input");

        valid = false;

    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (password.value === "") {

        passwordError.textContent = "Password is required.";

        password.classList.add("error-input");

        valid = false;

    }
    else if (!passwordPattern.test(password.value)) {

        passwordError.textContent =
            "Minimum 6 characters, 1 uppercase, 1 lowercase and 1 digit.";

        password.classList.add("error-input");

        valid = false;

    }

    if (confirmPassword.value === "") {

        confirmPasswordError.textContent = "Confirm your password.";

        confirmPassword.classList.add("error-input");

        valid = false;

    }
    else if (confirmPassword.value !== password.value) {

        confirmPasswordError.textContent = "Passwords do not match.";

        confirmPassword.classList.add("error-input");

        valid = false;

    }

    if (!valid) return;

    setCookie("email", email.value, 1);
    setCookie("password", password.value, 1);

    window.location.href = "profile.html";

});