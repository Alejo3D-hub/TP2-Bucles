const letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
let dni;

while (true) {
    dni = prompt("Introduce un número de DNI (entre 0 y 99999999) o presiona 'Cancelar' para salir:");

    if (dni === null) {
        break;
    }

    dni = parseInt(dni);

    if (isNaN(dni) || dni < 0 || dni > 99999999) {
        alert("Introduce un número válido entre 0 y 99999999.");
    } else {
        let resto = dni % 23;
        document.writeln("La letra del DNI " + dni + " es: " + letras[resto] + "<br>");
    }
}
