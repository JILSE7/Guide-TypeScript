(() => {

interface addTwoNumbers{
    (a:number, b:number):number
}


let addNumbersFunction:addTwoNumbers = (a:number, b:number):number => {
    return a+b;
}


const result = addNumbersFunction(25,35);
console.log(result);



})();