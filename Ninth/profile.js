const form = document.getElementById("profileForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const birthYear = document.getElementById("birthYear");
const gender = document.getElementById("gender");
const phone = document.getElementById("phone");
const skype = document.getElementById("skype");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const birthYearError = document.getElementById("birthYearError");
const genderError = document.getElementById("genderError");
const phoneError = document.getElementById("phoneError");
const skypeError = document.getElementById("skypeError");

const exitBtn = document.getElementById("exitBtn");

function setCookie(name, value, hours) {
    const date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);

    document.cookie =
        `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`;
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

function deleteCookie(name) {

    document.cookie =
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;

}

if (!getCookie("email") || !getCookie("password")) {

    window.location.href = "signup.html";

}

firstName.value = getCookie("firstName") || "";
lastName.value = getCookie("lastName") || "";
birthYear.value = getCookie("birthYear") || "";
gender.value = getCookie("gender") || "";
phone.value = getCookie("phone") || "";
skype.value = getCookie("skype") || "";

form.addEventListener("submit", function (e) {

    e.preventDefault();

    firstNameError.textContent = "";
    lastNameError.textContent = "";
    birthYearError.textContent = "";
    genderError.textContent = "";
    phoneError.textContent = "";
    skypeError.textContent = "";

    document
        .querySelectorAll("input, select")
        .forEach(item => item.classList.remove("error-input"));

    let valid = true;

    const namePattern = /^[A-Za-zА-Яа-яІіЇїЄєҐґ]+$/;

    if (firstName.value.trim() === "") {

        firstNameError.textContent = "First name is required.";
        firstName.classList.add("error-input");
        valid = false;

    }
    else if (firstName.value.length > 20 || !namePattern.test(firstName.value)) {

        firstNameError.textContent =
            "Only letters. Maximum 20 characters.";

        firstName.classList.add("error-input");

        valid = false;

    }

    if (lastName.value.trim() === "") {

        lastNameError.textContent = "Last name is required.";

        lastName.classList.add("error-input");

        valid = false;

    }
    else if (lastName.value.length > 20 || !namePattern.test(lastName.value)) {

        lastNameError.textContent =
            "Only letters. Maximum 20 characters.";

        lastName.classList.add("error-input");

        valid = false;

    }

    const currentYear = new Date().getFullYear();

    if (birthYear.value === "") {

        birthYearError.textContent = "Birth year is required.";

        birthYear.classList.add("error-input");

        valid = false;

    }
    else if (birthYear.value < 1900 || birthYear.value > currentYear) {

        birthYearError.textContent =
            `Year must be between 1900 and ${currentYear}.`;

        birthYear.classList.add("error-input");

        valid = false;

    }

    if (gender.value === "") {

        genderError.textContent = "Choose gender.";

        gender.classList.add("error-input");

        valid = false;

    }

    if (phone.value.trim() !== "") {

        const phonePattern = /^[0-9()\-\s]+$/;

        const digits = phone.value.replace(/\D/g, "");

        if (!phonePattern.test(phone.value) ||
            digits.length < 10 ||
            digits.length > 12) {

            phoneError.textContent = "Invalid phone number.";

            phone.classList.add("error-input");

            valid = false;

        }

    }

    if (skype.value.trim() !== "") {

        const skypePattern = /^[A-Za-z0-9.-]+$/;

        if (!skypePattern.test(skype.value)) {

            skypeError.textContent = "Invalid Skype.";

            skype.classList.add("error-input");

            valid = false;

        }

    }

    if (!valid) return;

    setCookie("firstName", firstName.value, 1);
    setCookie("lastName", lastName.value, 1);
    setCookie("birthYear", birthYear.value, 1);
    setCookie("gender", gender.value, 1);
    setCookie("phone", phone.value, 1);
    setCookie("skype", skype.value, 1);

    window.location.href = "account.html";

});

exitBtn.addEventListener("click", function () {

    deleteCookie("email");
    deleteCookie("password");
    deleteCookie("firstName");
    deleteCookie("lastName");
    deleteCookie("birthYear");
    deleteCookie("gender");
    deleteCookie("phone");
    deleteCookie("skype");

    window.location.href = "signup.html";

});