(() => {

    //* fors

    type Avenger = {
        name:string,
        weapon: string,
        weapon2? : string
    }

    const ironman:Avenger = {
        name: "Ironman",
        weapon: "Armosut",
        weapon2 : "fly"
    }

    const captanAmerica:Avenger = {
        name:"Capitan America",
        weapon:"escudo",
        weapon2:"super fuerza"
    }

    const avengers: Avenger[] = [ironman, captanAmerica];

    for(let {name} of avengers){
        console.log(name);

    }



})()