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
