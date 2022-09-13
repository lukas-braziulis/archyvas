// Uzduotis 01:
// Parašykite metodą klasėje, kuris pasakys ar žmogus yra pilnametis ar ne, pagal jo amžių.

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    compareAge() {
        if (this.age >= 20) {
            console.log(`${this.name} is old enough to drink`);
        } else {
            console.log(`${this.name} is NOT old enough to drink`);
        }
    }
}

const p1 = new Person('Lukas', 20);
const p2 = new Person('Marius', 19);

p1.compareAge();
p2.compareAge();


// ***********

// Uzduotis 02:
// Parašykit funkciją, kuri priimtu mąsyvą sudarytą iš skaičių ir raidžių. Grąžinkite masyvą tik su skaičiais.
// pvz: fn([1, 5, "a", "g", "z", 6]) => [1, 5, 6]

const filterOutLetters = (arr) => arr.filter(element => typeof element === "number");
console.log(filterOutLetters([1, 5, "a", "g", "z", 6]));

function filterOutLetters2(arr) {
    return arr.filter(element => typeof element === "number");
}
console.log(filterOutLetters2([1, 5, "a", "g", "z", 6]));

// ***********

// Uzduotis 03:
// Sukurk funkciją, kuri paims stringą kaip parametrą ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių).
// pvz: fn("Petras 123 Slekys") => "PPeettrraass 123 SSlleekkyyss"