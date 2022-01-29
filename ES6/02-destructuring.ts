(() => {

    type avengers = {
        nick:string,
        ironman:string,
        vision:string,
        activo:boolean,
        poder: number,
        hola:object
    }

    const avenger:avengers = {
        nick: "Samuel L. Jacckson",
        ironman: "Robert Dwayne JR",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500,
        hola: {
            saludo2: "hola2"
        }
    }
    
    const {nick,poder,hola} = avenger
    //console.log(Object.getOwnPropertyNames(hola));

    const printAvenger = ({nick, ...rest}:avengers):void => {
        console.log(nick);
        console.log(rest);
    }

    const prinrPerson = (name:string, lastName:string, ...direction:[string, number]):void => {
        console.log(name);
        console.log(lastName);
        console.log(direction);
    }

    prinrPerson("said", "mandujano", "cuernavaca", 24);

    printAvenger(avenger);

    //*Destructuring arrays
    const arr:string[] = ["ironman", "pepe", "jose"];

    const [iron,p1,p2] = arr
    //console.log(iron);

    
})()