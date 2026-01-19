function comprobarContrasena() {
  const contrasena = prompt("Introduce una contraseña para comprobar si es segura:");
  if (contrasena === null) return; 

  const resultado = document.getElementById("resultado");

  const tieneMayuscula = /[A-Z]/.test(contrasena);
  const tieneMinuscula = /[a-z]/.test(contrasena);
  const tieneNumero = /[0-9]/.test(contrasena);
  const tieneEspecial = /[-_@#$%&]/.test(contrasena);
  const longitudValida = contrasena.length >= 8 && contrasena.length <= 16;

  if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial && longitudValida) {
    resultado.innerHTML = `
      <h3>Comprobación de contraseña</h3>
      <p><strong style="color:green;">Contraseña segura</strong></p>
    `;
  } else {
    resultado.innerHTML = `
      <h3>Comprobación de contraseña</h3>
      <p><strong style="color:red;">Contraseña no segura</strong></p>
      <ul>
        <li>${longitudValida ? "✔" : "❌"} Entre 8 y 16 caracteres</li>
        <li>${tieneMayuscula ? "✔" : "❌"} Contiene mayúscula</li>
        <li>${tieneMinuscula ? "✔" : "❌"} Contiene minúscula</li>
        <li>${tieneNumero ? "✔" : "❌"} Contiene número</li>
        <li>${tieneEspecial ? "✔" : "❌"} Contiene símbolo permitido (- _ @ # $ % &)</li>
      </ul>
    `;
  }
}
