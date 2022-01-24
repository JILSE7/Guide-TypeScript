(() => {

    const numbers:(number|string)[] = [1,2,3,'4',5,6];

    const villan:string[] = ['H','O','L','A'];

    villan.forEach(letter => console.log(letter.toUpperCase()));
    numbers.forEach(value => console.log(value.toString().toUpperCase()));

})();