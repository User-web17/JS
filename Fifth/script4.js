class Printer {
    print(text) {
        console.log(`Друк: ${text}`);
    }
}

class SecurePrinter extends Printer {
    print(text) {
        super.print('[ЗАШИФРОВАНО]');
        console.log('[LOG] Зашифрований документ роздруковано');
    }
}

const myPrinter = new SecurePrinter();

myPrinter.print("Тигр це вовк, а вовк це не тигр");

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} їсть`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} гавкає!`);
    }

    executeCommand(command) {
        console.log(`${this.name} executes command ${command}`);
    }
}

class Cat extends Animal { }

const myPet = new Dog('Тигр', 'Вівчарка');

myPet.executeCommand('сидіти');
myPet.eat();
myPet.speak();

console.log(myPet instanceof Animal); // true