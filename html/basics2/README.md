# Explicación de Elementos Básicos de HTML - Parte 2

Este documento HTML proporciona ejemplos de elementos básicos adicionales en HTML, incluyendo tablas y formularios.

## Estructura del Documento HTML

El documento sigue la estructura básica de HTML con `<!DOCTYPE html>`, `<html>`, `<head>` y `<body>`.

### Head

La sección `<head>` incluye la codificación de caracteres, configuración de viewport y el título del documento.

### Body

La sección `<body>` contiene:

- **Etiqueta `<h1>`:** Utilizada para el título principal.
- **Etiqueta `<h2>`:** Utilizada para subtítulos.
- **Tablas:**

  - **`<table>`:** Define una tabla.
  - **`<tr>`:** Define una fila en la tabla.
  - **`<th>`:** Define una celda de encabezado.
  - **`<td>`:** Define una celda estándar.

- **Formularios:**
  - **`<form>`:** Define un formulario para entrada de datos.
  - **`<label>`:** Define una etiqueta para un elemento de entrada.
  - **`<input>`:** Define un campo de entrada, con diferentes tipos (texto, submit).

### Ejemplo de Código HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Elementos básicos 2</h1>

    <h2>Esto es una tabla</h2>

    <table>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
      </tr>
      <tr>
        <td>Pepe</td>
        <td>Perez</td>
      </tr>
      <tr>
        <td>Pepe</td>
        <td>Perez</td>
      </tr>
      <tr>
        <td>Pepe</td>
        <td>Perez</td>
      </tr>
    </table>

    <h2>Esto es un formulario</h2>
    <form action="">
      <label for="nombre">Nombre</label>
      <input type="text" name="nombre" id="nombre" />
      <label for="apellido">Apellido</label>
      <input type="text" name="apellido" id="apellido" />
      <input type="submit" value="Enviar" />
    </form>
  </body>
</html>
```
