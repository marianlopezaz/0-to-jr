
# Guía Práctica de Flexbox en CSS

Esta guía ofrece una introducción y ejercicios prácticos sobre Flexbox en CSS, una herramienta poderosa para crear diseños flexibles y responsivos.

## Introducción a Flexbox

Flexbox, o Flexible Box Layout, es un modelo de diseño que facilita la creación de estructuras complejas y responsivas en páginas web.

## Conceptos Básicos

- **Contenedor Flex (Flex Container):** Elemento padre que define un contexto flex.
- **Elementos Flex (Flex Items):** Hijos directos del contenedor flex.

## Propiedades del Contenedor Flex

### flex-direction
Determina la dirección de los elementos flex.
```css
.container { flex-direction: row; /* o column */ }
```

### justify-content
Alinea los elementos en el eje principal.
```css
.container { justify-content: center; /* o space-between, etc. */ }
```

### align-items
Alinea los elementos en el eje cruzado.
```css
.container { align-items: center; /* o flex-start, etc. */ }
```

### flex-wrap
Controla si los elementos se deben envolver o no.
```css
.container { flex-wrap: wrap; /* o nowrap */ }
```

## Propiedades de los Elementos Flex

### flex-grow, flex-shrink, flex-basis
Controlan el crecimiento, la reducción y el tamaño base del elemento flex.
```css
.item { flex: 1 1 auto; /* Atajo para flex-grow, flex-shrink y flex-basis */ }
```

## Ejercicios Prácticos

1. **Barra de Navegación Horizontal:**
   Crea una barra de navegación utilizando `display: flex;`.

2. **Galería de Imágenes con Envoltura:**
   Diseña una galería que ajuste el número de imágenes por fila usando Flexbox.

## Desafíos

- Experimenta con diferentes propiedades de Flexbox para entender su impacto en el diseño.
- Intenta crear diseños complejos como tarjetas de perfil o secciones de comentarios.


