// CAO - 2022-08-29d. - Object Oriented Programming

// Uzduotis 01:
// Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.

// import Car from './car.js'; // veikia ir su importuota Class'e

 class Car {
    constructor(brand, model, engine, price) {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.basePrice = price;
    }

    getPrice = function(){
        let addPrice = 0;

        if (this.engine === 'electric'){
            addPrice = 10000;
        } else if (this.engine === 'diesel'){
            addPrice = 5000;
        } 

        return this.basePrice + addPrice;
    }

    // turnOn() {
    //     alert ('Wroom!!!');
    // }
}

const ford = new Car ("Ford", "Focus", "diesel", 20000);
const fiat = new Car ('Fiat', "Punto", 'electric', 33000);
const bmw = new Car ('bmw', 'm3', 'petrol', 11000)


// ford.turnOn(); // veikia, viskas OK.
console.log(ford.getPrice());
console.log(fiat.getPrice());
console.log(bmw.getPrice());


function Car2 (brand, model, engine, price) {

    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = price;

    this.turnOn = function () {
        alert("Second WROOOOM!");
    }

    this.getPrice = function(){
        let addPrice = 0;

        if (this.engine === 'electric'){
            addPrice = 10000;
        } else if (this.engine === 'diesel'){
            addPrice = 5000;
        } 

        return this.basePrice + addPrice;
    }
}

const audi = new Car2 ('audi', 'a4', 'electric', 15000);

console.log(audi);
console.log(audi.getPrice());

// audi.turnOn(); // veikia, viskas OK.


// ************

// Uzduotis 02:
// Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.


