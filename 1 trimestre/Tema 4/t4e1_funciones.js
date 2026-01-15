function pedirNumero(mensaje, min, max) {
  let valor;

  do {
    const input = prompt(mensaje);
    if (input === null) return null;
    valor = parseFloat(String(input).replace(",", "."));
  } while (isNaN(valor) || valor < min || valor > max);

  return valor;
}

function clasificarIMC(imc) {
  if (imc < 16.00) return "Infrapeso (delgadez severa)";
  else if (imc <= 16.99) return "Infrapeso (delgadez moderada)";
  else if (imc <= 18.49) return "Infrapeso (delgadez aceptable)";
  else if (imc <= 24.99) return "Peso normal";
  else if (imc <= 29.99) return "Sobrepeso";
  else if (imc <= 34.99) return "Obeso (Tipo I)";
  else if (imc <= 40.00) return "Obeso (Tipo II)";
  else return "Obeso (Tipo III)";
}

function lineaEscala(rango, texto, activa) {
  const clase = (texto === activa) ? ' class="resaltado"' : '';
  return '<li' + clase + '><strong>' + rango + '</strong>: ' + texto + '</li>';
}

function escalaHTML(activa) {
  let html = "<ul>";
  html += lineaEscala("&lt;16.00", "Infrapeso (delgadez severa)", activa);
  html += lineaEscala("16.00 - 16.99", "Infrapeso (delgadez moderada)", activa);
  html += lineaEscala("17.00 - 18.49", "Infrapeso (delgadez aceptable)", activa);
  html += lineaEscala("18.50 - 24.99", "Peso normal", activa);
  html += lineaEscala("25.00 - 29.99", "Sobrepeso", activa);
  html += lineaEscala("30.00 - 34.99", "Obeso (Tipo I)", activa);
  html += lineaEscala("35.00 - 40.00", "Obeso (Tipo II)", activa);
  html += lineaEscala(">40.00", "Obeso (Tipo III)", activa);
  html += "</ul>";
  return html;
}

function calcularIMC() {
  const cm = pedirNumero("Introduce tu altura en centímetros:", 50, 260);
  if (cm === null) return;

  const kg = pedirNumero("Introduce tu peso en kg:", 10, 400);
  if (kg === null) return;

  const m = cm / 100;
  const imc = kg / (m * m);
  const clase = clasificarIMC(imc);

  const cont = document.getElementById("resultado");
  cont.innerHTML =
    '<h3>Calculadora de IMC</h3>' +
    '<p>Altura: <strong>' + cm + ' cm</strong> &nbsp; Peso: <strong>' + kg + ' kg</strong></p>' +
    '<p>IMC: <strong>' + imc.toFixed(2) + '</strong></p>' +
    '<p>Clasificación: <span class="resaltado">' + clase + '</span></p>' +
    '<h4>Escala</h4>' +
    escalaHTML(clase);
}


function pedirEdad() {
  let edad;
  do {
    const input = prompt("Introduce tu edad (años):");
    if (input === null) return null;
    edad = parseInt(input);
  } while (isNaN(edad) || edad < 1 || edad > 120);
  return edad;
}

function pedirSexo() {
  let sexo;
  do {
    const input = prompt("Introduce tu sexo (H para hombre / M para mujer):");
    if (input === null) return null;
    sexo = input.trim().toUpperCase();
  } while (sexo !== "H" && sexo !== "M");
  return sexo;
}

function calcularFCM() {
  const edad = pedirEdad();
  if (edad === null) return;

  const sexo = pedirSexo();
  if (sexo === null) return;

  let fcm;
  if (sexo === "H") fcm = 220 - edad;
  else fcm = 226 - edad;

  const recMin = fcm * 0.60, recMax = fcm * 0.70;
  const aerMin = fcm * 0.70, aerMax = fcm * 0.80;
  const anaMin = fcm * 0.80, anaMax = fcm * 0.90;
  const lrMin  = fcm * 0.90, lrMax  = fcm * 1.00;

  const cont = document.getElementById("resultado");

  cont.innerHTML =
    "<h3>Calculadora de FCM</h3>" +
    "<p>Edad: <strong>" + edad + "</strong> &nbsp; Sexo: <strong>" + sexo + "</strong></p>" +
    "<p>FCM estimada: <strong>" + fcm + " lpm</strong></p>" +
    "<table>" +
    "<thead><tr><th>Zona</th><th>%</th><th>Rango (lpm)</th></tr></thead>" +
    "<tbody>" +
    "<tr><td>Recuperación</td><td>60%-70%</td><td>" + Math.round(recMin) + " - " + Math.round(recMax) + "</td></tr>" +
    "<tr><td>Aeróbica</td><td>70%-80%</td><td>" + Math.round(aerMin) + " - " + Math.round(aerMax) + "</td></tr>" +
    "<tr><td>Anaeróbica</td><td>80%-90%</td><td>" + Math.round(anaMin) + " - " + Math.round(anaMax) + "</td></tr>" +
    "<tr><td>Línea roja</td><td>90%-100%</td><td>" + Math.round(lrMin) + " - " + Math.round(lrMax) + "</td></tr>" +
    "</tbody></table>";
}


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


function generarHorario() {
  const cont = document.getElementById("resultado");
  let html = "<h3>Horario de la asociación</h3>";

  const diasLV = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  const bloquesManiana = [];

  for (let h = 9; h < 15; h += 2) {
    const inicio = h.toString().padStart(2, "0") + ":00";
    const fin = (h + 2).toString().padStart(2, "0") + ":00";
    bloquesManiana.push(inicio + "-" + fin);
  }

  html += "<h4>Horario de mañana (L-V)</h4>";
  html += "<table><thead><tr><th>Hora</th>";

  for (let i = 0; i < diasLV.length; i++) {
    html += "<th>" + diasLV[i] + "</th>";
  }
  html += "</tr></thead><tbody>";

  for (let i = 0; i < bloquesManiana.length; i++) {
    html += "<tr><th>" + bloquesManiana[i] + "</th>";
    for (let j = 0; j < diasLV.length; j++) {
      html += "<td></td>";
    }
    html += "</tr>";
  }
  html += "</tbody></table>";

  const diasLD = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  const bloquesTarde = [];

  for (let h = 16; h < 21; h++) {
    bloquesTarde.push(h + ":00-" + (h + 1) + ":00");
  }

  html += "<h4>Horario de tarde (L-D)</h4>";
  html += "<table><thead><tr><th>Hora</th>";

  for (let i = 0; i < diasLD.length; i++) {
    html += "<th>" + diasLD[i] + "</th>";
  }
  html += "</tr></thead><tbody>";

  for (let i = 0; i < bloquesTarde.length; i++) {
    html += "<tr><th>" + bloquesTarde[i] + "</th>";
    for (let j = 0; j < diasLD.length; j++) {
      html += "<td></td>";
    }
    html += "</tr>";
  }
  html += "</tbody></table>";

  cont.innerHTML = html;
}
