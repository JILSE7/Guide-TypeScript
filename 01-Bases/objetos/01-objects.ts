(() => {

    let flash:{name:string, age: number, powers: string[], getNombre?:() => string} = {
        name: "Barry Alen",
        age: 24,
        powers: ["Súpers velocidad","Viajar en el tiempo"]
    }

    flash = {
        name: "otro nombre",
        age: 60,
        powers: ["SUper fuerza"],
        getNombre(){
            return this.name;
        }
    }
    console.log(flash);

    //!console.log(flash.getNombre());  DA UN ERROR PUES PUEDE SER UNDEFINED


})()