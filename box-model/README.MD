# Guía Práctica del Modelo de Caja (Box Model) en CSS

Esta guía proporciona una visión general y ejemplos prácticos del Modelo de Caja en CSS, un concepto fundamental para el diseño web.

## Conceptos Básicos

El Modelo de Caja en CSS considera cada elemento HTML como una caja rectangular que incluye los siguientes componentes:

- **Content (Contenido):** El contenido real del elemento.
- **Padding:** Espacio entre el contenido y el borde.
- **Border:** Borde alrededor del padding y el contenido.
- **Margin:** Espacio externo entre el borde del elemento y otros elementos.

## Propiedades del Modelo de Caja

- `margin`: Controla el espacio exterior del elemento.
- `padding`: Controla el espacio entre el contenido y el borde.
- `border`: Define el borde alrededor del elemento.
- `width` y `height`: Definen el tamaño del área de contenido.

## Ejemplo de Código

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .box {
        margin: 20px;
        border: 5px solid blue;
        padding: 10px;
        width: 200px;
        height: 100px;
        background-color: lightgrey;
      }
    </style>
  </head>
  <body>
    <div class="box">Este es el contenido de la caja</div>
  </body>
</html>
```

## Ejercicios Prácticos

1. **Experimenta con el Modelo de Caja:**

   - Modifica `margin`, `border`, y `padding` y observa los cambios.
   - Ajusta `width` y `height` para ver cómo cambia el espacio total del elemento.

2. **Desafío Práctico:**
   - Crea un layout con un encabezado, contenido principal y pie de página, utilizando el Modelo de Caja.

## Recursos Adicionales

- Busca tutoriales en línea y herramientas interactivas para profundizar en el Modelo de Caja.
