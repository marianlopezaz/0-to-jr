// Ejemplo de bucle for
console.log("Ejemplo de bucle for:");
for (let i = 0; i < 5; i++) {
    console.log(`Iteración número ${i}`);
}

// Espaciado para separar los ejemplos en la consola
console.log("\n\n\n");

// Ejemplo de bucle while
console.log("Ejemplo de bucle while:");
let contadorWhile = 0;
while (contadorWhile < 5) {
    console.log(`Iteración número ${contadorWhile}`);
    contadorWhile++;
}

// Espaciado
console.log("\n\n\n");


// Ejemplo de bucle for...of
console.log("Ejemplo de bucle for...of:");
let colores = ["rojo", "verde", "azul"];
for (let color of colores) {
    console.log(`Color: ${color}`);
}

// Espaciado
console.log("\n");

// Ejemplo de bucle for...in (para propiedades de objetos)
console.log("Ejemplo de bucle for...in:");
let persona = {
    nombre: "Alice",
    edad: 25,
    profesion: "Desarrolladora"
};
for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}
