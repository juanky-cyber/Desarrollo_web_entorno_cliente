/*  Quiza me he complicado de mas, pero de la otra manera que lo intente no me funcionaba */


document.addEventListener("DOMContentLoaded", () => {
  const zona = document.getElementById("zonaPersonajes");
  if (!zona) {
    alert("No existe #zonaPersonajes en el HTML");
    return;
  }

  const botonera = document.createElement("div");
  botonera.className = "botonera";

  const btnGenerar = document.createElement("button");
  btnGenerar.textContent = "Generar personaje";

  btnGenerar.addEventListener("click", () => {
    const input = prompt(
      "Elija el nombre del personaje:\n1. Sanji\n2. Zoro\n3. Nami\n4. Luffy"
    );
    if (input === null) return;

    const op = input.trim().toLowerCase();

    let nombre = "";
    let archivo = "";

    switch (op) {
      case "1":
      case "sanji":
        nombre = "Sanji";
        archivo = "sanji.jpg";
        break;
      case "2":
      case "zoro":
        nombre = "Zoro";
        archivo = "zoro.jpg";
        break;
      case "3":
      case "nami":
        nombre = "Nami";
        archivo = "nami.jpg";
        break;
      case "4":
      case "luffy":
        nombre = "Luffy";
        archivo = "luffy.jpg";
        break;
      default:
        alert("Opción no válida. Escribe 1-4 o el nombre.");
        return;
    }

    const img = document.createElement("img");
    img.className = "imgPersonaje";
    img.alt = nombre;
    img.dataset.personaje = nombre;
    img.src = `./img_onepeace/${archivo}`;

    zona.appendChild(img);
  });

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar personaje";

  btnBorrar.addEventListener("click", () => {
    const imgs = zona.querySelectorAll("img.imgPersonaje");
    if (imgs.length === 0) {
      alert("No hay personajes para borrar.");
      return;
    }
    imgs[imgs.length - 1].remove();
  });

  botonera.append(btnGenerar, btnBorrar);
  document.body.insertBefore(botonera, document.body.children[1]);

  const final = document.createElement("div");
  final.className = "botonera";

  const crearBtnContar = (texto, personaje) => {
    const b = document.createElement("button");
    b.textContent = texto;
    b.addEventListener("click", () => {
      const n = zona.querySelectorAll(`img[data-personaje="${personaje}"]`).length;
      alert(`Hay ${n} imágenes de ${personaje}.`);
    });
    return b;
  };

  final.append(
    crearBtnContar("No Sanji", "Sanji"),
    crearBtnContar("No Zoro", "Zoro"),
    crearBtnContar("No Nami", "Nami"),
    crearBtnContar("No Luffy", "Luffy")
  );

  document.body.appendChild(document.createElement("hr"));
  document.body.appendChild(final);
});
