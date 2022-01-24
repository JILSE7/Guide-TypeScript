(() => {
//ACOSTUMBRATE A PONER TODAS TUS VARIABLES CON TIPO DE DATO    
let avengers: number;

avengers = 13;

const villians:number = 20;

if(avengers < villians){
    console.log("estamos en probelmas");
}else{
    console.log("nos salvamos");
}

//EN JAVASCRIP NaN - Not a Number es considerado un numero
avengers = Number('44f');
console.log(typeof avengers);

})()