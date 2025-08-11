const carrito = ["producto1", "producto2", "producto3"];

carrito.map((producto) => {
  return `El producto es ${producto}`;
});

//spread operator

let lenguajes = ["JavaScript", "Python", "Java"];
let frameworks = ["React", "Angular", "Vue"];

//unir los array en un solo array
let tecnologias = [...lenguajes, ...frameworks];

console.log(tecnologias);

let tecnologias2 = ["TypeScript", "C#"];

let tecnologiascompletas = lenguajes.concat(frameworks, tecnologias2);

console.log(tecnologiascompletas);
