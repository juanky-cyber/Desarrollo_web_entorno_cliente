let discos = [];

function mostrarNumeroDiscos() {
  print("Número de discos", `<p>Total: <strong>${discos.length}</strong></p>`);
}

function mostrarListadoDiscos() {
  if (discos.length === 0) {
    print("Listado de discos", "<p>No hay discos en el array.</p>");
    return;
  }

  const como = prompt("Orden actual (a) / inverso (i) / alfabético (o)");
  let lista = discos.slice(); 

  if (como === "i") lista.reverse();
  if (como === "o") lista.sort((a, b) => a.nombre.localeCompare(b.nombre));

  let html = "<ol>";
  for (const d of lista) {
    html += `<li><strong>${d.nombre}</strong> — ${d.grupo} (${d.anio}) [${d.tipo}]</li>`;
  }
  html += "</ol>";

  print("Listado de discos", html);
}

function mostrarIntervaloDiscos() {
  if (discos.length === 0) {
    print("Intervalo de discos", "<p>No hay discos.</p>");
    return;
  }

  const rango = prompt("Introduce intervalo inicio-fin (ej: 1-3):");
  if (!rango) return;

  const [ini, fin] = rango.split("-").map(n => parseInt(n));
  if (isNaN(ini) || isNaN(fin)) {
    alert("Formato incorrecto");
    return;
  }

  const i = Math.max(1, Math.min(ini, fin));
  const f = Math.min(discos.length, Math.max(ini, fin));

  const sub = discos.slice(i - 1, f);

  let html = "<ol>";
  for (const d of sub) {
    html += `<li><strong>${d.nombre}</strong> — ${d.grupo}</li>`;
  }
  html += "</ol>";

  print(`Intervalo de discos (${i}-${f})`, html);
}

function anadirDisco() {
  const nombre = prompt("Nombre del disco:");
  if (!nombre) return;

  const grupo = prompt("Grupo:");
  const anio = prompt("Año:");
  const tipo = prompt("Tipo (rock/pop/punk/indie):");
  const loc = prompt("Número de estantería:");

  const dis = crearDisco(nombre, grupo, anio, tipo, loc);

  const donde = prompt("Añadir al principio (p) o al final (f)?");

  if (donde === "p") discos.unshift(dis);
  else discos.push(dis);

  print("Disco añadido", `<pre>${dis.mostrarInfo()}</pre>`);
}

function borrarDisco() {
  if (discos.length === 0) {
    print("Borrar disco", "<p>No hay discos que borrar.</p>");
    return;
  }

  const donde = prompt("¿Borrar al principio (p) o al final (f)?");
  let borrado = null;

  if (donde === "p") borrado = discos.shift();
  else if (donde === "f") borrado = discos.pop();
  else alert("Opción incorrecta");

  if (borrado) {
    print("Disco borrado", `<pre>${borrado.mostrarInfo()}</pre>`);
  }
}

function consultarDisco() {
  if (discos.length === 0) {
    print("Consultar disco", "<p>No hay discos.</p>");
    return;
  }

  const modo = prompt("Consultar por posición (pos) o por nombre (nom)?");

  if (modo === "pos") {
    const pos = parseInt(prompt("Introduce posición (1-based):"));
    if (isNaN(pos) || pos < 1 || pos > discos.length) {
      alert("Posición incorrecta");
      return;
    }
    const d = discos[pos - 1];
    print("Disco encontrado", `<pre>${d.mostrarInfo()}</pre>`);
  }

  if (modo === "nom") {
    const nom = prompt("Introduce nombre del disco:");
    const d = discos.find(x => x.nombre.toLowerCase() === nom.toLowerCase());
    if (d) print("Disco encontrado", `<pre>${d.mostrarInfo()}</pre>`);
    else print("Consultar disco", `<p>No se encontró <strong>${nom}</strong></p>`);
  }
}

function menuDiscos() {
  const menu =
    "1) Mostrar número de discos\n" +
    "2) Mostrar listado de discos\n" +
    "3) Mostrar intervalo de discos\n" +
    "4) Añadir un disco\n" +
    "5) Borrar un disco\n" +
    "6) Consultar un disco\n" +
    "0) Salir";

  let salir = false;

  while (!salir) {
    const op = prompt(menu);
    if (op === null || op === "0") break;

    switch (op) {
      case "1": mostrarNumeroDiscos(); break;
      case "2": mostrarListadoDiscos(); break;
      case "3": mostrarIntervaloDiscos(); break;
      case "4": anadirDisco(); break;
      case "5": borrarDisco(); break;
      case "6": consultarDisco(); break;
      default: alert("Opción incorrecta");
    }

    salir = !confirm("¿Quieres hacer otra operación?");
  }
}

window.onload = menuDiscos;
