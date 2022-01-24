(() => {
    
    const fullName = (firstname:string, lastName?:string):string => {
        return firstname +" "+ (lastName || "no lastname");
    };



    const name = fullName("tony");
    console.log(name);



})()