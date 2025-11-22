function Disco() {
  this.nombre = "";
  this.grupo = "";
  this.anio = "";
  this.tipo = "";          
  this.localizacion = 0;   
  this.prestado = false;   

  this.mostrarInfo = function () {
    return (
      "Nombre: " + this.nombre + "\n" +
      "Grupo: " + this.grupo + "\n" +
      "Año: " + this.anio + "\n" +
      "Tipo: " + this.tipo + "\n" +
      "Estantería: " + this.localizacion + "\n" +
      "Prestado: " + (this.prestado ? "Sí" : "No")
    );
  };
}

function crearDisco(nombre, grupo, anio, tipo, localizacion) {
  const d = new Disco();
  d.nombre = nombre;
  d.grupo = grupo;
  d.anio = anio;
  d.tipo = tipo;
  d.localizacion = localizacion;
  d.prestado = false;
  return d;
}

Disco.prototype.cambiarLocalizacion = function (nuevaLoc) {
  this.localizacion = nuevaLoc;
};

Disco.prototype.cambiarPrestado = function (nuevoEstado) {
  this.prestado = nuevoEstado;
};
