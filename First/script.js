// // 1
// let number = prompt("Enter number: ");
// alert(pow(number))

// // 2
// let number1 = prompt("Enter number: ");
// let number2 = prompt("Enter number: ");
// alert((number1 + number2) / 2)

// 3
// let width = prompt("Enter square width: ");
// let newStr = "";
// for (let i = 0; i < width; i++){
//     for (let j = 0; j < width; j++){
//         newStr += "*";
//     }
//     newStr += "\n";
// }
// alert(newStr);

// 4
// const ratio = 0.62137;
// let kilometers = prompt("Enter kilometers: ");
// alert(kilometers * ratio);

// 5
// let num1 = Number.parseInt(prompt("Enter number: "));
// let num2 = Number.parseInt(prompt("Enter number: "));

// let answer = prompt('Enter action(+, -, *, /): ');
// switch (answer){
//     case "+":
//         alert(num1 + num2);
//         break;
//     case "-":
//         alert(num1 - num2);
//         break;
//     case "*":
//         alert(num1 * num2);
//         break;
//     case "/":
//         alert(num1 / num2);
//         break;
//     default:
//         alert("Undefined action");
//         break;
// }

// 6
// let a = Number.parseInt(prompt("Enter number 1: "));
// let b = Number.parseInt(prompt("Enter number 2: "));

// let x = -b / a
// alert(x);

// 7
let hours = Number.parseInt(prompt("Enter hours: "));
let minutes = Number.parseInt(prompt("Enter minutes: "));

let left = 24 - hours;
let right = 60 - minutes;

alert(`${left} : ${right} left till tomorrow`);