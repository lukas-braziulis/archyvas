const people = [
    {
      name: "Petras",
      age: "18"
    },
    {
      name: "Jonas",
      age: 15
    },
    {
      name: "Antanas",
      age: 20
    },
    {
      name: "Urtė",
      age: 10
    },
    {
      name: "Diana",
      age: 25
    },
    {
      name: "Ieva",
      age: 16
    }
  ];

// ***** 1. Prafiltruojame masyvą, kad rodytų tik pilnamečius.

const legalAge = people.filter(person => person.age >= 18); // "person" realiai yra visas objektas, su visomis reiksmemis. Tai kai rasai "person.age" - tada tau grazina viso objekto konkreciai 'age'

console.log(legalAge);

// ***** 2. Pakoreguojame aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). 

const pilnameciai = legalAge.map(person => person.name);
console.log(pilnameciai);
// alternatyva:
// console.log(people.filter(x => x.age >= 18).map(person => person.name)) // chaining'o funkcija; dazna praktika realybeje.


// ****** 3. Antro pratimo array A-Z tvarka išrykiuokite. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę.

console.log(pilnameciai.sort());
// alternatyva:
// console.log(people.filter(x => x.age >= 18).map(person => person.name).sort())


// ***** 4. Sukurkite funkciją. Ji priims vieną argumentą - array su objektais, kurie turės du parametrus - name ir price. Grąžins - brangiausią ir pigiausią prekes. Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje - tik du).

const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: 'cola', price: 5},
    { name : 'fanta', price: 3}
];

function fn(items) {
    items.sort((a, b) => a.price - b.price)
    return {pigiausias: items[0].name, brangiausias: items[items.length - 1].name}
  };

console.log(fn(drinks));

// alternatyva:
function returnStuff (array) {
  const sortedArray = array.sort((a,b) => b.price - a.price);

  return {
    pigiausias: sortedArray[sortedArray.length - 1].name,
    brangiausias: sortedArray[0].name
  }
}

console.log(returnStuff(drinks));

// - sort() surušiuoja nuo mažiausio iki didžiausio
// - rašant return ties pigiausio logiška - pati pirma reikšmė; o ties brangiausiu ima bendrą 'items' masyvo ilgį ir atima 1, kad brangiausio index taptų '3'. Čia nes .length duotų reikšmę 4 - kiek yra tų objektų, o index'as skaičiuojamas nuo 0, ne 1.