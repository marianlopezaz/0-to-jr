# Guía Práctica sobre Propiedades Display y Position en CSS

Esta guía explica las propiedades `display` y `position` en CSS, esenciales para el diseño y la disposición de elementos en una página web.

## Propiedad Display

### ¿Qué es Display?

- La propiedad `display` determina cómo se muestra un elemento.

### Valores Comunes

- `block`: El elemento ocupa el ancho completo disponible.
- `inline`: El elemento no inicia en una nueva línea.
- `inline-block`: Comportamiento mixto de `block` y `inline`.
- `flex`: Activa Flexbox para diseños flexibles.
- `grid`: Activa Grid Layout para diseños de cuadrícula.
- `none`: Oculta el elemento.

### Ejemplos de Código

```css
.block {
  display: block;
}
.inline {
  display: inline;
}
.inline-block {
  display: inline-block;
  width: 100px;
  height: 100px;
}
.flex-container {
  display: flex;
}
.grid-container {
  display: grid;
}
```

## Propiedad Position

### ¿Qué es el Posicionamiento?

- `position` controla cómo se ubica un elemento en la página.

### Valores Comunes

- `static`: Valor por defecto, sigue el flujo normal del documento.
- `relative`: Se posiciona en relación a su posición original.
- `absolute`: Se posiciona en relación a su contenedor posicionado más cercano.
- `fixed`: Se posiciona en relación al viewport, inmóvil al hacer scroll.
- `sticky`: Combinación de `relative` y `fixed`.

### Ejemplos de Código

```css
.relative {
  position: relative;
  top: 10px;
  left: 20px;
}
.absolute {
  position: absolute;
  top: 0;
  right: 0;
}
.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
}
.sticky {
  position: sticky;
  top: 0;
}
```

## Ejercicios Prácticos

- Experimenta con diferentes valores de `display` y `position`.
- Prueba combinar `display: flex` con `position: sticky` o `absolute`.

## Conclusión

Las propiedades `display` y `position` son fundamentales para controlar la disposición y presentación de elementos en CSS. La práctica y experimentación son clave para entender su impacto en el diseño web.
