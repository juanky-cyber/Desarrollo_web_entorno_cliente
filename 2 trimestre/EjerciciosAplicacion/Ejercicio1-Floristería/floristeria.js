document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const tabla = document.getElementById("tablaPlantas");
  const tbody = tabla.querySelector("tbody");

  const btnGenerar = document.createElement("button");
  btnGenerar.textContent = "Generar planta";

  btnGenerar.addEventListener("click", () => {
    const nombre = prompt("Nombre de la planta:");
    if (nombre === null) return;

    const ubicacion = prompt("Ubicación de la planta:");
    if (ubicacion === null) return;

    const ejemplares = prompt("Número de ejemplares:");
    if (ejemplares === null) return;

    const flor = prompt("¿Tiene flor? (sí/no):");
    if (flor === null) return;

    const tr = document.createElement("tr");

    const tdNombre = document.createElement("td");
    tdNombre.textContent = nombre;

    const tdUbicacion = document.createElement("td");
    tdUbicacion.textContent = ubicacion;

    const tdEjemplares = document.createElement("td");
    tdEjemplares.textContent = ejemplares;

    const tdFlor = document.createElement("td");
    tdFlor.textContent = flor;

    tr.append(tdNombre, tdUbicacion, tdEjemplares, tdFlor);
    tbody.appendChild(tr);
  });

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar fila";

  btnBorrar.addEventListener("click", () => {
    const filas = tbody.querySelectorAll("tr");
    if (filas.length === 0) {
      alert("No hay filas para borrar.");
      return;
    }
    filas[filas.length - 1].remove();
  });

  const botonera = document.createElement("div");
  botonera.className = "botonera";
  botonera.append(btnGenerar, btnBorrar);
  body.insertBefore(botonera, body.firstChild.nextSibling);

  const btnContar = document.createElement("button");
  btnContar.textContent = "Mostrar número de filas";

  btnContar.addEventListener("click", () => {
    const filas = tbody.querySelectorAll("tr").length;
    alert("Número de filas en la tabla: " + filas);
  });

  body.appendChild(document.createElement("hr"));
  body.appendChild(btnContar);
});
