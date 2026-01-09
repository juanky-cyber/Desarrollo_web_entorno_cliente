document.addEventListener("DOMContentLoaded", initJuego);

function initJuego() {
  const tabla = document.querySelector("#tabla");
  const cartas = Array.from(document.querySelectorAll(".carta"));
  const aciertosInput = document.querySelector("#aciertos");
  const btnReiniciar = document.querySelector("#reiniciar");

  let primera = null;

  tabla.dataset.lock = "0";

  const archivos = [
    "barney.jpg",
    "bart.jpg",
    "duffman.png",
    "homer-bailon.png",
    "momento-platano.png",
    "ralph.jpg"
  ];

  function prepararTablero() {
    const mazo = barajar([...archivos, ...archivos]); 

    cartas.forEach((td, i) => {
      td.dataset.file = mazo[i];   
      td.dataset.flip = "0";       
      td.dataset.match = "0";      
      ocultarCarta(td);
    });

    aciertosInput.value = "0";
    primera = null;
    tabla.dataset.lock = "0";
  }

  tabla.addEventListener("click", (e) => {
    const td = e.target.closest("td.carta");
    if (!td) return;

    if (tabla.dataset.lock === "1") return;      
    if (td.dataset.match === "1") return;        
    if (td.dataset.flip === "1") return;         

    mostrarCarta(td);

    if (!primera) {
      primera = td;
      return;
    }

    const segunda = td;

    if (primera.dataset.file === segunda.dataset.file) {
      marcarAcierto(primera, segunda);
      aciertosInput.value = String(Number(aciertosInput.value) + 1);
      primera = null;
    } else {
      tabla.dataset.lock = "1";
      setTimeout(() => {
        ocultarCarta(primera);
        ocultarCarta(segunda);
        primera = null;
        tabla.dataset.lock = "0";
      }, 900);
    }
  });

  btnReiniciar.addEventListener("click", prepararTablero);

  prepararTablero();
}

function mostrarCarta(td) {
  td.dataset.flip = "1";
  td.classList.add("volteada");
  td.style.backgroundImage = `url("img/${td.dataset.file}")`;
}

function ocultarCarta(td) {
  td.dataset.flip = "0";
  td.classList.remove("volteada");
  td.classList.remove("acertada");
  td.style.backgroundImage = "none";
}

function marcarAcierto(c1, c2) {
  c1.dataset.match = "1";
  c2.dataset.match = "1";
  c1.classList.add("acertada");
  c2.classList.add("acertada");
}

function barajar(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
