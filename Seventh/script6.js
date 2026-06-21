// 1
const table = document.querySelector('table');

table.addEventListener('mouseover', (e) => {
    const block = e.target.closest('td');

    if (block) {
        block.style.backgroundColor = 'orange';
    }
});

table.addEventListener('mouseout', (e) => {
    const block = e.target.closest('td');

    if (block) {
        block.style.backgroundColor = 'antiquewhite';
    }
});

// 2

const paragraph = document.getElementById('txt');

paragraph.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

document.addEventListener('selectstart', (e) => {
    e.preventDefault();
});

// 3

let likes = 0;

const clickBtn = document.getElementById('clickBtn');
const label = document.getElementById('label');

clickBtn.addEventListener('click', () => {
    likes++;
    label.textContent = `👍 Likes: ${likes}`;
});

// 4
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.calculator button');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            try {
                expression += ' = ' + eval(expression);
                display.textContent = expression;
            } catch {
                display.textContent = 'Error';
                expression = '';
            }
        } else {
            expression += value;
            display.textContent = expression;
        }
    });
});

// 5
const categories = document.getElementById("categories");
    const submenu = document.getElementById("submenu");

    categories.addEventListener("click", function(event) {
        event.preventDefault(); // щоб не переходити за #
        submenu.classList.toggle("show");
    });

    // Закривати меню при кліку поза ним
    document.addEventListener("click", function(event) {

        if (!categories.contains(event.target) &&
            !submenu.contains(event.target)) {

            submenu.classList.remove("show");
        }
    });

// 6
const upBtn = document.getElementById("upBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 100) {
        upBtn.style.display = "block";
    } 
    else {
        upBtn.style.display = "none";
    }

});


upBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});