function calcularCategoria() {
  const categorias = [
    {nombre: "Micros", min: 0, max: 5},
    {nombre: "Prebenjamín", min: 6, max: 7},
    {nombre: "Benjamín", min: 8, max: 9},
    {nombre: "Alevín", min: 10, max: 11},
    {nombre: "Infantil", min: 12, max: 13},
    {nombre: "Cadete", min: 14, max: 15},
    {nombre: "Juvenil", min: 16, max: 18},
    {nombre: "Senior", min: 19, max: 120}
  ];

  const añoActual = new Date().getFullYear();
  let año = NaN;

  do {
    const input = prompt("Introduce tu año de nacimiento (YYYY):");
    if (input === null) return;
    año = parseInt(input);
  } while (isNaN(año) || año < 1900 || año > añoActual);

  const edad = añoActual - año;


  let categoria = "Sin categoría";
  for (let i = 0; i < categorias.length; i++) {
    if (edad >= categorias[i].min && edad <= categorias[i].max) {
      categoria = categorias[i].nombre;
      break;
    }
  }

  let listaHTML = "<ul>";
  for (let i = 0; i < categorias.length; i++) {
    const c = categorias[i];
    const rango = (c.min === c.max) ? c.min : c.min + "-" + c.max;
    if (c.nombre === categoria) {
      listaHTML += '<li class="resaltado"><strong>' + c.nombre + '</strong> (' + rango + ' años)</li>';
    } else {
      listaHTML += '<li><strong>' + c.nombre + '</strong> (' + rango + ' años)</li>';
    }
  }
  listaHTML += "</ul>";

  const cont = document.getElementById("resultado");
  cont.innerHTML =
    "<h3>Calculadora de categoría</h3>" +
    "<p>Año de nacimiento: <strong>" + año + "</strong> &nbsp; Edad: <strong>" + edad + "</strong></p>" +
    "<p>Categoría: <span class='resaltado'>" + categoria + "</span></p>" +
    "<h4>Categorías (Micros → Senior)</h4>" +
    listaHTML;
}
