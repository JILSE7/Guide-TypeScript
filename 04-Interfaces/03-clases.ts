(() => {
    interface XMEN {
        name:string;
        realname:string;
        mutanPower(id:number):string;
    }

    interface Human{
        isHuman:boolean
    }

    class Mutant implements XMEN, Human{
        public name:string;
        public realname:string;

        public isHuman: boolean;

        constructor(name:string, realname:string, isHuman:boolean){
            this.name = name
            this.realname = realname;
            this.isHuman = isHuman;
        }

        public mutanPower(id: number): string {
            return `${this.realname} tiene el poder de valor`
        }
    }



    const mutante = new Mutant("wolowerine", "logan martinez", false)

    console.log(mutante.mutanPower(25)); 



})();