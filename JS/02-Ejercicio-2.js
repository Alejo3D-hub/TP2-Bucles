let nota = prompt("Ingresá una nota del 0 al 10:");

if (isNaN(nota)) {
    document.writeln("INTRODUCE UN NÚMERO VÁLIDO");
} else {
    nota = Number(nota);

    if (nota < 0 || nota > 10) {
        document.writeln("NÚMERO ERRÓNEO");
    } else if (nota >= 0 && nota <= 2) {
        document.writeln("MUY DEFICIENTE");
    } else if (nota >= 3 && nota <= 4) {
        document.writeln("INSUFICIENTE");
    } else if (nota >= 5 && nota <= 6) {
        document.writeln("SUFICIENTE");
    } else if (nota === 7) {
        document.writeln("BIEN");
    } else if (nota >= 8 && nota <= 9) {
        document.writeln("NOTABLE");
    } else if (nota === 10) {
        document.writeln("SOBRESALIENTE");
    }
}
