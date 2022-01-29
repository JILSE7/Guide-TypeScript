"use strict";
(() => {
    console.log("Interfaces");
    let flash = {
        name: "Barry Alen",
        age: 24,
        powers: ["Súpers velocidad", "Viajar en el tiempo"]
    };
    let superman = {
        name: "superman",
        age: 60,
        powers: ["Super fuerza", "volar"],
        getNombre() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor(name, realname, isHuman) {
            this.name = name;
            this.realname = realname;
            this.isHuman = isHuman;
        }
        mutanPower(id) {
            return `${this.realname} tiene el poder de valor`;
        }
    }
    const mutante = new Mutant("wolowerine", "logan martinez", false);
    console.log(mutante.mutanPower(25));
})();
(() => {
    let addNumbersFunction = (a, b) => {
        return a + b;
    };
    const result = addNumbersFunction(25, 35);
    console.log(result);
})();
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil["soltero"] = "SOLTERO";
    EstadoCivil["casado"] = "CASADO";
    EstadoCivil["divorciado"] = "DIVORCIADO";
})(EstadoCivil || (EstadoCivil = {}));
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() {
        console.log(`Esta es mi biografia soy ${this.nombre} mi edad es ${this.edad} soy ${this.sexo ? "niño" : "niña"} y estoy ${this.estadoCivil}`);
    }
}
const said = new Persona("Said", 25, true, EstadoCivil.casado);
said.imprimirBio();
(() => {
    const client = {
        name: 'Said',
        age: 25,
        address: {
            id: 125,
            zipcode: 54150,
            city: 'Tokio'
        },
        getFullAdress(id) {
            return this.name;
        }
    };
    const cliente2 = {
        name: 'pedro',
        age: 24,
        address: {
            id: 54,
            zipcode: 54150,
            city: "Tlalnepantla"
        },
        getFullAdress(id) {
            return this.name + " " + JSON.stringify(this.address);
        }
    };
    console.log(client.getFullAdress('said'));
    console.log(cliente2.getFullAdress('pedro'));
})();
//# sourceMappingURL=main.js.map