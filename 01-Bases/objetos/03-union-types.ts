(() => {
    //TYPE ES DE TIPO OBJECT
    type Hero = {
        name : string,
        age?:number,
        powers: string[],
        getNombre?: ()=>string
    }

    //UNION DE TIPOS |
    let myCustomVariable: (Hero|string|number) = "said";
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "said",
        age: 46,
        powers: ["fuerza"]
    }

    console.log(myCustomVariable);

})()