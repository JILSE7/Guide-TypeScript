(() => {

    const addNumber = (a:number, b: number):number => a+b;

    const greet = (name:string):string =>  `Hola ${name}`;

    const saveTheWold = ():string => `El mundo esta salvado`;

    //FORMAS DE DECLARAR EL TIPO function
    //*let myFunction: Function; GENERAL TODO TIPO DE FUNCION 
    //*let myFunction: () => number; //* FUNCION QUE RETORNA UN NUMERO

    let myFunction: (g:string) => string; //* FUNCION QUE RETORNA UN STRING

    //!myFunction = 10;
    //console.log(myFunction);

    //*TIPO DE DATO FUNCTION
    //?myFunction = addNumber
    //?console.log(typeof myFunction);
    //?console.log(myFunction(5,+6)); 
    

    myFunction = greet;
    console.log(myFunction("said"));


})();