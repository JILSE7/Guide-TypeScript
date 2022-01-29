(() => {

    class Apocalipsis{
        static instance:Apocalipsis;

        private constructor(public name:string){

        }

        static callApocalipsis(name:string):Apocalipsis{
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis(name)
            }

            return Apocalipsis.instance
        }

        changeName(newName:string):void{
            this.name = newName;
        }

    }


    /* const apocalipsis = new Apocalipsis("soy apocalipsis");
    const apocalipsis2 = new Apocalipsis("soy apocalipsis2");
    const apocalipsis3 = new Apocalipsis("soy apocalipsis2");
    console.log(apocalipsis); */

    const apo1  =  Apocalipsis.callApocalipsis("soy el primer apocalipsis");
    const apo12  =  Apocalipsis.callApocalipsis("soy el primer apocalipsis2");

    console.log(apo1, apo12);

    apo1.changeName("puta madreee")

    console.log(apo1, apo12);

})();