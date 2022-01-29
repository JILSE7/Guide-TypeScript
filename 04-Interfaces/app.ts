// Crear interfaces



interface IAuto {
  encender:boolean,
  velocidadMaxima: number;
  acelerar():void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:IAuto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil:IAuto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface IVillano {
  reir?:boolean;
  comer?: boolean;
  llorar?: false
}

const guason:IVillano = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:IVillano ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface ICiudadanos {
  (ciudadanos:string[]):number;
}

const ciudadGotica: ICiudadanos = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

enum EstadoCivil {
  soltero = "SOLTERO",
  casado = "CASADO",
  divorciado = "DIVORCIADO"
}

interface IPerson {
  nombre:string;
  edad:number;
  sexo:boolean;
  estadoCivil:EstadoCivil
  imprimirBio():void
}

class Persona implements IPerson {
  public nombre: string;
  public edad: number;
  public sexo: boolean;
  public estadoCivil: EstadoCivil;

  constructor(nombre:string, edad:number, sexo:boolean, estadoCivil:EstadoCivil){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;
  }


  imprimirBio(): void {
      console.log(`Esta es mi biografia soy ${this.nombre} mi edad es ${this.edad} soy ${this.sexo ? "niño" : "niña"} y estoy ${this.estadoCivil}`);
  }
}


const said = new Persona("Said",25,true, EstadoCivil.casado);

said.imprimirBio();