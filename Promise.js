//promises
//Resolve= ejecuta la promesa cuando el llamado es exitoso
//Reject= ejecuta la promesa cuando el llamado falla

const aplicardescuento = new Promise((resolve, reject) => {
  setTimeout(() => {
    let descuento = true;
    if (descuento) {
      resolve("Descuento aplicado");
    } else {
      reject("No se pudo aplicar el descuento");
    }
  }, 2000);
});
aplicardescuento
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log("Hubo un error: " + error);
  });
