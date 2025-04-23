let numero = parseInt(prompt("Ingresá un número (máximo 50):"));

if (isNaN(numero) || numero < 1 || numero > 50) {
  document.writeln("Por favor, ingresá un número válido entre 1 y 50.");
} else {
  let linea = "";
  for (let i = 1; i <= numero; i++) {
    linea += i;
    document.writeln(linea + "<br>");
  }
}

