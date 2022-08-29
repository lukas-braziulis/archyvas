// Yra du programavimo tipai: Funkcinis ir Objektinis.
// Funkcinis, tai ka dareme pries tai.
// Objektinis - taip kaip su situ "function Car()" - skaidai i objektus ir taip juos pernaudojant


// Konstruktoriai - Frameworkai 

// Du budai sukurti konstruktorius/Template'us:
// 1. Funkcijomis
// 2. Klasemis


// Budas v1.:

// a.) sukuriame Template'a, kuri paskui naudosime toliau kuriant naujus objektus.

function Car(year, make) { // kadangi norime juos isskirti, tai rasome is didziosios raides
    this.metai = year;
    this.marke = make;

    this.sayStuff = function() {
        console.log(this.metai + this.marke);
    };

    this.turnOn = function () {
        console.log('Wrooom');
    }
}

// paskui kai nori panaudoti ta template'a ir visi objektai bus kuriami pagal ta template'a, duodant 'new' komanda ir uzpildydami parametrus

const audi = new Car(2000, 'audi');
const bmw = new Car(2020, 'bmw');

console.log(audi);

audi.sayStuff();
bmw.sayStuff();
bmw.turnOn();

console.log(audi.metai);



// ************ 

// Budas v2.:

// Klasiu metodas kuriant template'us yra dazniau sutinkamas.

import Person from './Person.js'; // 'import' importuoji kodo dali is kito file'o;
// siame import'iniam script'e galime duoti kita varda, nebutinai "Person"
// taip apsiraso 'default' exporto importas


// vvvvvvvvvvvvvvvvvvvvvvv

// class Person {
//     constructor(name, age) { // konstruktoriuje susidedame visas naudojamas reiksmes. Jas jeigu reikia, galima keisti.
//         this.vardas = name; // Konstruktorius konstruoja tavo objekta.
//         this.amzius = age;
//     }

//     // klasese nerasysim komandu 'function', o rasysim iskart funkcijos pavadinima ir skliaustelius

//     introduce() {
//         console.log(this.vardas + this.amzius);
//     }

// }

// ^^^^^^^^^^^^^^^^^^^^^^^^

const marius = new Person('Marius', 25);

marius.introduce();
console.log(marius.amzius);


// *********** Import / Export



import dauginti, {addNumbers , subtractNumbers } from './utilities.js'; // taip IMPORT'uoji, kai nera paduota 'default' reiksme eksport'e - naudoji {curly braces}

console.log(addNumbers(1,3));
console.log(subtractNumbers(4, 2));
console.log(dauginti(2,3));

// importuojant negali keisti pavadinimo, kaip kad su 'default'
// jei nori pervadinti importuojama non-default reikia rasyti:
// import { addNumbers as sudeti } ...
// reikia naudoti fraze 'as'

// 'default' import'as - gali iskarti keisti pavadinimus.
// is vieno .js file'o gali exportuoti TIK VIENA 'default' koda.

// gali importuoti viskas viena eilute (is to pacio vieno file'o)
// pradziai rasai default importa, o paskui per kableli ir {curly braces} rasai non-default:
    
    // import multiplyNumbers, { addNumbers, subtractNumbers} from './utilities.js';


