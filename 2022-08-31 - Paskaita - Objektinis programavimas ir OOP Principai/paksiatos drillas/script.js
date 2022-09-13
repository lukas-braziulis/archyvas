// Uzduotis 01:
// Susikurkite objektų konstruktorių naudojant new pavadinimu Book, kuris galės kurti objektus, kurie turės šias savybes (properties): name, author, year ir metodus (naudojant prototype), kurių vienas parašys pavadinima ir autorių, o kitas parodys knygos amžių (senumą).

class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }

    getAuthorAndName() {
        return `${this.author} parase ${this.name}`
    }

}

// Naudojant 'Prototype' gali koreguoti aprasyta objekta, uz objekto ribu.
// 'Prototype' galima naudo veliau kode.
// Prototype dazniausiai naudoja ant objektu, kurie yra jau 'built-in' JS objektu.

// Book.prototype.getAuthorAndName = function() {
//     return `${this.author} ${this.name}`
// } // tas pats kas parasyta class template'e

Book.prototype.getYear = function() {
    return this.year;
}

const knyga = new Book('Vezliuko nuotykiai', 'Lukas', 2000);

console.log(knyga.getAuthorAndName());
console.log(knyga.getYear());


// ************

// Encapsulation
// Naudojant encapsulation, objekto metodai ir savybės yra uždaromi objekte, todėl jie nėra eksponuojami.

class Animal {
    #name;
    // parasius # ir pavadinima - taip sukuriamas 'Private property', ir prie sio kintamojo galima prieiti tik jo pacio klaseje. Jei bandysi prieiti "outside class" - gausi error'a

    constructor(name, age){
        this.#name = name;
        this.age = age;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    getNameAndAge() {
        this.#addOneYearToYear();
        return `${this.name} ${this.age}`;
    }

    #addOneYearToYear () {
        this.age = this.age +1;
    }
    // Su # zenklu gali susikurti ir "Private method". Bet jo irgi nepasieksi 'outside class'
    // Tokias funkcijas dazniausiai naudoji viduje, kaip pagalbines (zr. eil. 50)
}

const dog = new Animal('Sparkis', 10);
console.log(dog.getNameAndAge());
console.log(dog.getName());

dog.setName('Reksas');
console.log(dog.getName());



// **************
// Abstraction - labiau orientuota i logika.. ir labai panasu i Encapsulation



// **************
// Inheritance
// Inheritance leidžia “tėvų” klasės funkcionalumą  perduoti “vaikų” klasei, sukuriant švarų ir daugkartinio naudojimo kodą, išvengiant pakartotinio perrašinėjimo.


class Gyvunas {
    constructor(diet) {
        this.diet = diet;
    }

    eat() {
        console.log(`I ate some ${this.diet} food`);
    }
}

class Cat extends Gyvunas { // su 'extends' komanda tu pasiimi ivardintos klases proeprties. Ir toliau aprasineji tos klases papildyma.

    constructor(diet, color) {
        super(diet); // pries kuriant vaikinio Klases konctruktoriu, pradziai reikia issikviesti tevines klases konstruktoriu. Tai darom su 'super()' komanda. Ir reikia surasyti visus parametrus i vaikines klases construktoriaus parametrus.
        this.color = color;
    }

    jump() {
        console.log('the cat jumped');
    }
}

const gyvynas = new Gyvunas('plant');
const cat = new Cat('meat', 'green');

gyvynas.eat();
cat.eat();
cat.jump();
console.log(cat.color);





// **************
// Polymorphism

// Polymorphism (Poly = daug, morph = formų) yra kažkas, turintis kelias formas. Šiuo atveju polimorfizmas reiškia, kad tas pats metodas gali būti naudojamas skirtingiems objektams (pvz. manipuliuojant juo).

class Gyvis {
    constructor(diet) {
        this.diet = diet;
    }

    eat() {
        console.log(`I ate some ${this.diet} food`);
    }
}

class Kate extends Gyvis { 

    constructor(diet, color) {
        super(diet); 
        this.color = color;
    }

    jump() {
        console.log('the cat jumped');
    }

    eat() {
        // super.eat(); // naudojama tam, kad nebutu 'function override'
        console.log(`the ${this.color} cat ate some ${this.diet} food`);
    }

    eatLikeGyvis() {
        super.eat(); // budas prieiti i Tevines klases funkcija, kad neivyktu 'function override'
        // toks panaudoji
    }
}

const gyvynunelis = new Gyvis('plant');
const kaciukas = new Kate('meat', 'green');


kaciukas.eat();
kaciukas.eatLikeGyvis();