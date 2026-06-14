// 1
class Button {
    showBtn(width, height, text) {
        document.write(`
            <button>${text}</button>
            `);
    }
}

class BootstrapButton extends Button {
    showBtn(width, height, text, color) {
        document.write(`
            <button style="
                width:${width}px;
                height:${height}px;
                background-color:${color};
            ">${text}</button>
            `);
    }
}

const buttons = [
    new Button, new BootstrapButton
]

buttons.forEach(button => button.showBtn(150, 50, "Text", "blue"));

// 2
class Figure {
    getPerimeter() {
        console.log("Base class perimeter");
    }

    getArea() {
        console.log("Base class area");
    }
}

class Square extends Figure {
    constructor(a) {
        super();
        this.a = a;
    }

    getPerimeter() {
        console.log(`Square perimeter: ${this.a * 4}`);
    }

    getArea() {
        console.log(`Square area: ${this.a ** 2}`);
    }
}

class Rectangle extends Figure {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }

    getPerimeter() {
        console.log(`Rectangle perimeter: ${(this.a + this.b) * 2}`);
    }

    getArea() {
        console.log(`Rectangle area: ${this.a * this.b}`);
    }
}

class Triangle extends Figure {
    constructor(a, b, c) {
        super(); // base class constructor for this
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        console.log(`Triangle perimeter: ${this.a + this.b + this.c}`);
    }

    getArea() {
        const p = (this.a + this.b + this.c) / 2;
        console.log(
            `Triangle area: ${Math.sqrt(
                p * (p - this.a) * (p - this.b) * (p - this.c)
            )}`
        );
    }
}

const figures = [
    new Square(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
];

for (const figure of figures) {
    console.log(`=== ${figure.constructor.name} ===`);
    figure.getPerimeter();
    figure.getArea();
    console.log();
}

// 3

class ExtendedArray extends Array {
    getString(separator = ",") {
        return this.join(separator); // this = array
    }

    getHtml(tagName) {
        let result = "";

        for (let item of this) { // of(arrays) = till the end of this exact array
            result += `<${tagName}>${item}</${tagName}>`;
        }

        if (tagName.toLowerCase() /* lower case */ === "li") {
            result = `<ul>${result}</ul>`;
        }

        return result;
    }
}

let fruits = new ExtendedArray(
    "Яблуко",
    "Груша",
    "Апельсин",
    "Банан"
);

console.log("getString(', '):");
document.write(fruits.getString(", "));

console.log("\ngetString(' - '):");
document.write(fruits.getString(" - "));

console.log("\ngetHtml('p'):");
document.write(fruits.getHtml("p"));

console.log("\ngetHtml('li'):");
document.write(fruits.getHtml("li"));