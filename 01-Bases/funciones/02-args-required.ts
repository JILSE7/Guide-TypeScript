(() => {
    
    const fullName = (firstname:string, lastName:(string|boolean)):string => {
        return firstname + lastName;
    };



    const name = fullName("tony", true);



})()