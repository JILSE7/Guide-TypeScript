(() => {
    
    const fullName = (firstname:string, lastName?:string, upper:boolean = false):string => {
        if(!upper){
            return firstname +" "+ (lastName || "no lastname");
        }else{
            return (firstname +" "+ (lastName || "no lastname")).toUpperCase();
        }

        
    };



    const name = fullName("tony","dk", true);
    console.log(name);



})()