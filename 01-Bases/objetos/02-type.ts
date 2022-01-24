(() => {
    //DEFINICION DE TYPE
    //NOS PERMITE DEFINIR UNA STRUCTURA A NUESTROS OBJETOS
    //INCLUSO PODEMOS PONER ATRIBUTOS O METODOS OPCIONALES ? 
    //SI QUEREMOS MODIFICAR ALGO ES DIRECTAMENTE AL TIPO
    //ASI NOS OLVIDAMOS DE LAS DEFINICIONES EN LINEA {..................}
    type Hero = {
        name : string,
        age?:number,
        powers: string[],
        getNombre?: ()=>string
    }

    let flash:Hero = {
        name: "Barry Alen",
        age: 24,
        powers: ["Súpers velocidad","Viajar en el tiempo"]
    }

    let superman: Hero = {
        name: "superman",
        age: 60,
        powers: ["Super fuerza", "volar"],
        getNombre(){
            return this.name;
        }
    }

    //console.log(flash.getNombre());
    console.log(superman.getNombre!());

})()