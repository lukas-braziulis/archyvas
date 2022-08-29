class Person {
    constructor(name, age) { // konstruktoriuje susidedame visas naudojamas reiksmes. Jas jeigu reikia, galima keisti.
        this.vardas = name; // Konstruktorius konstruoja tavo objekta.
        this.amzius = age;
    }

    // klasese nerasysim komandu 'function', o rasysim iskart funkcijos pavadinima ir skliaustelius

    introduce() {
        console.log(this.vardas + this.amzius);
    }

}

export default Person; // 'eksportuoji' sita kodo dali, viska ka apsirases, i kita .js file'a


// ****** alternatyvus aprasymas ******

// export default class Person {
//     constructor(name, age) { 
//         this.vardas = name; /
//         this.amzius = age;
//     }

//     introduce() {
//         console.log(this.vardas + this.amzius);
//     }

// }
