(() => {
    class Avenger {
        //private solo trabaja dentro de la clase
        //protected puede ser heredado y utilizado dentro de ella y en las clases heredadas
        constructor(private nombre:string, public realNombre:string){
            console.log("constructor avenger llamado");
        }
        protected getFullName(){
            return `${this.nombre} ${this.realNombre}`
        }

        get obtenerNombre():string{
            return this.nombre
        }

        set escribirNombre(name:string){
            this.nombre = name
        }

    }

    class Xmen extends Avenger{

        constructor(private type:string, name:string, real:string){
            super(name, real);
        }


        obtenerNOmbre(){
            return super.getFullName();
        }

    }


    const wolwerine = new Xmen("moustro","wolwerine", "jorge negrete")

    console.log(wolwerine.obtenerNOmbre());
    wolwerine.escribirNombre = "Pedro";
    console.log(wolwerine.obtenerNOmbre());


})();