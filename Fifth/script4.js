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
