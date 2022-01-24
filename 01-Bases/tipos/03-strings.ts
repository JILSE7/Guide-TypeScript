(() => {
const batman:string = 'Batman';
const linternaVerde:string = "linterna verde";
const volcanNegro:string = `Heroe volcan negro`;

console.log(batman.toUpperCase());
console.log(`I,m ${batman}`);

//ERRORES
console.log(batman[10]?.toUpperCase() || 'No hay datos');


})()