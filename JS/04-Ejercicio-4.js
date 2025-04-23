let suma = 0;

while (true) {
    let input = prompt("Ingresá un número:");

    if (input === null) {
        break; // El usuario presionó Cancelar
    }

    let numero = parseFloat(input); // Convertimos el texto a número

    if (isNaN(numero)) {
        alert("Eso no es un número válido.");
    } else {
        suma += numero;
    }
}

document.writeln("La suma total es: " + suma);
