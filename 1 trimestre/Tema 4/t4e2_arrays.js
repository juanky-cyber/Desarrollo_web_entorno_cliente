const salida = () => document.getElementById('salida');
const print = (titulo, contenido) => {
  const box = document.createElement('article');
  box.innerHTML = `<h3>${titulo}</h3>${contenido}`;
  salida().prepend(box);
};

let paises = [];

function numElementos(arr) {
  print("Número de países", `<p>Total: <strong>${arr.length}</strong></p>`);
}

function mostrarTodos(arr) {
  if (arr.length === 0) {
    print("Listado de países", "<p>No hay países en el array.</p>");
    return;
  }
  print(
    "Listado de países (orden actual)",
    `<ol>${arr.map(p => `<li>${p}</li>`).join("")}</ol>`
  );
}

function mostrarInverso(arr) {
  if (arr.length === 0) {
    print("Listado inverso", "<p>No hay países en el array.</p>");
    return;
  }
  const invertido = arr.slice().reverse();
  print(
    "Listado inverso",
    `<ol>${invertido.map(p => `<li>${p}</li>`).join("")}</ol>`
  );
}

function mostrarAlfabetico(arr) {
  if (arr.length === 0) {
    print("Listado alfabético", "<p>No hay países en el array.</p>");
    return;
  }
  const ordenado = arr.slice().sort((a, b) => a.localeCompare(b));
  print(
    "Listado alfabético (no muta)",
    `<ol>${ordenado.map(p => `<li>${p}</li>`).join("")}</ol>`
  );
}

function anadirPrincipio(arr, elemento) {
  arr.unshift(elemento);
  print("Añadido al principio", `<p>Se añadió: <strong>${elemento}</strong></p>`);
}

function anadirFinal(arr, elemento) {
  arr.push(elemento);
  print("Añadido al final", `<p>Se añadió: <strong>${elemento}</strong></p>`);
}

function borrarPrincipio(arr) {
  const borrado = arr.shift();
  if (borrado === undefined) {
    print("Borrado al principio", "<p>No había países que borrar.</p>");
  } else {
    print("Borrado al principio", `<p>Se borró: <strong>${borrado}</strong></p>`);
  }
}

function borrarFinal(arr) {
  const borrado = arr.pop();
  if (borrado === undefined) {
    print("Borrado al final", "<p>No había países que borrar.</p>");
  } else {
    print("Borrado al final", `<p>Se borró: <strong>${borrado}</strong></p>`);
  }
}

function mostrarPorPosicion(arr, posUsuario) {
  const idx = posUsuario - 1;
  if (idx < 0 || idx >= arr.length) {
    print(
      "Consultar por posición",
      `<p>Posición <strong>${posUsuario}</strong> fuera de rango.</p>`
    );
    return;
  }
  print(
    "Consultar por posición",
    `<p>Posición ${posUsuario}: <strong>${arr[idx]}</strong></p>`
  );
}

function posicionPorNombre(arr, nombre) {
  const idx = arr.findIndex(
    p => p.toLowerCase() === nombre.trim().toLowerCase()
  );
  if (idx === -1) {
    print(
      "Consultar por nombre",
      `<p>No se encontró el país <strong>${nombre}</strong>.</p>`
    );
  } else {
    print(
      "Consultar por nombre",
      `<p><strong>${nombre}</strong> está en la posición ${idx + 1}.</p>`
    );
  }
}

function mostrarIntervalo(arr, inicio, fin) {
  if (arr.length === 0) {
    print("Intervalo de países", "<p>No hay países en el array.</p>");
    return;
  }

  const i = Math.max(1, Math.min(inicio, fin));
  const f = Math.min(arr.length, Math.max(inicio, fin));
  const trozo = arr.slice(i - 1, f);

  print(
    `Intervalo de países (${i}–${f})`,
    `<ol>${trozo.map(p => `<li>${p}</li>`).join("")}</ol>`
  );
}

function menuPaises() {
  const opciones =
    "Elige una opción:\n" +
    "1) Mostrar número de países\n" +
    "2) Mostrar listado de países\n" +
    "3) Mostrar intervalo de países (inicio-fin)\n" +
    "4) Añadir un país\n" +
    "5) Borrar un país\n" +
    "6) Consultar un país (posición/nombre)\n" +
    "0) Salir";

  let seguir = true;

  while (seguir) {
    const eleccion = prompt(opciones);
    if (eleccion === null || eleccion === "0") break;

    switch (eleccion) {
      case "1":
        numElementos(paises);
        break;

      case "2": {
        const como = prompt(
          "¿Orden actual (a) / inverso (i) / alfabético (o)?"
        );
        if (!como) break;
        const c = como.toLowerCase();
        if (c === "a") mostrarTodos(paises);
        else if (c === "i") mostrarInverso(paises);
        else if (c === "o") mostrarAlfabetico(paises);
        else alert("Opción no válida");
        break;
      }

      case "3": {
        const rango = prompt(
          "Introduce el intervalo en formato inicio-fin (ej: 2-4):"
        );
        if (!rango) break;
        const [ini, fin] = rango.split("-").map(n => parseInt(n.trim()));
        if (Number.isInteger(ini) && Number.isInteger(fin)) {
          mostrarIntervalo(paises, ini, fin);
        } else {
          alert("Formato no válido");
        }
        break;
      }

      case "4": {
        const nombre = prompt("Nombre del país a añadir:");
        if (!nombre) break;
        const donde = prompt(
          "¿Dónde quieres añadirlo? (p = principio, f = final)"
        );
        if (!donde) break;
        if (donde.toLowerCase() === "p") anadirPrincipio(paises, nombre);
        else if (donde.toLowerCase() === "f") anadirFinal(paises, nombre);
        else alert("Opción no válida");
        break;
      }

      case "5": {
        const donde = prompt(
          "¿Qué quieres borrar? (p = principio, f = final)"
        );
        if (!donde) break;
        if (donde.toLowerCase() === "p") borrarPrincipio(paises);
        else if (donde.toLowerCase() === "f") borrarFinal(paises);
        else alert("Opción no válida");
        break;
      }

      case "6": {
        const tipo = prompt(
          "¿Consultar por posición (pos) o por nombre (nom)?"
        );
        if (!tipo) break;

        if (tipo.toLowerCase() === "pos") {
          const pos = parseInt(prompt("Posición (1-based):"));
          if (Number.isInteger(pos)) {
            mostrarPorPosicion(paises, pos);
          } else {
            alert("Posición no válida");
          }
        } else if (tipo.toLowerCase() === "nom") {
          const nom = prompt("Nombre del país:");
          if (nom) posicionPorNombre(paises, nom);
          else alert("Nombre no válido");
        } else {
          alert("Opción no válida");
        }
        break;
      }

      default:
        alert("Opción no válida");
    }

    seguir = confirm("¿Deseas realizar otra operación?");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  numElementos(paises);
  menuPaises();
});
