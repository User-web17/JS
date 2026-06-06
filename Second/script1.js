let userName = "name";
let displayName = userName || 'Анонім';

console.log(displayName);

let count = 0;
let finalCount = count ?? 10;
console.log(finalCount);

let isLoggedIn = true;
isLoggedIn && console.log("Показуємо панель користувача");

const arr = ['Яблуко', 'Банан', 'Апельсин'];

for (let fruit of arr) {
    console.log(fruit);
}

const user = {
    name: 'Антон',
    age: 19
};

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}