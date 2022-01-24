(() => {
//ENUMERACIONES
//AYUDA A TRABAJR CON VALORES QUE TENGAN UN SENTIDO SEMANTICO CON LA VARIABLE
enum audioLevel{
    min=5,
    medium,
    max=15
}

enum saludo{
    hola ,
    adios ="adios"
}

const currentAudio:audioLevel = audioLevel.medium;
console.log(currentAudio);
console.log(audioLevel);

console.log(saludo.adios);

})();