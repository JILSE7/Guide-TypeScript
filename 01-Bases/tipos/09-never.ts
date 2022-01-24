(() => {
    //NEVER NO ES UNDEFINED NI NULL, ES NEVER
    //NEVER SIGNIFICA QUE MI FUNCION NO DEBE TERMINAR EXITOSAMENTE
    //Y YA NO SE SIGUE EJECUNTANDO MI CODIGO
    //YA NO TIENE UN PUNTO ALCANSABLE 
    const abc = (msg:string):never => {
        throw new Error(msg);
    };

    abc("NEVER DEBE TERMINAR LA EJECUCION DE MI CODIGO");

    const def = (msg:string):(never|number) => {
        if(false){
            throw new Error(msg);
        }

        return 1;
    };

    abc("PUEDES TENER 2 TIPOS DE RETORNO EN UNA FUNCION");


})();