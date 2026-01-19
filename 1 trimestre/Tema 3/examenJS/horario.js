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
