let resultado = "";
let continuar = true;

while (continuar) {
    let texto = prompt("Ingresá una cadena de texto:");
    
    if (texto !== null) {
        if (resultado !== "") {
            resultado += "-";
        }
        resultado += texto;
    }

    continuar = confirm("¿Querés seguir ingresando texto?");
}

document.writeln("Resultado de los textos: " + resultado);
