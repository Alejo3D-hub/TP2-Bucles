let edad = prompt("Ingresá tu edad:");

if (isNaN(edad)) {
    document.writeln("LA EDAD INGRESADA NO ES VÁLIDA.");
} else {
    edad = Number(edad);
    if (edad >= 18) {
        document.writeln("YA PODÉS CONDUCIR.");
    } else {
        document.writeln("AÚN NO PODÉS CONDUCIR.");
    }
}
