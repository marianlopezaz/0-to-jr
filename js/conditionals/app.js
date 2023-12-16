// Ejemplo 1: Sentencia if
let edad = 20;
if (edad >= 18) {
    console.log("Es mayor de edad.");
}

// Ejemplo 2: Sentencia if-else
let puntuacion = 65;
if (puntuacion >= 70) {
    console.log("¡Aprobado!");
} else {
    console.log("Intenta nuevamente.");
}

// Ejemplo 3: Sentencia else if
let calificacion = 85;
if (calificacion >= 90) {
    console.log("Excelente");
} else if (calificacion >= 70) {
    console.log("Bueno");
} else {
    console.log("Necesitas mejorar");
}

// Ejemplo 4: Operador Ternario
let esMayorDeEdad = edad >= 18 ? "Sí, es mayor de edad." : "No, es menor de edad.";
console.log(esMayorDeEdad);

// Ejemplo 5: Combinando condicionales
let hora = 16;
if (hora < 12) {
    console.log("Buenos días");
} else if (hora < 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

// Ejemplo 6: Condicionales Anidadas
let usuarioRegistrado = true;
let acceso = false;
if (usuarioRegistrado) {
    if (edad >= 18) {
        acceso = true;
        console.log("Acceso concedido");
    } else {
        console.log("Acceso denegado: Edad insuficiente");
    }
} else {
    console.log("Acceso denegado: Usuario no registrado");
}
