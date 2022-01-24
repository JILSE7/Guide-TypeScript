"use strict";
(() => {
    const a = 10;
    let b;
    function sayHello(msg) {
        console.log(msg.charAt(1));
    }
    sayHello("gola");
})();
(() => {
    const hero = "flash";
    function returnName() {
        return hero;
    }
    ;
    const activateBat = () => {
        return "Bati activada";
    };
    console.log(typeof activateBat);
    const heroName = returnName();
})();
(() => {
    const fullName = (firstname, lastName) => {
        return firstname + lastName;
    };
    const name = fullName("tony", true);
})();
(() => {
    const fullName = (firstname, lastName) => {
        return firstname + " " + (lastName || "no lastname");
    };
    const name = fullName("tony");
    console.log(name);
})();
(() => {
    const fullName = (firstname, lastName, upper = false) => {
        if (!upper) {
            return firstname + " " + (lastName || "no lastname");
        }
        else {
            return (firstname + " " + (lastName || "no lastname")).toUpperCase();
        }
    };
    const name = fullName("tony", "dk", true);
    console.log(name);
})();
(() => {
    const fullName = (firstname, ...names) => {
        return firstname + " " + names.join(" ");
    };
    const name = fullName('said', "pepe", "sa");
    console.log(name);
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWold = () => `El mundo esta salvado`;
    let myFunction;
    myFunction = greet;
    console.log(myFunction("said"));
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    let flash = {
        name: "Barry Alen",
        age: 24,
        powers: ["Súpers velocidad", "Viajar en el tiempo"]
    };
    flash = {
        name: "otro nombre",
        age: 60,
        powers: ["SUper fuerza"],
        getNombre() {
            return this.name;
        }
    };
    console.log(flash);
})();
(() => {
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
    console.log(superman.getNombre());
})();
(() => {
    let myCustomVariable = "said";
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "said",
        age: 46,
        powers: ["fuerza"]
    };
    console.log(myCustomVariable);
})();
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
console.log(apocalipsis);
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? !isBatman : !isSuperman;
    console.log(isSuperman);
})();
(() => {
    let avengers;
    avengers = 13;
    const villians = 20;
    if (avengers < villians) {
        console.log("estamos en probelmas");
    }
    else {
        console.log("nos salvamos");
    }
    avengers = Number('44f');
    console.log(typeof avengers);
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "linterna verde";
    const volcanNegro = `Heroe volcan negro`;
    console.log(batman.toUpperCase());
    console.log(`I,m ${batman}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No hay datos');
})();
(() => {
    let avenger = 123;
    let exist;
    let power;
    avenger = 54;
})();
(() => {
    const numbers = [1, 2, 3, '4', 5, 6];
    const villan = ['H', 'O', 'L', 'A'];
    villan.forEach(letter => console.log(letter.toUpperCase()));
    numbers.forEach(value => console.log(value.toString().toUpperCase()));
})();
(() => {
    const hero = ["spiderman", 100, false];
    hero[0] = "hulk";
    hero[1] = 25;
    console.log(hero);
})();
(() => {
    let audioLevel;
    (function (audioLevel) {
        audioLevel[audioLevel["min"] = 5] = "min";
        audioLevel[audioLevel["medium"] = 6] = "medium";
        audioLevel[audioLevel["max"] = 15] = "max";
    })(audioLevel || (audioLevel = {}));
    let saludo;
    (function (saludo) {
        saludo[saludo["hola"] = 0] = "hola";
        saludo["adios"] = "adios";
    })(saludo || (saludo = {}));
    const currentAudio = audioLevel.medium;
    console.log(currentAudio);
    console.log(audioLevel);
    console.log(saludo.adios);
})();
(() => {
    function callBatman() {
        return;
    }
    const hero = (hola) => {
        return hola;
    };
    const a = callBatman();
    const b = hero("superman");
    console.log(a);
    console.log(b);
})();
(() => {
    const abc = (msg) => {
        throw new Error(msg);
    };
    abc("NEVER DEBE TERMINAR LA EJECUCION DE MI CODIGO");
    const def = (msg) => {
        if (false) {
            throw new Error(msg);
        }
        return 1;
    };
    abc("PUEDES TENER 2 TIPOS DE RETORNO EN UNA FUNCION");
})();
(() => {
    let nada = undefined;
    let isActive = false;
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let fuerzaHeroes;
    (function (fuerzaHeroes) {
        fuerzaHeroes[fuerzaHeroes["acuaman"] = 0] = "acuaman";
        fuerzaHeroes[fuerzaHeroes["batman"] = 1] = "batman";
        fuerzaHeroes[fuerzaHeroes["flash"] = 5] = "flash";
        fuerzaHeroes[fuerzaHeroes["superman"] = 100] = "superman";
    })(fuerzaHeroes || (fuerzaHeroes = {}));
    const fuerzaFlash = fuerzaHeroes.flash;
    const fuerzaSuperman = fuerzaHeroes.superman;
    const fuerzaBatman = fuerzaHeroes.batman;
    const fuerzaAcuaman = fuerzaHeroes.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=main.js.map