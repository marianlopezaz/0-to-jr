// Ejemplo de Ámbito Global
let variableGlobal = "Soy una variable global";

function accederGlobal() {
  console.log(variableGlobal); // Acceso exitoso a la variable global
}

accederGlobal();



// Ejemplo de Ámbito de Función
function funcionExterna() {
  let variableLocalExterna = "Soy una variable local externa";

  function funcionInterna() {
    let variableLocalInterna = "Soy una variable local interna";
    console.log(variableLocalExterna); // Acceso exitoso a la variable local externa
    console.log(variableLocalInterna); // Acceso exitoso a la variable local interna
  }

  funcionInterna();

  // Intento de acceder a una variable local interna fuera de su ámbito
  // console.log(variableLocalInterna); // Esto causará un error
}

funcionExterna();

// Ejemplo de Ámbito de Bloque (ES6)
if (true) {
  let variableDeBloque = "Soy una variable de bloque";
  console.log(variableDeBloque); // Acceso exitoso dentro del bloque
}

// Intento de acceder a una variable de bloque fuera de su ámbito
// console.log(variableDeBloque); // Esto causará un error
