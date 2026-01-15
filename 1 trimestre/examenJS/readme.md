## aside
<aside> se usa para:

Barras laterales (izquierda o derecha).

Bloques de información secundaria (por ejemplo, enlaces, menús, anuncios, ayudas, etc.).

Cualquier contenido que no sea parte directa del contenido principal (<main> o <section>), pero que esté relacionado con él.

## header
<header>

El elemento <header> se usa para la parte superior de la página.
Normalmente contiene el título, el logotipo y el menú de navegación.
En este proyecto incluye el nombre de la asociación, el menú y el mini-calendario.

## nav
<nav>

El elemento <nav> agrupa enlaces de navegación importantes.
Se utiliza para menús que permiten moverse por las secciones de la web.
Aquí contiene los enlaces principales del sitio.

## main
<main>

El elemento <main> representa el contenido principal de la página.
Debe contener la parte más importante o central, excluyendo encabezados y barras laterales.
En este proyecto contiene los bloques de bienvenida, utilidades y resultados.

## section
<section>

El elemento <section> organiza el contenido en bloques temáticos.
Se usa cuando un contenido tiene un título propio y forma parte del contenido principal.
Aquí se usa para agrupar textos como “Bienvenida” o “Resultados”.

## footer
<footer>

El elemento <footer> representa el pie de página.
Incluye información legal, autoría, enlaces secundarios y datos como el año actual.
Aquí muestra el nombre de la asociación, el desarrollador y el enlace al aviso legal.

## css
Estructura del CSS

El archivo styles.css organiza todos los estilos del proyecto de forma ordenada y separada del HTML.
Su estructura general es:

Reset básico
Ajustes globales (*, body) para unificar márgenes, tipografías y comportamiento.

Cabecera y navegación
Estilos del <header>, el menú <nav> y el mini-calendario.

Distribución con CSS Grid
Reglas del contenedor .grid y de los bloques .left, .center y .right.

Tablas
Estilos para <table>, <th> y <td> usados en las utilidades.

Clases auxiliares
Como .resaltado para remarcar elementos importantes.

Footer
Estilos del pie de página <footer>.

Ventanas emergentes y páginas especiales
Por ejemplo, .popup-bienvenida o .aviso-legal.

 Todo el CSS está centralizado en un único archivo, evitando duplicar estilos y manteniendo la estructura limpia.

 Estructura del JavaScript

El proyecto usa varios archivos JavaScript independientes, cada uno con una función concreta.
La estructura general es:

imc.js
Calcula el IMC y muestra clasificación + escala completa.

fcm.js
Calcula la frecuencia cardíaca máxima según edad y sexo, con tabla de zonas.

categoria.js
Determina la categoría deportiva según el año de nacimiento.

horario.js
Genera horarios en tabla para la asociación (mañana y tarde).

t3e9_contrasena.js
Comprueba si una contraseña es segura según varios criterios.

Scripts internos de las páginas (index.html y utilidades.html)

Actualización del calendario

Abrir el aviso legal

Popup de bienvenida

Inicialización de funciones

Cada utilidad está separada en su propio archivo, lo que mejora la organización y la facilidad para corregir o ampliar funcionalidades.