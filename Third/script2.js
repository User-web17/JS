// 1
let rectangle = {
    height: 25,
    width: 30,
    x: 10,
    y: 20,
}

function showInfo(rectangle) {
    console.log("Starting point left:", rectangle.x);
    console.log("Starting point right:", rectangle.y);
    console.log("Height:", rectangle.height);
    console.log("Width:", rectangle.width);
}

function getWidth(rectangle) {
    return rectangle.width;
}

function getHeight(rectangle) {
    return rectangle.height;
}

function getArea(rectangle) {
    return rectangle.width * rectangle.height;
}

function getPerimeter(rectangle) {
    return 2 * (rectangle.width + rectangle.height);
}

function changeWidth(rectangle, newWidth) {
    rectangle.width += newWidth
}

function changeHeight(rectangle, newHeight) {
    rectangle.height += newHeight
}

function changeMetrics(rectangle, newWidth, newHeight) {
    rectangle.width += newWidth
    rectangle.height += newHeight
}

function moveX(rectangle, dx) {
    rectangle.x += dx;
}

function moveY(rectangle, dy) {
    rectangle.y += dy;
}

function move(rectangle, dx, dy) {
    rectangle.x += dx;
    rectangle.y += dy;
}

function isInside(rectangle, x, y) {
    return (
        x >= rectangle.x &&
        x <= rectangle.x + rectangle.width &&
        y >= rectangle.y &&
        y <= rectangle.y + rectangle.height
    );
}

console.log("=== Rectangle Info ===");
showInfo(rectangle);

console.log("Width:", getWidth(rectangle));
console.log("Height:", getHeight(rectangle));
console.log("Area:", getArea(rectangle));
console.log("Perimeter:", getPerimeter(rectangle));

console.log("\n=== Change Width ===");
changeWidth(rectangle, 5);
console.log("New Width:", rectangle.width);

console.log("\n=== Change Height ===");
changeHeight(rectangle, 3);
console.log("New Height:", rectangle.height);

console.log("\n=== Change Width and Height ===");
changeMetrics(rectangle, 2, 4);
console.log("Width:", rectangle.width);
console.log("Height:", rectangle.height);

console.log("\n=== Move on X ===");
moveX(rectangle, 10);
console.log("X:", rectangle.x);

console.log("\n=== Move on Y ===");
moveY(rectangle, -5);
console.log("Y:", rectangle.y);

console.log("\n=== Move on X and Y ===");
move(rectangle, 3, 7);
console.log("X:", rectangle.x);
console.log("Y:", rectangle.y);

console.log("\n=== Point Inside Check ===");
console.log("(25, 30):", isInside(rectangle, 25, 30));
console.log("(100, 100):", isInside(rectangle, 100, 100));


