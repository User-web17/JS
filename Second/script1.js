// 1
let func = (a, b) => Math.min(a,b);
console.log(func(1, 15));

// 2
let func1 = (x, y) => Math.pow(x, y);
console.log(func1(2, 3));

// 3
function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(5));

// 4
function func3(x) {
    for (let i = 0; i < 11; i++) {
        console.log(`${x} * ${i} = ${x*i}`);
    }
}

func3(2);

// 5
let func4 = (a, b) => a - (Math.floor(a/b) * b);
let newfunc = (a, b) => a % b; // for comparison
console.log(func4(7, 5))
console.log(newfunc(7, 5))

// 6
function func5(...args) {
    let sum = 0;
    for (let num of args) {
        sum += num;
    }
    return sum;
}

console.log(func5(1,2,3,4,5));

// 7
function func6(...args) {
    if (args.length < 1 || args.length > 5) {
        return "The arguments count has to be from 1 to 5";
    }
    return Math.max(...args);
}

console.log(func6(1,2,3,4,5));

// 8
function func7(a, b, isEven) {
    if (isPrime === false) {
        for (let i = a; i < b; i++){
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    }
    if (isPrime === true) {
        for (let i = a; i < b; i++){
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
    else {
        console.log("Error")
    }
}

func7(1, 20, true);
func7(1, 20, false);
func7(1, 20, null);

// 9
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function nextDay(day, month, year) {
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (isLeapYear(year)) {
        daysInMonth[1] = 29;
    }

    day++;

    if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;

        if (month > 12) {
            month = 1;
            year++;
        }
    }

    return `${day}.${month}.${year}`;
}
console.log(nextDay(28, 2, 2026)); 