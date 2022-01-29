(() => {
    class Aveger {

        //*FORMA TRADICIONAL
      /*   private name:string;
        public team:string;
        public realName?:string;
         static number = 35;

        constructor( name:string, team:string, realName?:string){
            this.name = name;
            this.team = team;
            this.realName = realName;

        } */

        //* FORMA CORTA
        constructor(private name:string, public team:string, public realName?:string){

        }

        //*metodos 
        //* los metodos publicos pueden ser declarados explicitamente o pueder ser obviado
        bio():string{
            return `${this.name} ${this.team}`
        }


    }

    const antMan = new Aveger("said", "Marvel", "said mandujano");

    

    console.log(antMan.bio());
})();