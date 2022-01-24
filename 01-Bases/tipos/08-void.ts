(() => {
    function callBatman():void{
        return;
    }

    const hero = (hola:string):string => {
        return  hola;
    }

    const a = callBatman();
    const b = hero("superman");
    console.log(a);
    console.log(b);
})();