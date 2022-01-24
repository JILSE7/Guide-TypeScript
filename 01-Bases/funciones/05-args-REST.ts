(() => {
    //de ultima instancia any nos bota la validacion, utilizalo cuando realmente sea requerido
    const fullName = (firstname : string, ...names:any[]): string => {
        
        return firstname + " " + names.join(" ") ;
    };

    const name = fullName('said', "pepe", "sa");
    console.log(name);



})()