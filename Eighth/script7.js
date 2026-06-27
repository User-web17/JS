// 1
const form = document.getElementById("loginForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const username = document.getElementById("username").value;
    const remember = document.getElementById("remember").checked;

    if(remember){
        result.textContent =
        `Привіт, ${username}! Я тебе запам'ятав.`;
    }
    else{
        result.textContent =
        `Привіт, ${username}! Я тебе не запам'ятав.`;
    }

});

// 2
const form1 = document.getElementById("registerForm");
const result1 = document.getElementById("result1");

form1.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;

    if(password1 !== password2){

        result1.style.color = "red";
        result1.textContent = "Паролі не співпадають.";

        return;
    }

    result1.style.color = "#6b3fa0";
    result1.textContent =
        `На ${email} надіслано лист із підтвердженням.`;

});

// 3
const form2 = document.getElementById("userForm");
const result2 = document.getElementById("result2");

form2.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const about = document.getElementById("about").value;

    result2.innerHTML = `
        <h3>Введена інформація</h3>

        <p><strong>Ім'я:</strong> ${name}</p>

        <p><strong>Прізвище:</strong> ${surname}</p>

        <p><strong>Вік:</strong> ${age}</p>

        <p><strong>Пошта:</strong> ${email}</p>

        <p><strong>Місто:</strong> ${city}</p>

        <p><strong>Про себе:</strong> ${about}</p>
    `;

});

// 4
const colorForm = document.getElementById("colorForm");
const palette = document.getElementById("palette");

colorForm.addEventListener("submit", function(event){

    event.preventDefault();

    const colorName = document.getElementById("colorName").value;
    const color = document.getElementById("colorPicker").value;

    const card = document.createElement("div");

    card.classList.add("color-card");

    card.innerHTML = `
        <div class="color-box" style="background:${color};"></div>

        <h4>${colorName}</h4>

        <p>${color}</p>
    `;

    palette.append(card);

    colorForm.reset();

});


// 5
const testForm = document.getElementById("testForm");
const questionsList = document.getElementById("questionsList");

let count = 1;

testForm.addEventListener("submit", function(event){

    event.preventDefault();

    const question = document.getElementById("question").value;
    const correct = document.getElementById("correct").value;
    const wrong = document.getElementById("wrong").value;

    const card = document.createElement("div");

    card.classList.add("question-card");

    card.innerHTML = `
        <h4>Питання ${count}</h4>

        <p><b>Питання:</b> ${question}</p>

        <p style="color:green;">
            ✔ ${correct}
        </p>

        <p style="color:red;">
            ✖ ${wrong}
        </p>
    `;

    questionsList.append(card);

    count++;

    testForm.reset();

});