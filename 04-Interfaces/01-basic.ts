(() => {

    console.log("Interfaces");
    interface Hero  {
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

    

})();