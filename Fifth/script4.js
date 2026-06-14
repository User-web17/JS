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
    #Name;
    get getName() {
        console.log(this.#Name);
    }

    getInfo(sides, marks) {
        const obj = {};

        for (let i = 0; i < sides.length; i++) {
            obj[sides[i]] = marks[i];
        }

        console.log(obj);
    }

    getPerimeter() {
        console.log("Base class perimeter")
    }

    getArea() {
        console.log("Base class area")
    }
}

class Square extends Figure{
    getPerimeter(a) {
        console.log(`Square perimeter: ${a*4}`)
    }

    getArea(a) {
        console.log(`Square Area: ${Math.pow(a, 2)}`)
    }
}

class Rectangle extends Figure{
    getPerimeter(a, b) {
        console.log(`Rectangle perimeter: ${(a+b)*2}`)
    }

    getArea(a,b) {
        console.log(`Rectangle perimeter: ${a*b}`)
    }
}

class Triangle extends Figure{
    getPerimeter(a, b, c) {
        console.log(`Triangle perimeter: ${a+b+c}`)
    }

    getArea(a, b, c) {
        const p = (a + b + c) / 2;
        console.log(
            `Triangle area: ${Math.sqrt(p * (p - a) * (p - b) * (p - c))}`
        );
    }
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