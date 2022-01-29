(() => {

    abstract class Mutante{
        constructor(public name:string, public realName:string){

        }

        bio():string{
            return this.name + " "+ this.realName
        }
    }



    class Xmen extends Mutante{
        
    }


    const spiderman = new Xmen("spiderman", "peter parker");

    const printName = (personaje:Mutante) => {
        console.log(personaje.bio());
    }


    printName(spiderman)
})();