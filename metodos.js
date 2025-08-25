//metdos en arrays
const personas = [
  { nombre: "Juan", edad: 30, aprendiendo: "JavaScript" },
  { nombre: "Ana", edad: 25, aprendiendo: "Python" },
  { nombre: "Luis", edad: 35, aprendiendo: "PHP" },
  { nombre: "Maria", edad: 28, aprendiendo: "JavaScript" },
  { nombre: "Pedro", edad: 22, aprendiendo: "Java" },
];

//console.log(personas);
const personas2 = [
  { nombre: "Carlos", edad: 32, aprendiendo: "C#" },
  { nombre: "Lucia", edad: 27, aprendiendo: "Ruby" },
  { nombre: "Sofia", edad: 29, aprendiendo: "Go" },
  { nombre: "David", edad: 31, aprendiendo: "Swift" },
  { nombre: "Elena", edad: 26, aprendiendo: "Kotlin" },
];
const mayores = [...personas, ...personas2].filter(
  (persona) => persona.edad >= 28
);
console.log(mayores);
//funcion para filtrar mayores a 28

// const mayoresDe28 = personas.filter((persona) => persona.edad >= 28);
// console.log(mayoresDe28);

const Ana = personas.find((persona) => persona.nombre === "Ana");
console.log(Ana);
