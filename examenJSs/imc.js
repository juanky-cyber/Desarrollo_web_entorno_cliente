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
