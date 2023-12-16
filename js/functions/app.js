// Ejemplo de Función Tradicional
function saludo(nombre) {
  return `Hola, ${nombre}!`;
}
console.log(saludo("Juan"));

// Ejemplo de Función con Múltiples Parámetros
function sumar(a, b) {
  return a + b;
}
console.log(`La suma de 5 y 3 es ${sumar(5, 3)}`);

// Ejemplo de Función Anónima
let multiplicar = function (a, b) {
  return a * b;
};
console.log(`La multiplicación de 4 y 2 es ${multiplicar(4, 2)}`);

// Ejemplo de Función Flecha
const restar = (a, b) => {
  return a - b;
};
console.log(`La resta de 10 y 6 es ${restar(10, 6)}`);

// Ejemplo de Función Flecha con Retorno Implícito
const cuadrado = (numero) => numero * numero;
console.log(`El cuadrado de 5 es ${cuadrado(5)}`);


// Ejemplo de Función que Retorna otra Función
function crearSaludo(saludoInicial) {
  return function (nombre) {
    return `${saludoInicial}, ${nombre}!`;
  };
}
let saludoPersonalizado = crearSaludo("Buenos días");
console.log(saludoPersonalizado("Bob"));

// Ejemplo de Función como Argumento (Callback)
function procesarEntrada(usuario, callback) {
  console.log(`Procesando entrada del usuario: ${usuario}`);
  callback();
}
procesarEntrada("Alice", () => console.log("Entrada procesada."));
