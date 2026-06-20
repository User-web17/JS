// 1
const input = document.getElementById("number");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

plusBtn.addEventListener("click", () => { // event listener plus
    input.value = Number(input.value) + 1;
});

minusBtn.addEventListener("click", () => { // event listener minus
    input.value = Number(input.value) - 1;
});


// 2

window.addBlock = function () {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    const newDiv = document.createElement('div');

    newDiv.classList.add('new-element');
    newDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // expression to get random color

    newDiv.addEventListener('click', function () { // add event listener remove
        this.remove();
    });

    document.getElementById('container').append(newDiv);
};

// 3
const text = document.getElementById("text");
const cells = document.querySelectorAll(".color-cell"); // all cells

cells.forEach(cell => { // for each cell, add event listener click, when clicked - text.color = cell.dataset.color
    cell.addEventListener("click", () => {
        text.style.color = cell.dataset.color; 
    });
});

// 4
const form = document.getElementById("commentForm");
const comments = document.getElementById("comments");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;

    const text = document.getElementById("commentText").value;

    const date = new Date().toLocaleString();

    const comment = document.createElement("div");
    comment.classList.add("comment");

    comment.innerHTML = `
        <div class="comment-header">
            ${username} | ${date}
        </div>
        <div>
            ${text}
        </div>
    `;

    comments.append(comment);

    form.reset();
});

// 5
const countries = [
    "Ukraine",
    "Poland",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Portugal",
    "Romania",
    "Moldova",
    "Bulgaria",
    "Greece",
    "Turkey",
    "Canada",
    "United States",
    "Mexico",
    "Brazil",
    "Argentina",
    "Japan",
    "China",
    "South Korea",
    "Australia"
];

const CountryInput = document.getElementById("countryInput");
const suggestions = document.getElementById("suggestions");

CountryInput.addEventListener("input", () => {
    const value = CountryInput.value.toLowerCase();

    suggestions.innerHTML = "";

    if (value === "") {
        return;
    }

    const matches = countries.filter(country =>
            country.toLowerCase().startsWith(value)
        )
    .slice(0, 10);

    matches.forEach(country => {
        const div = document.createElement("div");

        div.classList.add("suggestion");
        div.textContent = country;

        div.addEventListener("click", () => {
            CountryInput.value = country;
            suggestions.innerHTML = "";
        });

        suggestions.append(div);
    });
});