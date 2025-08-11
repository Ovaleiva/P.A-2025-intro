// functions declaration
function saludar(nombre) {
  console.log("Bienvenido, " + nombre + "!");
}

saludar("Estudiante");

// function expression

const cliente = function (nombrecliente, edadCliente) {
  console.log("Bienvenido, " + nombrecliente + ", Edad:" + edadCliente);
};

cliente("Cliente", "30");

function actividad(nombre, NombreActividad) {
  console.log(
    `El cliente ${nombre} esta realizando la actividad: ${NombreActividad}`
  );
}
actividad("Cliente", "Navegación en kayak");
