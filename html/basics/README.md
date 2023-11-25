# Explicación de Etiquetas Básicas de HTML

Este documento HTML proporciona ejemplos de algunas de las etiquetas más comunes y básicas utilizadas en HTML.

## Estructura del Documento HTML

El documento comienza con la declaración `<!DOCTYPE html>`, seguida de la etiqueta `<html>` que define el idioma del documento como inglés (`lang="en"`).

### Head

En la sección `<head>`, se define la codificación de caracteres (`<meta charset="UTF-8">`), la configuración de la ventana gráfica para dispositivos móviles (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`) y el título del documento (`<title>`).

### Body

La sección `<body>` contiene el contenido visible del documento:

- **Etiqueta `<h1>`:** Se usa para el título principal del documento.
- **Etiqueta `<p>`:** Define un párrafo de texto.
- **Etiqueta `<a>`:** Utilizada para enlaces, en este caso, un enlace a Google.
- **Etiqueta `<img>`:** Muestra una imagen, con una URL y un texto alternativo.
- **Etiqueta `<ul>`:** Define una lista desordenada con varios elementos `<li>`.
- **Etiqueta `<ol>`:** Define una lista ordenada, también con elementos `<li>`.

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
    <h1>Etiquetas básicas</h1>
    <p>Esto es un párrafo</p>
    <a href="https://www.google.com">Esto es un enlace</a>
    <img
      src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      alt="Esto es una imagen"
    />
    <ul>
      <li>Esto es una lista</li>
      <li>Esto es una lista</li>
      <li>Esto es una lista</li>
    </ul>
    <ol>
      <li>Esto es una lista</li>
      <li>Esto es una lista</li>
      <li>Esto es una lista</li>
    </ol>
  </body>
</html>
```
