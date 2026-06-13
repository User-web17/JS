// 1
class PrintMaсhine {
    print(size, color, fontFamily) {
        document.write(
            `<p style="font-size:${size}px; color:${color}; font-family:${fontFamily};">
            Text
            </p>`
        )
    }

}

const MyPrintMachine = new PrintMaсhine();
MyPrintMachine.print("30", "blue", "Consolas");

