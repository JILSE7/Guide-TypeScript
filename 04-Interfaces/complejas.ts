(() => {

    //USUALMENTE LAS INTEFAZ PRINCIPAL VA ARRIBA Y LAS DEMAS O LOS NIVELES PROFUNDOS
    //VAN ABAJO

    //OTRA DIFERENCIA ENTRE UN TYPO Y UNA INTERFAZ ESTA EN LA FORMA DE DEFINIR UN METODO
    //() => STRING  -> TYPE
    //():STRING   -> INTERFACE

    interface Customer {
        name:string;
        age?:number;
        address: address,
        getFullAdress(id:string):string
    }

    interface address {
        id:number;
        zipcode: number;
        city: string
    }

    const client:Customer = {
        name : 'Said',
        age: 25,
        address: {
            id:125,
            zipcode: 54150,
            city: 'Tokio'
        },
        getFullAdress(id:string){
            return this.name
        }
    }


    const cliente2 : Customer = {
        name:'pedro',
        age: 24,
        address:{
            id:54,
            zipcode: 54150,
            city:"Tlalnepantla"
        },
        getFullAdress(id:string){
            return this.name + " " + JSON.stringify(this.address) 
        }
        
        
    }

    console.log(client.getFullAdress('said'));
    
    console.log(cliente2.getFullAdress('pedro'));
    

    

})();