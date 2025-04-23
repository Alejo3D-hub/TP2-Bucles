const filas = parseInt(prompt(`Ìngresa un número de filas`))
const columnas = parseInt(prompt(`Ingresa un número de columnas`))
let valorCelda= filas * columnas
console.log(valorCelda)

document.writeln(`<table> <tbody>`)
for (let indiceFilas = 1; indiceFilas <= filas; indiceFilas++) {
  document.writeln(`<tr>`)
  for(let indiceColumnas=0; indiceColumnas<columnas; indiceColumnas++){
  document.writeln(`<td>${valorCelda}</td>`)
  valorCelda--; //valorCelda = valorCelda -1
}
  document.writeln(`</tr>`)
}
document.writeln(` </tbody></table>`)
