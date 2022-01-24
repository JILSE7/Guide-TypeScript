(() => {

    const hero:string = "flash";

    function returnName():string{
        return hero;
    };

    const activateBat = ():string => {
        return "Bati activada";
    };

    console.log(typeof activateBat);

    const heroName = returnName();
    


})();