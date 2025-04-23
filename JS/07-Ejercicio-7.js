// Pedimos al usuario un número
let numero = parseInt(prompt("Ingrese un número (no mayor a 50):"));

// Validamos que sea un número correcto
if (isNaN(numero) || numero > 50 || numero < 1) {
    alert("Número inválido. Debe ser entre 1 y 50.");
} else {
    // Bucle para hacer la pirámide inversa
    for (let fila = numero; fila >= 1; fila--) {
        let linea = "";
        for (let repeticion = 0; repeticion < fila; repeticion++) {
            linea += fila;
        }
        document.writeln(linea + "<br>");
    }
}
