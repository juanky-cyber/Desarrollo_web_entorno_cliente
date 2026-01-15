function setCookie(nombre, valor, dias) {
  let expires = "";
  if (dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    expires = "; expires=" + fecha.toUTCString();
  }
  document.cookie = nombre + "=" + encodeURIComponent(valor) + expires + "; path=/";
}

function getCookie(nombre) {
  const nombreEQ = nombre + "=";
  const partes = document.cookie.split(";");

  for (let i = 0; i < partes.length; i++) {
    let c = partes[i].trim();
    if (c.indexOf(nombreEQ) === 0) {
      return decodeURIComponent(c.substring(nombreEQ.length));
    }
  }
  return null;
}

function deleteCookie(nombre) {
  document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}
