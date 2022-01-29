"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        bio() {
            return this.name + " " + this.realName;
        }
    }
    class Xmen extends Mutante {
    }
    const spiderman = new Xmen("spiderman", "peter parker");
    const printName = (personaje) => {
        console.log(personaje.bio());
    };
    printName(spiderman);
})();
(() => {
    class Aveger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} ${this.team}`;
        }
    }
    const antMan = new Aveger("said", "Marvel", "said mandujano");
    console.log(antMan.bio());
})();
(() => {
    class Avenger {
        constructor(nombre, realNombre) {
            this.nombre = nombre;
            this.realNombre = realNombre;
            console.log("constructor avenger llamado");
        }
        getFullName() {
            return `${this.nombre} ${this.realNombre}`;
        }
        get obtenerNombre() {
            return this.nombre;
        }
        set escribirNombre(name) {
            this.nombre = name;
        }
    }
    class Xmen extends Avenger {
        constructor(type, name, real) {
            super(name, real);
            this.type = type;
        }
        obtenerNOmbre() {
            return super.getFullName();
        }
    }
    const wolwerine = new Xmen("moustro", "wolwerine", "jorge negrete");
    console.log(wolwerine.obtenerNOmbre());
    wolwerine.escribirNombre = "Pedro";
    console.log(wolwerine.obtenerNOmbre());
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis(name) {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis(name);
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apo1 = Apocalipsis.callApocalipsis("soy el primer apocalipsis");
    const apo12 = Apocalipsis.callApocalipsis("soy el primer apocalipsis2");
    console.log(apo1, apo12);
    apo1.changeName("puta madreee");
    console.log(apo1, apo12);
})();
//# sourceMappingURL=main.js.map